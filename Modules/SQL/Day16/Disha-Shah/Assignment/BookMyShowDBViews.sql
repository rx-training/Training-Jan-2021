USE BookMyShowDB


SELECT * FROM Admins
SELECT * FROM Users
SELECT * FROM Regions
SELECT * FROM Cities
SELECT * FROM Theatres
SELECT * FROM ShowTimings
SELECT * FROM SeatsCategories
SELECT * FROM Seats
SELECT * FROM Languages
SELECT * FROM Genres
SELECT * FROM FilmCategories
SELECT * FROM Certifications
SELECT * FROM Movies
SELECT * FROM Screens
SELECT * FROM EventVenues
SELECT * FROM TheatreShowTimings
SELECT * FROM EventVenueShowTimings
SELECT * FROM ScreenShowTimings
SELECT * FROM ScreenSeatsCategories
SELECT * FROM ScreensMovies
SELECT * FROM MovieLanguages
SELECT * FROM MovieFilmCategories
SELECT * FROM MovieGenres
SELECT * FROM EventTypes
SELECT * FROM Events

CREATE VIEW vCitiesRegions
AS
SELECT c.CityId, c.Name, r.Name AS 'Region', r.RegionId
FROM Cities AS c JOIN Regions AS r
ON c.RegionId=r.RegionId

SELECT * FROM vCitiesRegions

CREATE VIEW vTheatresCities
AS
SELECT t.TheatreId, t.Name, c.Name AS 'City', t.Address, c.CityId, c.RegionId, r.Name AS 'Region'
FROM Theatres AS t JOIN Cities AS c
ON c.CityId = t.CityId JOIN Regions AS r
ON c.RegionId = r.RegionId

SELECT * FROM vTheatresCities

CREATE VIEW vTheatresShowtimes
AS
SELECT t.TheatreId ,t.Name AS 'Theatre', t.Address, c.CityId, c.Name AS 'City', s.ShowTime, s.ShowTimingId 
FROM Cities AS c JOIN Theatres As t 
ON c.CityId=t.CityId JOIN TheatreShowTimings AS ts
ON t.TheatreId = ts.TheatreId JOIN ShowTimings AS s
ON ts.ShowTimingId=s.ShowTimingId

CREATE VIEW vSeatCategorySeats
AS
SELECT sc.SeatsCategoryId, sc.Name AS 'Seat Category', sc.Price, CAST(s.RowNo AS VARCHAR(20)) + '' + CAST(s.SeatNo AS VARCHAR(20)) AS 'Seat No', s.SeatsId
FROM SeatsCategories AS sc JOIN Seats AS s
ON sc.SeatsCategoryId = s.SeatsCategoryId

CREATE VIEW vTheatresScreensSeats
AS
SELECT ts.TheatreId, ts.Theatre, ts.Address, ts.CityId, ts.City, ts.ShowTimingId, ts.ShowTime, s.ScreenId, ssc.ScreenSeatsCategoryId, ssc.SeatsCategoryId, scs.[Seat Category], scs.[Seat No], scs.Price, scs.SeatsId
FROM vTheatresShowtimes AS ts JOIN Screens AS s
ON ts.TheatreId=s.TheatreId JOIN ScreenSeatsCategories AS ssc
ON s.ScreenId = ssc.ScreenId JOIN vSeatCategorySeats AS scs
ON ssc.SeatsCategoryId = scs.SeatsCategoryId

CREATE VIEW vMovies
AS
SELECT m.MovieId, m.Name, m.Image, m.About, m.DateOfRelease, m.Time, m.IsRecommended, m.IsPremiere, m.CertificationId, c.Certification, ml.LanguageId, l.Language, mg.GenreId, g.Genre, mfc.FilmCategoryId, fc.FilmCategory
FROM Languages AS l JOIN MovieLanguages AS ml
ON l.LanguageId = ml.LanguageId JOIN Movies AS m
ON ml.MovieId = m.MovieId JOIN MovieGenres AS mg
ON mg.MovieId = m.MovieId JOIN Genres AS g
ON mg.GenreId = g.GenreId JOIN MovieFilmCategories AS mfc
ON mfc.MovieId = m.MovieId JOIN FilmCategories AS fc
ON mfc.FilmCategoryId=fc.FilmCategoryId JOIN Certifications AS c
ON c.CertificationId = m.CertificationId

CREATE VIEW vTheatresMovies
AS
SELECT tss.*, m.Name AS 'Movie', m.Image, m.About, m.DateOfRelease, m.Time, m.IsRecommended, m.IsPremiere, m.CertificationId, m.Certification, m.LanguageId, m.Language, m.GenreId, m.Genre, m.FilmCategoryId, m.FilmCategory
FROM vTheatresScreensSeats AS tss JOIN ScreensMovies AS sm
ON tss.ScreenId = sm.ScreenId JOIN vMovies AS m
ON sm.MovieId = m.MovieId

CREATE VIEW vEventVenuesCities
AS
SELECT ev.EventVenueId, ev.Name AS 'Event Venue', ev.Address, ev.TotalTickets, c.Name AS 'City', c.CityId, c.RegionId, r.Name AS 'Region'
FROM EventVenues AS ev JOIN Cities AS c
ON c.CityId = ev.CityId JOIN Regions AS r
ON c.RegionId = r.RegionId


CREATE VIEW vEventVenuesShowtimes
AS
SELECT ev.EventVenueId,ev.Name AS 'Event Venue', ev.Address, ev.TotalTickets, c.CityId, c.Name AS 'City', s.ShowTime, s.ShowTimingId 
FROM Cities AS c JOIN EventVenues As ev
ON c.CityId=ev.CityId JOIN EventVenueShowTimings AS evs
ON ev.EventVenueId = evs.EventVenueId JOIN ShowTimings AS s
ON evs.ShowTimingId=s.ShowTimingId

CREATE VIEW vEvents
AS
SELECT e.EventId, e.Name AS 'Event', e.Image, e.TicketPrice, e.Time, e.DateOfEvent, e.EventTypeId, et.EventType, e.EventVenueShowTimingId, evs.EventVenueId, vevs.[Event Venue], vevs.Address, vevs.TotalTickets, vevs.CityId, vevs.City, vevs.ShowTime, vevs.ShowTimingId, l.LanguageId, l.Language
FROM EventTypes AS et JOIN Events AS e
ON e.EventTypeId=et.EventTypeId JOIN EventVenueShowTimings AS evs
ON e.EventVenueShowTimingId = evs.EventVenueShowTimingId JOIN vEventVenuesShowtimes AS vevs
ON evs.EventVenueId = vevs.EventVenueId JOIN EventLanguages AS el
ON e.EventId = el.EventId JOIN Languages AS l
ON el.LanguageId = l.LanguageId
