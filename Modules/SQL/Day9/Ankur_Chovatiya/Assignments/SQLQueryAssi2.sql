DECLARE @json NVARCHAR(MAX)
SET @json = '[
		{
			"Name": "Ankur",
			"Address": "SG high way",
			"City": "Ahmedabad",
			"DOB": "1999-10-24",
			"Std": "11"
		},
		{
			"Name": "Anks",
			"Address": "CG Road",
			"City": "Ahmedabad",
			"DOB": "1990-08-20",
			"Std": "12"
		},
		{
			"Name": "Rohan",
			"Address": "lal Darwaja",
			"City": "Ahmedabad",
			"DOB": "1990-02-22",
			"Std": "10"
		},
		{
			"Name": "Raj",
			"Address": "Law Garden",
			"City": "Ahmedabad",
			"DOB": "2000-02-23",
			"Std": "9"
		},
		{
			"Name": "Ram",
			"Address": "Univarsity Area",
			"City": "Ahmedabad",
			"DOB": "1995-06-20",
			"Std": "12"
		}
	]'


SELECT * FROM OPENJSON(@json)
WITH(
	Name VARCHAR(10) '$.Name',
	Address VARCHAR(20) '$.Address',
	City VARCHAR(10) '$.City',
	DateOfBirth VARCHAR(25) '$.DOB',
	Standard VARCHAR(10) '$.Std'
)
FOR JSON PATH, ROOT('Students');