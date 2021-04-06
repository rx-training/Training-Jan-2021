using System;

namespace PracticeTasks
{
    public class A
    {
        // Private value only accessible in nested derived class not outside base class
        private int value = 10;

        public class B : A
        {
            public int GetValue()
            {
                return this.value;
            }
        }
    }

    public class C : A
    {
        //    public int GetValue()
        //    {
        //        return this.value;
        //    }
    }

    class Practice
    {
        static void Main(string[] args)
        {
            Rectangle r = new Rectangle(10, 20);
            Console.WriteLine($"Area = {r.GetArea()}");
            r.Sides();

            AbstractPolygon r1 = new AbstractRectangle(20, 30);
            Console.WriteLine($"Area = {r1.GetArea()}");

            // Implicit Casting
            Object o = new Rectangle(34, 45);

            //  Explicit Casting
            if ( o is Rectangle )
            {
                Rectangle r2 = (Rectangle)o;
                Console.WriteLine($"Area = {r2.GetArea()}");
            }

            Rectangle r3 = o as Rectangle;
            if (r3 != null)
            {
                Console.WriteLine($"Area = {r3.GetArea()}");
            }

            Polygon p1 = new Rectangle(23, 33);
            p1.Draw();

            Polygon p2 = new Triangle();
            p2.Draw();

            Triangle t1 = new Triangle();
            t1.FillColour();
            t1.Sides();

            Polygon p3 = t1;
            p3.FillColour();

            var b = new A.B();
            Console.WriteLine(b.GetValue());

            // Calling inherited member of a class, because of implicit inheritance
            C c = new C();
            Console.WriteLine(c.ToString());

            var packard = new Automobile("Packard", "Custom Eight", 1948);
            Console.WriteLine(packard);

        }
    }
}
