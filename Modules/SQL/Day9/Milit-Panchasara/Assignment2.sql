DECLARE @studentsData varchar(MAX) = N'[
      {
        "id": 1,
        "name": "Debora Short",
        "address": "317 Sandford Street",
        "city": "Crisman",
        "dob": "1998-12-20",
		"standard":12
      },
      {
        "id": 2,
        "name": "Banks Bass",
        "address": "839 Williams Place",
        "city": "Clinton",
        "dob": "1998-02-08",
		"standard":12
      },
      {
        "id": 3,
        "name": "Ellis Hays",
        "address": "624 Brightwater Court",
        "city": "Eastvale",
        "dob": "1998-03-04",
		"standard":12
      },
      {
        "id": 4,
        "name": "Jodie Sandoval",
        "address": "812 Degraw Street",
        "city": "Sheatown",
        "dob": "1999-10-29",
		"standard":11
      },
      {
        "id": 5,
        "name": "Sonya Mosley",
        "address": "866 Doughty Street",
        "city": "Brandywine",
        "dob": "1999-04-15"
      }
    ]'

--DROP TABLE Students;
INSERT INTO Students (StudentID, Name, Address, City, DateOfBirth, Standard)
(SELECT * FROM OPENJSON(@studentsData)
WITH (
	StudentID int '$.id',
	Name varchar(100)  '$.name',
	Address varchar(100) '$.address',
	City varchar(100) '$.city',
	DateOfBirth varchar(100) '$.dob',
	Standard int '$.standard'
))

-- default format
SELECT 
	StudentID AS id, 
	Name AS name, 
	Address AS address, 
	City AS city, 
	DateOfBirth AS dob, 
	Standard AS standard 
FROM Students FOR JSON AUTO, WITHOUT_ARRAY_WRAPPER  -- WITHOUT_ARRAY_WRAPPER removes [] from output JSON

-- with specific format
SELECT 
	StudentID AS id, 
	Name AS [studentdetails.name], -- [] to define specific format
	Address AS 'studentdetails.address', -- '' to define specific format
	City AS 'studentdetails.city',
	DateOfBirth AS 'studentdetails.dob', 
	Standard AS 'studentdetails.standard' 
FROM Students FOR JSON PATH, ROOT ('Students'),INCLUDE_NULL_VALUES -- root of all data & null values included

GO