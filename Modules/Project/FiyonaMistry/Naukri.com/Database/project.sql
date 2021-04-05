USE NaukriDB


CREATE TABLE MainSectors(
	MainSectorID INT PRIMARY KEY IDENTITY(1,1),
	MainSectorName VARCHAR(50) NOT NULL UNIQUE
)

INSERT INTO MainSectors
VALUES(
	'Information And Technology'
),
(
	'Manufacturing'
)


CREATE TABLE SubSectors(
	SubSectorID INT PRIMARY KEY IDENTITY(1,1),
	SubSectorName VARCHAR(50) NOT NULL,
	MainSectorID INT CONSTRAINT fkMainSectorID FOREIGN KEY REFERENCES MainSectors(MainSectorID)
)

INSERT INTO SubSectors
VALUES (
	'Analytics', 1
),
(
	'Cloud Computing', 1
),
(
	'Auto Equipment', 2
),
(
	'Textile', 2
)


CREATE TABLE JobSeekers(
	JobSeekerID INT PRIMARY KEY IDENTITY(1,1),
	JobSeekerFirstName VARCHAR(50) NOT NULL,
	JobSeekerLastName VARCHAR(50) NOT NULL,
	JobSeekerType VARCHAR(50) NOT NULL,  --Fresher/Professional
	JobSeekerEmail VARCHAR(500)NOT NULL,
	JobSeekerResume VARCHAR(50) NOT NULL,
	JobSeekerSkills VARCHAR(100),
	JobSeekerProjects VARCHAR(500),
	JobSeekerDOB DATE,
	JobSeekerGender CHAR(1),
	JobSeekerAddress VARCHAR(500),
	JobSeekerAreaPinCode INT,
	JobSeekerPassword VARCHAR(50) NOT NULL
)

INSERT INTO JobSeekers
VALUES (
	'Vaidehi', 
	'Patel', 
	'Fresher', 
	'vaidehipatel@gmail.com', 
	'resume.pdf', 
	'Java, Python, Node, Flutter', 
	'Hospital Management System', 
	'09-12-1997', 
	'F', 
	'Ahmedabad', 
	'387627', 
	'vaidehi121'
), 
(
	'Virat', 
	'Kohli', 
	'Professional', 
	'kholivirat@gmail.com', 
	'Resume.pdf', 
	'Database Handling', 
	'Library Management System',
	'10-11-1993', 
	'M', 
	'Mumbai', 
	'764671', 
	'virat121'
)


CREATE TABLE Admins(
	AdminID INT PRIMARY KEY IDENTITY(1,1),
	AdminFirstName VARCHAR(50) NOT NULL,
	AdminLastName VARCHAR(50) NOT NULL,
	AdminEmail VARCHAR(500) NOT NULL,
	AdminPassword VARCHAR(50) NOT NULL,
	AdminPhoneNumber BIGINT NOT NULL
)

INSERT INTO Admins
VALUES(
	'Fiyona', 'Mistry', 'fiyonamistry2211@gmail.com', 'fiyona123', 7777901827
)


CREATE TABLE FAQs(
	FAQID INT PRIMARY KEY IDENTITY(1,1),
	FAQTopic VARCHAR(50),
	FAQQuestion VARCHAR(500) NOT NULL,
	FAQAnswer VARCHAR(MAX) NOT NULL
)

INSERT INTO FAQs
VALUES(
	'Search', 
	'How do I search for jobs on Naukri?', 
	'You can search for jobs that have been posted by companies and recruiters on Naukri based on key skills, job title/designation or company names. You can also specify location, minimum work experience and minimum salary expected, before searching. If you get hundreds of jobs, you can narrow down your search by using filters. If you do not want to apply to a job right away, you can save the job and apply later. If we show, “No Results Found” for your search result, we recommend you to broaden the search by reducing your filters and criteria while also checking for spelling mistakes in your query.'
), 
(
	'Apply', 
	'How do I track my job application?', 
	'After you apply to a job, you will see a success message on the screen. We will also send a confirmation email to your registered email address. In addition to this, you can view all the jobs you have applied to under the ‘Application Status’ section on the website. This section shows the status of the job application. You can see statuses such as ‘Application Sent’, ‘Application Viewed’, ‘CV Downloaded’, ‘Shortlisted’, ‘Job Expired’ against your application.'
)


CREATE TABLE ContactUsBranchAddresses(
	CUBAID INT PRIMARY KEY IDENTITY(1,1),
	CUBALocation VARCHAR(50) NOT NULL,
	CUBAAddress VARCHAR(500) NOT NULL,
	CUBAPinCode INT NOT NULL,
	CUBAPhoneNumber BIGINT,
	CUBATollFreeNumber BIGINT
)

