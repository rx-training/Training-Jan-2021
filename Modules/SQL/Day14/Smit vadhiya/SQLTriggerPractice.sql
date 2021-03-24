select * from Students

INSERT INTO Students values (15,'sahil',9)
update students set Name  = 'gohel' where id = 5
GO

CREATE TRIGGER TgStudents ON Students AFTER INSERT
AS BEGIN
	ROLLBACK TRANSACTION
	SELECT * FROM inserted
	SELECT * FROM deleted
END
GO

SELECT * FROM Deposit
SELECT * FROM Customer
SELECT * FROM Branch

CREATE VIEW vAllData AS
SELECT d.*,c.City AS 'CustomerCity',b.City AS 'BranchCity' FROM Deposit d JOIN Customer c ON d.Cname = c.CName JOIN Branch b ON d.Bname = b.BName



UPDATE vAllData SET Cname = 'SUNIL',Bname = 'KAROLBAGH',CustomerCity = 'HELLO'  WHERE ActNo = 100 
SELECT * FROM vAllData
GO

CREATE TRIGGER TgView ON vAllData INSTEAD OF UPDATE AS BEGIN
	UPDATE vAllData SET Cname =(SELECT Cname FROM inserted),Bname = (SELECT Bname FROM inserted)  WHERE ActNo =  (SELECT ActNo FROM inserted)
	UPDATE vAllData SET CustomerCity =(SELECT CustomerCity FROM inserted)  WHERE ActNo =  (SELECT ActNo FROM inserted)
END

