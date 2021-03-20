USE DaySixAssignment

CREATE TABLE Employees_1(
	EmployeeID INT NOT NULL PRIMARY KEY,
	FirstName varchar(20) NOT NULL,
	LastName varchar(25) NOT NULL,
	Salary MONEY NOT NULL,
	JoiningDate DATETIME NOT NULL,
	Department VARCHAR(30) NOT NULL,
	ManagerID INT DEFAULT NULL
)


CREATE TABLE Incentives(
	Employee_Ref_ID INT CONSTRAINT fkEmployeeId_1 FOREIGN KEY REFERENCES dbo.Employees_1(EmployeeID),
	IncentiveDate Date NOT NULL,
	IncentiveAmount MONEY DEFAULT NULL
)

--Select employee details from employee table if data exists in incentive table ?
SELECT * FROM Employees_1 WHERE EXISTS (SELECT * FROM Incentives) 

--Find Salary of the employee whose salary is more than Roy Salary
SELECT FirstName, Salary FROM Employees_1 WHERE Salary > (SELECT Salary FROM Employees_1 WHERE FirstName = 'Roy')

--Create a view to select FirstName,LastName,Salary,JoiningDate,IncentiveDate and IncentiveAmount
SELECT * FROM Employees_1
SELECT * FROM Incentives

CREATE VIEW tbl1 AS
	SELECT e.FirstName, e.LastName, e.Salary, e.JoiningDate, i.IncentiveDate, i.IncentiveAmount FROM Employees_1 e FULL OUTER JOIN Incentives i ON e.EmployeeID=i.Employee_Ref_ID

SELECT * FROM tbl1

--Create a view to select Select first_name, incentive amount from employee and incentives table for those employees who have incentives and incentive amount greater than 3000
CREATE VIEW tbl2 AS
	SELECT (e.FirstName+' '+e.LastName) AS Name, i.IncentiveAmount FROM Employees_1 e JOIN Incentives i ON e.EmployeeID=i.Employee_Ref_ID WHERE i.IncentiveAmount>3000

SELECT * FROM tbl2

CREATE TABLE  Employees (
    EmployeeID decimal(6,0) NOT NULL DEFAULT '0',
	FirstName varchar(20) DEFAULT NULL,
	LastName varchar(25) NOT NULL,
	Email varchar(25) NOT NULL,
	PhoneNumber varchar(20) DEFAULT NULL,
	HireDate date NOT NULL,
	JobId varchar(10) NOT NULL,
	Salary decimal(8,2) DEFAULT NULL,
	CommissionPct decimal(2,2) DEFAULT NULL,
	ManagerID decimal(6,0) DEFAULT NULL,
	DepartmentID decimal(4,0) DEFAULT NULL,
	CONSTRAINT pkEmployeeID PRIMARY KEY (EmployeeID),
	CONSTRAINT ukEmail UNIQUE  (Email),
 )

--
-- Dumping data for table `employees`
--

