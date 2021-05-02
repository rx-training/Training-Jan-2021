using System;
using System.Linq;
using ToyAssignment.Model;
using ToyAssignment.Models;
using System.Data;
using System.Data.SqlClient;

namespace ToyAssignment
{
    public class Program
    {
        public void Addoffer()
        {
            //var offer = new Offer() { Offername = "Get20OFf",discount=20 };
            var offer = new Offer() { Offername = "Free50", discount = 50 };
            var toycontext = new Toycontext();
            toycontext.Offers.Add(offer);
            toycontext.SaveChanges();
        }
        public void AddToytype()
        {
            var toytype = new Toyplant() { Toyplantname="plBus"};
            var toycontext = new Toycontext();
            toycontext.Toyplants.Add(toytype);
            toycontext.SaveChanges();
        }
        public void AddToy()
        {
            var toytype = new Toyplant() { Toyplantname = "Bus" };
            var toycontext = new Toycontext();
            toycontext.Toyplants.Add(toytype);
            toycontext.SaveChanges();
        }
        public void NewCustomers(string Customername,long Customerphoneno,string CAddress)
        {
            var Customer = new Customer() {Customername=Customername,Customerphoneno=Customerphoneno,CustomerAddress = CAddress };
            var toycontext = new Toycontext();
            toycontext.Customers.Add(Customer);
            toycontext.SaveChanges();
            Console.WriteLine("Customer Create Sucessfully\n");
        }
        public void UpdateCustomer(long Cphoneno)
        {
            var Customer = new Customer();
            var toycontext = new Toycontext();
            var result = toycontext.Customers.Where(s => s.Customerphoneno == Cphoneno);
            foreach (var item in result)
            {
                Console.WriteLine("\nCustomername is {0} and phone no is {1} and address is {2}",item.Customername,item.Customerphoneno,item.CustomerAddress);
                Console.WriteLine("\nEnter Customer Name : \n");
                var Customername = Console.ReadLine();
                Console.WriteLine("\nEnter Customer PhoneNo : \n");
                var Customerphoneno = Convert.ToInt64(Console.ReadLine());
                Console.WriteLine("\nEnter Customer Address : \n");
                var CAddress = Console.ReadLine();
                var Customerob = new Customer() { Customername = Customername, Customerphoneno = Customerphoneno, CustomerAddress = CAddress };
                toycontext.Customers.Add(Customerob);
                toycontext.SaveChanges();
            }                   
        }
        public void DeleteCustomer(long Cphoneno)
        {
            var Customer = new Customer();
            var toycontext = new Toycontext();
            var result = toycontext.Customers.Single(s => s.Customerphoneno == Cphoneno);
            toycontext.Customers.Remove(result);
            toycontext.SaveChanges();

        }
        public void OrderCustomer(long Cphonenos,int toyids,int offerids)
        {
            var toycontext = new Toycontext();
            var Customer = new Customer();
            var Cno = toycontext.Customers.Single(s => s.Customerphoneno == Cphonenos);
            var Toys = new Toy();
            var tid = toycontext.Toys.Single(s => s.Toyid == toyids);
            var offer = new Offer();
            var offid = toycontext.Offers.Single(s => s.Offerid == offerids);
            int ordertotalprice = tid.Toyprice;
            int orderdiscount = offid.discount;
            int orderFinalprice = ordertotalprice - orderdiscount;
            Order order = new Order() {cusomerName=Cno.Customername,Toy= tid,offerid=offid.Offerid,Totalprice=ordertotalprice,Discount=orderdiscount,Finalprice=orderFinalprice};
            toycontext.Orders.Add(order);
            toycontext.SaveChanges();
            Console.WriteLine("Create a new Customer Name {0}\n , Toy name {1} \n with apply offer {2} \n get discount is {3},final pay to oreder {4}",Cno.Customername,tid.Toyname,offid.Offername,orderdiscount,orderFinalprice);
        }
        public void Vieworder()
        {
            Order ob = new Order();
            Console.WriteLine("It on Working.");
            //var result = toycontext.Customers.Single(s => s.Customerphoneno == Cphoneno);
            //toycontext.Customers.Remove(result);
        }
        static void Main(string[] args)
        {
            Program ob = new Program();
            //offer table in add offer
            //ob.Addoffer();
            //offer table in add offer
            //ob.AddToytype();
            // table in add offer
            //ob.AddToytype();
            Console.WriteLine("Create a new Customer Enter: 1\n Customer Allready Create Enter : 2\n");
            int customer = Convert.ToInt32(Console.ReadLine());
            switch (customer)
            {
                case 1:
                    Console.WriteLine("Enter Customer Name : \n");
                    var Customername = Console.ReadLine();
                    Console.WriteLine("\nEnter Customer PhoneNo : \n");
                    var Customerphoneno = Convert.ToInt64(Console.ReadLine());
                    Console.WriteLine("\nEnter Customer Address : \n");
                    var CAddress = Console.ReadLine();
                    ob.NewCustomers(Customername,Customerphoneno,CAddress);
                    break;
                case 2:
                    Console.WriteLine("update a  Customer  Enter : 1 \tDelete a  Customer  Enter : 2 \torder a  Customer  Enter : 3 \t");
                    int num = Convert.ToInt32(Console.ReadLine());
                    switch (num)
                    {
                        case 1:
                            Console.WriteLine("\nEnter Phone No of Customer:");
                            long phoneno = Convert.ToInt64(Console.ReadLine());
                            ob.UpdateCustomer(phoneno);
                            break;
                        case 2:
                            Console.WriteLine("\nEnter Phone No of Customer For update:");
                            long cphoneno = Convert.ToInt64(Console.ReadLine());
                            ob.DeleteCustomer(cphoneno);
                            break;
                        case 3:
                            Console.WriteLine("\n New order Create Enter : 1\n view all order data Enter : 2");
                            int nums = Convert.ToInt32(Console.ReadLine());
                            switch (num)
                            {
                                case 1:
                                    Console.WriteLine("\nEnter Phone No of Customer:");
                                    long ocphoneno = Convert.ToInt64(Console.ReadLine());
                                    Console.WriteLine("\nEnter toy name is Bus enter 1\n Car enter 2\n Plane enter 3\n Ludo enter 4\n Criket enter 5\n:");
                                    int octoy = Convert.ToInt32(Console.ReadLine());
                                    Console.WriteLine("\nEnter Offer name is Get20OFf enter 1\n Get30off enter 2\n Free50 enter 3\n:");
                                    int ocoffer = Convert.ToInt32(Console.ReadLine());
                                    ob.OrderCustomer(ocphoneno, octoy, ocoffer);
                                    break;
                                case 2:

                                    ob.Vieworder();
                                    break;
                            }

                            break;
                        default :
                            Console.WriteLine("Enter number only that exsit writen in commnet");
                            break;
                    }
                    break;
                default:
                   Console.WriteLine("Enter number only that exsit writen in commnet");
                    break;
            }
        }
    }
}
