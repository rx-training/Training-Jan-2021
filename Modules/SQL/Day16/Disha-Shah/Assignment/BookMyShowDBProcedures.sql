USE BookMyShowDB


--PROCEDURE FOR STORING ADMIN INFORMATION
CREATE PROCEDURE prcAdminInfo @jsonAdmin NVARCHAR(MAX)
AS
SET NOCOUNT ON;
BEGIN
	BEGIN TRY
		IF(ISJSON(@jsonAdmin)>0)
		BEGIN
			INSERT INTO Admins(FirstName, LastName, ContactNo, Password)
			SELECT FirstName, LastName, ContactNo, Password
			FROM OPENJSON(@jsonAdmin)
			  WITH (
				FirstName VARCHAR(50) '$.Firstname',
				LastName VARCHAR(50) '$.Lastname',
				ContactNo CHAR(10) '$.ContactNo',
				Password VARCHAR(10) '$.Password'
			  );
		END
	END TRY
	BEGIN CATCH
		SELECT ERROR_NUMBER() AS 'ERRORNUMBER',
				ERROR_MESSAGE() AS 'ERRORMESSAGE',
				ERROR_LINE() AS 'ERRORLINE';
	END CATCH
END

EXECUTE prcAdminInfo N'
					  [    
					{  
						"Firstname" : "Pratik",
						"Lastname": "Shah",
						"ContactNo": 7984430171,
						"Password": "admin123"
					},
					{ 
						"Firstname" : "Manisha",
						"Lastname" : "Shah",
						"ContactNo": 9428508529,
						"Password": "admin456"
					}
				]';


--PROCEDURE FOR STORING USER INFORMATION
CREATE PROCEDURE prcUserInfo @jsonUser NVARCHAR(MAX)
AS
SET NOCOUNT ON;
BEGIN
	BEGIN TRY
		IF(ISJSON(@jsonUser)>0)
		BEGIN
			INSERT INTO Users(FirstName, LastName, ContactNo, Password)
			SELECT FirstName, LastName, ContactNo, Password
			FROM OPENJSON(@jsonUser)
			  WITH (
				FirstName VARCHAR(50) '$.Firstname',
				LastName VARCHAR(50) '$.Lastname',
				ContactNo CHAR(10) '$.ContactNo',
				Password VARCHAR(10) '$.Password'
			  );
		END
	END TRY
	BEGIN CATCH
		SELECT ERROR_NUMBER() AS 'ERRORNUMBER',
				ERROR_MESSAGE() AS 'ERRORMESSAGE',
				ERROR_LINE() AS 'ERRORLINE';
	END CATCH
END

EXECUTE prcUserInfo N'
					  [    
					{  
						"Firstname" : "Disha",
						"Lastname": "Shah",
						"ContactNo": 9825056260,
						"Password": "disha123"
					}
				]';


--PROCEDURE FOR STORING REGION INFORMATION
CREATE PROCEDURE prcRegionInfo @jsonRegion NVARCHAR(MAX)
AS
SET NOCOUNT ON;
BEGIN
	BEGIN TRY
		IF(ISJSON(@jsonRegion)>0)
		BEGIN
			INSERT INTO Regions(Name)
			SELECT Name
			FROM OPENJSON(@jsonRegion)
			  WITH (
				Name VARCHAR(50) '$.Name'
			  );
		END
	END TRY
	BEGIN CATCH
		SELECT ERROR_NUMBER() AS 'ERRORNUMBER',
				ERROR_MESSAGE() AS 'ERRORMESSAGE',
				ERROR_LINE() AS 'ERRORLINE';
	END CATCH
END

EXECUTE prcRegionInfo N'
					  [    
					{  
						"Name": "North"
					},
					{  
						"Name": "South"
					},
					{  
						"Name": "East"
					},
					{  
						"Name": "West"
					}
				]';