INSERT INTO Employees (EmployeeID,FirstName,LastName , Email, PhoneNumber, HireDate, JobId, Salary, CommissionPct, ManagerID, DepartmentID) VALUES
('100', 'Steven', 'King', 'SKING', '515.123.4567', '1987-06-17', 'AD_PRES', '24000.00', '0.00', '0', '90'),
('101', 'Neena', 'Kochhar', 'NKOCHHAR', '515.123.4568', '1987-06-18', 'AD_VP', '17000.00', '0.00', '100', '90'),
('102', 'Lex', 'De Haan', 'LDEHAAN', '515.123.4569', '1987-06-19', 'AD_VP', '17000.00', '0.00', '100', '90'),
('103', 'Alexander', 'Hunold', 'AHUNOLD', '590.423.4567', '1987-06-20', 'IT_PROG', '9000.00', '0.00', '102', '60'),
('104', 'Bruce', 'Ernst', 'BERNST', '590.423.4568', '1987-06-21', 'IT_PROG', '6000.00', '0.00', '103', '60'),
('105', 'David', 'Austin', 'DAUSTIN', '590.423.4569', '1987-06-22', 'IT_PROG', '4800.00', '0.00', '103', '60'),
('106', 'Valli', 'Pataballa', 'VPATABAL', '590.423.4560', '1987-06-23', 'IT_PROG', '4800.00', '0.00', '103', '60'),
('107', 'Diana', 'Lorentz', 'DLORENTZ', '590.423.5567', '1987-06-24', 'IT_PROG', '4200.00', '0.00', '103', '60'),
('108', 'Nancy', 'Greenberg', 'NGREENBE', '515.124.4569', '1987-06-25', 'FI_MGR', '12000.00', '0.00', '101', '100'),
('109', 'Daniel', 'Faviet', 'DFAVIET', '515.124.4169', '1987-06-26', 'FI_ACCOUNT', '9000.00', '0.00', '108', '100'),
('110', 'John', 'Chen', 'JCHEN', '515.124.4269', '1987-06-27', 'FI_ACCOUNT', '8200.00', '0.00', '108', '100'),
('111', 'Ismael', 'Sciarra', 'ISCIARRA', '515.124.4369', '1987-06-28', 'FI_ACCOUNT', '7700.00', '0.00', '108', '100'),
('112', 'Jose Manuel', 'Urman', 'JMURMAN', '515.124.4469', '1987-06-29', 'FI_ACCOUNT', '7800.00', '0.00', '108', '100'),
('113', 'Luis', 'Popp', 'LPOPP', '515.124.4567', '1987-06-30', 'FI_ACCOUNT', '6900.00', '0.00', '108', '100'),
('114', 'Den', 'Raphaely', 'DRAPHEAL', '515.127.4561', '1987-07-01', 'PU_MAN', '11000.00', '0.00', '100', '30'),
('115', 'Alexander', 'Khoo', 'AKHOO', '515.127.4562', '1987-07-02', 'PU_CLERK', '3100.00', '0.00', '114', '30'),
('116', 'Shelli', 'Baida', 'SBAIDA', '515.127.4563', '1987-07-03', 'PU_CLERK', '2900.00', '0.00', '114', '30'),
('117', 'Sigal', 'Tobias', 'STOBIAS', '515.127.4564', '1987-07-04', 'PU_CLERK', '2800.00', '0.00', '114', '30'),
('118', 'Guy', 'Himuro', 'GHIMURO', '515.127.4565', '1987-07-05', 'PU_CLERK', '2600.00', '0.00', '114', '30'),
('119', 'Karen', 'Colmenares', 'KCOLMENA', '515.127.4566', '1987-07-06', 'PU_CLERK', '2500.00', '0.00', '114', '30'),
('120', 'Matthew', 'Weiss', 'MWEISS', '650.123.1234', '1987-07-07', 'ST_MAN', '8000.00', '0.00', '100', '50'),
('121', 'Adam', 'Fripp', 'AFRIPP', '650.123.2234', '1987-07-08', 'ST_MAN', '8200.00', '0.00', '100', '50'),
('122', 'Payam', 'Kaufling', 'PKAUFLIN', '650.123.3234', '1987-07-09', 'ST_MAN', '7900.00', '0.00', '100', '50'),
('123', 'Shanta', 'Vollman', 'SVOLLMAN', '650.123.4234', '1987-07-10', 'ST_MAN', '6500.00', '0.00', '100', '50'),
('124', 'Kevin', 'Mourgos', 'KMOURGOS', '650.123.5234', '1987-07-11', 'ST_MAN', '5800.00', '0.00', '100', '50'),
('125', 'Julia', 'Nayer', 'JNAYER', '650.124.1214', '1987-07-12', 'ST_CLERK', '3200.00', '0.00', '120', '50'),
('126', 'Irene', 'Mikkilineni', 'IMIKKILI', '650.124.1224', '1987-07-13', 'ST_CLERK', '2700.00', '0.00', '120', '50'),
('127', 'James', 'Landry', 'JLANDRY', '650.124.1334', '1987-07-14', 'ST_CLERK', '2400.00', '0.00', '120', '50'),
('128', 'Steven', 'Markle', 'SMARKLE', '650.124.1434', '1987-07-15', 'ST_CLERK', '2200.00', '0.00', '120', '50'),
('129', 'Laura', 'Bissot', 'LBISSOT', '650.124.5234', '1987-07-16', 'ST_CLERK', '3300.00', '0.00', '121', '50'),
('130', 'Mozhe', 'Atkinson', 'MATKINSO', '650.124.6234', '1987-07-17', 'ST_CLERK', '2800.00', '0.00', '121', '50'),
('131', 'James', 'Marlow', 'JAMRLOW', '650.124.7234', '1987-07-18', 'ST_CLERK', '2500.00', '0.00', '121', '50'),
('132', 'TJ', 'Olson', 'TJOLSON', '650.124.8234', '1987-07-19', 'ST_CLERK', '2100.00', '0.00', '121', '50'),
('133', 'Jason', 'Mallin', 'JMALLIN', '650.127.1934', '1987-07-20', 'ST_CLERK', '3300.00', '0.00', '122', '50'),
('134', 'Michael', 'Rogers', 'MROGERS', '650.127.1834', '1987-07-21', 'ST_CLERK', '2900.00', '0.00', '122', '50'),
('135', 'Ki', 'Gee', 'KGEE', '650.127.1734', '1987-07-22', 'ST_CLERK', '2400.00', '0.00', '122', '50'),
('136', 'Hazel', 'Philtanker', 'HPHILTAN', '650.127.1634', '1987-07-23', 'ST_CLERK', '2200.00', '0.00', '122', '50'),
('137', 'Renske', 'Ladwig', 'RLADWIG', '650.121.1234', '1987-07-24', 'ST_CLERK', '3600.00', '0.00', '123', '50'),
('138', 'Stephen', 'Stiles', 'SSTILES', '650.121.2034', '1987-07-25', 'ST_CLERK', '3200.00', '0.00', '123', '50'),
('139', 'John', 'Seo', 'JSEO', '650.121.2019', '1987-07-26', 'ST_CLERK', '2700.00', '0.00', '123', '50'),
('140', 'Joshua', 'Patel', 'JPATEL', '650.121.1834', '1987-07-27', 'ST_CLERK', '2500.00', '0.00', '123', '50'),
('141', 'Trenna', 'Rajs', 'TRAJS', '650.121.8009', '1987-07-28', 'ST_CLERK', '3500.00', '0.00', '124', '50'),
('142', 'Curtis', 'Davies', 'CDAVIES', '650.121.2994', '1987-07-29', 'ST_CLERK', '3100.00', '0.00', '124', '50'),
('143', 'Randall', 'Matos', 'RMATOS', '650.121.2874', '1987-07-30', 'ST_CLERK', '2600.00', '0.00', '124', '50'),
('144', 'Peter', 'Vargas', 'PVARGAS', '650.121.2004', '1987-07-31', 'ST_CLERK', '2500.00', '0.00', '124', '50'),
('145', 'John', 'Russell', 'JRUSSEL', '011.44.1344.429268', '1987-08-01', 'SA_MAN', '14000.00', '0.40', '100', '80'),
('146', 'Karen', 'Partners', 'KPARTNER', '011.44.1344.467268', '1987-08-02', 'SA_MAN', '13500.00', '0.30', '100', '80'),
('147', 'Alberto', 'Errazuriz', 'AERRAZUR', '011.44.1344.429278', '1987-08-03', 'SA_MAN', '12000.00', '0.30', '100', '80'),
('148', 'Gerald', 'Cambrault', 'GCAMBRAU', '011.44.1344.619268', '1987-08-04', 'SA_MAN', '11000.00', '0.30', '100', '80'),
('149', 'Eleni', 'Zlotkey', 'EZLOTKEY', '011.44.1344.429018', '1987-08-05', 'SA_MAN', '10500.00', '0.20', '100', '80'),
('150', 'Peter', 'Tucker', 'PTUCKER', '011.44.1344.129268', '1987-08-06', 'SA_REP', '10000.00', '0.30', '145', '80'),
('151', 'David', 'Bernstein', 'DBERNSTE', '011.44.1344.345268', '1987-08-07', 'SA_REP', '9500.00', '0.25', '145', '80'),
('152', 'Peter', 'Hall', 'PHALL', '011.44.1344.478968', '1987-08-08', 'SA_REP', '9000.00', '0.25', '145', '80'),
('153', 'Christopher', 'Olsen', 'COLSEN', '011.44.1344.498718', '1987-08-09', 'SA_REP', '8000.00', '0.20', '145', '80'),
('154', 'Nanette', 'Cambrault', 'NCAMBRAU', '011.44.1344.987668', '1987-08-10', 'SA_REP', '7500.00', '0.20', '145', '80'),
('155', 'Oliver', 'Tuvault', 'OTUVAULT', '011.44.1344.486508', '1987-08-11', 'SA_REP', '7000.00', '0.15', '145', '80'),
('156', 'Janette', 'King', 'JKING', '011.44.1345.429268', '1987-08-12', 'SA_REP', '10000.00', '0.35', '146', '80'),
('157', 'Patrick', 'Sully', 'PSULLY', '011.44.1345.929268', '1987-08-13', 'SA_REP', '9500.00', '0.35', '146', '80'),
('158', 'Allan', 'McEwen', 'AMCEWEN', '011.44.1345.829268', '1987-08-14', 'SA_REP', '9000.00', '0.35', '146', '80'),
('159', 'Lindsey', 'Smith', 'LSMITH', '011.44.1345.729268', '1987-08-15', 'SA_REP', '8000.00', '0.30', '146', '80'),
('160', 'Louise', 'Doran', 'LDORAN', '011.44.1345.629268', '1987-08-16', 'SA_REP', '7500.00', '0.30', '146', '80'),
('161', 'Sarath', 'Sewall', 'SSEWALL', '011.44.1345.529268', '1987-08-17', 'SA_REP', '7000.00', '0.25', '146', '80'),
('162', 'Clara', 'Vishney', 'CVISHNEY', '011.44.1346.129268', '1987-08-18', 'SA_REP', '10500.00', '0.25', '147', '80'),
('163', 'Danielle', 'Greene', 'DGREENE', '011.44.1346.229268', '1987-08-19', 'SA_REP', '9500.00', '0.15', '147', '80'),
('164', 'Mattea', 'Marvins', 'MMARVINS', '011.44.1346.329268', '1987-08-20', 'SA_REP', '7200.00', '0.10', '147', '80'),
('165', 'David', 'Lee', 'DLEE', '011.44.1346.529268', '1987-08-21', 'SA_REP', '6800.00', '0.10', '147', '80'),
('166', 'Sundar', 'Ande', 'SANDE', '011.44.1346.629268', '1987-08-22', 'SA_REP', '6400.00', '0.10', '147', '80'),
('167', 'Amit', 'Banda', 'ABANDA', '011.44.1346.729268', '1987-08-23', 'SA_REP', '6200.00', '0.10', '147', '80'),
('168', 'Lisa', 'Ozer', 'LOZER', '011.44.1343.929268', '1987-08-24', 'SA_REP', '11500.00', '0.25', '148', '80'),
('169', 'Harrison', 'Bloom', 'HBLOOM', '011.44.1343.829268', '1987-08-25', 'SA_REP', '10000.00', '0.20', '148', '80'),
('170', 'Tayler', 'Fox', 'TFOX', '011.44.1343.729268', '1987-08-26', 'SA_REP', '9600.00', '0.20', '148', '80'),
('171', 'William', 'Smith', 'WSMITH', '011.44.1343.629268', '1987-08-27', 'SA_REP', '7400.00', '0.15', '148', '80'),
('172', 'Elizabeth', 'Bates', 'EBATES', '011.44.1343.529268', '1987-08-28', 'SA_REP', '7300.00', '0.15', '148', '80'),
('173', 'Sundita', 'Kumar', 'SKUMAR', '011.44.1343.329268', '1987-08-29', 'SA_REP', '6100.00', '0.10', '148', '80'),
('174', 'Ellen', 'Abel', 'EABEL', '011.44.1644.429267', '1987-08-30', 'SA_REP', '11000.00', '0.30', '149', '80'),
('175', 'Alyssa', 'Hutton', 'AHUTTON', '011.44.1644.429266', '1987-08-31', 'SA_REP', '8800.00', '0.25', '149', '80'),
('176', 'Jonathon', 'Taylor', 'JTAYLOR', '011.44.1644.429265', '1987-09-01', 'SA_REP', '8600.00', '0.20', '149', '80'),
('177', 'Jack', 'Livingston', 'JLIVINGS', '011.44.1644.429264', '1987-09-02', 'SA_REP', '8400.00', '0.20', '149', '80'),
('178', 'Kimberely', 'Grant', 'KGRANT', '011.44.1644.429263', '1987-09-03', 'SA_REP', '7000.00', '0.15', '149', '0'),
('179', 'Charles', 'Johnson', 'CJOHNSON', '011.44.1644.429262', '1987-09-04', 'SA_REP', '6200.00', '0.10', '149', '80'),
('180', 'Winston', 'Taylor', 'WTAYLOR', '650.507.9876', '1987-09-05', 'SH_CLERK', '3200.00', '0.00', '120', '50'),
('181', 'Jean', 'Fleaur', 'JFLEAUR', '650.507.9877', '1987-09-06', 'SH_CLERK', '3100.00', '0.00', '120', '50'),
('182', 'Martha', 'Sullivan', 'MSULLIVA', '650.507.9878', '1987-09-07', 'SH_CLERK', '2500.00', '0.00', '120', '50'),
('183', 'Girard', 'Geoni', 'GGEONI', '650.507.9879', '1987-09-08', 'SH_CLERK', '2800.00', '0.00', '120', '50'),
('184', 'Nandita', 'Sarchand', 'NSARCHAN', '650.509.1876', '1987-09-09', 'SH_CLERK', '4200.00', '0.00', '121', '50'),
('185', 'Alexis', 'Bull', 'ABULL', '650.509.2876', '1987-09-10', 'SH_CLERK', '4100.00', '0.00', '121', '50'),
('186', 'Julia', 'Dellinger', 'JDELLING', '650.509.3876', '1987-09-11', 'SH_CLERK', '3400.00', '0.00', '121', '50'),
('187', 'Anthony', 'Cabrio', 'ACABRIO', '650.509.4876', '1987-09-12', 'SH_CLERK', '3000.00', '0.00', '121', '50'),
('188', 'Kelly', 'Chung', 'KCHUNG', '650.505.1876', '1987-09-13', 'SH_CLERK', '3800.00', '0.00', '122', '50'),
('189', 'Jennifer', 'Dilly', 'JDILLY', '650.505.2876', '1987-09-14', 'SH_CLERK', '3600.00', '0.00', '122', '50'),
('190', 'Timothy', 'Gates', 'TGATES', '650.505.3876', '1987-09-15', 'SH_CLERK', '2900.00', '0.00', '122', '50'),
('191', 'Randall', 'Perkins', 'RPERKINS', '650.505.4876', '1987-09-16', 'SH_CLERK', '2500.00', '0.00', '122', '50'),
('192', 'Sarah', 'Bell', 'SBELL', '650.501.1876', '1987-09-17', 'SH_CLERK', '4000.00', '0.00', '123', '50'),
('193', 'Britney', 'Everett', 'BEVERETT', '650.501.2876', '1987-09-18', 'SH_CLERK', '3900.00', '0.00', '123', '50'),
('194', 'Samuel', 'McCain', 'SMCCAIN', '650.501.3876', '1987-09-19', 'SH_CLERK', '3200.00', '0.00', '123', '50'),
('195', 'Vance', 'Jones', 'VJONES', '650.501.4876', '1987-09-20', 'SH_CLERK', '2800.00', '0.00', '123', '50'),
('196', 'Alana', 'Walsh', 'AWALSH', '650.507.9811', '1987-09-21', 'SH_CLERK', '3100.00', '0.00', '124', '50'),
('197', 'Kevin', 'Feeney', 'KFEENEY', '650.507.9822', '1987-09-22', 'SH_CLERK', '3000.00', '0.00', '124', '50'),
('198', 'Donald', 'OConnell', 'DOCONNEL', '650.507.9833', '1987-09-23', 'SH_CLERK', '2600.00', '0.00', '124', '50'),
('199', 'Douglas', 'Grant', 'DGRANT', '650.507.9844', '1987-09-24', 'SH_CLERK', '2600.00', '0.00', '124', '50'),
('200', 'Jennifer', 'Whalen', 'JWHALEN', '515.123.4444', '1987-09-25', 'AD_ASST', '4400.00', '0.00', '101', '10'),
('201', 'Michael', 'Hartstein', 'MHARTSTE', '515.123.5555', '1987-09-26', 'MK_MAN', '13000.00', '0.00', '100', '20'),
('202', 'Pat', 'Fay', 'PFAY', '603.123.6666', '1987-09-27', 'MK_REP', '6000.00', '0.00', '201', '20'),
('203', 'Susan', 'Mavris', 'SMAVRIS', '515.123.7777', '1987-09-28', 'HR_REP', '6500.00', '0.00', '101', '40'),
('204', 'Hermann', 'Baer', 'HBAER', '515.123.8888', '1987-09-29', 'PR_REP', '10000.00', '0.00', '101', '70'),
('205', 'Shelley', 'Higgins', 'SHIGGINS', '515.123.8080', '1987-09-30', 'AC_MGR', '12000.00', '0.00', '101', '110'),
('206', 'William', 'Gietz', 'WGIETZ', '515.123.8181', '1987-10-01', 'AC_ACCOUNT', '8300.00', '0.00', '205', '110');

