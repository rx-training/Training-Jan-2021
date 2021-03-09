CREATE DATABASE Car_Sales_Db


CREATE TABLE Employee 
(
Emp_Id int NOT NULL IDENTITY (001,1),
Emp_Name varchar(30) NOT NULL ,
Emp_Address varchar(100) NOT NULL,
Emp_Email varchar(80) NOT NULL,
Emp_Contact int NOT NULL 
)

CREATE TABLE Account
(
Account_ID int NOT NULL IDENTITY PRIMARY KEY,
Emp_Id int NOT NULL FOREIGN KEY REFERENCES Employee(Emp_Id),
Commission int NOT NULL ,
Total_Sales int NOT NULL,
Salary money not NULL,
)

CREATE TABLE Inventory
( 
Model_Id int NOT NULL PRIMARY KEY,
Model_Name varchar(30) NOT NULL ,
Color varchar(20) NOT NULL,
Total_Seat int NoT NULL,
Total_Gear int NOT NULL,
Top_Speed int NOT NULL,
Mileage int NOT NULL,
)



CREATE TABLE Sales
(
Total_monthly_sales int NOT NULL ,
Total_Quarterly_sales int NOT NULL,
Total_sales int NOT NULL,
Date_of_sales date NOT NULL,
Model_Id int NOT NULL FOREIGN KEY REFERENCES Inventory(Model_Id)
)
