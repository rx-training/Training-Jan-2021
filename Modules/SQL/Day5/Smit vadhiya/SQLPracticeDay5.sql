SELECT * FROM HumanResources.Employee
SELECT * FROM HumanResources.EmployeePayHistory

SELECT E.BusinessEntityID,E.JobTitle,P.PayFrequency,P.Rate 
FROM HumanResources.Employee E  JOIN HumanResources.EmployeePayHistory P
ON E.BusinessEntityID = P.BusinessEntityID

SELECT * FROM Sales.SpecialOfferProduct
SELECT * FROM Sales.SpecialOffer

SELECT p1.Description ,p.ProductID
FROM Sales.SpecialOfferProduct P LEFT OUTER JOIN Sales.SpecialOffer P1 ON P.SpecialOfferID = P1.SpecialOfferID


SELECT p1.Description ,p.ProductID
FROM Sales.SpecialOfferProduct P RIGHT OUTER JOIN Sales.SpecialOffer P1 ON P.SpecialOfferID = P1.SpecialOfferID