CREATE TABLE Departments (
   DepartmentID decimal(4,0) NOT NULL DEFAULT '0',
   DepartmentName varchar(30) NOT NULL,
   ManagerID decimal(6,0) DEFAULT NULL,
   LocationID decimal(4,0) DEFAULT NULL,
	PRIMARY KEY (DepartmentID),
 )

 INSERT INTO Departments  VALUES
('10', 'Administration', '200', '1700'),
('20', 'Marketing', '201', '1800'),
('30', 'Purchasing', '114', '1700'),
('40', 'Human Resources', '203', '2400'),
('50', 'Shipping', '121', '1500'),
('60', 'IT', '103', '1400'),
('70', 'Public Relations', '204', '2700'),
('80', 'Sales', '145', '2500'),
('90', 'Executive', '100', '1700'),
('100', 'Finance', '108', '1700'),
('110', 'Accounting', '205', '1700'),
('120', 'Treasury', '0', '1700'),
('130', 'Corporate Tax', '0', '1700'),
('140', 'Control And Credit', '0', '1700'),
('150', 'Shareholder Services', '0', '1700'),
('160', 'Benefits', '0', '1700'),
('170', 'Manufacturing', '0', '1700'),
('180', 'Construction', '0', '1700'),
('190', 'Contracting', '0', '1700'),
('200', 'Operations', '0', '1700'),
('210', 'IT Support', '0', '1700'),
('220', 'NOC', '0', '1700'),
('230', 'IT Helpdesk', '0', '1700'),
('240', 'Government Sales', '0', '1700'),
('250', 'Retail Sales', '0', '1700'),
('260', 'Recruiting', '0', '1700'),
('270', 'Payroll', '0', '1700');


