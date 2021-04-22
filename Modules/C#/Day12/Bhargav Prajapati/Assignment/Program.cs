using Assignment.Modals;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
namespace Assignment
{
    class CustomerDetails
    {
        public void NewUser()
        {
            ToysCustomerContex c1 = new ToysCustomerContex();
            Console.WriteLine("Enter Your Name :-");
            string Name = Console.ReadLine();
            Console.WriteLine("Enter Contect Number");
            double number = Convert.ToDouble(Console.ReadLine());
            Console.WriteLine("Enter street Name :-");
            string street = Console.ReadLine();
            Console.WriteLine("Enter City");
            string city = Console.ReadLine();
            Console.WriteLine("Enter state ");
            string state = Console.ReadLine();
            Console.WriteLine("Enter Zip");
            double zip = Convert.ToDouble(Console.ReadLine());

            
            List<Customer> cus = new List<Customer>(){ new Customer {CustomerName=Name,ContectNumber=number } };

            foreach (var item in cus)
            {
                c1.Customers.Add(item);
                c1.SaveChanges();
            }
            

            var id = c1.Customers.Single(s => s.CustomerName == Name);
            List<Address> addresses = new List<Address>()
            {
                new Address(){street=street,State=state,City=city,Zip=zip,CustomerId=id.CustomerId}
            };

            foreach (var item in addresses)
            {
                c1.Addresses.Add(item);
                c1.SaveChanges();
            }
            Console.WriteLine($"Your Customer Id Number Is : {id.CustomerId}");

            Console.WriteLine("SuccessFully Register");



        }
        public void UpdateCustomer()
        {
            try
            {
                ToysCustomerContex c1 = new ToysCustomerContex();
                Console.WriteLine("Enter You Customer Id Number ");
                int id = Convert.ToInt32(Console.ReadLine());

                var data = c1.Customers.Single(s => s.CustomerId == id);
                Console.WriteLine("Enter New Name");
                data.CustomerName = Console.ReadLine();
                Console.WriteLine("Enter Contect Number");
                data.ContectNumber = Convert.ToDouble(Console.ReadLine());
                c1.SaveChanges();

            }
            catch (Exception e)
            {
                
                Console.WriteLine("Sorry Id Is Not Vailable");
            }



        }
        public void Deletedata()
        {
            try
            {
                ToysCustomerContex c1 = new ToysCustomerContex();

                Console.WriteLine("Enter Customer Id You Want to Delete");
                int id = Convert.ToInt32(Console.ReadLine());
                var data = c1.Customers.Single(p => p.CustomerId == id);
                c1.Remove(data);
                c1.SaveChanges();
                Console.WriteLine("Deleted data Successfully");
            }
            catch (Exception e)
            {
                Console.WriteLine("Sorry Customer Id Is Not Available");
            }



        }
        public void viewData()
        {
            try
            {
                ToysCustomerContex c1 = new ToysCustomerContex();
                Console.WriteLine("Enter Your Name :-");
                string name = Console.ReadLine();

                var customerdata = c1.Customers.FromSqlRaw($"ViewData {name}").ToList();
                foreach (var item in customerdata)
                {
                    Console.WriteLine("====================Your details ===========================");
                    Console.WriteLine($"Customer Id :- {item.CustomerId}");
                    Console.WriteLine($"Customer Name :- {item.CustomerName}");
                    Console.WriteLine($"Customer Contect Number :- {item.ContectNumber}");
                }
            }
            catch(Exception e)
            {
                Console.WriteLine("Sorry Name is Not Available");
            }




        }
        public void SearchToys()
        {
            try
            {
                ToysCustomerContex c1 = new ToysCustomerContex();
                Console.WriteLine("Enter Toy Name :-");
                string toyname = Console.ReadLine();
                var data = c1.Toys.Include(s=>s.Plants).Single(s=>s.ToyName==toyname);
                Console.WriteLine($"Toy Id :- {data.ToyId}");
                Console.WriteLine($"Toy Name :- {data.ToyName}");
                Console.WriteLine($"toy Price :- {data.ToyPrice}");
                Console.WriteLine($"Manifacture PLant :- {data.Plants.PlantName}");
                Console.WriteLine($"Plant City :- {data.Plants.City}");
                
            }
            catch (Exception e)
            {
                

                Console.WriteLine("Sorry Your Toy Is Not Available");
            }
        }
        public void ViewAllToys()
        {
            ToysCustomerContex c1 = new ToysCustomerContex();
            var stddata = from s in c1.Toys select s;

            foreach (var item in stddata)
            {
                Console.WriteLine("======================Toys Details========================");
                Console.WriteLine($"Toys Id :- {item.ToyId}");
                Console.WriteLine($"Toy Name :- {item.ToyName}");
                Console.WriteLine($"Toy Price :- {item.ToyPrice}");

            }

        }
        public void OrderToy()
        {
            try
            {

                Console.WriteLine("Enter customer Name :-");
                string custname = Console.ReadLine();
                Console.WriteLine("Enter toy name");
                string toyname = Console.ReadLine();
                ToysCustomerContex c1 = new ToysCustomerContex();
                var customerid = c1.Customers.Single(s => s.CustomerName == custname);
                var toyid = c1.Toys.Single(s => s.ToyName == toyname);
                List<ToysPerson> bookingdata = new List<ToysPerson>()
                { new ToysPerson() {CustomerId=customerid.CustomerId,ToyId=toyid.ToyId } };
                foreach (var item in bookingdata)
                {
                    c1.ToysPeople.Add(item);
                    c1.SaveChanges();
                }

                Console.WriteLine("SuccessFully Booked your Toy");
            }
            catch (Exception e)
            {
                Console.WriteLine("You All Ready Booked this item");
            }
            }
        public void viewOrder()
        {
            try
            {
                ToysCustomerContex c1 = new ToysCustomerContex();
                Console.WriteLine("Enter customer Id :-");
                int id = Convert.ToInt32(Console.ReadLine());

                var vieworder = c1.ToysPeople.Include(s => s.Customer).Include(s => s.Toys).Where(s => s.CustomerId == id);

                foreach (var item in vieworder)
                {
                    Console.WriteLine("=======================Booked Item==================== ");
                    Console.WriteLine($"Customer Id :- {item.CustomerId} ");
                    Console.WriteLine($"Customer Name :- {item.Customer.CustomerName}");
                    Console.WriteLine($"Customer Contect :- {item.Customer.ContectNumber}");
                    Console.WriteLine($"Booking of toy :- {item.Toys.ToyName}");
                    Console.WriteLine($"Toy Price :- {item.Toys.ToyPrice}");
                }
            }
            catch(Exception e)
            {
                Console.WriteLine("Customer Id is Not Present ");
            }


        }
        public void RemoveBkkoing()
        {
            try
            { 
            ToysCustomerContex c1 = new ToysCustomerContex();
            Console.WriteLine("Enter your Customer Name ");
            string name = Console.ReadLine();
            Console.WriteLine("Enter Toy you Want To Delete");
            string toy = Console.ReadLine();

            var custid = c1.ToysPeople.Include(s => s.Toys).Include(s => s.Customer).Where
                (s=>s.Customer.CustomerName==name ).Where(s=>s.Toys.ToyName==toy);

            foreach (var item in custid)
            {
                c1.ToysPeople.Remove(item);
                
            }
            c1.SaveChanges();
            Console.WriteLine("Successfully remove the Toy");

            }
            catch (Exception e)
            {
                Console.WriteLine("Check Your Details you are Enterd");
            }



        }
    }


