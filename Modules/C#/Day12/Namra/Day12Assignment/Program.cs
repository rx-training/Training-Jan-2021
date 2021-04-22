using System;
using System.Collections.Generic;
using System.Linq;
using Day12Assignment.Models;
using Microsoft.EntityFrameworkCore;

namespace Day12Assignment
{
    class Company
    {
        Context context = new Context();
        public void placeOrder(int customerID, string Address)
        {
            string toys = placeToys();
            Address = $"'{Address}'";
            context.Database.ExecuteSqlRaw($"exec spOrders {customerID},{toys},{Address}");
            context.SaveChanges();

            try
            {
                Order od = context.Orders.ToList().Last();
                string OrderedToys = od.Toys.Replace(' ', ',').TrimEnd(',');
                int OfferOrdered = od.offerValue == 7 ? 0 : (od.offerValue * 10);
                Console.WriteLine($"\tOrder Id : {od.OrderId}\n\tCustomer Id : {od.CustomerId}\n\tPlaced Toys : {OrderedToys}\n\tYour Bill : {od.Bill}");
                Console.WriteLine($"\tOffer applied : {OfferOrdered}%\n\tAddress : {od.Address}");
            }
            catch (Exception)
            {
                Console.WriteLine("There is some error in placing order...");
            }
        }
        //to see data by its orderId
        public void DisplayOrder(int DisplayOrderId)
        {
            try
            {
                Order DisplayOrder = context.Orders.Single(s => s.OrderId == DisplayOrderId);
                Console.WriteLine($"-----------------------------------------------------------------------------------------------");
                Console.WriteLine($"Data for order Id : {DisplayOrderId}");
                Console.WriteLine($"Customer Id : {DisplayOrder.CustomerId}");
                
                Console.WriteLine($"Toy's id you have ordered : {DisplayOrder.Toys}");            
                Console.WriteLine($"Your Bill was {DisplayOrder.Bill}, you got {DisplayOrder.offerValue*10} %");
                Console.WriteLine($"Finally, You paid {DisplayOrder.Bill - (DisplayOrder.Bill * DisplayOrder.offerValue / 10)}");
                Console.WriteLine($"Your order is placed at address : {DisplayOrder.Address}");
            }
            catch (Exception)
            {
                Console.WriteLine($"There is no such order for order id : {DisplayOrderId}");
            }
        }
        // Display order by customer id
        public void DisplayOrderCustomer(int DisplayOrderCustomer)
        {
            try
            {
                context.Customers.Single(s => s.CustomerId == DisplayOrderCustomer);
                foreach (var item in context.Orders)
                {
                    if(item.CustomerId == DisplayOrderCustomer)
                    {
                        int offerDisplayCustomer = item.offerValue == 7 ? 0 : item.offerValue * 10;
                        Console.WriteLine($"Order Id : {item.OrderId}, Toys : {item.Toys}\t, Bill : {item.Bill}\t, Offer : {offerDisplayCustomer}%\t, Address : {item.Address}");
                    }
                }
            }
            catch (Exception)
            {
                Console.WriteLine("Customer id is wrong...");
            }
        }
        //Delete toy by toy name...
        public void deleteToy(string DeleteToyName)
        {
            try
            {
                Toy deleteToy = context.Toys.Single(s => s.ToyName == DeleteToyName);
                context.Toys.Remove(deleteToy);
                context.SaveChanges();
                Console.WriteLine($"Toy {DeleteToyName} is deleted successfully...");
            }
            catch (Exception)
            {
                Console.WriteLine($"Toy named {DeleteToyName} is not found...");
            }
        }