CREATE TABLE Locations
(
   LocationID decimal(4,0) NOT NULL DEFAULT '0',
   StreetAddress varchar(40) DEFAULT NULL,
   PostalCode varchar(12) DEFAULT NULL,
   City varchar(30) NOT NULL,
   StateProvince varchar(25) DEFAULT NULL,
   CountryID varchar(2) DEFAULT NULL,
  PRIMARY KEY (LocationID),
 
)

INSERT INTO Locations  VALUES
('1000', '1297 Via Cola di Rie', '989', 'Roma', '', 'IT'),
('1100', '93091 Calle della Testa', '10934', 'Venice', '', 'IT'),
('1200', '2017 Shinjuku-ku', '1689', 'Tokyo', 'Tokyo Prefecture', 'JP'),
('1300', '9450 Kamiya-cho', '6823', 'Hiroshima', '', 'JP'),
('1400', '2014 Jabberwocky Rd', '26192', 'Southlake', 'Texas', 'US'),
('1500', '2011 Interiors Blvd', '99236', 'South San Francisco', 'California', 'US'),
('1600', '2007 Zagora St', '50090', 'South Brunswick', 'New Jersey', 'US'),
('1700', '2004 Charade Rd', '98199', 'Seattle', 'Washington', 'US'),
('1800', '147 Spadina Ave', 'M5V 2L7', 'Toronto', 'Ontario', 'CA'),
('1900', '6092 Boxwood St', 'YSW 9T2', 'Whitehorse', 'Yukon', 'CA'),
('2000', '40-5-12 Laogianggen', '190518', 'Beijing', '', 'CN'),
('2100', '1298 Vileparle (E)', '490231', 'Bombay', 'Maharashtra', 'IN'),
('2200', '12-98 Victoria Street', '2901', 'Sydney', 'New South Wales', 'AU'),
('2300', '198 Clementi North', '540198', 'Singapore', '', 'SG'),
('2400', '8204 Arthur St', '', 'London', '', 'UK'),
('2500', '"Magdalen Centre', ' The Oxford ', 'OX9 9ZB', 'Oxford', 'Ox'),
('2600', '9702 Chester Road', '9629850293', 'Stretford', 'Manchester', 'UK'),
('2700', 'Schwanthalerstr. 7031', '80925', 'Munich', 'Bavaria', 'DE'),
('2800', 'Rua Frei Caneca 1360', '01307-002', 'Sao Paulo', 'Sao Paulo', 'BR'),
('2900', '20 Rue des Corps-Saints', '1730', 'Geneva', 'Geneve', 'CH'),
('3000', 'Murtenstrasse 921', '3095', 'Bern', 'BE', 'CH'),
('3100', 'Pieter Breughelstraat 837', '3029SK', 'Utrecht', 'Utrecht', 'NL'),
('3200', 'Mariano Escobedo 9991', '11932', 'Mexico City', '"Distrito Federal', '"');



