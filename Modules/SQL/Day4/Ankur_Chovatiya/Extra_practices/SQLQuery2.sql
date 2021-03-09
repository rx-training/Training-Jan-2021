SELECT DENSE_RANK() OVER (ORDER BY vacationHours) Dense_rankd_vaction FROM HumanResources.Employee --same hours give same ranks then chnage rank by 1

SELECT RANK() OVER (ORDER BY vacationHours) rankd_vaction FROM HumanResources.Employee -- same hours give same rank but after give ranks as counting rows

SELECT NTILE(30) OVER (ORDER BY vacationHours) Ntitled_rank FROM HumanResources.Employee -- only give 30 ranks for total rows

SELECT ROW_NUMBER() OVER (ORDER BY vacationHours) Row_rankd FROM HumanResources.Employee -- simple ranking one by one



SELECT VacationHours FROM HumanResources.Employee ORDER BY VacationHours