--PROCEDURE FOR STORING CITIES INFORMATION
CREATE PROCEDURE prcCityInfo @jsonCity NVARCHAR(MAX)
AS
SET NOCOUNT ON;
BEGIN
	BEGIN TRY
		IF(ISJSON(@jsonCity)>0)
		BEGIN
			INSERT INTO Cities(Name, RegionId)
			SELECT Name, RegionId
			FROM OPENJSON(@jsonCity)
			  WITH (
				Name VARCHAR(50) '$.Name',
				RegionId INT '$.RegionId'
			  );
		END
	END TRY
	BEGIN CATCH
		SELECT ERROR_NUMBER() AS 'ERRORNUMBER',
				ERROR_MESSAGE() AS 'ERRORMESSAGE',
				ERROR_LINE() AS 'ERRORLINE';
	END CATCH
END

EXECUTE prcCityInfo N'
					  [    
					{  
						"Name": "Agra",
						"RegionId": 1
					},
					{  
						"Name": "Allahabad",
						"RegionId": 1
					},
					{  
						"Name": "Amritsar",
						"RegionId": 1
					},
					{  
						"Name": "Chandigarh",
						"RegionId": 1
					},
					{  
						"Name": "New Delhi",
						"RegionId": 1
					},
					{  
						"Name": "Bangalore",
						"RegionId": 2
					},
					{  
						"Name": "Chennai",
						"RegionId": 2
					},
					{  
						"Name": "Ooty",
						"RegionId": 2
					},
					{  
						"Name": "Tirupati",
						"RegionId": 2
					},
					{  
						"Name": "Coimbatore",
						"RegionId": 2
					},
					{  
						"Name": "Bhubaneshwar",
						"RegionId": 3
					},
					{  
						"Name": "Darjeeling",
						"RegionId": 3
					},
					{  
						"Name": "Gangtok",
						"RegionId": 3
					},
					{  
						"Name": "Guwahati",
						"RegionId": 3
					},
					{  
						"Name": "Kanpur",
						"RegionId": 3
					},
					{  
						"Name": "Ahmedabad",
						"RegionId": 4
					},
					{  
						"Name": "Bharuch",
						"RegionId": 4
					},
					{  
						"Name": "Bhavnagar",
						"RegionId": 4
					},
					{  
						"Name": "Bhuj",
						"RegionId": 4
					},
					{  
						"Name": "Gandhinagar",
						"RegionId": 4
					}
				]';

--PROCEDURE FOR STORING Theatre INFORMATION
CREATE PROCEDURE prcTheatreInfo @jsonTheatre NVARCHAR(MAX)
AS
SET NOCOUNT ON;
BEGIN
	BEGIN TRY
		IF(ISJSON(@jsonTheatre)>0)
		BEGIN
			INSERT INTO Theatres(Name, CityId, Address)
			SELECT Name, CityId, Address
			FROM OPENJSON(@jsonTheatre)
			  WITH (
				Name VARCHAR(50) '$.Name',
				CityId INT '$.CityId',
				Address VARCHAR(50) '$.Address'
			  );
		END
	END TRY
	BEGIN CATCH
		SELECT ERROR_NUMBER() AS 'ERRORNUMBER',
				ERROR_MESSAGE() AS 'ERRORMESSAGE',
				ERROR_LINE() AS 'ERRORLINE';
	END CATCH
END

EXECUTE prcTheatreInfo N'
					  [    
					{  
						"Name" : "Cineplex",
						"CityId": 16,
						"Address": "CG Square Mall, Chimanlal Girdharlal Road, Opposite Shoppers Stop, Ahmedabad, Gujarat 380006, India"
					},
					{  
						"Name" : "Cinepolis: Janak Cinema",
						"CityId": 5,
						"Address": "Pankha Road, Block C 6A, Janakpuri, Delhi, NCR 110058, India"
					},
					{  
						"Name" : "AGS Cinemas",
						"CityId": 7,
						"Address": "No: 24/1, GN Chetty Road, T. Nagar, Opposite Dr. M.G.R. Educational and Research Institute, Chennai, Tamil Nadu 600017, India"
					},
					{  
						"Name" : "INOX: Symphony mall",
						"CityId": 11,
						"Address": "Plot No.149 Rudrapur NH16, Near Reliance Trends, Bhubaneswar, Odisha 752101, India"
					}
				]';