CREATE TABLE Countries (
  CountryID varchar(2) NOT NULL,
  CountryName varchar(40) DEFAULT NULL,
  RegionID decimal(10,0) DEFAULT NULL,
  PRIMARY KEY (CountryID),

) 

--
-- Dumping data for table `countries`
--

INSERT INTO countries  VALUES
('AR', 'Argentina', '2'),
('AU', 'Australia', '3'),
('BE', 'Belgium', '1'),
('BR', 'Brazil', '2'),
('CA', 'Canada', '2'),
('CH', 'Switzerland', '1'),
('CN', 'China', '3'),
('DE', 'Germany', '1'),
('DK', 'Denmark', '1'),
('EG', 'Egypt', '4'),
('FR', 'France', '1'),
('HK', 'HongKong', '3'),
('IL', 'Israel', '4'),
('IN', 'India', '3'),
('IT', 'Italy', '1'),
('JP', 'Japan', '3'),
('KW', 'Kuwait', '4'),
('MX', 'Mexico', '2'),
('NG', 'Nigeria', '4'),
('NL', 'Netherlands', '1'),
('SG', 'Singapore', '3'),
('UK', 'United Kingdom', '1'),
('US', 'United States of America', '2'),
('ZM', 'Zambia', '4'),
('ZW', 'Zimbabwe', '4');



