SELECT DENSE_RANK() OVER (ORDER BY vacationHours) Dense_rankd_vaction FROM HumanResources.Employee --same hours give same ranks then chnage rank by 1


SELECT RANK() OVER (PARTITION  BY JobTitle ORDER BY vacationHours  ) rankd_vaction FROM HumanResources.Employee -- same hours give same rank but after give ranks as counting rows




SELECT JobTitle FROM HumanResources.Employee