--PROCEDURE FOR STORING SHOW TIMINGS INFORMATION
CREATE PROCEDURE prcShowTimingInfo @jsonShowTiming NVARCHAR(MAX)
AS
SET NOCOUNT ON;
BEGIN
	BEGIN TRY
		IF(ISJSON(@jsonShowTiming)>0)
		BEGIN
			INSERT INTO ShowTimings(ShowTime)
			SELECT ShowTime
			FROM OPENJSON(@jsonShowTiming)
			  WITH (
				ShowTime TIME '$.ShowTime'
			  );
		END
	END TRY
	BEGIN CATCH
		SELECT ERROR_NUMBER() AS 'ERRORNUMBER',
				ERROR_MESSAGE() AS 'ERRORMESSAGE',
				ERROR_LINE() AS 'ERRORLINE';
	END CATCH
END

EXECUTE prcShowTimingInfo N'
					  [    
					{  
						"ShowTime": "3:00 PM"
					},
					{  
						"ShowTime": "5:45 PM"
					},
					{  
						"ShowTime": "12:15 PM"
					},
					{  
						"ShowTime": "9:00 AM"
					},
					{  
						"ShowTime": "8:00 PM"
					},
					{  
						"ShowTime": "10:30 PM"
					}
				]';

--PROCEDURE FOR STORING SEATS CATEGORIES INFORMATION
CREATE PROCEDURE prcSeatsCategoryInfo @jsonSeatsCategory NVARCHAR(MAX)
AS
SET NOCOUNT ON;
BEGIN
	BEGIN TRY
		IF(ISJSON(@jsonSeatsCategory)>0)
		BEGIN
			INSERT INTO SeatsCategories(Name, Price)
			SELECT Name, Price
			FROM OPENJSON(@jsonSeatsCategory)
			  WITH (
				Name VARCHAR(50) '$.Name',
				Price MONEY '$.Price'
			  );
		END
	END TRY
	BEGIN CATCH
		SELECT ERROR_NUMBER() AS 'ERRORNUMBER',
				ERROR_MESSAGE() AS 'ERRORMESSAGE',
				ERROR_LINE() AS 'ERRORLINE';
	END CATCH
END

EXECUTE prcSeatsCategoryInfo N'
					  [    
					{  
						"Name": "Normal",
						"Price" : 150
					},
					{  
						"Name": "Executive",
						"Price" : 200
					},
					{  
						"Name": "Premium",
						"Price" : 250
					},
					{  
						"Name": "Recliner",
						"Price" : 630
					}
				]';

--PROCEDURE FOR STORING LANGUAGES INFORMATION
CREATE PROCEDURE prcLanguageInfo @jsonLanguage NVARCHAR(MAX)
AS
SET NOCOUNT ON;
BEGIN
	BEGIN TRY
		IF(ISJSON(@jsonLanguage)>0)
		BEGIN
			INSERT INTO Languages(Language)
			SELECT Language
			FROM OPENJSON(@jsonLanguage)
			  WITH (
				Language VARCHAR(50) '$.Language'
			  );
		END
	END TRY
	BEGIN CATCH
		SELECT ERROR_NUMBER() AS 'ERRORNUMBER',
				ERROR_MESSAGE() AS 'ERRORMESSAGE',
				ERROR_LINE() AS 'ERRORLINE';
	END CATCH
END

EXECUTE prcLanguageInfo N'
					  [    
					{  
						"Language": "English"
					},
					{  
						"Language": "Hindi"
					},
					{  
						"Language": "Tamil"
					},
					{  
						"Language": "Telugu"
					}
				]';
				
