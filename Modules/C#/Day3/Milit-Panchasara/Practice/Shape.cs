using System;
using System.Collections.Generic;
using System.Text;

namespace Practice
{
    public abstract class Shape
    {
        public abstract double Area { get; }

        public abstract double Perimeter { get; }

        public override string ToString() => GetType().Name;

        public static double GetArea(Shape shape) => shape.Area;

        public static double GetPerimeter(Shape shape) => shape.Perimeter;

        public void Test()
        {
            Console.WriteLine("Test from Shape Class");
        }
    }

    public class Square : Shape
    {
        public Square(double length)
        {
            Side = length;
        }

        public double Side { get; }

        public override double Area => Math.Pow(Side, 2);

        public override double Perimeter => Side * 4;

        public double Diagonal => Math.Round(Math.Sqrt(2) * Side, 2);

        public new void Test() // method in Shape can be explicitly called also due to new keyword here, also can define sealed method using new keyword
        {
            Console.WriteLine("Test from Square");
        }
    }

    public class Rectangle : Shape
    {
        public Rectangle(double length, double width)
        {
            Length = length;
            Width = width;
        }

        public double Length { get; }

        public double Width { get; }

        public override double Area => Length * Width;

        public override double Perimeter => 2 * Length + 2 * Width;

        public bool IsSquare() => Length == Width;

        public double Diagonal => Math.Round(Math.Sqrt(Math.Pow(Length, 2) + Math.Pow(Width, 2)), 2);
    }

    public class Circle : Shape
    {
        public Circle(double radius)
        {
            Radius = radius;
        }

        public override double Area => Math.Round(Math.PI * Math.Pow(Radius, 2), 2);

        public override double Perimeter => Math.Round(Math.PI * 2 * Radius, 2);

        // Define a circumference, since it's the more familiar term.
        public double Circumference => Perimeter;

        public double Radius { get; }

        public double Diameter => Radius * 2;
    }
}