        // Update toy as per requirement...
        public void updateToy(string UpdateToyName)
        {
            try
            {
                Toy updateToy = context.Toys.Single(s => s.ToyName == UpdateToyName);
                Console.WriteLine($"What would you like to update?");
                Console.WriteLine($"1. Toy Name\n2. Price \n3.Type of toy\n4.Plant");
                int updateChoice = Convert.ToInt32(Console.ReadLine());

                switch(updateChoice)
                {
                    case 1:
                        Console.WriteLine("Enter toy name to update:");
                        string updateNameToy = Console.ReadLine();
                        try
                        {
                            context.Toys.Single(s => s.ToyName == updateNameToy);
                            Console.WriteLine("Name is not allowed...");
                        }
                        catch (Exception)
                        {
                            updateToy.ToyName = updateNameToy;
                            context.SaveChanges();
                            Console.WriteLine($"Toy {UpdateToyName} is updated with name {updateNameToy}");
                        }
                        break;
                    case 2:
                        Console.WriteLine("Please enter new price :");
                        int UpdateToyPrice = Convert.ToInt32(Console.ReadLine());
                        if(UpdateToyPrice > 100)
                        {
                            updateToy.Price = UpdateToyPrice;
                            context.SaveChanges();
                            Console.WriteLine($"New price for {UpdateToyName} is {UpdateToyPrice}");
                        }
                        else
                        {
                            Console.WriteLine($"Price must be greater than 100...");
                        }
                        break;
                    case 3:
                        Console.WriteLine("Please enter new type of toy");
                        int UpdateToyType = Convert.ToInt32(Console.ReadLine());
                        try
                        {
                            context.TypeOfToys.Single(s => s.TypeId == UpdateToyType);
                            updateToy.TypeId = UpdateToyType;
                            context.SaveChanges();
                            Console.WriteLine($"The type for {UpdateToyName} is updated and type id is {UpdateToyType}");
                        }
                        catch (Exception)
                        {
                            Console.WriteLine("Entered type is not found...");
                        }
                        break;
                    case 4:
                        Console.WriteLine("Please enter new plant :");
                        int UpdateToyPlant = Convert.ToInt32(Console.ReadLine());
                        try
                        {
                            context.Plants.Single(s => s.PlantId == UpdateToyPlant);
                            updateToy.PlantId = UpdateToyPlant;
                            context.SaveChanges();
                            Console.WriteLine($"Plant for {UpdateToyName} is updated and plant id is {UpdateToyPlant}");
                        }
                        catch (Exception)
                        {
                            Console.WriteLine($"Entered plant id is not found...");
                        }
                        break;
                    default:
                        Console.WriteLine($"You entered wrong choice");
                        break;
                }
            }
            catch (Exception)
            {
                Console.WriteLine($"You entered wrong toy name...");
            }
        }
        public void AddToy(string AddToyName, int AddToyPrice, int AddToyType,int AddToyPlant)
        {
            try
            {
                context.Toys.Single(s => s.ToyName == AddToyName);
                Console.WriteLine($"Toy named {AddToyName} is already there...");
            }
            catch (Exception)
            {
                try
                {
                    context.TypeOfToys.Single(s => s.TypeId == AddToyType);
                    context.Plants.Single(s => s.PlantId == AddToyPlant);
                    if (AddToyPrice > 100)
                    {
                        context.Toys.Add(new Toy() { ToyName = AddToyName, Price = AddToyPrice, TypeId = AddToyType, PlantId = AddToyPlant });
                        context.SaveChanges();
                        Console.WriteLine("Toy is added successfully");
                        Console.WriteLine($"Toy id : {context.Toys.ToList().Last().ToyId}"); 
                    }
                    else
                    {
                        Console.WriteLine("Price must be greater than 100...");
                    }
                }
                catch (Exception)
                {
                    Console.WriteLine($"Plant or type is wrong...");
                }
            }
        }

