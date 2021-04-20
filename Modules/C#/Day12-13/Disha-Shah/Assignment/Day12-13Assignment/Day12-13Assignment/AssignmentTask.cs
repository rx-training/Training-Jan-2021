using System;

namespace Day12_13Assignment
{
    class AssignmentTask
    {
        static void Main(string[] args)
        {
            CustomerInfo customer = new CustomerInfo();
            bool moreChoice = true;
            while (moreChoice)
            {
                Console.WriteLine("Select operation you want to perform:");
                Console.WriteLine("1: Insert a Customer");
                Console.WriteLine("2. Update a Customer");
                Console.WriteLine("3. Delete a Customer");
                Console.WriteLine("4. View all the Toys Information");
                Console.WriteLine("5. Place Order by searching information for a product");
                Console.WriteLine("Enter your operation");
                int op = Convert.ToInt32(Console.ReadLine());
                switch (op)
                {
                    case 1:
                        // Enter customer information to add in table
                        Console.WriteLine("Enter Firstname of Customer:");
                        string fname = Console.ReadLine();
                        Console.WriteLine("Enter Lastname of Customer:");
                        string lname = Console.ReadLine();
                        Console.WriteLine("Enter Contact No of Customer:");
                        long contact = Convert.ToInt64(Console.ReadLine());
                        Console.WriteLine("Enter Address of Customer:");
                        string address = Console.ReadLine();

                        customer.InsertCustomer(fname, lname, contact, address);
                        Console.WriteLine();
                        Console.WriteLine("Customer added successfully");
                        break;
                    case 2:
                        // Customer name whose information is to be updated
                        Console.WriteLine("Enter Firstname of Customer whose information is to be modified:");
                        string oldFname = Console.ReadLine();
                        Console.WriteLine("Enter lastname of Customer whose information is to be modified:");
                        string oldLname = Console.ReadLine();

                        Console.WriteLine();
                        // New Information
                        Console.WriteLine("Enter Firstname of Customer:");
                        string newFname = Console.ReadLine();
                        Console.WriteLine("Enter Lastname of Customer:");
                        string newLname = Console.ReadLine();
                        Console.WriteLine("Enter Contact No of Customer:");
                        long newContact = Convert.ToInt64(Console.ReadLine());
                        Console.WriteLine("Enter Address of Customer:");
                        string newAddress = Console.ReadLine();

                        customer.UpdateCustomer(oldFname, oldLname, newFname, newLname, newContact, newAddress);
                        Console.WriteLine();
                        Console.WriteLine("Customer Updated successfully");
                        break;
                    case 3:
                        // Customer name whose information is to be deleted
                        Console.WriteLine("Enter Firstname of Customer whose information is to be deleted:");
                        string oldFName = Console.ReadLine();
                        Console.WriteLine("Enter lastname of Customer whose information is to be deleted:");
                        string oldLName = Console.ReadLine();

                        customer.DeleteCustomer(oldFName, oldLName);
                        Console.WriteLine();
                        Console.WriteLine("Data Deleted Successfully");
                        break;
                    case 4:
                        Console.WriteLine();
                        Console.WriteLine("Information of all Toys:");
                        Console.WriteLine();
                        Console.WriteLine("Name\tDescription\t\tPrice\tQuantityAvailable");
                        customer.GetAllToysInfo();
                        break;
                    case 5:
                        // Customer name who wants to buy product
                        Console.WriteLine("Enter Firstname of Customer who want to book a order:");
                        string FName = Console.ReadLine();
                        Console.WriteLine("Enter lastname of Customer who want to book a order:");
                        string LName = Console.ReadLine();

                        bool orderFlag = false;
                        int[] resultArr;
                        int orderid = 0;
                        int custid = 0;
                        bool moreBuy = true;

                        while (moreBuy)
                        {
                            Console.WriteLine();

                            // Search Toy information by name
                            Console.WriteLine("Enter Toy Name you want to buy:");
                            string toy = Console.ReadLine();

                            // Display information of Toy
                            Console.WriteLine($"Information of {toy}:");
                            int toyQty = customer.GetToyInfo(toy);

                            // Quantity to buy
                            Console.WriteLine("Enter Qty you want to buy:");
                            int qty = Convert.ToInt32(Console.ReadLine());

                            if (qty > toyQty)
                            {
                                Console.WriteLine("Quantity is very large, not available");
                            }
                            else
                            {
                                decimal amount = 0.0m;

                                // Before discount amount
                                amount = customer.CalcAmount(toy, qty);
                                Console.WriteLine($"Amount: {amount}");

                                // After discount amount
                                decimal finalAmount = customer.Offers(amount);
                                Console.WriteLine($"Final Amount: {finalAmount}");

                                // Shipping address entry
                                Console.WriteLine("Enter Ship to Address:");
                                string addressShipTo = Console.ReadLine();
                                Console.WriteLine("Enter City:");
                                string cityShipTo = Console.ReadLine();
                                Console.WriteLine("Enter State:");
                                string stateShipTo = Console.ReadLine();

                                // If First order of the day by a particular customer
                                if (orderFlag==false)
                                {
                                    // Entry in Order Table
                                    resultArr = customer.BookOrder(FName, LName);
                                    Console.WriteLine("Successfully added in Orders Table");

                                    orderid = resultArr[0];
                                    custid = resultArr[1];

                                    // Entry in OrderDetails Table
                                    customer.BookOrderDetails(toy, qty, custid, addressShipTo, cityShipTo, stateShipTo, amount, finalAmount, orderid);
                                    Console.WriteLine("Successfully added in OrderDetails Table");

                                    orderFlag = true;
                                }
                                // Not the first order of the day by a particular customer
                                else
                                {
                                    // Entry in OrderDetails Table
                                    customer.BookOrderDetails(toy, qty, custid, addressShipTo, cityShipTo, stateShipTo, amount, finalAmount, orderid);
                                    Console.WriteLine("Successfully added in OrderDetails Table");

                                }
                            }

                            Console.WriteLine("Want to buy more products? (Y/N)");
                            char buyChoice = Convert.ToChar(Console.ReadLine());
                            if (buyChoice == 'Y' || buyChoice == 'y')
                            {
                                moreBuy = true;
                            }
                            else
                            {
                                moreBuy = false;
                            }
                        }
                        break;
                    default:
                        Console.WriteLine("Please choose correct option");
                        break;
                }

                Console.WriteLine("Want to perform more operations? (Y/N)");
                char choice = Convert.ToChar(Console.ReadLine());
                if (choice == 'Y' || choice == 'y')
                {
                    moreChoice = true;
                }
                else
                {
                    moreChoice = false;
                }

            }

        }
    }
}
