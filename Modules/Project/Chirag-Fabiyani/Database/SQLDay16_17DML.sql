

----VIEW FOR User Profile----

CREATE VIEW UserProfile
AS
SELECT FirstName+' '+LastName AS FullName, Bio, EmailID, ContactNumber FROM Users




----VIEW FOR Ad Posts----

CREATE VIEW AdPosts
AS
SELECT i.Image,a.AdID,a.Category,a.Title,a.Description,a.Price,a.Condition,l.City,l.State,c.ContactNumber,c.AlternateContactNumber
FROM AdDetails a JOIN Images i ON a.AdID=i.AdID
JOIN Locations l ON a.City=l.City
JOIN Contacts c ON a.AdID=c.AdID WHERE a.AdID IN (
SELECT AdID FROM Posts)




----PROCEDURE FOR Registration of User----

CREATE PROCEDURE RegisterUser
@a NVARCHAR(10),
@b NVARCHAR(50),
@c NVARCHAR(50),
@d NVARCHAR(50),
@e NVARCHAR(250)
AS
INSERT INTO Users VALUES(@a,@b,@c,@d,@e)

EXEC RegisterUser '7654898521','chirag@gmail.com','123456789','Chirag','Fabiyani','Lorem ipsum dolor sit amet,
consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam';




----PROCEDURE FOR Storing Ad Details----

CREATE PROCEDURE AdDetails
@a int,
@b NVARCHAR(50),
@c NVARCHAR(50),
@d NVARCHAR(250),
@e MONEY,
@f NVARCHAR(50),
@g NVARCHAR(50),
@h NVARCHAR(10),
@i NVARCHAR(10),
@j int,
@k VARBINARY(MAX)
AS
BEGIN
INSERT INTO AdDetails VALUES(@a,@b,@c,@d,@e,@f,@g)
INSERT INTO Contacts VALUES(@a,@h,@i)
INSERT INTO Images(ImgID,AdID,Image)
SELECT @j,@a,* FROM OPENROWSET (BULK @k,SINGLE_BLOB) Image;
END

EXECUTE AdDetails 01,'MobilePhones','Oppo Reno','Reno5 Pro uses two series-connected cells,
each with a typical capacity of 2175mAh. Together, they power the phone with a total capacity of 4350mAh.',
10000,'Average','Ahmedabad','7654898521','7654898522',01,'https://picsum.photos/200/300';




----Trigger to delete post details----

DELETE FROM Posts WHERE AdID=02;

CREATE TRIGGER DeleteAd ON Posts
AFTER DELETE
AS
BEGIN
DELETE FROM AdDetails WHERE AdID=(SELECT AdID FROM Deleted)
DELETE FROM Images WHERE AdID=(SELECT AdID FROM Deleted)
DELETE FROM Contacts WHERE AdID=(SELECT AdID FROM Deleted)
END