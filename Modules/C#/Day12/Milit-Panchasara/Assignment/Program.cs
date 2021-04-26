using Assignment.Models;
using System;
using System.Collections.Generic;

namespace Assignment
{
    class Program
    {
        private static int loggedInUserId = 0;
        static void Main(string[] args)
        {
            var loopRunning = true; 
            while (loopRunning)
            {
                Console.WriteLine();
                Console.WriteLine("Press 0 to Add customer\nPress 1 to Login as customer\nPress 2 to Remove Customer\nPress 3 to Update Customer\nPress 4 to view Customer\nPress 5 to view list of toys\nPress 6 to place an order\nPress 7 to see all orders\nPress any other key to exit...");
                var ans = Console.ReadLine();
                
                if((ans == "6" || ans == "7") && loggedInUserId == 0)
                {
                    Console.WriteLine("User need to Log In first to place an order!");
                    continue;
                }
                
                if (ans == "0")
                {
                    RegisterCustomer();
                }
                else if (ans == "1")
                {
                    LoginCustomer();
                }
                else if (ans == "2")
                {
                    RemoveCustomer();
                }
                else if (ans == "3")
                {
                    EditCustomer();
                }
                else if (ans == "4")
                {
                    ViewCustomer();
                }
                else if (ans == "5")
                {
                    ViewAllToys();
                }
                else if (ans == "6")
                {
                    PlaceOrder();
                }
                else if (ans == "7")
                {
                    ViewAllOrder();
                }
                else
                {
                    return;
                }
            }
            
        }

        private static void LoginCustomer()
        {
            var operation = new CustomerOperations();

            Console.WriteLine("Enter ID of customer:");
            var id = GetIntegerInput();
            
            if(operation.IsExists(id))
            {
                loggedInUserId = id;
                Console.WriteLine($"Logged In as a User with id {id}.");
            }
            else
            {
                Console.WriteLine("User not found!");
            }
        }

        private static void ViewAllOrder()
        {
            var operation = new ToyOperations();
            var orderDict = operation.GetAllOrders(loggedInUserId);
            Console.WriteLine();
            foreach (var order in orderDict.Keys)
            {
                Console.WriteLine($"Order ID: {order.Id}, Order Date: {order.OrderDate}, Amount: {order.OrderAmount}, Discount: {order.OfferAmount}");
                Console.WriteLine();
                Console.WriteLine("Order Items:");
                Console.WriteLine("{0,4} {1,12} {2,12} {3,12}", "ID", "Name", "Price", "Quantity");
                foreach (var toy in orderDict[order])
                {
                    Console.WriteLine("{0,4} {1,12} {2,12} {3,12}", toy.Toy.Id, toy.Toy.Name, toy.Toy.Price, toy.Quantity);
                }
                Console.WriteLine();
                Console.WriteLine();
            }
        }

        private static void PlaceOrder()
        {
            Console.WriteLine("Select toys from the list one by one to buy:");
            ViewAllToys();
            var loopRunning = true;
            var orderItems = new List<Tuple<int, int>>();
            var operation = new ToyOperations();

            while (loopRunning)
            {
                Console.WriteLine("Enter Id of Toy to add to cart\nEnter 0 to Place an order:");
                var input = GetIntegerInput();
                while (!operation.IsToyExists(input) && input != 0)
                {
                    Console.WriteLine("Toy not exists, enter valid ID\nEnter 0 to Place an order:");
                    input = GetIntegerInput();
                }
                if(input == 0)
                {
                    Console.WriteLine("PLACING ORDER");
                    loopRunning = false;
                }
                else
                {
                    Console.WriteLine("Enter Quantity:");
                    var qty = GetIntegerInput();

                    orderItems.Add(new Tuple<int, int>(input, qty));
                }
            }
            if(orderItems.Count == 0)
            {
                Console.WriteLine("Cannot place order with 0 items!");
                Console.WriteLine();
                return;
            }

            var retval = operation.PlaceOrder(loggedInUserId, orderItems);
            var affectivePrice = retval.Item1;
            var discount = retval.Item2;
            if(discount == 0)
            {
                Console.WriteLine($"Order placed successfully. Your payable amount is {affectivePrice}");
            }
            else
            {
                Console.WriteLine($"Order placed successfully. You recieved discount of {discount} on order. Your payable amount is {affectivePrice}");
            }
            Console.WriteLine();
        }

