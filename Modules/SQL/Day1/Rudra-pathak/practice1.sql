USE DayOne;

CREATE TABLE Countries
(
	CountryId INT NOT NULL,
	RegionId INT NOT NULL,
	CountryName VARCHAR(50)CONSTRAINT chkCountryName CHECK(CountryName IN('India','Italy','China')),
	CONSTRAINT pkCountries PRIMARY KEY(CountryId,RegionId)
);

--DROP TABLE Countries;