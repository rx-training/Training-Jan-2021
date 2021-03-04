CREATE DATABASE Practicedb;

CREATE TABLE Countries
(
	CountryId int,
	RegionId int,
	CONSTRAINT pkCountries PRIMARY KEY(CountryId, RegionId),
	CountryName varchar(30) NOT NULL CONSTRAINT chk_countryname CHECK(CountryName IN('India','Italy','China'))  
);

INSERT INTO Countries (CountryId,RegionId,CountryName) VALUES (1,2,'India');

INSERT INTO Countries (CountryId,RegionId,CountryName) VALUES (2,2,'China');

INSERT INTO Countries (CountryId,RegionId,CountryName) VALUES (2,1,'England');

SELECT * FROM Countries;