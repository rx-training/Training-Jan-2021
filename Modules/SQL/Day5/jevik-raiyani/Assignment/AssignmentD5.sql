--Get difference between JOINING_DATE and INCENTIVE_DATE from employee and incentives table

SELECT e.Emp_ID,DATEDIFF(DAY,e.Joining_Date,i.Incentive_Date)  'diffendence'
FROM Employees e JOIN Incentives i 
ON e.Emp_ID = i.Emp_Ref_ID

--Select first_name, incentive amount from employee and incentives table for those employees 
--who have incentives and incentive amount greater than 3000

SELECT e.First_Name, i.Incentive_Amount
FROM Employees e JOIN Incentives i 
ON e.Emp_ID = i.Emp_Ref_ID WHERE Incentive_Amount > 3000

--Select first_name, incentive amount from employee and incentives table for 
--all employees even if they didn’t get incentives.

SELECT e.First_Name, i.Incentive_Amount
FROM Employees e LEFT OUTER JOIN Incentives i 
ON e.Emp_ID = i.Emp_Ref_ID 
--OR
SELECT e.First_Name+e.Last_Name, SUM(i.Incentive_Amount)
FROM Employees e LEFT OUTER JOIN Incentives i 
ON e.Emp_ID = i.Emp_Ref_ID GROUP BY First_Name,Last_Name

--Select EmployeeName, ManagerName from the employee table.
SELECT emp.First_Name ,man.First_Name
FROM Employees emp , Employees man
WHERE emp.Manager_ID =man.Emp_ID

--Select first_name, incentive amount from employee and incentives table for all employees 
--even if they didn’t get incentives and set incentive amount as 0 for those employees who didn’t get incentives.

SELECT e.First_Name,
CASE
WHEN i.Incentive_Amount IS NULL THEN 0
ELSE i.Incentive_Amount
END 
FROM Employees e LEFT JOIN Incentives i
ON e.Emp_ID = i.Emp_Ref_ID

SELECT e.First_Name, ISNULL(i.Incentive_Amount,0)
FROM Employees e LEFT JOIN Incentives i
ON e.Emp_ID = i.Emp_Ref_ID

SELECT e.First_Name,
CASE
WHEN  SUM(i.Incentive_Amount) IS NULL THEN 0
ELSE SUM( i.Incentive_Amount)
END 
FROM Employees e LEFT JOIN Incentives i
ON e.Emp_ID = i.Emp_Ref_ID GROUP BY First_Name

SELECT e.First_Name,ISNULL(SUM(i.Incentive_Amount),0)
FROM Employees e LEFT JOIN Incentives i
ON e.Emp_ID = i.Emp_Ref_ID GROUP BY First_Name



--/.....................
--1. Find the names of all salespeople who have ever worked for the company at any dealership.

SELECT s.[Name]
FROM Salesperson s INNER JOIN  Dealership d
ON s.[Name] =d.DealerName

--List the Name, Street Address, and City of each customer who lives in Ahmedabad.

SELECT [Name],[Address],City FROM Customer WHERE City='Ahmedabad'
	
--List the VIN, make, model, year, and mileage of all cars in the inventory of the dealership named "Hero Honda Car World".

SELECT c.Vin, c.Make,c.[Year],c.Mileage FROM  Cars c INNER JOIN Inventory i
ON c.Vin = i.Vin
INNER JOIN Dealership d
ON d.Dealershipid=i.Dealershipid  
WHERE d.DealerName = 'Hero Honda Car World'

--4. List names of all customers who have ever bought cars from the dealership named "Concept Hyundai".

SELECT c.* 
FROM  Sale s INNER JOIN Customer c
ON s.Customerid = c.Customerid
INNER JOIN Dealership d
ON d.Dealershipid=s.Dealershipid  
WHERE d.DealerName = 'Concept Hyundai'

--5. For each car in the inventory of any dealership, list the VIN, make, model, and year of the car,
--along with the name, city, and state of the dealership whose inventory contains the car.

SELECT c.Vin, c.Make,c.Model,c.[Year],d.DealerName,d.City,d.State
FROM  Cars c INNER JOIN Inventory i
ON c.Vin = i.Vin
INNER JOIN Dealership d
ON d.Dealershipid=i.Dealershipid  

--6. Find the names of all salespeople who are managed by a salesperson named "Adam Smith".

