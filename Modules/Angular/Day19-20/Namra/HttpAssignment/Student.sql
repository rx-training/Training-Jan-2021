CREATE TABLE Student
(
	StudentId INT NOT NULL PRIMARY KEY IDENTITY(1,1),
	StudentFirstName VARCHAR(100) NOT NULL,
	StudentMiddleName VARCHAR(100) NOT NULL,
	StudentLastName VARCHAR(100) NOT NULL,
	Address VARCHAR(300) NOT NULL,
	Contact VARCHAR(10) NOT NULL,
	Marks INT NOT NULL
);

INSERT INTO Student(StudentFirstName, StudentMiddleName, StudentLastName, Address, Contact, Marks) Values
					('Namra','Jitendra','Patel','Unjha','9737134534',95),
					('Aksh','Jaydeep','Patel','Unjha','9737134557',35),
					('Suchi','Jitendra','Patel','Unjha','9737154534',15),
					('Babu','Kuber','Patel','Unjha','9755134534',5),
					('Asha','Jitendra','Patel','Unjha','8737134534',95),
					('Om','Jaydeep','Patel','Unjha','9737134588',85),
					('Jitndra','Babulal','Patel','Unjha','9737134530',65),
					('Romal','Xitij','Patel','Unjha','9737134004',45),
					('Varish','Jay','Patel','Unjha','9737034534',56),
					('Jay','Vijay','Patel','Unjha','9735134534',95);

