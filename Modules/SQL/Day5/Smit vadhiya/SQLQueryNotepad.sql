/*
=========================================================================================
DATABASE :
=========================================================================================

Assume a hypothetical company that manages multiple automobile dealerships throughout INDIA.

Following are the data requirements of our company :

*A "car" is described by a vehicle identification number (VIN), make (e.g., Toyota), model (e.g., Prius), 
year, mileage, and two prices: the asking price (how much the dealership would like to sell the car for) 
and the invoice price (how much the dealership paid for the car). This information is maintained for every
car currently in any dealership's inventory, and also for every car that has ever been sold by one of the dealerships. 

* A dealership is a single location where the company sells cars. The company manages many dealerships, 
each one being described by a unique dealership ID, a name (e.g., Honda Sales, Yamaha World, Concept Hyundai etc.),
street address, city, and state.

* The company employs a number of salespeople. Each salesperson is assigned a unique salesperson ID. 

* Salespeople work at one or more dealerships each month, and are paid a monthly base salary at each, 
regardless of how many cars they sell. Additionally, they are paid a commission on each car they sell. 

* Information is maintained about all salespeople who ever worked for any dealership.

* The following information is kept about each customer : ID, name, street address, city, and state.

* Salespeople are arranged in a strict hierarchy, with each salesperson reporting to a "managing salesperson."

* It is necessary to keep track of the inventory of cars currently available at each dealership. Of course,
a particular car can only be in the inventory of one dealership at any given time.

* A long-term record of all car sales is maintained. For each sale, the company tracks which car was bought,
which customer bought it, which salesperson sold it, which dealership it was sold by, at which price it was sold for,
and on which date it was sold.

   i. car (carid, vin, make, model, year, mileage, askprice, invoiceprice)
  ii. dealership (dealershipid, name, address, city, state)
 iii. salesperson (salespersonid, name)
  iv. customer (customerid, name, address, city, state)
   v. reportsto (reportstoid, salespersonid, managingsalespersonid)
  vi. worksat (worksatid, salespersonid, dealershipid, monthworked, basesalaryformonth)
 vii. inventory (inventoryid, vin, dealershipid)
viii. sale (saleid, vin, customerid, salespersonid, dealershipid, saleprice, saledate)

=========================================================================================
QUERIES :
=========================================================================================
*/

------TABLES-------


/*1. Find the names of all salespeople who have ever worked for the company at any dealership.*/

SELECT Name from SalesPersons

/*2. List the Name, Street Address, and City of each customer who lives in Ahmedabad.*/

SELECT Name, Address, City FROM Customers WHERE City = 'Ahmedabad'

/*3. List the VIN, make, model, year, and mileage of all cars in the inventory of the dealership 
named "Hero Honda Car World".*/


	SELECT c.VIN, Make, Modal, Year, Mileage, Name FROM
		Cars c JOIN Inventories i ON c.VIN = i.VIN JOIN Dealers d on i.DealerShipId = d.DealerShipId 
		where d.Name = 'Hero Honda Car World'


/*4. List names of all customers who have ever bought cars from the dealership named "Concept Hyundai".*/
	
	SELECT c.Name,d.Name FROM
		Sales s JOIN Dealers d ON s.DealershipId = d.DealershipId JOIN Customers c ON s.CustomerId=c.CustomerId 
		WHERE d.Name = 'Concept Hyundai'



/*5. For each car in the inventory of any dealership, list the VIN, make, model, and year of the car,
along with the name, city, and state of the dealership whose inventory contains the car.*/
	
	SELECT c.VIN, c.Make, c.Modal, c.Year, d.Name, d.City, d.State FROM
	Cars c JOIN Inventories i ON c.VIN = i.VIN JOIN Dealers d ON i.DealershipId = d.DealershipId


/*6. Find the names of all salespeople who are managed by a salesperson named "Adam Smith".*/


	SELECT sp2.Name 'EmployeeName', sp.Name 'ManagerName'  
	FROM ReportsTo s JOIN SalesPersons sp on s.ManagingSalesPersonId = sp.SalesPersonId AND sp.Name = 'Adam Smith'
	JOIN SalesPersons sp2 ON s.SalesPersonId = sp2.SalesPersonId

