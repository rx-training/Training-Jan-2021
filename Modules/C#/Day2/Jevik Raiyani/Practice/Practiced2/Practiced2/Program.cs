using System;
using calc;


namespace Practiced2
{
    class data
    {
        public int Id { get; set; }

        public string Nmae { get; set; }

        public int Price { get; set; }

        public int Qty { get; set; }

        public int Sale
        {
            get
            {
                return compute();
            }
        }

        int sale;

        int compute()
        {
            sale = Price * Qty;
            return sale;
        }
    }

    class helo
    {
        public static string shapename
        {
            get 
            {
                return "rectangle"; 
            }
        }
    }

    //class
    class Rectangle
    {
        int length, width;

        //properties
        public int Length
        {
            get
            {
                return length;
            }
            set
            {
                length = value;
            }
        }

        public int Width
        { get
            {
                return width;
            }
            set 
            {
                width = value;
            }
        }
        //constructor
        public Rectangle(int l, int w)
        {
            length = l;
            width = w;
        }


        public int area()
        {
            return length * width;
        }

        //method
        //public void field(int a,int b)
        //{
        //    length = a;
        //    width = width;
        //}
    }
    class Program
    {
        static void Main(string[] args)
        {
            Rectangle rec1 = new Rectangle(5,10);
            int area = rec1.area();
            Console.WriteLine($"area of {rec1.Length} and {rec1.Width} is {area}");
            Console.WriteLine($"area of {rec1.Length} and {rec1.Width} is { rec1.area()}");

            Console.WriteLine(helo.shapename);

            //Calculator calculator = new Calculator();

            //var result = calculator.add(5, 10);
            //Console.WriteLine(result);
            //Console.WriteLine("enter two numbers");
            //var result2 = calculator.substra(Convert.ToInt32(Console.ReadLine()), Convert.ToInt32(Console.ReadLine()));
            ////Console.WriteLine(result2);

            //data product1 = new data();
            //product1.Id = 1;
            //product1.Nmae = "Bottle";
            //product1.Price = 10;
            //product1.Qty = 5;

            //Console.WriteLine(product1.Sale);

            //data pro2 = new data();
            //pro2.Id = 5;
            //pro2.Nmae = "Newdata";
            //Console.WriteLine(pro2.Sale);

            //data pro3 = new data() { Id = 4, Nmae = "newname", Price = 15, Qty = 15 };

            //data pro44 = new data() { Id = 40, Nmae = "help", Price = 10 };
            //Console.WriteLine("please enter Qty");
            //pro44.Qty = Convert.ToInt32(Console.ReadLine());
            //Console.WriteLine(pro44.Sale);

            //    faculty fa = new faculty(1, "name");
            //    fa.display();

            //    faculty fa1 = new faculty(2, "maya", "abd");
            //    fa1.display();

            //    faculty fa2 = new faculty(3, "sas", "dasd", "sdasd,asd");
            //    fa2.display();
            //


            //data[] dataO = new data[2];

            //for (int i = 0; i < 2; i++)
            //{

            //    Console.WriteLine("enter id, name, price ,qty");
            //    dataO[i] = new data() { Id = Convert.ToInt32(Console.ReadLine()), Nmae = Console.ReadLine(), Price = Convert.ToInt32(Console.ReadLine()),Qty = Convert.ToInt32(Console.ReadLine())}; 


            //}
            //foreach (var item in dataO)
            //{
            //    Console.WriteLine($"id is{item.Id} sale is {item.Sale}");
            //}

            int[,] ar1 = new int[10, 4];
            string[,] ar2 = new string[10, 3];

            for (int i = 0; i < 10; i++)
            {
                Console.WriteLine("name");
                ar2[i, 0] = Console.ReadLine();
                Console.WriteLine("address");
                ar2[i, 1] = Console.ReadLine();
                // i 2 ma grade 6e ..if else..
                Console.WriteLine("hindi maths eng");
                ar1[i, 0] = Convert.ToInt32(Console.ReadLine());
                //......... maths eng
                ar1[i, 3] = ar1[i, 0] + ar1[i, 1] + ar1[i, 2];//sum
            }

        }


    }
}