--PROCEDURE FOR STORING GENRES INFORMATION
CREATE PROCEDURE prcGenreInfo @jsonGenre NVARCHAR(MAX)
AS
SET NOCOUNT ON;
BEGIN
	BEGIN TRY
		IF(ISJSON(@jsonGenre)>0)
		BEGIN
			INSERT INTO Genres(Genre)
			SELECT Genre
			FROM OPENJSON(@jsonGenre)
			  WITH (
				Genre VARCHAR(50) '$.Genre'
			  );
		END
	END TRY
	BEGIN CATCH
		SELECT ERROR_NUMBER() AS 'ERRORNUMBER',
				ERROR_MESSAGE() AS 'ERRORMESSAGE',
				ERROR_LINE() AS 'ERRORLINE';
	END CATCH
END

EXECUTE prcGenreInfo N'
					  [    
					{  
						"Genre": "Action"
					},
					{  
						"Genre": "Comedy"
					},
					{  
						"Genre": "Thriller"
					},
					{  
						"Genre": "Drama"
					},
					{
						"Genre" : "Family"
					},
					{
						"Genre": "Adventure"
					},
					{
						"Genre": "Fantasy"
					}
				]';

--PROCEDURE FOR STORING FILM CATEGORIES INFORMATION
CREATE PROCEDURE prcFilmCategoryInfo @jsonFilmCategory NVARCHAR(MAX)
AS
SET NOCOUNT ON;
BEGIN
	BEGIN TRY
		IF(ISJSON(@jsonFilmCategory)>0)
		BEGIN
			INSERT INTO FilmCategories(FilmCategory)
			SELECT FilmCategory
			FROM OPENJSON(@jsonFilmCategory)
			  WITH (
				FilmCategory VARCHAR(50) '$.FilmCategory'
			  );
		END
	END TRY
	BEGIN CATCH
		SELECT ERROR_NUMBER() AS 'ERRORNUMBER',
				ERROR_MESSAGE() AS 'ERRORMESSAGE',
				ERROR_LINE() AS 'ERRORLINE';
	END CATCH
END

EXECUTE prcFilmCategoryInfo N'
					  [    
					{  
						"FilmCategory": "2D"
					},
					{  
						"FilmCategory": "3D"
					},
					{  
						"FilmCategory": "4DX"
					},
					{  
						"FilmCategory": "MX4D"
					}
				]';
		
--PROCEDURE FOR STORING CERTIFICATIONS INFORMATION
CREATE PROCEDURE prcCertificationInfo @jsonCertification NVARCHAR(MAX)
AS
SET NOCOUNT ON;
BEGIN
	BEGIN TRY
		IF(ISJSON(@jsonCertification)>0)
		BEGIN
			INSERT INTO Certifications(Certification)
			SELECT Certification
			FROM OPENJSON(@jsonCertification)
			  WITH (
				Certification VARCHAR(50) '$.Certification'
			  );
		END
	END TRY
	BEGIN CATCH
		SELECT ERROR_NUMBER() AS 'ERRORNUMBER',
				ERROR_MESSAGE() AS 'ERRORMESSAGE',
				ERROR_LINE() AS 'ERRORLINE';
	END CATCH
END

EXECUTE prcCertificationInfo N'
					  [    
					{  
						"Certification": "UA"
					},
					{  
						"Certification": "U"
					},
					{  
						"Certification": "A"
					}
				]';
		
--PROCEDURE FOR STORING MOVIES INFORMATION
CREATE PROCEDURE prcMovieInfo @jsonMovie NVARCHAR(MAX)
AS
SET NOCOUNT ON;
BEGIN
	BEGIN TRY
		IF(ISJSON(@jsonMovie)>0)
		BEGIN
			INSERT INTO Movies(Name, Time, CertificationId, DateOfRelease, About)
			SELECT Name, Time, CertificationId, DateOfRelease, About
			FROM OPENJSON(@jsonMovie)
			  WITH (
				Name VARCHAR(50) '$.Name',
				Time VARCHAR(20) '$.Time',
				CertificationId INT '$.CertificationId',
				DateOfRelease DATE '$.DateOfRelease',
				About VARCHAR(100) '$.About'
			  );

		END
	END TRY
	BEGIN CATCH
	       SELECT ERROR_NUMBER() AS 'ERRORNUMBER',
				ERROR_MESSAGE() AS 'ERRORMESSAGE',
				ERROR_LINE() AS 'ERRORLINE';
	END CATCH