CREATE TABLE  JobHistory (
   EmployeeID decimal(6,0) NOT NULL,
   StartDate date NOT NULL,
   EndDate date NOT NULL,
   JobID varchar(10) NOT NULL,
   DepartmentID decimal(4,0) DEFAULT NULL,
   PRIMARY KEY (EmployeeID,StartDate),

) 
select * from JobHistory

INSERT INTO  JobHistory VALUES
('102', '1993-01-13', '1998-07-24', 'IT_PROG', '60'),
('101', '1989-09-21', '1993-10-27', 'AC_ACCOUNT', '110'),
('101', '1993-10-28', '1997-03-15', 'AC_MGR', '110'),
('201', '1996-02-17', '1999-12-19', 'MK_REP', '20'),
('114', '1998-03-24', '1999-12-31', 'ST_CLERK', '50'),
('122', '1999-01-01', '1999-12-31', 'ST_CLERK', '50'),
('200', '1987-09-17', '1993-06-17', 'AD_ASST', '90'),
('176', '1998-03-24', '1998-12-31', 'SA_REP', '80'),
('176', '1999-01-01', '1999-12-31', 'SA_MAN', '80')

SELECT * FROM Locations
SELECT * FROM Countries
SELECT * FROM Departments
SELECT * FROM Employees
SELECT * FROM JobHistory

--Create a View to Find the names (first_name, last_name), job, department number, and department name of the employees 
--who work in London
CREATE VIEW tbl3 AS
	SELECT (e.FirstName+' '+e.LastName) AS Name, e.JobId, d.DepartmentName, d.DepartmentID  FROM Employees e 
		JOIN Departments d ON e.DepartmentID = d.DepartmentID 
		JOIN Locations l ON d.LocationID=l.LocationID  WHERE l.City = 'London'
SELECT * FROM tbl3

--Create a View to get the department name and number of employees in the department.
CREATE VIEW tbl4 AS
	SELECT COUNT(e.EmployeeID) AS 'Number Of Employees', d.DepartmentID, d.DepartmentName FROM Departments d 
		JOIN Employees e ON e.DepartmentID = d.DepartmentID GROUP BY d.DepartmentID, d.DepartmentName
SELECT * FROM tbl4

--Find the employee ID, job title, number of days between ending date and starting date for all jobs 
--in department 90 from job history.
SELECT EmployeeID, JobID AS 'Job Title', DATEDIFF(DAY,StartDate,EndDate) AS 'Number of Days' FROM JobHistory 
	WHERE DepartmentID=90

--Write a View to display the department name, manager name, and city.
CREATE VIEW tbl5 AS
	SELECT d.DepartmentName,(e.FirstName+' '+e.LastName) AS 'Manager Name', l.City FROM Departments d JOIN Employees e ON d.ManagerID=e.EmployeeID JOIN Locations l ON d.LocationID=l.LocationID
SELECT * FROM tbl5

--Create a View to display department name, name (first_name, last_name), hire date, salary of the manager for all managers whose experience is more than 15 years.
CREATE VIEW Managers AS
	SELECT d.DepartmentName, e1.ManagerID, (e2.FirstName+' '+e2.LastName) AS Name, e2.HireDate, e2.Salary FROM Employees e1 
		LEFT OUTER JOIN Employees e2 ON e1.ManagerID=e2.EmployeeID JOIN Departments d ON e2.DepartmentID=d.DepartmentID 
			WHERE e2.FirstName IS NOT NULL AND DATEDIFF(YEAR,e2.HireDate,GETDATE())>15 
			GROUP BY e1.ManagerID, e2.FirstName, d.DepartmentName, e2.Salary, e2.HireDate, e2.LastName

