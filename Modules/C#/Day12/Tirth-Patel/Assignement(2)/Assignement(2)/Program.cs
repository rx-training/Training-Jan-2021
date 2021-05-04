using System;
using Assignement_2_.Models;
using System.Linq;
using Microsoft.EntityFrameworkCore;
namespace Assignment
{
    class Program
    {
        static int count = 1;
        public static void Checkout(Customers c1)
        {
            var ctx = new BrainsmithContext();
            Console.WriteLine("Select your Shipping Address and Enter Its ID");
            var res = ctx.ShipAddresses.Where(c => c.CustomerID == c1.CId);
            foreach (var item in res)
            {
                Console.WriteLine($"ID:{item.ShipID}\nAddress:{ item.Address}");
            }
            Console.WriteLine("Enter ShipID:");
            //if multipleaddreses
            int shipid = Convert.ToInt32(Console.ReadLine());
            var address = ctx.ShipAddresses.SingleOrDefault(id => id.ShipID == shipid).Address;
            var items = ctx.Orders.SingleOrDefault(c => c.CId == c1.CId);
            var orderId = items.OrderID;

            //joining orderdlist to toys list to get toyname
            var toylist = ctx.Toys.ToList();
            var orderedItemsList = ctx.OrderedItems.Include(t => t.Toys).Where(o => o.OrderID == orderId)
                .ToList();
            var finallist = toylist.Join(
                orderedItemsList,
                toyid => toyid.ToyID,
                orderdid => orderdid.ToysID,
                (toys, orders) => new
                {
                    ToyName = toys.Name,
                    Id = orders.ToysID,
                    Quantity = orders.Quantity,
                    amount = orders.Amount
                }); ;
            Console.WriteLine("order Details");
            //orderId wise itemList
            foreach (var item in finallist)
            {

                Console.WriteLine($"Item:{item.ToyName}");
                Console.WriteLine($"Quantity:{item.Quantity}");
                Console.WriteLine($"Amount:{item.amount}");

            }
            var orderlist = ctx.OrderedItems.ToList();
            //calculating amount
            var amt = from o in orderlist
                      group o by o.OrderID into groups
                      let id = orderId
                      where groups.Key == id
                      select new
                      {
                          orderId = groups.Key,
                          amount = groups.Sum(s => s.Amount)
                      };
            foreach (var item in amt)
            {
                Console.Write($"Final Amount to be paid:{item.amount}\n");

            }
            Console.WriteLine($"ready to ship at:{address}");
        }
        public static void AddToCart(int id, Customers c1, int q)
        {
            //addtocart called create new instance of orderedItem
            using (var ctx = new BrainsmithContext())
            {
                OrderedItems os = new OrderedItems();
                var res = ctx.Toys.Where(s => s.ToyID == id).Select(s => s.Price).ToList();
                var ord = ctx.Orders.Where(c => c.CId == c1.CId).Select(c => c.OrderID);
                foreach (var item in ord)
                {
                    os.OrderID = item;
                }


                os.ToysID = id;
                os.Quantity = q;
                os.Amount = res.Sum() * q;
                ctx.OrderedItems.Add(os);
                ctx.SaveChanges();

            }
        }
        public static void Allproducts()
        {
            using (var ctx = new BrainsmithContext())
            {
                var listofToys = ctx.toysCategories.FromSqlRaw($"execute GetAllproducts").ToList();
               
                Console.WriteLine($"\tID\tCategory-Name\tToy-Name\tPrice");
                foreach (var item in listofToys)
                { 
                       Console.WriteLine($"\t{item.ToyId}\t {item.Cname}\t{item.ToyName}   \t{item.price}");
                    Console.WriteLine("");
                }
            }
        }
        public static void SearchProduct(string s1)
        {
            var ctx = new BrainsmithContext();
            var allToy = ctx.toysCategories.FromSqlRaw($"SerachCategoryWise '{s1}'").ToList();
            //   var allToys = ctx.Categories.Include(c => c.Toys).Where(s => s.Name == s1);
            Console.WriteLine($"\tID\tCategory-Name\tToy-Name\tPrice");
            foreach (var item in allToy)
            {



                Console.WriteLine($"\t{item.ToyId}\t{item.Cname}      {item.ToyName}\t{item.price}");
                Console.WriteLine("");



            }
        }

        static void Main(string[] args)
        {
            Console.WriteLine("\tBrainSmith Toys-Store  C#\r");
            Console.WriteLine("\t------------------------\n");
            Console.WriteLine("\tPlease Register Your Self");
           // Customers c1 = new Customers();
           // ShipAddresses s1 = new ShipAddresses();
           // using (var ctx = new BrainsmithContext())
           // {
           //     c1.AddCustomer();
           //     ctx.Customers.Add(c1);
           //     ctx.SaveChanges();
           //     s1.AddAddress(c1);
           //     ctx.ShipAddresses.Add(s1);
           //     ctx.SaveChanges();
           //     Orders o = new Orders();
           //     o.CId = c1.CId;
           //     ctx.Orders.Add(o);
           //     ctx.SaveChanges();
           // }

            while (true)
            {
                bool flag = false;
                Console.WriteLine("Choose an Option from the following list:");
                Console.WriteLine("\ta - AddAnother-ShipAddress");
                Console.WriteLine("\tv - View-All-the-Product");
                Console.WriteLine("\tb - Buy-Product");
                Console.WriteLine("\tc - CheckOut");
                Console.WriteLine("\ts - Search Prodcut by Category-Name");
                Console.WriteLine("\tE - Press E To Exit App");
                Console.Write("Your option? ");
                char choice = Convert.ToChar(Console.ReadLine());
                switch (choice)
                {
                    case 'a':
                        {
                            ShipAddresses sa = new ShipAddresses();
                           // sa.AddonotherAddress(c1);
                            var ctx = new BrainsmithContext();
                            ctx.ShipAddresses.Add(sa);
                            ctx.SaveChanges();
                            break;
                        }
                    case 'v':
                        {
                            Allproducts();
                            break;
                        }


                    case 's':
                        {
                            Console.WriteLine("Enter Category To search");
                            string Name = Console.ReadLine();
                            SearchProduct(Name);
                        }

                        continue;
                    case 'b':
                        {

                            Allproducts();


                            var ctx = new BrainsmithContext();

                            Console.WriteLine("Enter toyId to purchase It!!!");
                            int id = Convert.ToInt32(Console.ReadLine());
                            Console.WriteLine("Enter Qunatity");
                            int q = Convert.ToInt32(Console.ReadLine());
                          //  AddToCart(id, c1, q);
                        }
                        continue;
                    case 'c':
                        {
                         //   Checkout(c1);
                            //
                        }
                        continue;
                    case 'e':
                        {
                            flag = true;
                        }
                        break;
                }
                if (flag == false)
                {
                    continue;
                }
                else
                    break;
            }

        }
    }
}