SELECT sname.[Name] 
FROM Reportsto r INNER JOIN Salesperson s
ON r.Managingsalespersonid = s.Salespersonid
INNER JOIN  Salesperson sname
ON  r.Salespersonid = sname.Salespersonid
WHERE s.[Name] = 'Adam smith'

--7. Find the names of all salespeople who do not have a manager.

SELECT  S.[Name]
FROM Reportsto r  INNER JOIN  Salesperson s
ON  r.Salespersonid = s.Salespersonid
WHERE r.Managingsalespersonid IS NULL

--8. Find the total number of dealerships.
SELECT COUNT(Dealershipid) FROM Dealership

--9. List the VIN, year, and mileage of all "Toyota Camrys" in the inventory of the dealership named "Toyota Performance".
--(Note that a "Toyota Camry" is indicated by the make being "Toyota" and the model being "Camry".)

SELECT c.Vin,c.[Year],c.Mileage
FROM  Cars c INNER JOIN Inventory i
ON c.Vin = i.Vin
INNER JOIN Dealership d
ON d.Dealershipid=i.Dealershipid  
WHERE c.Make='Toyota' AND  c.Model= 'Camry' AND d.DealerName ='Toyota Performance'

--10. Find the name of all customers who bought a car at a dealership located in a state other than
--the state in which they live.

SELECT c.[Name] 
FROM Sale s INNER JOIN Customer c
ON s.Customerid = c.Customerid
INNER JOIN Dealership d
ON s.Dealershipid =d.Dealershipid
WHERE c.City != d.City

--11. Find the name of the salesperson that made the largest base salary working at the dealership 
--named "Ferrari Sales" during January 2010.

SELECT Max(s.name)
FROM Worksat w
INNER JOIN Salesperson s 
ON w.Salespersonid = s.Salespersonid
INNER JOIN Dealership d
ON d.Dealershipid = w.Dealershipid
INNER JOIN Sale sa
on w.Salespersonid = sa.Salespersonid
WHERE d.DealerName ='Ferrari Sales'  AND sa.Saledate>='01-01-2000' AND sa.Saledate<='31-01-2010'
GROUP BY w.Salespersonid


--12. List the name, street address, city, and state of any customer who has bought more than two cars from 
--all dealerships combined since January 1, 2010.
SELECT s.Customerid,c.[Name],c.[Address],[c.State]
FROM Sale s
INNER JOIN Customer c 
ON s.Customerid = s.Customerid
JOIN Dealership d
ON s.Dealershipid = D.dealershipid
GROUP BY s.Customerid ,c.[Name],c.[Address],[c.State]
HAVING COUNT(s.Customerid)> 2

--13. List the name, salesperson ID, and total sales amount for each salesperson who has ever sold at least one car.
--The total sales amount for a salesperson is the sum of the sale prices of all cars ever sold by that salesperson.
SELECT s.Salespersonid,sp.[Name],SUM(s.Saleprice) 'Total Sales'
FROM Sale s
INNER JOIN Salesperson sp 
ON s.Salespersonid = sp.Salespersonid
GROUP BY s.salespersonid ,sp.[Name]
HAVING COUNT(s.Salespersonid)>= 1

--14. Find the names of all customers who bought cars during 2010 who were also salespeople during 2010.
--For the purpose of this query, assume that no two people have the same name.
SELECT c.[Name] 'BUYER', sp.[Name] 'Saler'
FROM Sale s
INNER JOIN Customer c 
ON s.Customerid = c.customerid
INNER JOIN Salesperson sp
ON s.Salespersonid = sp.Salespersonid
WHERE Saledate='2002-12-12'

--15. Find the name and salesperson ID of the salesperson who sold the most cars for the company 
--at dealerships located in Gujarat between March 1, 2010 and March 31, 2010.
SELECT NAME,SalePersonID FROM 
(
SELECT sp.[Name] 'NAME', RANK() OVER (ORDER BY COUNT(s.Salespersonid)DESC) 'rank',s.Salespersonid 'SalePersonID'
FROM Sale s
INNER JOIN Salesperson sp 
ON s.Salespersonid = sp.Salespersonid
INNER JOIN Dealership d
ON s.Dealershipid = d.Dealershipid
WHERE d.[State]='Gujarat' AND s.Saledate BETWEEN '2010-03-01' AND '2010-03-31'
GROUP BY s.Salespersonid, sp.[Name]
) newtab
WHERE rank=1


