SELECT SalesOrderID , SUM(LineTotal) Sum_of_line_Total
FROM Sales.SalesOrderDetail
GROUP BY  ROLLUP (SalesOrderID , SalesOrderDetailID) -- ROLL UP DO SOME OF AGGRETE FIELD
HAVING SUM(LineTotal) > 100000.00
ORDER BY SalesOrderID -- By default it's orderd by ID



SELECT *
FROM Sales.SalesOrderDetail