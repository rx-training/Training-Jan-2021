using Assignmwnt10.Models;
using Microsoft.EntityFrameworkCore;
using System;

namespace Assignmwnt10
{
    public class PutToy
    {
        ToyDBContext t = new ToyDBContext();
        public void AddToy(string name, int quantity, int price)
        {
            var t1 = new Toy() { Name = name, Quantity = quantity, Price = price };
            t.Add(t1);
            t.SaveChanges();
        }
    }
    public class PutManufacturingPlant
    {
        ToyDBContext t = new ToyDBContext();
        public void AddPlant(string name, string address, int id)
        {
            var a = new ManufacturingPlant() { ManufacturingPlantName = name, ManufacturingPlantAddress = address, ToyId = id };
            t.Add(a);
            t.SaveChanges();
        }
    }

    public class GetCustomer
    {
        ToyDBContext t = new ToyDBContext();
        public void AddCustomer(string CName, string CAddress)
        {
            var c = new Customer() { CustomerName = CName, CustomerAddress = CAddress };
            t.Add(c);
            t.SaveChanges();
        }
        public void UpdateCustomer(int cid, int custid, string CName, string CAddress)
        {
            var c1 = new Customer() { CustomerId = cid, CustomerName = CName, CustomerAddress = CAddress };
            t.Update(c1);
            t.SaveChanges();
        }
        public void RemoveCustomer(int cid)
        {
            var c2 = new Customer() { CustomerId = cid };
            t.Remove(c2);
            t.SaveChanges();
        }
        public void ViewAllToys()
        {
            var r = t.Toys;
            foreach (var item in r)
            {
                Console.WriteLine(item.ToyId);
                Console.WriteLine(item.Name);
                Console.WriteLine(item.Quantity);
                Console.WriteLine(item.Price);
            }
        }
        public void FindToy(string name)
        {
            var r = t.Toys;
            foreach (var item in r)
            {
                if (name == item.Name)
                {
                    Console.WriteLine(item.ToyId);
                    Console.WriteLine(item.Name);
                    Console.WriteLine(item.Quantity);
                    Console.WriteLine(item.Price);
                }
            }
        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            GetCustomer c = new GetCustomer();
            PutToy p = new PutToy();

            PutManufacturingPlant m = new PutManufacturingPlant();
            Console.WriteLine("Enter your choice:");
            int choice = Convert.ToInt32(Console.ReadLine());
            switch (choice)
            {
                case 1:
                    Console.WriteLine("Enter Customer Name:");
                    string CName = Console.ReadLine();
                    Console.WriteLine("Enter Customer Address:");
                    string CAddress = Console.ReadLine();
                    c.AddCustomer(CName, CAddress);
                    break;
                case 2:
                    Console.WriteLine("Enter Customer id which you want to update");
                    int CustID1 = Convert.ToInt32(Console.ReadLine());
                    Console.WriteLine("Enter Details to update");
                    Console.WriteLine("Enter CustomerID of Customer:");
                    int custID = Convert.ToInt32(Console.ReadLine());
                    Console.WriteLine("Enter Customer Name of Customer:");
                    string CNam = Console.ReadLine();
                    Console.WriteLine("Enter Address of Customer:");
                    string CAddr = Console.ReadLine();
                    c.UpdateCustomer(CustID1, custID, CNam, CAddr);
                    break;
                case 3:
                    Console.WriteLine("Enter CustomerID you want to remove:");
                    int custid = Convert.ToInt32(Console.ReadLine());
                    c.RemoveCustomer(custid);
                    break;
                case 4:
                    c.ViewAllToys();
                    break;
                case 5:
                    Console.WriteLine("enter Name of Toy:");
                    string name = Console.ReadLine();
                    Console.WriteLine("enter Quantity of Toy:");
                    int quantity = Convert.ToInt32(Console.ReadLine());
                    Console.WriteLine("enter Price of Toy:");
                    int price = Convert.ToInt32(Console.ReadLine());
                    p.AddToy(name, quantity, price);
                    break;
                case 6:
                    Console.WriteLine("Enter toy name which you want to find:");
                    string tname = Console.ReadLine();
                    c.FindToy(tname);
                    break;

                case 8:
                    Console.WriteLine("Entre Manufacturing Plant Name:");
                    string mname = Console.ReadLine();
                    Console.WriteLine("Entre Manufacturing Plant Address:");
                    string maddress = Console.ReadLine();
                    Console.WriteLine("Enter Toy id:");
                    int id = Convert.ToInt32(Console.ReadLine());
                    m.AddPlant(mname, maddress, id);
                    break;
                case 9:
                    var context = new ToyDBContext();
                    context.Orders.FromSqlRaw("CreateToys @p0, @p1,@p2,@p3,@p4,@p5", parameters: new[] { 1, 1000, 100, 900, 1, 1 });
                    Console.WriteLine("Inserted successfully");
                    break;
            }
        }
    }
}
