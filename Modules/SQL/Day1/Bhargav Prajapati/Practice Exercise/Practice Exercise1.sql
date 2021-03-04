CREATE DATABASE Countrydb
CREATE TABLE Country_Details
(
 Country_Id int,
 Region_Id int,
 CONSTRAINT pkContry_Details PRIMARY KEY(Country_id,Region_id),
 Country_Name varchar(30) Not Null CONSTRAINT chkCountry_name CHECK(Country_Name IN('Italy','India','China'))
)
INSERT  INTO  Country_Details (Country_Id,Region_Id,Country_Name) VALUES ('1','2','India');
INSERT  INTO  Country_Details (Country_Id,Region_Id,Country_Name) VALUES ('3','4','Italy');
INSERT  INTO  Country_Details (Country_Id,Region_Id,Country_Name) VALUES ('3','5','China');
/*INSERT  INTO  Country_Details (Country_Id,Region_Id,Country_Name) VALUES ('3','5','India');*/
/*INSERT  INTO  Country_Details (Country_Id,Region_Id,Country_Name) VALUES ('2','80','JAPAN');*/
/*DROP TABLE Country_Details*/