    class Program
    {
        static void Main(string[] args)
        {

            CustomerDetails c1 = new CustomerDetails();
            Console.WriteLine("TOy Shop :-");
            int i = 10;
            while(i==10)
            { 
            Console.WriteLine("Press 1 Register As New Customer ");
            Console.WriteLine("Press 2 Update Your Details");
            Console.WriteLine("Press 3 Delete Account");
            Console.WriteLine("Press 4 Show Your Details");
            Console.WriteLine("Press 5 View All The toys");
            Console.WriteLine("Press 6 Search Toy");
            Console.WriteLine("Press 7 Order Toys");
            Console.WriteLine("Press 8 View Orders");
            Console.WriteLine("Press 9 Remove Orders");
            int ch = Convert.ToInt32(Console.ReadLine());

            switch (ch)
                {
                case 1:
                    c1.NewUser();
                    break;
                case 2:
                    c1.UpdateCustomer();
                    break;
                case 3:
                    c1.Deletedata();
                    break;
                case 4:
                    c1.viewData();
                    break;
                case 5:
                    c1.ViewAllToys();
                    break;
                case 6:
                    c1.SearchToys();
                    break;
                case 7:
                    c1.OrderToy();
                    break;
                case 8:
                    c1.viewOrder();
                    break;
                case 9:
                        c1.RemoveBkkoing();
                        break;

                }

                Console.WriteLine("Press 10 TO Continue.............");
                i = Convert.ToInt32(Console.ReadLine());

            }
        }
    }
}
