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
			INSERT INTO Movies(Name, Image, Time, CertificationId, DateOfRelease, About)
			SELECT Name, Image, Time, CertificationId, DateOfRelease, About
			FROM OPENJSON(@jsonMovie)
			  WITH (
				Name VARCHAR(50) '$.Name',
				Image VARCHAR(1000) '$.Image',
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
							"Image": "images\recommendedmovie-1.jpg",
							"Time": "1h 40m",     
							"CertificationId": 1,
							"DateOfRelease": "2021/02/05",
							
							"About": "Based on a video game, the story follows Lt. Artemis and her loyal soldiers as they get accidentally transported to a different world where they must survive powerful aliens. A mysterious hunter seems to be the only key to getting them back home."
						},
						{        
							"Name": "Vijay The Master",
							"Image": "images\recommendedmovie-2.jpg",  
							"Time": "1h 45m",       
							"CertificationId": 1,
							"DateOfRelease": "2021/02/12",
							"About": "Vijay The Master revolves around an alcoholic professor who is sent to a juvenile school, where he clashes with a gangster, who uses the children of the school for criminal activities."
						},   
						{   
							"Name": "Tenet", 
							"Image": "images\recommendedmovie-3.jpg",
							    
							"Time": "2h 5m",      
							"CertificationId": 1,
							"DateOfRelease": "2021/02/18",
							"About": "Fighting for the survival of the world, the Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real-time."
						},
						{           
							"Name": "Raamprasad Ki Tehrvi", 
							"Image": "images\recommendedmovie-4.jpg",
							       
							"Time": "2h",        
							"CertificationId": 2,
							"DateOfRelease": "2021/02/13",
							"About": "After Ramprasads death, his family is forced to live together for 13 days until the Tehrvi is performed. Amidst all the drama they must come to terms with some crucial truths about life."
						},
						{          
							"Name": "Wonder Woman 1984",
							"Image": "images\recommendedmovie-5.jpg",
							      
							"Time": "1h 55m",
							"CertificationId": 1,
							"DateOfRelease": "2021/02/05",
							"About": "Set in the 1980s, Wonder Woman`s next big screen adventure finds her facing two all-new foes, Max Lord and The Cheetah, and the unexpected return of a face from her past."
						}, 
						{          
							"Name": "Tom & Jerry", 
							"Image": "images\recommendedmovie-6.jpg",
							     
							"Time": "1h 40m",       
							"CertificationId": 2,
							"DateOfRelease": "2021/02/21",
							"About": "Infamous frenemies Tom and Jerry move to the city to start life anew. When Jerry moves into New York`s finest hotel, the event manager Kayla teams up with Tom to evict the mouse so that the `wedding of the century` can go off without a hitch."
						}, 
						{      
							"Name": "Baaki maathi Baadbaaki",
							"Image": "images\recommendedmovie-7.jpg",
							     
							"Time": "1h 50m",      
							"CertificationId": 1,
							"DateOfRelease": "2021/02/12",
							"About": "Baki Mathi Badbaki is a Gujarati movie starring Amit Bhanushali and Hemang Shah in prominent roles. It is a drama directed by Shailesh Patel & Atul Soni."
						},
						{   
  							"Name": "Chakra ka Rashak", 
							"Image": "images\recommendedmovie-8.jpg",
							     
							"Time": "2h 10m",       
							"CertificationId": 1,
							"DateOfRelease": "2021/02/19",
							"About": "Chakra Ka Rakshak is a cyber-crime thriller where an officer is set on a mission to take down a bunch of goons who practise evil acts on the internet."
						},
						{        
							"Name": "Tikkhi Mitthi Life",
							"Image": "images\recommendedmovie-9.jpg",
							     
							"Time": "1h 45m",       
							"CertificationId": 1,
							"DateOfRelease": "2021/02/12",
							"About": "Hansaben, on her death-bed, writes a letter to her husband Purushottam Parikh and son Amey Parikh; who don`t get along. As her last wish, she gives them a few tasks to complete. Will the father-son duo get along enough to finish all tasks?"
						},
						{           
							"Name": "War",
							"Image": "images\recommendedmovie-10.jpg",
							    
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
		

--PROCEDURE FOR STORING EVENT TYPES INFORMATION
CREATE PROCEDURE prcEventTypeInfo @jsonEventType NVARCHAR(MAX)
AS
SET NOCOUNT ON;
BEGIN
	BEGIN TRY
		IF(ISJSON(@jsonEventType)>0)
		BEGIN
			INSERT INTO EventTypes(EventType)
			SELECT EventType
			FROM OPENJSON(@jsonEventType)
			  WITH (
				EventType VARCHAR(50) '$.EventType'
			  );
		END
	END TRY
	BEGIN CATCH
		SELECT ERROR_NUMBER() AS 'ERRORNUMBER',
				ERROR_MESSAGE() AS 'ERRORMESSAGE',
				ERROR_LINE() AS 'ERRORLINE';
	END CATCH
END

EXECUTE prcEventTypeInfo N'
					  [    
					{  
						"EventType": "Live Concert"
					},
					{  
						"EventType": "Exhibition"
					},
					{  
						"EventType": "Online Streaming"
					},
					{  
						"EventType": "Play"
					},
					{  
						"EventType": "Workshops"
					},
					{  
						"EventType": "Standup Comedy"
					},
					{  
						"EventType": "Amusement Parks"
					},
					{  
						"EventType": "City Tours/Unique Tours"
					},
					{  
						"EventType": "Night Life/Club Events"
					},
					{  
						"EventType": "Adventure/Trekking/Camping"
					},
					{  
						"EventType": "Tourist Attractions"
					},
					{  
						"EventType": "Gaming Zone/Arcade"
					},
					{  
						"EventType": "Food & Drinks"
					},
					{  
						"EventType": "Festivals/New Year/Holi/Navratri/Valentines"
					},
					{  
						"EventType": "Sporting Event"
					},
					{  
						"EventType": "E-Sports"
					}
				]';
		
--PROCEDURE FOR STORING EVENTS INFORMATION
CREATE PROCEDURE prcEventInfo @jsonEvent NVARCHAR(MAX)
AS
SET NOCOUNT ON;
BEGIN
	BEGIN TRY
		IF(ISJSON(@jsonEvent)>0)
		BEGIN
			INSERT INTO Events(Name, Image, Time, EventTypeId, DateOfEvent, EventVenueShowTimingId, TicketPrice)
			SELECT Name, Image, Time, EventTypeId, DateOfEvent, EventVenueShowTimingId, TicketPrice
			FROM OPENJSON(@jsonEvent)
			  WITH (
				Name VARCHAR(50) '$.Name',
				Image VARCHAR(100) '$.Image',
				Time VARCHAR(20) '$.Time',
				EventTypeId INT '$.EventTypeId',
				DateOfEvent DATE '$.DateOfEvent',
				EventVenueShowTimingId INT '$.EventVenueShowTimingId',
				TicketPrice MONEY '$.TicketPrice'
			  );
		END
	END TRY
	BEGIN CATCH
		SELECT ERROR_NUMBER() AS 'ERRORNUMBER',
				ERROR_MESSAGE() AS 'ERRORMESSAGE',
				ERROR_LINE() AS 'ERRORLINE';
	END CATCH
END

EXECUTE prcEventInfo N'
					  [    
					{   
               
                "Name": "Sunday Brunch at the Nine Restaurant", 
				"Image": "images\funactivity-1.jpg",
                "Time": "1h",
              
                "EventTypeId": 13,
                "DateOfEvent": "2021-02-14",
                "EventVenueShowTimingId": 1,
                "TicketPrice": 2000
                
            },
            {   
               
                "Name": "One Day Picnic at Neonz Resort & Club", 
				"Image": "images\funactivity-2.jpg",
                
                "Time": "12h",
                
                "EventTypeId": 13,
                "DateOfEvent": "2021-02-11",
                "EventVenueShowTimingId": 3,
                "TicketPrice": 1174
                
            },  
            {   
               
                "Name": "Mission Black Terror", 
				"Image": "images\funactivity-3.jpg",
               
                "Time": "1h",
               
                "EventTypeId": 12,
                "DateOfEvent": "2021-02-10",
                "EventVenueShowTimingId": 5,
                "TicketPrice": 199
                
            },
            {   
               
                "Name": "Money Heist by Mystery Rooms", 
				"Image": "images\funactivity-4.jpg",
               
                "Time": "1h",
             
                "EventTypeId": 12,
                "DateOfEvent": "2021-02-11",
                "EventVenueShowTimingId": 7,
                "TicketPrice": 700
                
            },
            {   
               
                "Name": "Sudarshan Chakra", 
				"Image": "images\funactivity-5.jpg",
               
                "Time": "1h",
                
                "EventTypeId": 12,
                "DateOfEvent": "2021-02-25",
                "EventVenueShowTimingId": 12,
                "TicketPrice": 550
                
            },
            {   
               
                "Name": "Secret Mansion by The Hidden Hour",
				"Image": "images\funactivity-6.jpg",
               
                "Time": "1h",
               
                "EventTypeId": 12,
                "DateOfEvent": "2021-02-10",
                "EventVenueShowTimingId": 9,
                "TicketPrice": 500
                
            },
			{   
               
                "Name": "Oh Hello - A Stand-up Comedy Show by Rahul Dua",
				"Image": "images\laughter-1.jpg",
               
                "Time": "1h 15m",
               
                "EventTypeId": 6,
                "DateOfEvent": "2021-03-19",
                "EventVenueShowTimingId": 10,
                "TicketPrice": 500
                
            },
			{   
               
                "Name": "Vijay Yadav",
				"Image": "images\laughter-2.jpg",
               
                "Time": "1h 30m",
               
                "EventTypeId": 6,
                "DateOfEvent": "2021-03-05",
                "EventVenueShowTimingId": 11,
                "TicketPrice": 500
                
            },
			{   
               
                "Name": "Sonali & Devanshi", 
				"Image": "images\laughter-3.jpg",
               
                "Time": "1h 15m",
               
                "EventTypeId": 6,
                "DateOfEvent": "2021-02-28",
                "EventVenueShowTimingId": 15,
                "TicketPrice": 500
                
            },
			{   
               
                "Name": "Offbeat Jokes", 
				"Image": "images\laughter-4.jpg",
               
                "Time": "1h 15m",
               
                "EventTypeId": 6,
                "DateOfEvent": "2021-02-14",
                "EventVenueShowTimingId": 17,
                "TicketPrice": 500
                
            },
			{   
               
                "Name": "Laugh O Matic",
				"Image": "images\laughter-5.jpg",
               
                "Time": "1h 15m",
               
                "EventTypeId": 6,
                "DateOfEvent": "2021-02-28",
                "EventVenueShowTimingId": 12,
                "TicketPrice": 500
                
            },
			{   
               
                "Name": "Starnight by Garv Malik", 
				"Image": "images\laughter-6.jpg",
               
                "Time": "1h 15m",
               
                "EventTypeId": 6,
                "DateOfEvent": "2021-02-17",
                "EventVenueShowTimingId": 18,
                "TicketPrice": 500
                
            },
			{   
               
                "Name": "Snow World Ahmedabad", 
				"Image": "images\outdoorevent-1.jpg",
               
                "Time": "1h",
               
                "EventTypeId": 7,
                "DateOfEvent": "2021-02-26",
                "EventVenueShowTimingId": 10,
                "TicketPrice": 500
                
            },
			{   
               
                "Name": "Ahmedabad Aerial Tour",
				"Image": "images\outdoorevent-2.jpg",
               
                "Time": "30m",
               
                "EventTypeId": 8,
                "DateOfEvent": "2021-03-03",
                "EventVenueShowTimingId": 20,
                "TicketPrice": 25000
                
            },
			{   
               
                "Name": "Valentines Day adventure trip", 
				"Image": "images\outdoorevent-8.jpg",
               
                "Time": "5h",
               
                "EventTypeId": 10,
                "DateOfEvent": "2021-02-14",
                "EventVenueShowTimingId": 21,
                "TicketPrice": 2000
                
            },
			{   
               
                "Name": "Flower Park at Sabarmati ashram", 
				"Image": "images\outdoorevent-9.jpg",
               
                "Time": "3h",
               
                "EventTypeId": 11,
                "DateOfEvent": "2021-02-11",
                "EventVenueShowTimingId": 22,
                "TicketPrice": 200
                
            },
			{   
               
                "Name": "Ahmedabads cycling & Marathon Event", 
				"Image": "images\outdoorevent-10.jpg",
               
                "Time": "1h",
               
                "EventTypeId": 8,
                "DateOfEvent": "2021-02-27",
                "EventVenueShowTimingId": 23,
                "TicketPrice": 500
                
            },
			{   
               
                "Name": "4th Test India VS England",
				"Image": "images\outdoorevent-4.jpg",
               
                "Time": "8h",
               
                "EventTypeId": 15,
                "DateOfEvent": "2021-02-24",
                "EventVenueShowTimingId": 24,
                "TicketPrice": 300
                
            },
			{   
               
                "Name": "Unbox! creativity and free thinking workshop", 
				"Image": "images\popular-1.jpg",
               
                "Time": "1h 30",
               
                "EventTypeId": 5,
                "DateOfEvent": "2021-02-28",
                "EventVenueShowTimingId": 25,
                "TicketPrice": 500
                
            },
			{   
               
                "Name": "Ruskin bond teaches writing", 
				"Image": "images\popular-2.jpg",
               
                "Time": "1h",
               
                "EventTypeId": 5,
                "DateOfEvent": "2021-02-13",
                "EventVenueShowTimingId": 26,
                "TicketPrice": 500
                
            },
			{   
               
                "Name": "Raell Padmasee Ace-Speech & Drama",
				"Image": "images\popular-3.jpg",
               
                "Time": "1h",
               
                "EventTypeId": 5,
                "DateOfEvent": "2021-02-20",
                "EventVenueShowTimingId": 27,
                "TicketPrice": 4320
                
            },
			{   
               
                "Name": "Doodling for kids",
				"Image": "images\popular-5.jpg",
               
                "Time": "1h",
               
                "EventTypeId": 5,
                "DateOfEvent": "2021-02-13",
                "EventVenueShowTimingId": 28,
                "TicketPrice": 500
                
            },
			{   
               
                "Name": "Art & Drawing for kids", 
				"Image": "images\popular-6.jpg",
               
                "Time": "1h",
               
                "EventTypeId": 5,
                "DateOfEvent": "2021-02-12",
                "EventVenueShowTimingId": 28,
                "TicketPrice": 500
                
            },
			{   
               
                "Name": "Master Photoshop", 
				"Image": "images\popular-7.jpg",
               
                "Time": "1h",
               
                "EventTypeId": 5,
                "DateOfEvent": "2021-02-11",
                "EventVenueShowTimingId": 29,
                "TicketPrice": 500
                
            },
			{   
               
                "Name": "Tholu Bommata",
				"Image": "images\plays-1.jpg",
               
                "Time": "1h",
               
                "EventTypeId": 4,
                "DateOfEvent": "2021-02-14",
                "EventVenueShowTimingId": 30,
                "TicketPrice": 30
                
            },
			{   
               
                "Name": "Tholu Bommata",
				"Image": "images\plays-2.jpg",
               
                "Time": "1h",
               
                "EventTypeId": 4,
                "DateOfEvent": "2021-02-14",
                "EventVenueShowTimingId": 29,
                "TicketPrice": 30
                
            },
			{   
               
                "Name": "Tholu Bommata", 
				"Image": "images\plays-3.jpg",
               
                "Time": "1h",
               
                "EventTypeId": 4,
                "DateOfEvent": "2021-02-22",
                "EventVenueShowTimingId": 31,
                "TicketPrice": 30
                
            },
			{   
               
                "Name": "Tholu Bommata", 
				"Image": "images\plays-4.jpg",
               
                "Time": "1h",
               
                "EventTypeId": 4,
                "DateOfEvent": "2021-02-15",
                "EventVenueShowTimingId": 32,
                "TicketPrice": 30
                
            },
			{   
               
                "Name": "Tholu Bommata", 
				"Image": "images\plays-5.jpg",
               
                "Time": "1h",
               
                "EventTypeId": 4,
                "DateOfEvent": "2021-02-23",
                "EventVenueShowTimingId": 33,
                "TicketPrice": 30
                
            },
			{   
               
                "Name": "Tholu Bommata",
				"Image": "images\plays-6.jpg",
               
                "Time": "1h",
               
                "EventTypeId": 4,
                "DateOfEvent": "2021-02-25",
                "EventVenueShowTimingId": 34,
                "TicketPrice": 30
                
            },
			{   
               
                "Name": "The Valley Run", 
				"Image": "images\games-1.jpg",
               
                "Time": "1h",
               
                "EventTypeId": 15,
                "DateOfEvent": "2021-02-13",
                "EventVenueShowTimingId": 35,
                "TicketPrice": 5000
                
            },
			{   
               
                "Name": "CS Go",
				"Image": "images\games-3.jpg",
               
                "Time": "24h",
               
                "EventTypeId": 16,
                "DateOfEvent": "2021-02-15",
                "EventVenueShowTimingId": 36,
                "TicketPrice": 40
                
            },
			{   
               
                "Name": "Simulation 1.0 by Gureilla Gaming",
				"Image": "images\games-5.jpg",
               
                "Time": "24h",
               
                "EventTypeId": 16,
                "DateOfEvent": "2021-02-25",
                "EventVenueShowTimingId": 37,
                "TicketPrice": 40
                
            },
			{   
               
                "Name": "Indian chess league", 
				"Image": "images\games-6.jpg",
               
                "Time": "8h",
               
                "EventTypeId": 16,
                "DateOfEvent": "2021-02-11",
                "EventVenueShowTimingId": 20,
                "TicketPrice": 100
                
            },
			{   
               
                "Name": "Free Fire", 
				"Image": "images\games-8.jpg",
               
                "Time": "24h",
               
                "EventTypeId": 16,
                "DateOfEvent": "2021-02-14",
                "EventVenueShowTimingId": 22,
                "TicketPrice": 120
                
            },
			{   
               
                "Name": "Corporate FIFA2020 Championship", 
				"Image": "images\games-10.jpg",
               
                "Time": "24h",
               
                "EventTypeId": 16,
                "DateOfEvent": "2021-02-12",
                "EventVenueShowTimingId": 24,
                "TicketPrice": 180
                
            }
				]';
	
--PROCEDURE FOR ADDING MOVIE
CREATE PROCEDURE prcAddMovie @Name VARCHAR(50), @Time VARCHAR(20), @Image VARCHAR(1000), @DateOfRelease DATE, @About VARCHAR(100), @Certification VARCHAR(20), @IsRecommended BIT, @IsPremiere BIT
AS
SET NOCOUNT ON;
BEGIN
	BEGIN TRY
			IF @Name NOT IN (SELECT Name FROM Movies)
			BEGIN
				DECLARE @CertificationId INT
				SELECT @CertificationId=CertificationId FROM Certifications WHERE Certification=@Certification

				INSERT INTO Movies VALUES (@Name, @Time, @Image, @DateOfRelease, @About, @CertificationId, @IsRecommended, @IsPremiere)
				PRINT 'Movie added successfully'
			END
			ELSE
			BEGIN
				PRINT 'Movie is already present'
			END
	END TRY
	BEGIN CATCH
		SELECT ERROR_NUMBER() AS 'ERRORNUMBER',
				ERROR_MESSAGE() AS 'ERRORMESSAGE',
				ERROR_LINE() AS 'ERRORLINE';
	END CATCH
END

EXECUTE prcAddMovie 'Money Heist', '2h', 'images\recommendedmovie-1.jpg', '2021-02-05', 'Based on a video game, the story follows Lt. Artemis and her loyal soldiers as they get accidentally', 'UA', 1, 1

--PROCEDURE FOR UPDATING MOVIE
CREATE PROCEDURE prcUpdateMovie @Name VARCHAR(50), @Time VARCHAR(20), @Image VARCHAR(1000), @DateOfRelease DATE, @About VARCHAR(100), @Certification VARCHAR(20), @IsRecommended BIT, @IsPremiere BIT
AS
SET NOCOUNT ON;
BEGIN
	BEGIN TRY
			IF @Name IN (SELECT Name FROM Movies)
			BEGIN
				DECLARE @CertificationId INT
				SELECT @CertificationId=CertificationId FROM Certifications WHERE Certification=@Certification

				UPDATE Movies SET Time=@Time, Image=@Image, DateOfRelease=@DateOfRelease, About=@About, CertificationId=@CertificationId, IsRecommended=@IsRecommended, IsPremiere=@IsPremiere WHERE Name=@Name
				PRINT 'Movie updated successfully'
			END
			ELSE
			BEGIN
				PRINT 'Movie is not present'
			END
	END TRY
	BEGIN CATCH
		SELECT ERROR_NUMBER() AS 'ERRORNUMBER',
				ERROR_MESSAGE() AS 'ERRORMESSAGE',
				ERROR_LINE() AS 'ERRORLINE';
	END CATCH
END

EXECUTE prcUpdateMovie 'Money Heist', '1h 55m', 'images\recommendedmovie-2.jpg', '2021-02-05', 'Based on a video game, the story follows Lt. Artemis and her loyal soldiers as they get accidentally', 'U', 1, 1

--PROCEDURE FOR DELETING MOVIE
CREATE PROCEDURE prcDeleteMovie @Name VARCHAR(50)
AS
SET NOCOUNT ON;
BEGIN
	BEGIN TRY
			IF @Name NOT IN (SELECT Name FROM Movies)
			BEGIN
				PRINT 'Movie is not present'
			END
			ELSE
			BEGIN
				DELETE FROM Movies WHERE Name = @Name
				PRINT 'Movie deleted successfully'
			END
	END TRY
	BEGIN CATCH
		SELECT ERROR_NUMBER() AS 'ERRORNUMBER',
				ERROR_MESSAGE() AS 'ERRORMESSAGE',
				ERROR_LINE() AS 'ERRORLINE';
	END CATCH
END

EXECUTE prcDeleteMovie 'Money Heist'

--PROCEDURE FOR ADDING EVENT INFORMATION
CREATE PROCEDURE prcAddEvent @Name VARCHAR(50), @TicketPrice MONEY, @Image VARCHAR(1000), @Time VARCHAR(20), @DateOfEvent DATE, @EventVenue VARCHAR(50), @ShowTime TIME, @EventType VARCHAR(50)
AS
SET NOCOUNT ON;
BEGIN
	BEGIN TRY
			IF @Name NOT IN (SELECT Name FROM Events)
			BEGIN
				DECLARE @EventVenueShowTimingId INT, @EventTypeId INT

				SELECT @EventVenueShowTimingId=evs.EventVenueShowTimingId
				FROM EventVenues AS ev JOIN EventVenueShowTimings AS evs
				ON ev.EventVenueId = evs.EventVenueId JOIN ShowTimings AS s
				ON evs.ShowTimingId=s.ShowTimingId
				WHERE ev.Name=@EventVenue AND s.ShowTime=@ShowTime

				SELECT @EventTypeId=EventTypeId
				FROM EventTypes
				WHERE EventType=@EventType

				INSERT INTO Events VALUES (@Name, @TicketPrice, @Image, @Time, @DateOfEvent, @EventVenueShowTimingId, @EventTypeId)
				PRINT 'Event added successfully'
			END
			ELSE
			BEGIN
				PRINT 'Event is already present'
			END
	END TRY
	BEGIN CATCH
		SELECT ERROR_NUMBER() AS 'ERRORNUMBER',
				ERROR_MESSAGE() AS 'ERRORMESSAGE',
				ERROR_LINE() AS 'ERRORLINE';
	END CATCH
END

EXECUTE prcAddEvent 'Money Heist', 2000, 'images\recommendedmovie-1.jpg', '1h', '2021-02-14', 'Snow World: Ahmedabad', '3:00 PM', 'Food & Drinks'

--PROCEDURE FOR UPDATING EVENT INFORMATION
CREATE PROCEDURE prcUpdateEvent @Name VARCHAR(50), @TicketPrice MONEY, @Image VARCHAR(1000), @Time VARCHAR(20), @DateOfEvent DATE, @EventVenue VARCHAR(50), @ShowTime TIME, @EventType VARCHAR(50)
AS
SET NOCOUNT ON;
BEGIN
	BEGIN TRY
			IF @Name IN (SELECT Name FROM Events)
			BEGIN
				DECLARE @EventVenueShowTimingId INT, @EventTypeId INT

				SELECT @EventVenueShowTimingId=evs.EventVenueShowTimingId
				FROM EventVenues AS ev JOIN EventVenueShowTimings AS evs
				ON ev.EventVenueId = evs.EventVenueId JOIN ShowTimings AS s
				ON evs.ShowTimingId=s.ShowTimingId
				WHERE ev.Name=@EventVenue AND s.ShowTime=@ShowTime

				SELECT @EventTypeId=EventTypeId
				FROM EventTypes
				WHERE EventType=@EventType

				UPDATE Events SET TicketPrice=@TicketPrice, Image=@Image, Time=@Time, DateOfEvent=@DateOfEvent, EventVenueShowTimingId=@EventVenueShowTimingId, EventTypeId=@EventTypeId
				PRINT 'Event updated successfully'
			END
			ELSE
			BEGIN
				PRINT 'Event is not present'
			END
	END TRY
	BEGIN CATCH
		SELECT ERROR_NUMBER() AS 'ERRORNUMBER',
				ERROR_MESSAGE() AS 'ERRORMESSAGE',
				ERROR_LINE() AS 'ERRORLINE';
	END CATCH
END

EXECUTE prcUpdateEvent 'Money Heist', 5000, 'images\recommendedmovie-3.jpg', '1h 30m', '2021-02-14', 'Snow World: Ahmedabad', '3:00 PM', 'Food & Drinks'

--PROCEDURE FOR DELETING EVENT
CREATE PROCEDURE prcDeleteEvent @Name VARCHAR(50)
AS
SET NOCOUNT ON;
BEGIN
	BEGIN TRY
			IF @Name NOT IN (SELECT Name FROM Events)
			BEGIN
				PRINT 'Event is not present'
			END
			ELSE
			BEGIN
				DELETE FROM Events WHERE Name = @Name
				PRINT 'Event deleted successfully'
			END
	END TRY
	BEGIN CATCH
		SELECT ERROR_NUMBER() AS 'ERRORNUMBER',
				ERROR_MESSAGE() AS 'ERRORMESSAGE',
				ERROR_LINE() AS 'ERRORLINE';
	END CATCH
END

EXECUTE prcDeleteEvent 'Money Heist'

--PROCEDURE FOR REGISTERING USER
CREATE PROCEDURE prcAddUser @FName VARCHAR(50), @Lname VARCHAR(50), @ContactNo CHAR(10), @Password VARCHAR(10)
AS
SET NOCOUNT ON;
BEGIN
	BEGIN TRY
			IF @ContactNo NOT IN (SELECT ContactNo FROM Users)
			BEGIN
				INSERT INTO Users VALUES (@FName, @Lname, @ContactNo, @Password)
				PRINT 'You have successfully registered'
			END
			ELSE
			BEGIN
				PRINT 'You already have an account'
			END
	END TRY
	BEGIN CATCH
		SELECT ERROR_NUMBER() AS 'ERRORNUMBER',
				ERROR_MESSAGE() AS 'ERRORMESSAGE',
				ERROR_LINE() AS 'ERRORLINE';
	END CATCH
END

EXECUTE prcAddUser 'Virti', 'Shah', '9429410249', 'virti123'

--PROCEDURE FOR SEARCHING MOVIE OR EVENT
CREATE PROCEDURE prcSearch @Name VARCHAR(50)
AS
SET NOCOUNT ON;
BEGIN
	BEGIN TRY
			IF @Name IN (SELECT Movie FROM TheatresMovies)
			BEGIN
				SELECT * FROM TheatresMovies WHERE Movie=@Name
			END
			ELSE IF @Name IN (SELECT Event FROM vEvents)
			BEGIN
				SELECT * FROM vEvents WHERE Event=@Name
			END
			ELSE
			BEGIN
				PRINT 'Not available'
			END
	END TRY
	BEGIN CATCH
		SELECT ERROR_NUMBER() AS 'ERRORNUMBER',
				ERROR_MESSAGE() AS 'ERRORMESSAGE',
				ERROR_LINE() AS 'ERRORLINE';
	END CATCH
END

EXECUTE prcSearch 'Monster Hunter'

EXECUTE prcSearch 'Sunday Brunch at the Nine Restaurant'

--PROCEDURE FOR BOOKING MOVIE
ALTER PROCEDURE prcBook @jsonBook NVARCHAR(MAX)
AS
SET NOCOUNT ON;
BEGIN
	BEGIN TRY
		DECLARE @BookingDate DATE, @Movie VARCHAR(50), @UserContact CHAR(10), @Theatre VARCHAR(50), @ShowTiming TIME, 
		@City VARCHAR(50), @Language VARCHAR(50), @FilmCategory VARCHAR(50), @DateToWatch DATE, @Seat VARCHAR(50),
		@TotalSeats INT, @FinalSeats VARCHAR(MAX), @SeatCategoryId VARCHAR(MAX), @TotalAmount INT, @Flag INT, @MovieId INT,
		@CityId INT, @FilmCategoryId INT, @LanguageId INT, @ScreenId INT, @ShowTimingId INT, @TheatreId INT, @UserId INT;  
		SET @TotalSeats = 0
		SET @FinalSeats = ''
		SET @SeatCategoryId = ''
		SET @TotalAmount = 0
		SET @Flag = 1
		SET @BookingDate = (DATENAME(YY, GETDATE()) + '-' + CAST(DATEPART(MM, GETDATE()) AS VARCHAR(50)) + '-' + DATENAME(DD, GETDATE()))

		DECLARE SeatCursor CURSOR FOR  
		SELECT Movie, UserContact, Theatre, ShowTiming, City, Language, FilmCategory, DateToWatch, Seat
			FROM OPENJSON(@jsonBook)  
			  WITH (
				Movie VARCHAR(50) '$.Movie',
				UserContact CHAR(10) '$.UserContact',
				Theatre VARCHAR(50) '$.Theatre',
				ShowTiming TIME '$.ShowTiming',
				City VARCHAR(50) '$.City',
				Language VARCHAR(50) '$.Language',
				Filmcategory VARCHAR(50) '$.FilmCategory',
				DateToWatch DATE '$.DateToWatch',
				SeatNo NVARCHAR(MAX) '$.SeatNo' AS JSON
			  )
			OUTER APPLY OPENJSON(SeatNo)
			  WITH (Seat NVARCHAR(50) '$')
  
		OPEN SeatCursor;  
  
		FETCH NEXT FROM SeatCursor  
		INTO @Movie, @UserContact, @Theatre, @ShowTiming, @City, @Language, @FilmCategory, @DateToWatch, @Seat;  
		 
		WHILE @@FETCH_STATUS = 0  
		BEGIN   
		    PRINT 'Seat No: ' + @Seat
		    SET @TotalSeats = @TotalSeats + 1;
		   
			SET @FinalSeats = @FinalSeats + ',' + @Seat

			SELECT @SeatCategoryId = SeatsCategoryId
			FROM TheatresMovies
			WHERE [Seat No] = @Seat AND Theatre=@Theatre AND ShowTime=@ShowTiming AND Movie=@Movie AND City=@City 
			AND Language=@Language AND FilmCategory=@FilmCategory

			SELECT @TotalAmount = @TotalAmount + Price
			FROM SeatsCategories
			WHERE SeatsCategoryId=@SeatCategoryId

			PRINT @SeatCategoryID
			PRINT @TotalAmount

			IF @Seat NOT IN (SELECT [Seat No] FROM TheatresMovies WHERE Theatre=@Theatre AND ShowTime=@ShowTiming AND Movie=@Movie AND City=@City AND Language=@Language AND FilmCategory=@FilmCategory)
			BEGIN
				PRINT @Seat + ' is not present in this Screen'
				SET @Flag=0
			END

			IF 1 = (SELECT DISTINCT IsBooked FROM TheatresMovies WHERE [Seat No] = @Seat AND Theatre=@Theatre AND ShowTime=@ShowTiming AND Movie=@Movie AND City=@City AND Language=@Language AND FilmCategory=@FilmCategory)
			BEGIN
				PRINT @Seat + ' is already booked!'
				SET @Flag=0
			END

		   FETCH NEXT FROM SeatCursor  
		   INTO @Movie, @UserContact, @Theatre, @ShowTiming, @City, @Language, @FilmCategory, @DateToWatch, @Seat;  
		END  
  
		CLOSE SeatCursor;  
		DEALLOCATE SeatCursor;
		
		IF @Flag=1
		BEGIN
			IF @UserContact IN (SELECT ContactNo FROM Users)
			BEGIN
				DECLARE @Screen INT;
				SELECT @Screen=ScreenId FROM TheatresMovies WHERE Theatre=@Theatre AND ShowTime=@ShowTiming 
				AND Movie=@Movie AND City=@City AND Language=@Language AND FilmCategory=@FilmCategory

				PRINT @Screen

				DECLARE @SelectedSeats VARCHAR(MAX)
				SET @SelectedSeats = SUBSTRING(@FinalSeats, 2, LEN(@FinalSeats))

				SELECT @MovieId=MovieId FROM Movies WHERE Name=@Movie
				SELECT @CityId=CityId FROM Cities WHERE Name=@City
				SELECT @FilmCategoryId=FilmCategoryId FROM FilmCategories WHERE FilmCategory=@FilmCategory
				SELECT @LanguageId=LanguageId FROM Languages WHERE Language=@Language
				SELECT @ScreenId=ScreenId FROM Screens WHERE ScreenId=@Screen
				SELECT @ShowTimingId=ShowTimingId FROM ShowTimings WHERE ShowTime=@ShowTiming
				SELECT @TheatreId=TheatreId FROM Theatres WHERE Name=@Theatre
				SELECT @UserId=UserId FROM Users WHERE ContactNo=@UserContact

				INSERT INTO MovieBookings VALUES (@BookingDate, @SelectedSeats, @TotalAmount, @DateToWatch, @TotalSeats, @CityId, @FilmCategoryId, @LanguageId, @MovieId, @ScreenId, @ShowTimingId, @TheatreId, @UserId) 

				DECLARE @SeatNo VARCHAR(50); 
  
				DECLARE SeatNoCursor CURSOR FOR
				SELECT value FROM string_split(@SelectedSeats, ',')  
					
				OPEN SeatNoCursor;  
  
				FETCH NEXT FROM SeatNoCursor  
				INTO @SeatNo;  
    
				WHILE @@FETCH_STATUS = 0  
				BEGIN 
								
					UPDATE TheatresMovies SET IsBooked=1 WHERE Theatre=@Theatre AND Movie=@Movie AND ShowTime=@ShowTiming AND [Seat No]=@SeatNo AND City=@City AND Language=@Language AND FilmCategory=@FilmCategory
					PRINT 'Update'
					PRINT @Theatre
					PRINT @Movie
					PRINT @ShowTiming
					PRINT @SeatNo
					PRINT @City
					PRINT @Language
					PRINT @FilmCategory

				    FETCH NEXT FROM SeatNoCursor  
				    INTO @SeatNo;  
				END  
  
				CLOSE SeatNoCursor;  
				DEALLOCATE SeatNoCursor;  
							
					
			END
			ELSE
			BEGIN
				PRINT 'Please create your account'
			END 
		END

	END TRY
	BEGIN CATCH
		SELECT ERROR_NUMBER() AS 'ERRORNUMBER',
				ERROR_MESSAGE() AS 'ERRORMESSAGE',
				ERROR_LINE() AS 'ERRORLINE';
	END CATCH
END

EXECUTE prcBook N'{  
						"Movie": "Tenet",
						"UserContact": "9900898890",
						"SeatNo": ["C2", "B2"],
						"Theatre": "Cineplex",
						"ShowTiming": "3:00 PM",
						"City": "Ahmedabad",
						"Language": "Tamil",
						"FilmCategory": "MX4D",
						"DateToWatch": "2021-06-28"
					}';
					
