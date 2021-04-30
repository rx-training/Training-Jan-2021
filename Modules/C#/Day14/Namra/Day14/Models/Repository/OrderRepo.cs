using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Day14.Models.IRepository;

namespace Day14.Models.Repository
{
    public class OrderRepo : Company<Order> , IOrder
    {
        private readonly Day14AssignmentContext con;
        public OrderRepo(Day14AssignmentContext context) : base(context)
        {
            this.con = context;
        }
        
        public string OrderToys()
        {
            int flag = 0;
            string str = "'";
            while (flag != 1)
            {
                Console.WriteLine($"Want to add product?");
                Console.WriteLine($"Enter yes to add toys, no to place order");
                string choice = Console.ReadLine();
                if (choice.ToLower() == "yes")
                {
                    Console.WriteLine($"Enter toy id:");
                    int toyId = Convert.ToInt32(Console.ReadLine());
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

        public int Bill(string Toys)
        {
            int sum = 0;
            for(int i = 0;i < Toys.Length; i++)
            {
                if(i%2 == 0)
                {
                    sum += con.Toys.Single(s => s.ToyId == Int32.Parse(Toys.Substring(i, 1))).Price;
                }
            }
            return sum;
        }
        public int Offer(int Bill)
        {
            if (Bill < 1000)
                return 7;
            else if (Bill < 2000)
                return 1;
            else if (Bill < 3500)
                return 2;
            else if (Bill < 5000)
                return 3;
            else if (Bill < 6500)
                return 4;
            else if (Bill < 10000)
                return 5;
            else
                return 6;
        }
        
    }
}