END

EXECUTE prcMovieInfo N'
					  [    
						{   
							"Name": "Monster Hunter", 
							"Time": "1h 40m",     
							"CertificationId": 1,
							"DateOfRelease": "2021/02/05",
							
							"About": "Based on a video game, the story follows Lt. Artemis and her loyal soldiers as they get accidentally transported to a different world where they must survive powerful aliens. A mysterious hunter seems to be the only key to getting them back home."
						},
						{        
							"Name": "Vijay The Master",
							      
							"Time": "1h 45m",       
							"CertificationId": 1,
							"DateOfRelease": "2021/02/12",
							"About": "Vijay The Master revolves around an alcoholic professor who is sent to a juvenile school, where he clashes with a gangster, who uses the children of the school for criminal activities."
						},   
						{   
							"Name": "Tenet", 
							    
							"Time": "2h 5m",      
							"CertificationId": 1,
							"DateOfRelease": "2021/02/18",
							"About": "Fighting for the survival of the world, the Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real-time."
						},
						{           
							"Name": "Raamprasad Ki Tehrvi", 
							       
							"Time": "2h",        
							"CertificationId": 2,
							"DateOfRelease": "2021/02/13",
							"About": "After Ramprasads death, his family is forced to live together for 13 days until the Tehrvi is performed. Amidst all the drama they must come to terms with some crucial truths about life."
						},
						{          
							"Name": "Wonder Woman 1984", 
							      
							"Time": "1h 55m",
							"CertificationId": 1,
							"DateOfRelease": "2021/02/05",
							"About": "Set in the 1980s, Wonder Woman`s next big screen adventure finds her facing two all-new foes, Max Lord and The Cheetah, and the unexpected return of a face from her past."
						}, 
						{          
							"Name": "Tom & Jerry", 
							     
							"Time": "1h 40m",       
							"CertificationId": 2,
							"DateOfRelease": "2021/02/21",
							"About": "Infamous frenemies Tom and Jerry move to the city to start life anew. When Jerry moves into New York`s finest hotel, the event manager Kayla teams up with Tom to evict the mouse so that the `wedding of the century` can go off without a hitch."
						}, 
						{      
							"Name": "Baaki maathi Baadbaaki", 
							     
							"Time": "1h 50m",      
							"CertificationId": 1,
							"DateOfRelease": "2021/02/12",
							"About": "Baki Mathi Badbaki is a Gujarati movie starring Amit Bhanushali and Hemang Shah in prominent roles. It is a drama directed by Shailesh Patel & Atul Soni."
						},
						{   
  							"Name": "Chakra ka Rashak", 
							     
							"Time": "2h 10m",       
							"CertificationId": 1,
							"DateOfRelease": "2021/02/19",
							"About": "Chakra Ka Rakshak is a cyber-crime thriller where an officer is set on a mission to take down a bunch of goons who practise evil acts on the internet."
						},
						{        
							"Name": "Tikkhi Mitthi Life", 
							     
							"Time": "1h 45m",       
							"CertificationId": 1,
							"DateOfRelease": "2021/02/12",
							"About": "Hansaben, on her death-bed, writes a letter to her husband Purushottam Parikh and son Amey Parikh; who don`t get along. As her last wish, she gives them a few tasks to complete. Will the father-son duo get along enough to finish all tasks?"
						},
						{           
							"Name": "War", 
							    
							"Time": "1h 49m",       
							"CertificationId": 1,
							"DateOfRelease": "2020/01/19",
							"About": "War is a high-intensity Bollywood action drama which stars Hrithik Roshan, Tiger Shroff, Vaani Kapoor, among other stars. Directed by Siddharth Anand"
						}
					]';

