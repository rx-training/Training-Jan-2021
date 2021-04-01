--Day8

--What to Learn

--Indexes
--Clustered Indexes
--NonClustered Indexes

--Practice Exercises:
--Do the hands on the explained in video

CREATE TABLE Indexing (
	Id				INT , 
	Name			VARCHAR(10) , 
	Dob				DATE ,
	Coins			MONEY 
) ;
INSERT INTO Indexing VALUES
	( 1, 'Anupama' , '1999-01-22' , 45 ) ,
	( 2, 'Balgopala' , '1998-01-22' , 394 ) , 
	( 3, 'Christie' , '1939-01-22' , 235 ) , 
	( 4, 'Demaksha' , '1999-11-22' , 434 ) , 
	( 5, 'Einmani' , '1999-01-23' , 74 ) ;
SELECT * FROM Indexing ;



-- Create Index 
CREATE CLUSTERED INDEX Index_Id ON
	Indexing(Id) ;
GO
SELECT * FROM Indexing WITH( INDEX(Index_Id) ) ;

-- drop index if found
IF EXISTS ( Select name FROM sys.indexes WHERE name=N'Index_Id' )
	DROP INDEX Index_Id ON Indexing ;
ELSE 
	PRINT 'Not found'
GO

-- alter index
ALTER INDEX Index_Id ON 


-- create non-clustered index
CREATE NONCLUSTERED INDEX Index_Name ON 
	Indexing(Name) ;
GO

SELECT * FROM Indexing WITH (INDEX( Index_Name )) ;
GO

--UNIQUE index
CREATE UNIQUE INDEX Index_Coins ON
	Indexing( Coins ) ;
GO

-- With included columns
CREATE NONCLUSTERED INDEX Index_Name_Dob ON
	Indexing( Name , Dob DESC) ;
GO

SELECT * FROM Indexing WITH( INDEX( Index_Name_Dob) );





-------------------- reference code
SELECT 
    t.NAME AS TableName,
    p.rows AS RowCounts,
    SUM(a.total_pages) AS TotalPages, 
    SUM(a.used_pages) AS UsedPages, 
    (SUM(a.total_pages) - SUM(a.used_pages)) AS UnusedPages
FROM 
    sys.tables t
INNER JOIN      
    sys.indexes i ON t.OBJECT_ID = i.object_id
INNER JOIN 
    sys.partitions p ON i.object_id = p.OBJECT_ID AND i.index_id = p.index_id
INNER JOIN 
    sys.allocation_units a ON p.partition_id = a.container_id
WHERE 
    t.NAME = 'Customers' 
    AND t.is_ms_shipped = 0
    AND i.OBJECT_ID > 255 
GROUP BY 
    t.Name, p.Rows
ORDER BY 
    t.Name