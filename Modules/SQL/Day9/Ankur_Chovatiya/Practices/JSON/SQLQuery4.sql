DECLARE @jsonVariable NVARCHAR(MAX);

SET @jsonVariable = N'[
  {
    "Order": {  
      "Number":"SO43659",  
      "Date":"2011-05-31T00:00:00"  
    },  
    "AccountNumber":"AW29825",  
    "Item": {  
      "Price":2024.9940,  
      "Quantity":1  
    }  
  },  
  {  
    "Order": {  
      "Number":"SO43661",  
      "Date":"2011-06-01T00:00:00"  
    },  
    "AccountNumber":"AW73565",  
    "Item": {  
      "Price":2024.9940,  
      "Quantity":3  
    }  
  }
]';

-- INSERT INTO <sampleTable>  
SELECT SalesOrderJsonData.*
FROM OPENJSON (@jsonVariable, N'$')
  WITH (
    NUMBER VARCHAR(200) N'$.Order.Number',
    DATE DATETIME N'$.Order.Date',
    CUSTOMER VARCHAR(200) N'$.AccountNumber',
    QUANTITY INT N'$.Item.Quantity'
  ) AS SalesOrderJsonData;

SELECT * FROM SalesOrderJsonData; -- NOT CREATED OBJECT

CREATE TABLE SalesOrderJsonData 
		(
		NUMBER VARCHAR(200),
		DATE DATETIME , 
		CUSTOMER VARCHAR(200),
		QUANTITY INT 
		) 