--PROCEDURE FOR STORING EVENT VENUES INFORMATION
CREATE PROCEDURE prcEventVenueInfo @jsonEventVenue NVARCHAR(MAX)
AS
SET NOCOUNT ON;
BEGIN
	BEGIN TRY
		IF(ISJSON(@jsonEventVenue)>0)
		BEGIN
			INSERT INTO EventVenues(Name, Address, TotalTickets, CityId)
			SELECT Name, Address, TotalTickets, CityId
			FROM OPENJSON(@jsonEventVenue)
			  WITH (
				Name VARCHAR(50) '$.Name',
				Address VARCHAR(50) '$.Address',
				TotalTickets INT '$.TotalTickets',
				CityId INT '$.CityId'
			  );
		END
	END TRY
	BEGIN CATCH
		SELECT ERROR_NUMBER() AS 'ERRORNUMBER',
				ERROR_MESSAGE() AS 'ERRORMESSAGE',
				ERROR_LINE() AS 'ERRORLINE';
	END CATCH
END

EXECUTE prcEventVenueInfo N'
					  [    
					{  
						"Name": "Snow World: Ahmedabad",
						"Address": "4th Floor, Ahmedabad One Mall, Near Vastrapur Lake, Vastrapur, Ahmedabad- 380054.",
						"TotalTickets": 70,
						"CityId": 16
					},
					{  
						"Name": "Online Streaming",
						"Address": "On Zoom",
						"TotalTickets": 100,
						"CityId": 5
					},
					{  
						"Name": "Online Streaming",
						"Address": "On BookMyShow",
						"TotalTickets": 100,
						"CityId": 7
					},
					{  
						"Name": "Online Streaming",
						"Address": "On BookMyShow",
						"TotalTickets": 100,
						"CityId": 11
					},
					{  
						"Name": "Sardar Vallabhbhai Patel International Airport",
						"Address": "Airport Director, Airports Authority of India SVP, International Airport, Ahmedabad, Gujarat 380003",
						"TotalTickets": 2,
						"CityId": 16
					},
					{  
						"Name": "YMCA",
						"Address": "Sarkhej Gandhinagar Highway Road, Ahmedabad, Gujarat 380015",
						"TotalTickets": 150,
						"CityId": 16
					},
					{  
						"Name": "YMCA",
						"Address": "Sarkhej Gandhinagar Highway Road, Ahmedabad, Gujarat 380015",
						"TotalTickets": 150,
						"CityId": 16
					},
					{  
						"Name": "Narendra Modi Stadium",
						"Address": "Motera Road, Ahmedabad, Gujarat 380015",
						"TotalTickets": 110000,
						"CityId": 16
					},
					{  
						"Name": "Nikumbh Restro Cafe",
						"Address": "ECA CORPORATE HOUSE Opposite Safal Profitaire, Prahlad Nagar, 380015 Ahmedabad, Gujarat, India",
						"TotalTickets": 50,
						"CityId": 16
					},
					{  
						"Name": "Thakorbhai Desai Hall",
						"Address": "Law Garden Road, Ellis Bridge, Ahmedabad, Gujarat 380006",
						"TotalTickets": 150,
						"CityId": 16
					},
					{  
						"Name": "Riverfront",
						"Address": "Sabarmati Riverfront Walkway West, Shreyas Colony, Navrangpura, Ahmedabad, Gujarat",
						"TotalTickets": 150,
						"CityId": 16
					},
					{  
						"Name": "HK Hall: Ellisbridge",
						"Address": "H K College Campus, Opposite Natraj Theater, Ashram Road, Ahmedabad, Gujarat, India - 380009",
						"TotalTickets": 200,
						"CityId": 16
					}
				]';
		
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