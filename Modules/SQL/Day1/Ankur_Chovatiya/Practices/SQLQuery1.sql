CREATE TABLE Countries 
(
CountryId int NOT NULL,
CountryName Char(20) NOT NULL CHECK (CountryName IN ( 'Italy' , 'India' , 'China')), 
RegionId varchar(8) NOT NULL,
CONSTRAINT Uk_countries UNIQUE(CountryId , RegionId ),
)

