CREATE TABLE JobHistory 
(
EmployeeId int NOT NULL,
StartDate date NOT NULL,
End_Date date NOT NULL CHECK (End_Date LIKE('[0-3][0-9]/[0-3][0-9]/[0-3][0-9][0-9][0-9]')),
Job_Id  int NOT NULL,
Department_Id  int NOT NULL
)

DROP TABLE JobHistory