using System;
using stuentInfo;

namespace Day2Practice
{
    class product
    {
        public product()
        {        
        }
        public product(int id, string name)
        {
            this.Id = id;
            this.Name = name;
        }
        public int Id { get; set; }
        public string Name { get; set; }
        public int Price { get; set; }
        public int Qty { get; set; }
        int totalPrice;
        public int TotalPrice
        {
            get {
                return compute();
            }
        }
        int compute()
        {
            return Qty * Price;
        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            calculator cal = new stuentInfo.calculator();
            Console.WriteLine($"Enter two numbers : ");
            int num1 = Convert.ToInt32( Console.ReadLine());
            int num2 = Convert.ToInt32(Console.ReadLine());
            var result = cal.add(num1, num2);
            Console.WriteLine($"Addition of two numbers {num1} and{num2} is {result}");
            // one way to give values
            product p = new product();
            p.Id = 1;
            p.Name = "a";
            p.Qty = 50;
            p.Price = 10;
            Console.WriteLine($"total Price for p : {p.TotalPrice}");
            // second way 
            product p1 = new product() { Id = 2, Name = "b", Price = 100, Qty = 1 };
            Console.WriteLine($"total price for p1 : {p1.TotalPrice}");

            product p2 = new product();
            Console.WriteLine($"id : {p2.Id}, name : {p2.Name} , price : {p2.Price} , qty : {p2.Qty} , total Price : {p2.TotalPrice}");

            product p3 = new product(5,"abdsbd");
            Console.WriteLine($"id : {p3.Id}, name : {p3.Name} , price : {p3.Price} , qty : {p3.Qty} , total Price : {p3.TotalPrice}");

            // array of objects

            product[] productArr = new product[2];

            for (int i = 0; i < productArr.Length; i++)
            {
                Console.WriteLine($"Enter id, name, price and quantity for product {i + 1}");
                productArr[i] = new product() { Id = Convert.ToInt32(Console.ReadLine()), Name = Console.ReadLine(), Price = Convert.ToInt32(Console.ReadLine()), Qty = Convert.ToInt32(Console.ReadLine()) };
            }
            foreach (var item in productArr)
            {
                Console.WriteLine($"Id : {item.Id}, Name : {item.Name}, Price : {item.Price}, Quantity : {item.Qty}, Total Price : {item.TotalPrice}");
            }
        }
    }
}
