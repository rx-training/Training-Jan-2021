using System;
using System.Collections.Generic;

namespace Practice1
{
    //Inheritance and Abstract Class
    public class A
    {
        private int value = 10;
        public int value1 = 20;
        public class B : A
        {
            public int GetValue()
            {
                return this.value;
            }

        }
    }
    public abstract class C : A
    {
        /*public int GetValue()
        {
            return this.value;
        }*/
        public int Display()
        {
            return value1;
        }
        public abstract int Display2();
    }
    public class D : C
    {
        public override int Display2()
        {
            return value1;
        }
    }
    //Polymorphism
    public class Shape
    {
        public int X { get; set; }
        public int Y { get; set; }
        public int Height { get; set; }
        public int Width { get; set; }
        public virtual void Draw()
        {
            Console.WriteLine("This method is base class drawing method");
        }
    }
    public class Circle : Shape
    {
        public override void Draw()
        {
            base.Draw();
            Console.WriteLine("This is circle class Draw method");
        }
    }
    public class Triangle : Shape
    {
        public override void Draw()
        {
            base.Draw();
            Console.WriteLine("This is Triangle class Draw Method");
        }
    }
    public class Rectangle : Shape
    {
        public override void Draw()
        {
            base.Draw();
            Console.WriteLine("This is Rectangle class Draw Method");
        }
    }
    //Hide base class members with new members
    public class Base1
    {
        public string Display()
        {
        return"Display";
        }
    }

    public class Derived1 : Base1
    {
        public new string Display()
        {
            return"Displays derived class";
        }
    }
    //Interface
    interface I1
    {
        void Make();
        void Model();
        void Year();
    }
    public class Car : I1
    {
        string make ,model,year;
        public void Make()
        {
            make = "Toyota";
            Console.WriteLine("Make is: " + make);
        }
        public void Model()
        {
            model = "Camry";
            Console.WriteLine("Model is: " + model);
        }
        public void Year()
        {
            year = "2015";
            Console.WriteLine("Year is: " + year);
        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            var b = new A.B();
            Console.WriteLine(b.GetValue());
            //C c = new C();
            D d = new D();
            Console.WriteLine(d.Display());

            var shapes = new List<Shape>
            {
                new Circle(),
                new Triangle(),
                new Rectangle(),
            };
            foreach(var shape in shapes)
            {
                shape.Draw();
            }
            Derived1 d1 = new Derived1();
            Console.WriteLine(d1.Display());
            Car c = new Car();
            c.Make();
            c.Model();
            c.Year();
        }
    }
}
