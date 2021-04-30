CREATE TABLE Admins
(
	AdminID INT NOT NULL CONSTRAINT pkAdmin PRIMARY KEY IDENTITY(1,1),
	FirstName VARCHAR(50) NOT NULL,
	LastName VARCHAR(50) NOT NULL,
	AdminEmail VARCHAR(50) NOT NULL,
	UserName VARCHAR(100) NOT NULL,
	Password VARCHAR(50) NOT NULL,
	CreateDate DATETIME DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO Admins(FirstName,LastName,UserName,AdminEmail,Password) VALUES('Namra','Patel','NamraPatel','Namra2020@gmail.com','Namra2020$');

CREATE TABLE Doctors
(
	DoctorId INT NOT NULL CONSTRAINT pkDoctor PRIMARY KEY IDENTITY(1,1),
	DoctorName VARCHAR(100) NOT NULL,
	DisplayName VARCHAR(20) NOT NULL,
	Contact VARCHAR(10) NOT NULL CONSTRAINT chkContact CHECK(Contact LIKE '[1-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]'),
	DepartmentId INT NOT NULL CONSTRAINT fkDoctorDepartment FOREIGN KEY REFERENCES Departments(DepartmentId),
	Email VARCHAR(50) NOT NULL,
	Specialist VARCHAR(100) NOT NULL
);
INSERT INTO Doctors(DoctorName,DisplayName,Contact,DepartmentId,Email,Specialist) Values
	('Jitendra Babulal Patel','Dr.J.B.Patel','9662223331',1,'Jitendra@abc.com','Bone,eye,throat'),
	('Asha Jitendra Patel','Dr.A.J.Patel','9726630147',2,'Asha@asd.com','ENT');
CREATE TABLE Assistants
(
	AssistantId INT NOT NULL CONSTRAINT pkAssistant PRIMARY KEY IDENTITY(1,1),
	AssistantName VARCHAR(100) NOT NULL,
	AssistantContact VARCHAR(10) NOT NULL CONSTRAINT chkAssistantContact CHECK(AssistantContact LIKE '[1-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]'),
	AssistantEmail VARCHAR(50) NOT NULL
);
INSERT INTO Assistants(AssistantName,AssistantContact,AssistantEmail) VALUES
	('Suchi Utsav Patel','9904088184','suchi@adsd.com'),
	('Utsav Dinesh PAtel','9797765665','Utsa.@SA.com');
CREATE TABLE Departments
(
	DepartmentId INT NOT NULL CONSTRAINT pkDepartments PRIMARY KEY IDENTITY(1,1),
	DepartmentName VARCHAR(50) NOT NULL
);
INSERT INTO Departments(DepartmentName) VALUES('A'),('B');
CREATE TABLE Patients
(
	PatientId INT NOT NULL CONSTRAINT pkPatients PRIMARY KEY IDENTITY(1,1),
	PatientName VARCHAR(100) NOT NULL,
	PatientAddress VARCHAR(200) NOT NULL,
	PatientContact VARCHAR(10) NOT NULL CONSTRAINT chkPatientContact CHECK(PatientContact LIKE '[1-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]'),
	PatientEmail VARCHAR(50) NOT NULL,
	PatientCreateDate DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO Patients(PatientName,PatientAddress,PatientContact,PatientEmail) VALUES
	('Raju Jetha Patel','1,Trivid residency, visnagar','9764132581','Raju#@gmaa.com'),
	('Shruti Raju Patel','1,Trii,Visnagr','5000100012','Shru@bcs.com')
CREATE TABLE Drugs
(
	DrugId INT NOT NULL CONSTRAINT pkDrugs PRIMARY KEY IDENTITY(1,1),
	DrugName VARCHAR(50) NOT NULL,
	DrugContent VARCHAR(MAX) NOT NULL,
	Price INT NOT NULL,
	Expiry INT NOT NULL
);
INSERT INTO Drugs(DrugName,DrugContent,Price,Expiry) VALUES
('A','AC VIitavmin',155,6),
('B','Montelucast Levocetrizine',80,9),
('C','Vitamin C',90,10),
('D','Vitamin D',100,11),
('E','Vitamin E',155,10);

CREATE TABLE Transcript
(
	TranscriptId INT NOT NULL CONSTRAINT pkTranscript PRIMARY KEY IDENTITY(1,1),
	PatientId INT NOT NULL CONSTRAINT fkTransiptPatient FOREIGN KEY REFERENCES Patients(PatientId),
	Doctors NVARCHAR(100) NOT NULL,
	Assistants NVARCHAR(100) NOT NULL,
	Drugs NVARCHAR(255) NOT NULL,
	Bill INT NOT NULL,
	TranscriptDate DATETIME DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE TranscriptDoctors(
	DoctorId INT NOT NULL CONSTRAINT fkTranscriptDoctor PRIMARY KEY FOREIGN KEY REFERENCES Doctors(DoctorId)
);
INSERT INTO TranscriptDoctors(DoctorId) VALUES (1),(2);

CREATE TABLE TranscriptAssistants(
	AssistantId INT NOT NULL CONSTRAINT fkTranscriptAssistant PRIMARY KEY FOREIGN KEY REFERENCES Assistants(AssistantId)
);
INSERT INTO TranscriptAssistants(AssistantId) VALUES (1),(2);

CREATE TABLE TranscriptDrugs(
	DrugId INT NOT NULL CONSTRAINT fkTranscriptDrug PRIMARY KEY FOREIGN KEY REFERENCES Drugs(DrugId),
	Quantity INT DEFAULT 1 
);
INSERT INTO TranscriptDrugs(DrugId,Quantity) VALUES(1,2),(3,4),(4,4);

SELECT * FROM TranscriptDoctors FOR JSON PATH

SELECT *  FROM OPENJSON((SELECT * FROM TranscriptDoctors FOR JSON PATH)) WITH (DoctorId INT '$.DoctorId');

select * from TranscriptAssistants
select * from TranscriptDoctors
select * from TranscriptDrugs

CREATE PROCEDURE spOrders
	(
		@PatientId INT
	)
AS
BEGIN
	BEGIN TRY
		IF(@PatientId IN (SELECT PatientId FROM Patients))
			BEGIN 
				DECLARE @Bill INT;
				SET @Bill = (SELECT SUM(Quantity * Price) FROM TranscriptDrugs t
									INNER JOIN Drugs d on d.DrugId = t.DrugId);
				INSERT INTO Transcript(PatientId,Doctors,Assistants,Drugs,Bill) VALUES
					(	
						@PatientId,
						(SELECT * FROM TranscriptDoctors FOR JSON PATH),
						(SELECT * FROM TranscriptAssistants FOR JSON PATH),
						(SELECT * FROM TranscriptDrugs FOR JSON PATH),
						@Bill
					);
			END
		ELSE
			RAISERROR('Patient is not found..',16,1);
	END TRY
	BEGIN CATCH
		PRINT ERROR_MESSAGE();
	END CATCH
END

EXEC spOrders 1

select * from Transcript

CREATE Function vPatientDrugs
(
	@TranscriptID INT
)
RETURNS TABLE
AS
RETURN(
	SELECT *,(Price * (SELECT Quantity FROM OPENJSON((SELECT Drugs
		FROM Transcript WHERE CONVERT(int, TranscriptID) = @TranscriptId)) 
		WITH(DrugId INT '$.DrugId',Quantity INT '$.Quantity')WHERE d.DrugId = DrugId))'Total_Drug_Price'
	FROM Drugs d
	WHERE d.DrugId IN 
 		(SELECT DrugId FROM OPENJSON((SELECT Drugs
		FROM Transcript WHERE TranscriptID = 1)) 
		WITH(DrugId INT '$.DrugId',Quantity INT '$.Quantity'))
);
DROP FUNCTION vPatientDrugs
select * from vPatientDrugs(3)

			