/*7. Find the names of all salespeople who do not have a manager.*/

	SELECT sp.Name FROM ReportsTo s JOIN SalesPersons sp ON s.SalesPersonId = sp.SalesPersonId AND s.ManagingSalesPersonId IS NULL 


/*8. Find the total number of dealerships.*/

SELECT COUNT(DealershipId) AS 'total number of dealerships' FROM Dealers

/*9. List the VIN, year, and mileage of all "Toyota Camrys" in the inventory of the dealership named "Toyota Performance".
(Note that a "Toyota Camry" is indicated by the make being "Toyota" and the model being "Camry".)*/


	select c.VIN , c.Year, c.Mileage FROM 
	Inventories i JOIN Cars c ON i.VIN = c.VIN AND c.Make = 'Toyota' AND c.Modal = 'Camry' 
	JOIN Dealers d ON i.DealershipId = d.DealershipId AND d.Name = 'Toyota Performance'

	select c.VIN , c.Year, c.Mileage FROM 
	Inventories i JOIN Cars c ON i.VIN = c.VIN 
	JOIN Dealers d ON i.DealershipId = d.DealershipId 
	WHERE c.Make = 'Toyota' AND c.Modal = 'Camry' AND d.Name = 'Toyota Performance'

/*10. Find the name of all customers who bought a car at a dealership located in a state other than the state in which they live.*/

	SELECT c.Name FROM 
	Sales s JOIN Customers c ON s.CustomerId = c.CustomerId JOIN Dealers d ON s.DealershipId = d.DealershipId  
	WHERE c.State != d.State

/*11. Find the name of the salesperson that made the largest base salary working at the dealership named
"Ferrari Sales" during January 2010.*/	
	

	SELECT MAX(w.BaseSalaryForMonth) FROM 
	WorkSets w JOIN SalesPersons s ON w.SelsePersonId = s.SalesPersonId JOIN Dealers d ON w.DealershipId = d.DealershipId


/*12. List the name, street address, city, and state of any customer who has bought more than two cars from all
dealerships combined since January 1, 2010.*/

SELECT CustomerId ,Name,Address,City,State FROM 
	Customers WHERE CustomerId = (SELECT CustomerId FROM Sales GROUP BY CustomerId HAVING COUNT(CustomerId) > 1) 


/*13. List the name, salesperson ID, and total sales amount for each salesperson who has ever sold at least one car.
The total sales amount for a salesperson is the sum of the sale prices of all cars ever sold by that salesperson.*/


SELECT s.SalesPersonId,s.Name,t.TotalSalePrice FROM 
(SELECT SalesPersonId,SUM(SalePrice) AS 'TotalSalePrice' FROM Sales GROUP BY SalesPersonId) AS t JOIN 
SalesPersons s ON t.SalesPersonId = s.SalesPersonId

/*14. Find the names of all customers who bought cars during 2010 who were also salespeople during 2010. For the
purpose of this query, assume that no two people have the same name.*/

SELECT CoustomerName FROM
(
SELECT t.*,c.Name 'CoustomerName',s.Name 'SalsPersonName' FROM
(SELECT CustomerId,SalesPersonId FROM Sales WHERE DATEPART(YYYY,SaleDate) = 2010) AS t JOIN 
Customers c ON t.CustomerId = c.CustomerId JOIN 
SalesPersons s ON t.SalesPersonId =s.SalesPersonId
) as tbl
WHERE  CoustomerName = SalsPersonName

/*15. Find the name and salesperson ID of the salesperson who sold the most cars for the company at dealerships 
located in Gujarat between March 1, 2010 and March 31, 2010.*/



/*16. Calculate the payroll for the month of March 2010.
		* The payroll consists of the name, salesperson ID, and gross pay for 
			each salesperson who worked that month.

        * The gross pay is calculated as the base salary at each dealership employing the salesperson that month, 
			along with the total commission for the salesperson that month.

        * The total commission for a salesperson in a month is calculated as 5% of the profit made on all cars sold 
			by the salesperson that month.

        * The profit made on a car is the difference between the sale price and the invoice price of the car.
			(Assume, that cars are never sold for less than the invoice price.)*/
			