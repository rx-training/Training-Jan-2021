using System;
using System.Collections.Generic;

namespace Practice
{
    //Polymorphism - Example
    class Polygon
    {
        public virtual void Draw()
        {
            Console.WriteLine("Drawing: Polygon");
        }
    }

    class Rectangle : Polygon
    {
        public override void Draw()
        {
            Console.WriteLine("Drawing: Rectangle");
        }
    }

    class Triangle : Polygon
    {
        public override void Draw()
        {
            Console.WriteLine("Drawing: Triangle");
        }
    }

    //Inheritance Example

    class Polygon2
    {
        public double Length
        {
            get;
            protected set;
        }

        public double Width
        {
            get;
            protected set;
        }
    }

    class Rectangle2 : Polygon2
    {
        public Rectangle2(double length, double width)
        {
            Length = length;
            Width = width;
        }

        public double GetArea()
        {
            return Width * Length;
        }
    }

    //Interface Example
    interface Cars
    {
        public void Get(string model, string company);

        public void Display();

    }

  
    class CarDetails : Cars
    {
        string model;
        string company;
        public virtual void Get(string model, string company)
        {
            this.model = model;
            this.company = company;
        }

        public virtual void Display()
        {
            Console.WriteLine($"Model: {model}   Company: {company}");
        }
    }
    class Practice
    {
        static void Main(string[] args)
        {
            List<Polygon> polygons = new List<Polygon>();
            polygons.Add(new Polygon());
            polygons.Add(new Rectangle());
            polygons.Add(new Triangle());

            foreach (Polygon p in polygons)
            {
                p.Draw();
            }

            //Inheritance Example
            Rectangle2 R = new Rectangle2(5, 4);
            Console.WriteLine(R.GetArea());

            //Interface Example
            Console.WriteLine("Enter the Car model:");
            string model = Console.ReadLine();
            Console.WriteLine("Enter the Car company:");
            string company = Console.ReadLine();
            CarDetails c = new CarDetails();
            c.Get(model, company);
            c.Display();
            Console.ReadKey();
        }
    }
}