--16. Calculate the payroll for the month of March 2010.
--	* The payroll consists of the name, salesperson ID, and gross pay for each salesperson who worked that month.
--  * The gross pay is calculated as the base salary at each dealership employing the salesperson that month,
--	along with the total commission for the salesperson that month.
--  * The total commission for a salesperson in a month is calculated as 5% of the profit made on
--	all cars sold by the salesperson that month.
--  * The profit made on a car is the difference between the sale price and the invoice price of the car.
--	(Assume, that cars are never sold for less than the invoice price.)

    
SELECT sp.salespersonid, sp.name,
SUM(ISNULL(w.basesalaryformonth, 0) + ISNULL(((c.askprice - c.invoiceprice) * 5 / 100), 0)) [Gross Pay]
FROM salesperson sp
LEFT JOIN sale s ON s.salespersonid = sp.salespersonid
LEFT JOIN Cars c ON c.vin = s.vin
RIGHT JOIN worksat w ON w.salespersonid = sp.salespersonid
WHERE DATENAME(MM, s.saledate) = 'March' AND YEAR(s.saledate) = 2010
GROUP BY sp.salespersonid, sp.name
ORDER BY sp.salespersonid;


--SELECT * FROM customer
--SELECT * FROM Cars

--SELECT * FROM dealership
--SELECT * FROM inventory
--SELECT * FROM reportsto
--SELECT * FROM sale
--SELECT * FROM salesperson
--SELECT * FROM worksat

----USE day5
----CREATE DATABASE day5
----DROP TABLE Incentives

--CREATE TABLE Cars
--(carid int  NOT NULL ,
--vin int CONSTRAINT pkVin PRIMARY KEY ,
--make varchar(20) NOT NULL,
--model varchar(20) NOT NULL ,
--[year] char(4) NOT NULL,
--mileage float NOT NULL,
--askprice float NOT NULL,
--invoiceprice float NOT NULL
--) 
--CREATE TABLE dealership 
--(dealershipid int CONSTRAINT pkdealershipid PRIMARY KEY ,
--dealerName varchar(20) NOT NULL,
--address  varchar(30) NOT NULL,
--city  varchar(30) NOT NULL,
--state  varchar(30) NOT NULL)

--CREATE TABLE salesperson 
--(salespersonid int CONSTRAINT pksalespersonid PRIMARY KEY,
--name  varchar(20) NOT NULL)

--CREATE TABLE customer (
--customerid int  CONSTRAINT pkcusid PRIMARY KEY,
--name varchar(20) NOT NULL,
--address varchar(20) NOT NULL,
--city varchar(20) NOT NULL,
--state varchar(20) NOT NULL)

--CREATE TABLE reportsto (
--reportstoid int  CONSTRAINT pkreportid PRIMARY KEY,
--salespersonid int CONSTRAINT fksalperid FOREIGN KEY REFERENCES  salesperson(salespersonid),
--managingsalespersonid int CONSTRAINT fkmansalperid FOREIGN KEY REFERENCES  salesperson(salespersonid))

--CREATE TABLE  worksat (
--worksatid int  CONSTRAINT pkworksatid PRIMARY KEY, 
--salespersonid int CONSTRAINT fksaerid FOREIGN KEY REFERENCES  salesperson(salespersonid),
--dealershipid int CONSTRAINT fkdeaid FOREIGN KEY REFERENCES  dealership(dealershipid),
--monthworked int ,
--basesalaryformonth int)

--CREATE TABLE inventory (
--inventoryid int  CONSTRAINT pkwoatid PRIMARY KEY,
--vin int CONSTRAINT fkserid FOREIGN KEY REFERENCES  Cars(vin)
--, dealershipid int CONSTRAINT fdeaid FOREIGN KEY REFERENCES  dealership(dealershipid) )

--CREATE TABLE  sale 
--(saleid int  CONSTRAINT pkwsatid PRIMARY KEY,
--vin int CONSTRAINT fserid FOREIGN KEY REFERENCES  Cars(vin),
--customerid int CONSTRAINT fsrid FOREIGN KEY REFERENCES  customer(customerid), 
--salespersonid int CONSTRAINT fsaerid FOREIGN KEY REFERENCES  salesperson(salespersonid),
--dealershipid int CONSTRAINT faid FOREIGN KEY REFERENCES  dealership(dealershipid),
--saleprice float,
--saledate date)