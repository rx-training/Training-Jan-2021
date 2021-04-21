
CREATE TABLE Departments(
	DepartmentID INT PRIMARY KEY,
	DepartmentName VARCHAR(30) NOT NULL,
	TotalDoctors INT NOT NULL,
	TotalPaitents INT NOT NULL,
	TotalHA INT NOT NULL
)

CREATE TABLE Doctors(
	DoctorID INT PRIMARY KEY,
	Name VARCHAR(30) NOT NULL,
	Experience INT NOT NULL,
	DepartmentID INT CONSTRAINT fkDepartmentIDD FOREIGN KEY REFERENCES dbo.Departments(DepartmentID)
)

CREATE TABLE Patients(
	PatientID INT PRIMARY KEY,
	Name VARCHAR(30) NOT NULL,
	DepartmentID INT CONSTRAINT fkDepartmentIDP FOREIGN KEY REFERENCES dbo.Departments(DepartmentID),
	Disease VARCHAR(20) NOT NULL,
	MorningPills INT,
	AfternoonPills INT,
	NightPills INT
)

CREATE TABLE HealthcareAssistants(
	HAID INT PRIMARY KEY,
	Name VARCHAR(30) NOT NULL,
	DepartmentID INT CONSTRAINT fkDepartmentIDH FOREIGN KEY REFERENCES dbo.Departments(DepartmentID),
)

CREATE TABLE PatientRecords (
	PatientID INT CONSTRAINT fkPatientID FOREIGN KEY REFERENCES dbo.Patients(PatientID),
	DoctorID INT CONSTRAINT fkDoctorID FOREIGN KEY REFERENCES dbo.Doctors(DoctorID),
	HAID INT CONSTRAINT fkHAID FOREIGN KEY REFERENCES dbo.HealthcareAssistants(HAID),
)

GO
CREATE VIEW PatientDetailRecords
AS
SELECT p.Name, p.Disease, dp.DepartmentName AS Department, p.MorningPills, p.AfternoonPills, p.NightPills, d.Name AS 'Doctor Name', ha.Name AS 'Healthcare Assistants' 
	FROM PatientRecords pr 
	JOIN Patients p ON pr.PatientID=p.PatientID 
	JOIN Doctors d ON pr.DoctorID=d.DoctorID 
	JOIN HealthcareAssistants ha ON pr.HAID=ha.HAID 
	JOIN Departments dp ON p.DepartmentID=dp.DepartmentID
GO

SELECT * FROM PatientDetailRecords