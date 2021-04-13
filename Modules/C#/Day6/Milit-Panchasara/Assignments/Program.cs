using System;

namespace Assignments
{
    abstract class Shape
    {
        public abstract int Area();
    }
    class Rectangle : Shape
    {
        public int Length { get; set; }
        public int Width { get; set; }

        public Rectangle(int len, int wid)
        {
            this.Length = len;
            this.Width = wid;
        }
        public override int Area()
        {
            return this.Length * this.Width;
        }
    }

    class Square : Shape
    {
        public int Length { get; set; }

        public Square(int len)
        {
            this.Length = len;
        }
        public override int Area()
        {
            return this.Length * this.Length;
        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            Rectangle rec = new Rectangle(4, 5);
            Square square = new Square(4);
            Func<int> GetAreaOfRectangle = rec.Area;
            Func<int> GetAreaOfSquare = square.Area;

            Console.WriteLine("Assignment 1");

            Console.WriteLine($"The area of the Rectangle is {GetAreaOfRectangle.Invoke()}");
            Console.WriteLine($"The area of the Square is {GetAreaOfSquare.Invoke()}");
            Console.WriteLine();
            Console.WriteLine("Assignment 2");

            Func<int, int, int> sum = (a, b) => { return a + b; };
            Console.WriteLine($"Sum is {sum.Invoke(15,20)}");
        }
    }
}