SELECT * FROM MovieBookings

DELETE FROM MovieBookings

SELECT * FROM TheatresMovies

SELECT * FROM SeatsCategories

SELECT * FROM Seats

--PROCEDURE FOR BOOKING EVENT
ALTER PROCEDURE prcEventBook @jsonBook NVARCHAR(MAX)
AS
SET NOCOUNT ON;
BEGIN
	BEGIN TRY
		DECLARE @BookingDate DATE, @TicketCount TINYINT, @Event VARCHAR(50), @UserContact CHAR(10), @EventVenue VARCHAR(50),
		@ShowTiming TIME, @EventType VARCHAR(50), @DateOfEvent DATE, @EventId INT, @UserId INT, @EventVenueId INT, @ShowTimingId INT,
		@EventTypeId INT;  

		SELECT @TicketCount=TicketCount, @Event=Event, @UserContact=UserContact, @EventVenue=EventVenue, @ShowTiming=ShowTiming,
		@EventType=EventType, @DateOfEvent=DateOfEvent
		FROM OPENJSON(@jsonBook)
		WITH (
			TicketCount TINYINT '$.TicketCount',
			Event VARCHAR(50) '$.Event',
			UserContact CHAR(10) '$.UserContact',
			EventVenue VARCHAR(50) '$.EventVenue',
			ShowTiming TIME '$.ShowTiming',
			EventType VARCHAR(50) '$.EventType',
			DateOfEvent DATE '$.DateOfEvent'
			);

		SET @BookingDate=(DATENAME(YY, GETDATE()) + '-' + CAST(DATEPART(MM, GETDATE()) AS VARCHAR(50)) + '-' + DATENAME(DD, GETDATE()))

		IF @UserContact IN (SELECT ContactNo FROM Users)
		BEGIN
			DECLARE @Tickets TINYINT, @TicketPrice MONEY
			SELECT @Tickets=TotalTickets, @TicketPrice=TicketPrice FROM vEvents WHERE Event=@Event AND [Event Venue]=@EventVenue AND ShowTime=@ShowTiming AND EventType=@EventType AND DateOfEvent=@DateOfEvent
			IF @Tickets > @TicketCount
			BEGIN
				DECLARE @Total MONEY
				SET @Total = @TicketCount * @TicketPrice

				SELECT @EventId = EventId FROM Events WHERE Name=@Event
				SELECT @UserId = UserId FROM Users WHERE ContactNo = @UserContact
				SELECT @EventVenueId = EventVenueId FROM EventVenues WHERE Name = @EventVenue
				SELECT @ShowTimingId=ShowTimingId FROM ShowTimings WHERE ShowTime=@ShowTiming
				SELECT @EventTypeId = EventTypeId FROM EventTypes WHERE EventType=@EventType

				INSERT INTO EventBookings VALUES (@BookingDate, @TicketCount, @Total, @EventId, @UserId, @EventVenueId, @ShowTimingId, @EventTypeId)
				UPDATE vEvents SET TotalTickets = TotalTickets-@TicketCount WHERE Event=@Event AND [Event Venue]=@EventVenue AND ShowTime=@ShowTiming AND EventType=@EventType AND DateOfEvent=@DateOfEvent
  			END
			ELSE
			BEGIN
				PRINT 'Tickets not available'
			END
		
		END
		ELSE
		BEGIN
			PRINT 'Please create your account'
		END 
	
	END TRY
	BEGIN CATCH
		SELECT ERROR_NUMBER() AS 'ERRORNUMBER',
				ERROR_MESSAGE() AS 'ERRORMESSAGE',
				ERROR_LINE() AS 'ERRORLINE';
	END CATCH
