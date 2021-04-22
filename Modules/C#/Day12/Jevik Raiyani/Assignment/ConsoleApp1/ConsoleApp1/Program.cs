using System;
using System.Linq;
using Microsoft.EntityFrameworkCore;



namespace ConsoleApp1
{
    class Program
    {

        static void Main(string[] args)
        {
            var context = new ToyCompanyContext();
            var a = context.Orders.FromSqlRaw("exec GetOrderDetails").ToList();
            foreach (var item in a)
            {
                Console.WriteLine(item.OrderId + "   " + item.Quantaty);
            }

            Func<int, int, float> Total = (a, b) => a * b;
            Func<float, float> Discount = d =>
             {
                 if (d < 500) { return 0; }
                 else if (d < 1000) { return (float)(d * 0.10); }
                 else if (d < 2000) { return (float)(d * 0.15); }
                 else { return (float)(d * 0.2); }
             };

            var Order = context.Orders
                .Include(s => s.ToysToy).Include(s => s.CustomerWithAddressCa);

            foreach (var item in Order)
            {
                Console.WriteLine($"{item.OrderId}  {item.ToysToy.ToyName}  {item.ToysToy.ToyPrice}  {item.Quantaty} {Total(item.ToysToy.ToyPrice, item.Quantaty)}  {Discount(Total(item.ToysToy.ToyPrice, item.Quantaty))}");
            }

            foreach (var i in context.Vorders)
            {
                Console.WriteLine($" {i.CustomerName} {i.Address} {i.City} {i.State} {i.Country} {i.ToyName}  {i.Quantaty}");
            }
            Console.WriteLine();
            Console.WriteLine("all product");
            foreach (var item in context.Toys)
            {
                Console.WriteLine($"{item.ToyName}   {item.ToyPrice}");
            }
            
            Console.WriteLine("search item");
            string to = Convert.ToString( Console.ReadLine());
            int p = 1;
            foreach (var item in context.Toys)
            {

                if (to.ToLower() == item.ToyName.ToLower())
                {
                    p--;
                    Console.WriteLine(to + " : is avaliable in Toys" );
                }
                
            }
            if(p==1)
            {
                Console.WriteLine(to + " : is not avaliable in toys");
            }




            Console.WriteLine();
            Console.WriteLine("Place your Order");

            Console.WriteLine("Enter Your Name");
            Customer c = new Customer()
            {
                CustomerName = Convert.ToString(Console.ReadLine())
            };
            context.Customers.Add(c);
            context.SaveChanges();
            Console.WriteLine("Enter address,city,state,country where you want to place order ");
            Address ad = new Address()
            {
                Address1 = Convert.ToString(Console.ReadLine()),
                City= Convert.ToString(Console.ReadLine()),
                State= Convert.ToString(Console.ReadLine()),
                Country= Convert.ToString(Console.ReadLine())
            };
            context.Addresses.Add(ad);
            context.SaveChanges();

            Console.WriteLine();
            Console.WriteLine("all product");
            foreach (var item in context.Toys)
            {
                Console.WriteLine($"{item.ToyId} {item.ToyName}   {item.ToyPrice}");
            }
            Console.WriteLine("id from above for toy");
            int tid =Convert.ToInt32(Console.ReadLine());

            Console.WriteLine("select last id from below");
            foreach (var item in context.Customers)
            {
                Console.WriteLine(item.CustomerId);
            }
            int cid = Convert.ToInt32(Console.ReadLine());

            Console.WriteLine("select last id from below");
            foreach (var item in context.Addresses)
            {
                Console.WriteLine(item.AddressId);
            }
            int adid = Convert.ToInt32(Console.ReadLine());

            CustomerWithAddress cwa = new CustomerWithAddress()
            {
                AddressesAddressId = adid,
                CustomersCustomerId = cid
            };
            context.CustomerWithAddresses.Add(cwa);
            context.SaveChanges();

            Console.WriteLine("select last id from below");
            foreach (var item in context.CustomerWithAddresses)
            {
                Console.WriteLine(item.Caid);
            }
            int cwid = Convert.ToInt32(Console.ReadLine());











        }
    }
}