INSERT INTO ContactUsBranchAddresses
VALUES(
	'Ahmedabad', '106, Iscon Elegance, Near Shapath 5, Off S G Highway', '380015', 91-981888221, 18001022558
), 
(
	'Baroda', '506, 5th Floor, Samanvay Silver, Munjmahuda Circle, Near Akota', '390020', 91-9818882211, 18001022558
)


CREATE TABLE JobSeekerEducations(
	JSEID INT PRIMARY KEY IDENTITY(1,1),
	JobSeekerID INT CONSTRAINT fkJobSeekerID FOREIGN KEY REFERENCES JobSeekers(JobSeekerID),
	JobSeekerField VARCHAR(50) NOT NULL,
	JobSeekerCollege VARCHAR(50) NOT NULL,
	JobSeekerYearofCompletion INT NOT NULL
)

INSERT INTO JobSeekerEducations
VALUES(
	1, '12th Commerce', 'Hillwoods', 2016
), 
(
	1, 'BCA', 'BPCCS', 2019
),
(
	1, 'MCA', 'GLS', 2021
)


CREATE TABLE JobSeekerJobHistories(
	JSJHID INT PRIMARY KEY IDENTITY(1,1),
	JobSeekerID INT CONSTRAINT fkJobSeekerIDJobHistory FOREIGN KEY REFERENCES JobSeekers(JobSeekerID),
	JobSeekerDesignation VARCHAR(50) NOT NULL,
	JobSeekerCompany VARCHAR(50) NOT NULL,
	JobSeekerAnnualSalary FLOAT NOT NULL,
	JobSeekerWorkingFrom DATE NOT NULL,
	JobSeekerWorkingTo DATE NOT NULL,
	JobSeekerCurrentCity VARCHAR(50),
	IsCurrent SMALLINT
)

INSERT INTO JobSeekerJobHistories
VALUES(
	2, 'DBA', 'XYZ Ltd.', 420000.00, '08-03-2019', '03-27-2021', 'Ahmedabad', 1
)


CREATE TABLE Companies(
	CompanyID INT PRIMARY KEY IDENTITY(1,1),
	CompanyName VARCHAR(50) NOT NULL,
	CompanySector VARCHAR(50) NOT NULL,
	CompanySize VARCHAR(50) NOT NULL,
	CompanyReview FLOAT NOT NULL,
	CompanyImages IMAGE,
	CompanyAbout VARCHAR(MAX), 
	CompanyEstablishedDate VARCHAR(50) NOT NULL,
	CompanyWebsite VARCHAR(500) NOT NULL,
	SubSectorID INT CONSTRAINT fkSubSectorIDCompanies FOREIGN KEY REFERENCES SubSectors(SubSectorID)
)

INSERT INTO Companies (
	CompanyName, 
	CompanySector, 
	CompanySize, 
	CompanyReview, 
	CompanyAbout, 
	CompanyEstablishedDate, 
	CompanyWebsite, 
	SubSectorID)
VALUES(
	'Radixweb', 
	'Private', 
	'201-500 Employees', 
	3.4, 
	'Radix is a clique of multitalented and vibrant people in quest of opportunities to deliver quality outsourcing services. We make no fuss about vision or mission. We just follow the simple rule of ‘identify the need and persevere to meet it’. Enjoying a humble beginning a decade ago, Radix today commands attention in enterprise class real time applications hosted on Cloud or SaaS. Creativity, commitment, robust delivery and transparency are our founding stones that have made us set standards adopted as industry best practices.', 
	'21 Years Old', 
	'radixweb.com', 
	1
)


CREATE TABLE Jobs(
	JobID INT PRIMARY KEY IDENTITY(1,1),
	JobName VARCHAR(50) NOT NULL,
	JobExperienceNeeded VARCHAR(50) NOT NULL,
	JobKeySkills VARCHAR(100) NOT NULL,
	JobSalary VARCHAR(50) NOT NULL,
	JobLocation VARCHAR(50) NOT NULL,
	JobDescription VARCHAR(MAX) NOT NULL,
	JobRole VARCHAR(MAX) NOT NULL,
	JobEmploymentType VARCHAR(50) NOT NULL,
	IsOpen SMALLINT,
	CompanyId INT CONSTRAINT fkCompanyIdJobs FOREIGN KEY REFERENCES Companies(CompanyID)
)

