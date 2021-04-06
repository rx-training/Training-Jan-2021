ALter table Customer 
DROP COLUMN Customer_Address;
ALter table Customer
ADD  Customer_Phoneno int(10),Customer_Email varchar 

Create table Quote (Quote_id int,Quote_subtotal Money,Shippment_tax Money,
Quote_FinalTotal Money,Quote_Discount Money,ShippmentName varchar);

Drop Table Order_Status
Create table Order_Status (Order_Status_id int NOT NULL PRIMARY KEY ,Order_Status_ varchar(50));

Truncate Table Order_Status

INSERT INTO Order_Status (Order_Status_id,Order_Status_) Values('1','holded'),
('2','complete'),
('3','fraud'),
('4','pandding'),
('5','canceled'),
('6','closed')





