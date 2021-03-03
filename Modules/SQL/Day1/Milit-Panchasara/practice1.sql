USE sqlTraining;

CREATE TABLE Countries (
	CountryID int NOT NULL,
	CountryName varchar(25) NOT NULL,
	RegionID int NOT NULL,
	CONSTRAINT chkCountryName CHECK(CountryName IN ('Italy','India','China')),
	CONSTRAINT unIDs UNIQUE(CountryID,RegionID)
);
