using System;

namespace Assignment
{
    delegate int Area(int a, int b);
    delegate int Add(int a, int b);
    class Program
    {
        static void Main(string[] args)
        {
            //Compute area of rectangle using func delegate
            
            Console.WriteLine("enter lenght and width of Rectangle");
            int a = Convert.ToInt32(Console.ReadLine());
            int b = Convert.ToInt32(Console.ReadLine());
            //this is the old method with function defined
            //Rectangle rec = new Rectangle();
            //var result = new Area((a, b) =>
            //{

            //    return a * b;

            //});
            //Console.WriteLine(result(a,b));
            //shorter method with lambda function and func delegate
            var AreaFunc = new Func<int, int, int>((a,b) => {

                return a * b;
            });
            var result1 = AreaFunc(a, b);
            Console.WriteLine("Area of Rectangle is:{0}",result1);


            // Compute add of two number using lambda expression
            Console.WriteLine("enter Numbers to perfrom additon");
            int x = Convert.ToInt32(Console.ReadLine());
            int y = Convert.ToInt32(Console.ReadLine());
           
             
               var result= new Add((x, y) =>
            {
                return x + y;
            });
            Console.WriteLine("addtion is:{0}",result(x,y));

        }
    }
}