SELECT * FROM Managers


--SUB-QURIES EXTRA TASKS

--1. Write a query to find the names (first_name, last_name) and salaries of the employees who have higher salary than the employee whose last_name='Bull'. 
SELECT (FirstName+' '+LastName) AS Name, Salary FROM  Employees WHERE Salary>(SELECT Salary FROM Employees WHERE LastName='Bull')

--2. Find the names (first_name, last_name) of all employees who works in the IT department. 
SELECT (FirstName+' '+LastName) AS Name FROM Employees WHERE DepartmentID IN (SELECT DepartmentID FROM Departments WHERE DepartmentName = 'IT')

--3. Find the names (first_name, last_name) of the employees who have a manager who works for a department based in United States. 
--Hint : Write single-row and multiple-row subqueries
SELECT (FirstName+' '+LastName) AS Name FROM Employees WHERE ManagerID IN 
	(SELECT ManagerID FROM Departments WHERE LocationID IN 
		(SELECT LocationID FROM Locations WHERE CountryID=
			(SELECT CountryID FROM Countries WHERE CountryName='United States of America')))

--4. Find the names (first_name, last_name) of the employees who are managers.
SELECT (FirstName+' '+LastName) AS Name FROM Employees WHERE EmployeeID IN(SELECT ManagerID FROM Employees GROUP BY ManagerID)

--5. Find the names (first_name, last_name), salary of the employees whose salary is greater than the average salary. 
SELECT (FirstName+' '+LastName) AS Name, Salary FROM Employees WHERE Salary>(SELECT AVG(Salary) FROM Employees )

--6. Find the names (first_name, last_name), salary of the employees whose salary is equal to the minimum salary for their job grade. 
SELECT (FirstName+' '+LastName) AS Name, Salary FROM Employees e1 WHERE Salary > (SELECT min(Salary) FROM Employees e2 WHERE e2.JobId = e1.JobId GROUP BY JobId)

--7. Find the names (first_name, last_name), salary of the employees who earn more than the average salary and who works in any of the IT departments. 
SELECT (FirstName+' '+LastName) AS Name, Salary FROM Employees WHERE Salary > (SELECT AVG(s.Salary) FROM Employees s JOIN Departments d ON s.DepartmentID=d.DepartmentID WHERE d.DepartmentName='IT')

--8. Find the names (first_name, last_name), salary of the employees who earn more than Mr. Bell. 
SELECT (FirstName+' '+LastName) AS Name, Salary FROM Employees WHERE Salary > (SELECT Salary FROM Employees WHERE LastName = 'Bell')

--9. Find the names (first_name, last_name), salary of the employees who earn the same salary as the minimum salary for all departments. 
SELECT (FirstName+' '+LastName) AS Name, Salary FROM Employees WHERE Salary IN (SELECT MIN(Salary) FROM Employees GROUP BY JobId)

--10. Find the names (first_name, last_name), salary of the employees whose salary greater than average salary of all department. 
SELECT (FirstName+' '+LastName) AS Name, Salary FROM Employees WHERE Salary IN (SELECT AVG(Salary) FROM Employees GROUP BY JobId)

--11. Write a query to find the names (first_name, last_name) and salary of the employees who earn a salary that is higher 
--than the salary of all the Shipping Clerk (JOB_ID = 'SH_CLERK'). Sort the results on salary from the lowest to highest. 
SELECT (FirstName+' '+LastName) AS Name, Salary FROM Employees WHERE Salary > (SELECT MAX(Salary) FROM Employees WHERE JobId = 'SH_CLERK') ORDER BY Salary

--12. Write a query to find the names (first_name, last_name) of the employees who are not supervisors. 
SELECT (FirstName+' '+LastName) AS Name FROM Employees WHERE EmployeeID NOT IN (SELECT ManagerID FROM Employees GROUP BY ManagerID)

--13. Write a query to display the employee ID, first name, last names, and department names of all employees. 
SELECT  e.EmployeeId, e.FirstName, e.LastName, d.DepartmentName FROM Employees e JOIN Departments d ON e.DepartmentID=d.DepartmentID

--14. Write a query to display the employee ID, first name, last names, salary of all employees whose salary is above average for their departments. 
SELECT EmployeeID, FirstName, LastName, Salary FROM Employees e1 WHERE Salary > (SELECT AVG(Salary) FROM Employees e2 WHERE e2.JobId = e1.JobId GROUP BY JobId)

--15. Write a query to fetch even numbered records from employees table. 
SELECT * FROM Employees WHERE (EmployeeID % 2) = 0

--16. Write a query to find the 5th maximum salary in the employees table. 
SELECT DISTINCT salary FROM employees e1 WHERE 4= (SELECT COUNT(DISTINCT salary) FROM employees  e2 WHERE e2.salary >= e1.salary);

--17. Write a query to find the 4th minimum salary in the employees table. 
SELECT DISTINCT salary FROM employees e1 WHERE 3= (SELECT COUNT(DISTINCT salary) FROM employees  e2 WHERE e2.salary < e1.salary);
SELECT DISTINCT Salary From Employees ORDER BY Salary

