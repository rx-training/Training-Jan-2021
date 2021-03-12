/*** Day 8 Practice Exercise ***/

--CLUSTERED TABLE INDEX

CREATE TABLE TestTable  
(TestCol1 int NOT NULL,  
TestCol2 nchar(10) NULL,  
TestCol3 nvarchar(50) NULL);

CREATE CLUSTERED INDEX IX_TestTable_TestCol1   
ON dbo.TestTable (TestCol1);

SELECT * FROM TestTable;

-- NON CLUSTRED INDEX

CREATE NONCLUSTERED INDEX IX_TestTable_TestCol3
ON dbo.TestTable (TestCol3);

-- UNIQUE INDEXES

IF EXISTS (SELECT name from sys.indexes  
           WHERE name = 'NonClusteredIndex-20210312-140201')   
   DROP INDEX [NonClusteredIndex-20210312-140201] ON TestTable;

CREATE UNIQUE INDEX IX_UNIQUE_TestTable_TestCol2   
   ON TestTable(TestCol2); 

-- FILTERED INDEXES

CREATE NONCLUSTERED INDEX IX_FILTERED_TestCol3  
    ON TestTable (TestCol3)  
    WHERE TestCol3 IS NOT NULL ;

-- WITH INCLUDED COLUMNS

CREATE NONCLUSTERED INDEX IX_INCLUDED_TestCol2  
ON TestTable (TestCol2)
INCLUDE (TestCol3);

-- DELETE INDEX

DROP INDEX IX_INCLUDED_TestCol2  
    ON TestTable;  

-- MODIFY

CREATE NONCLUSTERED INDEX IX_TestTable_TestCol2
    ON TestTable(TestCol2)
    WITH (FILLFACTOR = 80,
        PAD_INDEX = ON,
        DROP_EXISTING = ON)
;

ALTER INDEX IX_TestTable_TestCol2 ON
    TestTable
SET (
    STATISTICS_NORECOMPUTE = ON,
    IGNORE_DUP_KEY = ON,
    ALLOW_PAGE_LOCKS = ON
    )
;

-- DISABLE

ALTER INDEX IX_TestTable_TestCol1 ON TestTable
DISABLE; 

-- ENABLE

ALTER INDEX IX_TestTable_TestCol1 ON TestTable
REBUILD;

-- RENAME

EXEC sp_rename N'IX_TestTable_TestCol1', N'IX_TestTable_TestCol1_RENAMED', N'INDEX';   