        // To get toys in order
        static string placeToys()
        {
            
            int flag = 0;
            string str = "'";
            while(flag != 1)
            {
                Console.WriteLine($"Want to add product?");
                Console.WriteLine($"Enter yes to add toys, no to place order");
                string choice = Console.ReadLine();
                if (choice.ToLower() == "yes")
                {
                    Console.WriteLine($"Enter toy id:");
                    int toyId = Convert.ToInt32(Console.ReadLine());
                    Context con = new Context();
                    try
                    {
                        Toy toy = con.Toys.Single(s => s.ToyId == toyId);
                        str += $"{toyId},";
                    }
                    catch (Exception)
                    {
                        Console.WriteLine($"please enter a valid toy id ...");
                    }
                }
                else
                {
                    Console.WriteLine("your order is placed...");
                    flag = 1;
                }

            }
            return $"{str}'";
        }
        public void AddPlant(string AddPlantName)
        {
            try
            {
                context.Plants.Single(s => s.PlantName == AddPlantName);
                Console.WriteLine("Plant is already there...");
            }
            catch (Exception)
            {
                Plant addPlant = new Plant() { PlantName = AddPlantName};
                context.Plants.Add(addPlant);
                context.SaveChanges();
                Plant newPlant = context.Plants.ToList().Last();
                Console.WriteLine($"New Plant {newPlant.PlantName} is added SuccessFully and id is {newPlant.PlantId}");
            }
        }
        public void UpdatePlant(string UpdatePlantName)
        {
            try
            {
                Plant updatePlant = context.Plants.Single(s => s.PlantName == UpdatePlantName);
                Console.WriteLine($"Please enter new plant name to update :");
                string updateNamePlant = Console.ReadLine();
                try
                {
                    context.Plants.Single(s => s.PlantName == updateNamePlant);
                    Console.WriteLine("Plant name is already exists...");
                }
                catch (Exception)
                {
                    updatePlant.PlantName = updateNamePlant;
                    context.SaveChanges();
                    Console.WriteLine($"Plant {UpdatePlantName} is updated with {updateNamePlant}");
                }
            }
            catch (Exception)
            {
                Console.WriteLine("Plant name is not found...");
            }
        }
        public void DeletePlant(string DeletePlantName)
        {
            try
            {
                Plant deleteplant = context.Plants.Single(s => s.PlantName == DeletePlantName);
                context.Plants.Remove(deleteplant);
                context.SaveChanges();
                Console.WriteLine($"Plant {DeletePlantName} is deleted successfully...");
            }
            catch (Exception)
            {
                Console.WriteLine($"Plant doesn't exist...");
            }
        }
        public void AddType(string AddTypeName)
        {
            try
            {
                context.TypeOfToys.Single(s => s.TypeName == AddTypeName);
                Console.WriteLine("Type is already exists...");
            }
            catch (Exception)
            {
                TypeOfToy addType = new TypeOfToy() { TypeName = AddTypeName };
                context.TypeOfToys.Add(addType);
                context.SaveChanges();

                TypeOfToy AddedType = context.TypeOfToys.ToList().Last();
                Console.WriteLine($"New type of toy is {AddedType.TypeName} and id is {AddedType.TypeId}");
            }
        }
        public void UpdateType(string UpdateTypeName)
        {
            try
            {
                TypeOfToy updateType = context.TypeOfToys.Single(s => s.TypeName == UpdateTypeName);
                Console.WriteLine($"Enter type name to update it :");
                string UpdateNameType = Console.ReadLine();
                try
                {
                    context.TypeOfToys.Single(s => s.TypeName == UpdateNameType);
                    Console.WriteLine("Type name is already exists...");
                }
                catch (Exception)
                {
                    updateType.TypeName = UpdateNameType;
                    context.SaveChanges();
                    Console.WriteLine($"The type {UpdateTypeName} is updated with {UpdateNameType}");
                }
            }
            catch (Exception)
            {
                Console.WriteLine($"Type {UpdateTypeName} doesn't exists...");
            }
        }
        public void DeleteType(string deleteTypeName)
        {
            try
            {
                TypeOfToy deleteType = context.TypeOfToys.Single(s => s.TypeName == deleteTypeName);
                context.TypeOfToys.Remove(deleteType);
                context.SaveChanges();
                Console.WriteLine($"Type {deleteTypeName} is deelted successfully..");
            }
            catch (Exception)
            {
                Console.WriteLine($"Type doesn't exists...");
            }
        }
        public void AddCustomer(string AddCustomerName, string AddCustomerPhone)
        {
            try
            {
                context.Customers.Single(s => s.CustomerName == AddCustomerName);
                Console.WriteLine($"There is already a customer with same name, please try with another name...");
            }
            catch (Exception)
            {
                try
                {
                    if (AddCustomerPhone.Length != 10)
                    {
                        throw new Exception();
                    }
                    else
                    {
                        char[] phoneAddArray = AddCustomerPhone.ToCharArray();
                        foreach (char item in phoneAddArray)
                        {
                            if ((int)item > 57 || (int)item < 48)
                            {
                                throw new Exception();
                            }
                        }
                    }
                    Customer addCustomer = new Customer() { CustomerName = AddCustomerName, Contact = AddCustomerPhone };
                    context.Customers.Add(addCustomer);
                    context.SaveChanges();

                    Customer addedCustomer = context.Customers.ToList().Last();
                    Console.WriteLine($"Your id is {addedCustomer.CustomerId}, kindly note it for further shopping...");

                }
                catch (Exception)
                {
                    Console.WriteLine("Please enter a valid contact number...");
                }
            }
        }
        public void UpdateCustomer(string UpdateCustomerName)
        {
            try
            {
                Customer updateCustomer = context.Customers.Single(s => s.CustomerName == UpdateCustomerName);

                Console.WriteLine($"What do you want change?");
                Console.WriteLine($"1.Name \n2.Contact Number");
                int choiceCustomer = Convert.ToInt32(Console.ReadLine());
                switch(choiceCustomer)
                {
                    case 1:
                        Console.WriteLine("Please enter new name");
                        string UpdateNameCustomer = Console.ReadLine();
                        try
                        {
                            context.Customers.Single(s => s.CustomerName == UpdateNameCustomer);
                            Console.WriteLine($"Please choose another name to apply...");
                        }
                        catch (Exception)
                        {
                            updateCustomer.CustomerName = UpdateNameCustomer;
                            context.SaveChanges();
                            Console.WriteLine($"Customer {UpdateCustomerName} is updated with name {UpdateNameCustomer}");
                        }
                        break;
                    case 2:
                        Console.WriteLine("Please enter new contact number :");
                        string UpdateContactCustomer = Console.ReadLine();
                        try
                        {
                            if (UpdateContactCustomer.Length != 10)
                            {
                                throw new Exception();
                            }
                            else
                            {
                                char[] phoneAddArray = UpdateContactCustomer.ToCharArray();
                                foreach (char item in phoneAddArray)
                                {
                                    if ((int)item > 57 || (int)item < 48)
                                    {
                                        throw new Exception();
                                    }
                                }
                            }
                            updateCustomer.Contact = UpdateContactCustomer;
                            context.SaveChanges();

                            Console.WriteLine($"Your id is {UpdateCustomerName} is updated and new contact is {UpdateContactCustomer} ");

                        }
                        catch (Exception)
                        {
                            Console.WriteLine("Please enter a valid contact number...");
                        }
                        break;
                    default:
                        Console.WriteLine("PLease enter a valid choice...");
                        break;
                }
            }
            catch (Exception)
            {
                Console.WriteLine("Custome doesn't exists...");
            }
        }
        public void DeleteCustomer(string DeleteCustomerName)
        {
            try
            {
                Customer deleteCustomer = context.Customers.Single(s => s.CustomerName == DeleteCustomerName);
                context.Customers.Remove(deleteCustomer);
                context.SaveChanges();
                Console.WriteLine($"Customer {DeleteCustomerName} is deleted successfully...");
            }
            catch (Exception)
            {
                Console.WriteLine("Customer doesn't exist...");
            }
        }
    }
   
