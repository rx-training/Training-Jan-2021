CREATE DATABASE BATCHASSIGNMENT
USE BATCHASSIGNMENT
-->1
CREATE TABLE Departments (
   DepartmentID decimal(4,0) NOT NULL DEFAULT '0',
   DepartmentName varchar(30) NOT NULL,
   ManagerID decimal(6,0) DEFAULT NULL,
   LocationID decimal(4,0) DEFAULT NULL,
	PRIMARY KEY (DepartmentID),
 )

 INSERT INTO Departments  VALUES
('10', 'Administration', '200', '1700'),
('20', 'Marketing', '201', '1800'),
('30', 'Purchasing', '114', '1700'),
('40', 'Human Resources', '203', '2400'),
('50', 'Shipping', '121', '1500'),
('60', 'IT', '103', '1400'),
('70', 'Public Relations', '204', '2700'),
('80', 'Sales', '145', '2500'),
('90', 'Executive', '100', '1700'),
('100', 'Finance', '108', '1700'),
('110', 'Accounting', '205', '1700'),
('120', 'Treasury', '0', '1700'),
('130', 'Corporate Tax', '0', '1700'),
('140', 'Control And Credit', '0', '1700'),
('150', 'Shareholder Services', '0', '1700'),
('160', 'Benefits', '0', '1700'),
('170', 'Manufacturing', '0', '1700'),
('180', 'Construction', '0', '1700'),
('190', 'Contracting', '0', '1700'),
('200', 'Operations', '0', '1700'),
('210', 'IT Support', '0', '1700'),
('220', 'NOC', '0', '1700'),
('230', 'IT Helpdesk', '0', '1700'),
('240', 'Government Sales', '0', '1700'),
('250', 'Retail Sales', '0', '1700'),
('260', 'Recruiting', '0', '1700'),
('270', 'Payroll', '0', '1700');

SELECT  'Department Name'=
CASE  DepartmentName
WHEN 'Manufacturing' THEN 'Manufacturing Department'
WHEN 'Accounting' THEN 'Accounting Department'
WHEN 'IT Support' THEN 'IT Department'
END
FROM Departments
GO
-->2
CREATE TABLE Students
(
	Name VARCHAR(20),
	City VARCHAR(100),
	DOB DATE,
	Standard NUMERIC
);
INSERT INTO Students VALUES('John','Mumbai','2010-12-03',6);
INSERT INTO Students VALUES('Rita','Ahmedabad','2011-01-03',5);
INSERT INTO Students VALUES('Krish','Surat','2012-06-20',4);
INSERT INTO Students VALUES('Kiran','Rajkot','2013-07-04',3);
INSERT INTO Students VALUES('Bhumi','Ahmedabad','2014-09-18',2);
SELECT * FROM Students
DECLARE @json NVARCHAR(300);
SELECT Name AS 'Student Name',City As 'Student City', DOB AS 'Date Of Birth',Standard AS 'Standard' FROM Students FOR JSON PATH;
GO