END

EXECUTE prcEventBook N'{  
						"TicketCount": "3",
						"Event": "Sunday Brunch at the Nine Restaurant",
						"UserContact": "9900898890",
						"EventVenue": "Snow World: Ahmedabad",
						"ShowTiming": "8:00 PM",
						"EventType": "Food & Drinks",
						"DateOfEvent": "2021-02-14"
					}'; 

SELECT * FROM EventBookings

DELETE FROM EventBookings

--PROCEDURE FOR VIEWING BOOKING HISTORY OF A PARTICULAR USER
CREATE PROCEDURE prcBookingHistoryInfo @UserContact CHAR(10)
AS
SET NOCOUNT ON;
BEGIN
	BEGIN TRY
		SELECT Movie AS 'Movie/Event', DateToWatch AS 'DateOfShow', ShowTiming, Theatre AS 'Venue', Screen, SeatNo, TotalTickets
		FROM MovieBookings
		WHERE UserContact=@UserContact
		UNION ALL
		SELECT Event, DateOfEvent, ShowTiming, EventVenue, '', '' , TicketCount
		FROM EventBookings
		WHERE UserContact=@UserContact	
	END TRY
	BEGIN CATCH
		SELECT ERROR_NUMBER() AS 'ERRORNUMBER',
				ERROR_MESSAGE() AS 'ERRORMESSAGE',
				ERROR_LINE() AS 'ERRORLINE';
	END CATCH
END

EXECUTE prcBookingHistoryInfo '9429410249';

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
SELECT * FROM vMovies
SELECT * FROM vEvents
SELECT * FROM TheatresMovies
SELECT * FROM EventBookings
SELECT * FROM MovieBookings
SELECT SUM(TotalAmount) AS 'Total' FROM MovieBookings