INSERT INTO Jobs 
VALUES(
	'Senior Software Engineer - PHP',
	'3-5 years',
	'PHP, Laravel, JQuery, Magento, JavaScript, Symfony, Node.JS, Yli, Zend, Codeigniter, MySQL',
	'3-6 LPA',
	'Ahmedabad',
	'As a Senior Software Engineer at Radixweb, you will write and maintain efficient code by using PHP technology. You will follow the complete software development life cycle and work with other team members on the project modules including software design and development. Youll be communicating with clients on a regular basis for gathering requirements and giving demos.',
	'Involve in full lifecycle application development. Programming and Development of Web Application with other PHP Programmer. Analyzing, coding and debugging the application with PHP & MySQL. Involve in the work of cloud technology(AWS). Involve in the continuous learning process for the latest technologies. Work with creative thinking and result-oriented approach',
	'Full Time',
	1,
	1
),
(
	'Angular Developer',
	'2-5 years',
	'Angular, JavaScript, Angular 4.0, MVVM, MVC, TypeScript, HTML, CSS, Angularjs',
	'4-8 LPA',
	'Ahmedabad',
	'As a Software Engineer at Radixweb, you will write and maintain efficient code by using Front-end technology. You will follow the complete software development life cycle and work with other team members on solutions module including software system design and development. You will be communicating with clients on regular basis for gathering requirements and giving demos.',
	'Develop User interfaces for Modern Rich Internet Applications with the Front End Technology Angular. Perform product analysis and development tasks of an increasingly complex nature. Writing tested and documented JavaScript, HTML, and CSS. Make design and technical decisions for Angular projects. Develop application code and unit tests in Angular. Ensuring high performance. Building reusable code and libraries for future use. Optimization of the application for maximum speed and scalability. Integration of the front-end and back-end aspects of the web application. Implementation of a robust set of services and APIs to power the web application',
	'Full Time',
	1,
	1
)


CREATE TABLE CompanyBranches(
	CompanyBranchID INT PRIMARY KEY IDENTITY(1,1),
	CompanyID INT CONSTRAINT fkCompanyID FOREIGN KEY REFERENCES Companies(CompanyID),
	CompanyLocation VARCHAR(50),
	CompanyAddress VARCHAR(50),
	CompanyPinCode INT
)

INSERT INTO CompanyBranches
VALUES(
	1,
	'Ahmedabad',
	'Ekyarth, Malabar County Rd, Chharodi',
	382481
)


--PROCEDURES

--Main Page Search Procedure
CREATE OR ALTER PROCEDURE MainSearch @Designation VARCHAR(50), @Skills VARCHAR(100), @CompanyId INT, @Location VARCHAR(50)
AS
BEGIN
	BEGIN TRY
		SELECT JobName, JobKeySkills, CompanyId, JobLocation
		FROM Jobs
		WHERE CompanyId = @CompanyId
		AND JobLocation = @Location
		AND JobName LIKE '%'+ @Designation + '%'
		AND JobKeySkills LIKE '%' + @Skills + '%'
	END TRY
	BEGIN CATCH
		PRINT 'Error Occurred'
	END CATCH
END
GO

EXEC MainSearch @Designation = 'Engineer', @Skills = 'PHP', @CompanyId =  1, @Location =  'Ahmedabad'
GO



--VIEWS

--Main Page VIEW
CREATE OR ALTER VIEW BestPlaces
AS
	SELECT ms.MainSectorName, ss.SubSectorName, c.CompanyName
	FROM MainSectors AS ms
	JOIN SubSectors AS ss
	ON ms.MainSectorID = ss.MainSectorID
	JOIN Companies AS c
	ON ss.SubSectorID = c.SubSectorID
GO

SELECT *
FROM BestPlaces
GO


--Search Jobs By Location
CREATE OR ALTER VIEW JobsByLocation
AS
	SELECT JobLocation
	FROM Jobs
	GROUP BY JobLocation
GO

SELECT *
FROM JobsByLocation
GO


--Search Jobs By Skill
CREATE OR ALTER VIEW JobsBySkill 
AS
	SELECT DISTINCT(TRIM(Split.value)) AS 'Skills'
	FROM Jobs
	CROSS APPLY String_split(JobKeySkills,',') AS Split 
GO

SELECT *
FROM JobsBySkill
GO


--Search Jobs By Designation
CREATE OR ALTER VIEW JobsByDesignation 
AS
	SELECT JobName
	FROM Jobs
	GROUP BY JobName
GO

SELECT *
FROM JobsByDesignation
GO


--Search Jobs By Companies
CREATE OR ALTER VIEW JobsByCompany
AS
	SELECT c.CompanyName
	FROM Jobs As j
	JOIN Companies AS c
	ON j.CompanyId = c.CompanyID
	GROUP BY c.CompanyName
GO

SELECT *
FROM JobsByCompany
GO