use Day1EntityHospital;

CREATE TABLE Departments
(
	DepartmentId INT NOT NULL CONSTRAINT pkDepartment PRIMARY KEY IDENTITY(1,1),
	DepartmentName VARCHAR(100) NOT NULL
);

CREATE TABLE Doctors
(
	DoctorId INT NOT NULL CONSTRAINT pkDoctor PRIMARY KEY IDENTITY(1,1),
	FirstName VARCHAR(50) NOT NULL,
	MiddleName VARCHAR(50) NOT NULL,
	LastName VARCHAR(50) NOT NULL,
	ContactNumber VARCHAR(10) NOT NULL CONSTRAINT chkdoctor CHECK(ContactNumber LIKE '[1-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]'),
	Email VARCHAR(100) NOT NULL,
	DepartmentId INT NOT NULL CONSTRAINT fkDoctorDepartment FOREIGN KEY REFERENCES Departments(DepartmentId) 
);



CREATE TABLE Patients(
	PatientId INT NOT NULL CONSTRAINT pkPatients PRIMARY KEY IDENTITY(1,1),
	PatientName VARCHAR(100) NOT NULL,
	ContactNumber VARCHAR(10) NOT NULL CONSTRAINT chkPatientContact CHECK(ContactNumber LIKE '[1-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]'),
	PatientAddress VARCHAR(255) NOT NULL
);

CREATE TABLE Assistants(
	AssistantId INT NOT NULL CONSTRAINT pkAssistants PRIMARY KEY IDENTITY(1,1),
	Name VARCHAR(255) NOT NULL,
	ContactNumber VARCHAR(10) NOT NULL CONSTRAINT chkAssistantContact CHECK(ContactNumber LIKE '[1-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]'),
	DoctorID INT NOT NULL CONSTRAINT fkAssistantDoctorId FOREIGN KEY REFERENCES Doctors(DoctorID)
);

CREATE TABLE DRUGS(
	DrugId INT NOT NULL CONSTRAINT pkDrugs PRIMARY KEY IDENTITY(1,1),
	Morning BIT NOT NULL CONSTRAINT chkDrugMorning CHECK(Morning IN (0,1)) DEFAULT 0,
	Afternoon BIT NOT NULL CONSTRAINT chkDrugAfternoon CHECK(Afternoon IN (0,1)) DEFAULT 0,
	Night BIT NOT NULL CONSTRAINT chkDrugNight CHECK(Night IN (0,1)) DEFAULT 0,
	[Before] BIT NOT NULL CONSTRAINT chkDrugBefore CHECK([Before] IN (0,1)) DEFAULT 0,
	[After] BIT NOT NULL CONSTRAINT chkDrugAfter CHECK([After] IN (0,1)) DEFAULT 0,
	Price INT NOT NULL,
	Quantity INT NOT NULL
);

CREATE TABLE Transcript(
	TranscriptId INT NOT NULL CONSTRAINT pkTranscript PRIMARY KEY IDENTITY(1,1),
	PatientId INT NOT NULL CONSTRAINT fkTranscriptPatient FOREIGN KEY REFERENCES Patients(PatientId),
	DoctorId INT NOT NULL CONSTRAINT fkTranscriptDoctor FOREIGN KEY REFERENCES Doctors(DoctorId),
	Drugs VARCHAR(MAX) NOT NULL,
	Days INT NOT NULL,
	Bill INT NOT NULL
);