    class Program
    {
        static void Main(string[] args)
        {
            Company company = new Company();
            //company.placeOrder(1, "'Nandanvan , Gokul'");
            //company.AddToy("Rabbit",500,1,1);
            //company.deleteToy("Rabbit");
            //company.DisplayOrder(27);
            //company.updateToy("RabbitToy");
            //company.DisplayOrderCustomer(1);
            //company.AddPlant("F");
            //company.UpdatePlant("F");
            //company.DeletePlant("E");
            //company.AddType("F");
            //company.UpdateType("F");
            //company.DeleteType("fe");
            //company.UpdateCustomer("Ashika");
            //company.AddCustomer("Asha", "9737145445");

            //company.DeleteCustomer("Ashika");
            int ChoiceOperation = 0;
            while(ChoiceOperation != 6)
            {
                Console.WriteLine($"----------------------------------------------------------------------------------------------------");
                Console.WriteLine($"With whom you would like to go ahead...");
                Console.WriteLine($"\t1.Toy\t\t2.Customer\n\t3.Plant\t\t4.Type\n\t5.Order\t\t6.Exit");
                Console.WriteLine("Please enter your choice");
                int EnterChoice = Convert.ToInt32(Console.ReadLine());

                switch (EnterChoice)
                {
                    case 1:
                        Console.WriteLine("You chose toy...");
                        Console.WriteLine($"What would you want to perform?\n\t1.Add\n\t2.Update\t\t3.Delete");
                        int ToyChoice = Convert.ToInt32(Console.ReadLine());
                        switch (ToyChoice)
                        {
                            case 1:
                                Console.WriteLine($"Please enter toy name:");
                                string companyAddToyName = Console.ReadLine();
                                Console.WriteLine($"Enter price:");
                                int companyAddToyPrice = Convert.ToInt32(Console.ReadLine());
                                Console.WriteLine($"Enter plant id and type id respectively:");
                                int companyAddToyPlant = Convert.ToInt32(Console.ReadLine());
                                int companyAddToyType = Convert.ToInt32(Console.ReadLine());
                                company.AddToy(companyAddToyName,companyAddToyPrice,companyAddToyType,companyAddToyPlant);
                                break;
                            case 2:
                                Console.WriteLine($"Enter toy name to update it:");
                                string companyUpdateToyName = Console.ReadLine();
                                company.updateToy(companyUpdateToyName);
                                break;
                            case 3:
                                Console.WriteLine($"Enter toy name to delete it:");
                                string companyDeleteToyName = Console.ReadLine();
                                company.deleteToy(companyDeleteToyName);
                                break;
                            default:
                                Console.WriteLine($"Please choose appropriate operation in Toy");
                                break;
                        }
                        break;
                    case 2:
                        Console.WriteLine("You chose customer...");
                        Console.WriteLine($"What would you want to perform?\n\t1.Add\n\t2.Update\n\t3.Delete");
                        int CustomerChoice = Convert.ToInt32(Console.ReadLine());
                        switch (CustomerChoice)
                        {
                            case 1:
                                Console.WriteLine($"Enter new customer name:");
                                string companyAddCustomerName = Console.ReadLine();
                                Console.WriteLine($"Enter your contact number:");
                                string comapnyAddCustomerContact = Console.ReadLine();
                                company.AddCustomer(companyAddCustomerName,comapnyAddCustomerContact);
                                break;
                            case 2:
                                Console.WriteLine($"Enter customer name to update it:");
                                string companyUpdateCustomerName = Console.ReadLine();
                                company.UpdateCustomer(companyUpdateCustomerName);
                                break;
                            case 3:
                                Console.WriteLine($"Enter customer name to delete it:");
                                string companyDeleteCustomerName = Console.ReadLine();
                                company.DeleteCustomer(companyDeleteCustomerName);
                                break;
                            default:
                                Console.WriteLine($"Please choose appropriate operation in Customer");
                                break;
                        }
                        break;
                    case 3:
                        Console.WriteLine("You chose plant...");
                        Console.WriteLine($"What would you want to perform?\n\t1.Add\n\t2.Update\n\t3.Delete");
                        int PlantChoice = Convert.ToInt32(Console.ReadLine());
                        switch (PlantChoice)
                        {
                            case 1:
                                Console.WriteLine($"Enter plant name to add it:");
                                string companyAddPlant = Console.ReadLine();
                                company.AddPlant(companyAddPlant);
                                break;
                            case 2:
                                Console.WriteLine($"Enter plant name to update it:");
                                string companyUpdatePlant = Console.ReadLine();
                                company.UpdatePlant(companyUpdatePlant);
                                break;
                            case 3:
                                Console.WriteLine($"Enter plant name to delete it:");
                                string companyDeletePlant = Console.ReadLine();
                                company.DeletePlant(companyDeletePlant);
                                break;
                            default:
                                Console.WriteLine($"Please choose appropriate operation in plant...");
                                break;
                        }
                        break;
                    case 4:
                        Console.WriteLine("You chose type of toy...");
                        Console.WriteLine($"What would you want to perform?\n\t1.Add\n\t2.Update\n\t3.Delete");
                        int TypeChoice = Convert.ToInt32(Console.ReadLine());
                        switch (TypeChoice)
                        {
                            case 1:
                                Console.WriteLine($"Enter type of toy name to add it:");
                                string companyAddType = Console.ReadLine();
                                company.AddType(companyAddType);
                                break;
                            case 2:
                                Console.WriteLine($"Enter type of toy name to update it:");
                                string companyUpdateType = Console.ReadLine();
                                company.UpdateType(companyUpdateType);
                                break;
                            case 3:
                                Console.WriteLine($"Enter type of toy name to delete it:");
                                string companyDeleteType = Console.ReadLine();
                                company.DeleteType(companyDeleteType);
                                break;
                            default:
                                Console.WriteLine($"Please choose appropriate operation in Type of toy...");
                                break;
                        }
                        break;
                    case 5:
                        Console.WriteLine("You chose order...");
                        Console.WriteLine($"What would you want to perform?\n\t1.Place your order\n\t2.Get your data by customer id \n\t3.Get your order data by order id");
                        int OrderChoice = Convert.ToInt32(Console.ReadLine());
                        switch (OrderChoice)
                        {
                            case 1:
                                Console.WriteLine("Enter customer id and address where to place order:");
                                int companyAddOrderId = Convert.ToInt32(Console.ReadLine());
                                string companyAddOrderAddress = Console.ReadLine();
                                company.placeOrder(companyAddOrderId,companyAddOrderAddress);
                                break;
                            case 2:
                                Console.WriteLine("Enter customer id to find all orders :");
                                int companyFindOrderCustomer = Convert.ToInt32(Console.ReadLine());
                                company.DisplayOrderCustomer(companyFindOrderCustomer);
                                break;
                            case 3:
                                Console.WriteLine("Enter order id to find order data :");
                                int companyFindOrder = Convert.ToInt32(Console.ReadLine());
                                company.DisplayOrder(companyFindOrder);
                                break;

                            default:
                                Console.WriteLine($"Please choose appropriate operation in Order");
                                break;
                        }
                        break;
                    case 6:
                        ChoiceOperation = 6;
                        Console.WriteLine("Exited successfully...");
                        break;
                    default:
                        Console.WriteLine("please enter a valid choice...");
                        break;
                }
            }

        }
    }
}
