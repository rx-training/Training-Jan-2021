using System;
using System.Collections.Generic;
using System.Text;

namespace PracticeTasks
{
    interface ISides
    {
        void Sides();
    }

    class Polygon : Object
    {
        public double Length { get; protected set; }
        public double Width { get; protected set; }

        protected static DateTime present;

        // Static Constructors, can't be inherited by base class
        static Polygon()
        {
            present = DateTime.Now;
            Console.WriteLine($"Current Date Time is {present}");
        }

        public virtual void Draw()
        {
            Console.WriteLine("Draw Polygon");
        }

        public virtual void FillColour()
        {
            Console.WriteLine("Red:Polygon");
        }

        // Finalizer
        ~Polygon()  
        {
            // cleanup statements...
            Console.WriteLine("Finalizer for Polygon is executing");
        }
    }

    class Rectangle : Polygon, ISides
    {
        public Rectangle(double length, double width)
        {
            Length = length;
            Width = width;
        }

        public double GetArea()
        {
            return Length * Width;
        }

        public override void Draw()
        {
            base.Draw();
            Console.WriteLine("Draw: Rectangle");
        }

        // Finalizer
        ~Rectangle()
        {
            // cleanup statements...
            Console.WriteLine("Finalizer for Rectangle is executing");
        }

        public void Sides()
        {
            Console.WriteLine("It has 4 Sides");
        }
    }
    
    sealed class Triangle : Polygon, ISides
    {
        public override void Draw()
        {
            base.Draw();
            Console.WriteLine("Draw: Triangle");
        }

        public new void FillColour()
        {
            base.FillColour();
            Console.WriteLine("Blue:Triangle");
        }

        // Finalizer
        ~Triangle()
        {
            // cleanup statements...
            Console.WriteLine("Finalizer for Triangle is executing");
        }

        public void Sides()
        {
            Console.WriteLine("It has 3 Sides");
        }
    }

    //class RightTriangle : Triangle
    //{

    //}

}