--18. Write a query to select last 10 records from a table. 
SELECT TOP 10 * FROM Employees ORDER BY EmployeeID DESC

--19. Write a query to list department number, name for all the departments in which there are no employees in the department. 


--20. Write a query to get 3 maximum salaries. 
SELECT TOP 3 Salary FROM Employees WHERE Salary<=(SELECT MAX(Salary) FROM Employees)

--21. Write a query to get 3 minimum salaries. 
SELECT TOP 3 Salary FROM Employees WHERE Salary>=(SELECT MIN(Salary) FROM Employees) ORDER BY Salary

--22. Write a query to get nth max salaries of employees. 
SELECT Salary FROM Employees e1 WHERE (1) = (SELECT COUNT(DISTINCT(e2.salary)) FROM Employees e2 WHERE e2.salary > e1.salary)

SELECT * FROM Locations
SELECT * FROM Countries
SELECT * FROM Departments
SELECT * FROM Employees
SELECT * FROM JobHistory


--VIEW EXTRA TASK

--1. Write a query to find the addresses (location_id, street_address, city, state_province, country_name) of all the departments. 
SELECT (CONVERT(VARCHAR,l.LocationID)+', '+l.StreetAddress+', '+l.City+', '+l.StateProvince+', '+c.CountryName) AS Address, d.DepartmentID FROM Departments d JOIN Locations l ON d.LocationID=l.LocationID JOIN Countries c ON l.CountryID=c.CountryID

--2. Write a query to find the names (first_name, last name), department ID and name of all the employees. 
SELECT (FirstName+' '+LastName) AS Name, DepartmentID FROM Employees

--3. Find the names (first_name, last_name), job, department number, and department name of the employees who work in London. 
SELECT (e.FirstName+' '+e.LastName) AS Name, e.JobId, e.DepartmentID, d.DepartmentName FROM Employees e JOIN Departments d ON e.DepartmentID=d.DepartmentID JOIN Locations l ON d.LocationID=l.LocationID WHERE l.City='London'

--4. Write a query to find the employee id, name (last_name) along with their manager_id, manager name (last_name). 
SELECT e.EmployeeID, e.LastName AS Name, e.ManagerID, e1.LastName AS 'Manager Name' FROM Employees e JOIN Employees e1 ON e.ManagerID=e1.EmployeeID

--5. Find the names (first_name, last_name) and hire date of the employees who were hired after 'Jones'. 
SELECT (FirstName+' '+LastName) AS Name, HireDate FROM Employees WHERE HireDate > (SELECT HireDate FROM Employees WHERE LastName='Jones')

--6. Write a query to get the department name and number of employees in the department. 
SELECT d.DepartmentName, COUNT(e.EmployeeID) FROM Employees e JOIN Departments d ON e.DepartmentID=d.DepartmentID GROUP BY d.DepartmentName

--7. Find the employee ID, job title, number of days between ending date and starting date for all jobs in department 90 from job history. 
SELECT EmployeeID, JobID AS 'Job Title', DATEDIFF(DAY,StartDate,EndDate) AS 'Number of Days' FROM JobHistory WHERE DepartmentID = 90

--8. Write a query to display the department ID, department name and manager first name. 
SELECT d.DepartmentID, d.DepartmentName, e.FirstName FROM Departments d JOIN Employees e ON d.ManagerID=e.EmployeeID

--9. Write a query to display the department name, manager name, and city. 
SELECT d.DepartmentName, e.FirstName, l.City FROM Departments d JOIN Employees e ON d.ManagerID=e.EmployeeID JOIN Locations l ON d.LocationID=l.LocationID

--10. Write a query to display the job title and average salary of employees. 
SELECT JobId, AVG(Salary) FROM Employees GROUP BY JobId

--11. Display job title, employee name, and the difference between salary of the employee and minimum salary for the job.
SELECT e.JobId, e.FirstName, (e.Salary-tbl.wage) FROM Employees e JOIN (SELECT MIN(Salary) AS wage, JobId FROM Employees GROUP BY JobId) AS tbl ON e.JobId=tbl.JobId

--12. Write a query to display the job history that were done by any employee who is currently drawing more than 10000 of salary. 
SELECT e.EmployeeID, e.HireDate, j.EndDate, e.JobId, e.DepartmentID FROM Employees e FULL OUTER JOIN JobHistory j ON e.EmployeeID=j.EmployeeID WHERE e.Salary>10000

--13. Write a query to display department name, name (first_name, last_name), hire date, salary of the manager for all managers whose experience is more than 15 years. 
SELECT e.ManagerID, d.DepartmentName, (e1.FirstName+' '+e1.LastName) AS Name, e1.HireDate, e1.Salary FROM Employees e 
	JOIN Employees e1 ON e.ManagerID=e1.EmployeeID 
	JOIN Departments d ON e1.DepartmentID=d.DepartmentID
	WHERE DATEDIFF(YEAR,e1.HireDate,GETDATE())>15
	GROUP BY e.ManagerID, d.DepartmentName, e1.FirstName, e1.LastName, e1.HireDate, e1.Salary