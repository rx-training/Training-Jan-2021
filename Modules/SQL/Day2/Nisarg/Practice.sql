
use AdventureWorks2012;
/*
1)CREATE TABLE Employee(
	Id int primary key,
	Name varchar(20)
);
*/
/*
2)INSERT INTO Employee(Id,Name) VALUES(01,'John'),
									(02,'Maxx'),
									(03,'Saint')

SELECT * FROM Employee;
	*/

UPDATE Person.Address
SET ModifiedDate=GETDATE();

SELECT * FROM Person.Address;
