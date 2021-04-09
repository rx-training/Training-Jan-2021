 EXEC msdb.dbo.sp_send_dbmail  
        @profile_name = 'Ankur patel',  
        @recipients = 'ankur.chovatiya1856@gmail.com',  
        @body = 'Don''t forget to print a report for the sales force.',  
        @subject = 'Reminder';

EXEC msdb.dbo.sp_send_dbmail  
        @profile_name = 'AdventureWorks2012 Administrator',  
        @recipients = 'danw@Adventure-Works.com',  
        @body = 'Don''t forget to print a report for the sales force.',  
        @subject = 'Reminder'; 


sp_configure 'show advanced options', 1;  
GO 
RECONFIGURE; 
sp_configure 'Database Mail XPs', 1;  
RECONFIGURE 

IF EXISTS (
    SELECT 1 FROM sys.configurations 
    WHERE NAME = 'Database Mail XPs' AND VALUE = 0)
BEGIN
  PRINT 'Enabling Database Mail XPs'
  EXEC sp_configure 'show advanced options', 1;  
  RECONFIGURE
  EXEC sp_configure 'Database Mail XPs', 1;  
  RECONFIGURE  
END