        private static void ViewAllToys()
        {
            var operation = new ToyOperations();
            var toyList = operation.ViewAllToys();
            Console.WriteLine();
            Console.WriteLine("{0,4} {1,12} {2,12}", "ID", "Name", "Price");
            foreach (var toy in toyList)
            {
                Console.WriteLine("{0,4} {1,12} {2,12}", toy.Id, toy.Name, toy.Price);
            }
            Console.WriteLine();
        }

        private static void ViewCustomer()
        {
            Console.WriteLine("Enter customer ID to view details: ");
            var id = GetIntegerInput();

            var operations = new CustomerOperations();
            var customer = operations.ViewUser(id);
            if (customer != null)
            {
                Console.WriteLine();
                Console.WriteLine($"User Name: {customer.FirstName} {customer.LastName}");
                Console.WriteLine($"Email: {customer.Email}");
                Console.WriteLine($"Contact Number: {customer.ContactNumber}");
                Console.WriteLine();
            }
            else
            {
                Console.WriteLine("User not found!");
                Console.WriteLine();
            }
        }

        private static void EditCustomer()
        {
            var operation = new CustomerOperations();
            Console.WriteLine("Enter ID of the customer to edit: ");
            var id = GetIntegerInput();

            if (operation.IsExists(id))
            {
                RegisterCustomer(id);

            }
            else
            {
                Console.WriteLine("User not found!");
            }
        }

        private static void RemoveCustomer()
        {
            Console.WriteLine("Enter customer ID to remove: ");
            var id = GetIntegerInput();

            var operations = new CustomerOperations();
            if(operations.DeleteUser(id))
            {
                Console.WriteLine("User deleted successfully.");
                Console.WriteLine();
            }
            else
            {
                Console.WriteLine("User cannot be deleted!");
                Console.WriteLine();
            }
        }

        private static void RegisterCustomer(int id = 0)
        {
            Console.WriteLine("Enter first name of the user:");
            var fname = GetStringInput();

            Console.WriteLine("Enter last name of the user:");
            var lname = GetStringInput();

            Console.WriteLine("Enter email of the user:");
            var email = GetStringInput();

            Console.WriteLine("Enter contactNumber of the user:");
            var contactNumber = Console.ReadLine();
            long temp;
            while (!long.TryParse(contactNumber, out temp) || contactNumber.Length != 10)
            {
                Console.WriteLine("Invalid input, Try again: ");
                contactNumber = Console.ReadLine();
            }

            Console.WriteLine("Enter Password of the user:");
            var password = Console.ReadLine();
            while (password.Length < 6)
            {
                Console.WriteLine("Invalid input, Try again: ");
                password = Console.ReadLine();
            }
            var cust = new Customer();
            cust.FirstName = fname;
            cust.LastName = lname;
            cust.Email = email;
            cust.ContactNumber = contactNumber;
            cust.Password = password;

            var operations = new CustomerOperations();
            if (id == 0)
            {
                Console.WriteLine("User need to add atleast one address.");
                Console.WriteLine("Enter address: ");
                var address = GetStringInput();

                List<string> addressList = new List<string>();
                addressList.Add(address);

                var needAddress = true;
                while (needAddress)
                {
                    Console.WriteLine("Do you want to add another address? \n\tPress 0 to add another\n\tPress any other key to skip:");
                    var inp = Console.ReadLine();
                    if (inp == "0")
                    {
                        Console.WriteLine("Enter address: ");
                        address = GetStringInput();
                        addressList.Add(address);
                    }
                    else
                    {
                        needAddress = false;
                    }
                }
                var customerId = operations.Insert(cust);

                operations.InsertAddresses(customerId, addressList);
            }
            else
            {
                operations.Update(id, cust);
            }
        }

        public static string GetStringInput()
        {
            var temp = Console.ReadLine();
            while (String.IsNullOrWhiteSpace(temp))
            {
                Console.WriteLine("Invalid input, Try again: ");
                temp = Console.ReadLine();
            }
            return temp;
        }

        public static int GetIntegerInput()
        {
            var temp = Console.ReadLine();
            int input;
            while (! int.TryParse(temp, out input))
            {
                Console.WriteLine("Invalid input, Try again: ");
                temp = Console.ReadLine();
            }
            return input;
        }
    }
}
