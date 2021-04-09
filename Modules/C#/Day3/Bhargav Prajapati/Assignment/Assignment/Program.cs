using System;

namespace Assignment
{
    /*single level inheritance*/
    class Rectengle
    {
        
            public double Height { get; set; }
        public double Width { get; set; }
    }
    class Area : Rectengle
    {
        public void getdata(double hight, double width)
        {
            this.Height = hight;
            this.Width = width;
        }
        public double area()
        {
            double area=Height*Width;
            return area;
        }
    }

    /*Multilevel inheritance*/

    class Animal
    {
        public void eat()
        {
            Console.WriteLine("Animal Is Eating");
        }
    }
    class cat : Animal
    {
        public void sleep()
        {
            Console.WriteLine("Cat Is sleeping");
        }
    }

    class dog : cat
    {
        public void walk()
        {
            Console.WriteLine("Dog Is Walking");
        }
    }


    /*Interface Example*/

    interface IsFile
    {
        public void Writing(string content);
        public void Reading();
    }

    class File : IsFile
    {
        public void Writing(string content)
        {
            Console.WriteLine("This Is Writing file And You Can Write :-" + content);

        }
        public void Reading()
        {
            Console.WriteLine("This Is Reading file And You Can Not  Write This File");
        }
        public void Extra()
        {
            Console.WriteLine("This Is extra Method not Access By The Is File Class");
        }
    }


    /*Abstract Class*/
    abstract class Polygon
    {
        public double lenght { get; set; }
        public double width { get; set; }
        abstract public double GetArea();
     }
    class Rectenglee :Polygon
    {
        public Rectenglee(double lenght, double width)
        {
             this.lenght= lenght;
            this.width = width;
        }
        public override double GetArea()
        {
            return (lenght * width);
        }
    }
    class Squre :Polygon
    {
        public Squre(double lenght)
        {
            this.lenght = lenght;
        }
        public override double GetArea()
        {
            return lenght * lenght;
        }

    }

    /*Polymorphism*/
    class Shape
    {
        public  int height { get; set; }
        public int width { get; set; }

        public virtual  void draw()
        {
            Console.WriteLine("This Is The Shape class");
        }
    }
    class Circle:Shape
    {
        public override void draw()
        {
            Console.WriteLine("This Is The Circle Class");
        }
    }

    class Tringle :Shape
    {
        public override void draw()
        {
            Console.WriteLine("This Is Tringle Class");
        }
    }
    class Cube : Shape
    {
        public override void draw()
        {
            Console.WriteLine("This Is Cube Class");
        }
    }

   

    class Program
    {
        static void Main(string[] args)
        {

            
            /*Inheritance*/
            Area a1 = new Area();
            Console.WriteLine("ENTER HEIGHT");
            a1.Height = Convert.ToDouble(Console.ReadLine());
            Console.WriteLine("ENTER WIDTH");
            a1.Width = Convert.ToDouble(Console.ReadLine());
            a1.getdata(a1.Height,a1.Width);
            double area = a1.area();
            Console.WriteLine($"Area Of Rectengle IS :-  {area}");

            dog d1 = new dog();
            d1.eat();
            d1.sleep();
            d1.walk();

            /* Interface */
            IsFile s1 = new File(); ;
            Console.WriteLine("Please Enter The Content");
            string Content = Console.ReadLine();
            s1.Writing(Content);
            s1.Reading();
            
            File f1 = new File();
            f1.Reading();
            f1.Extra();
            f1.Writing(Content);

            /*Abstraction*/

            Console.WriteLine("RECTENGLE");
            Console.WriteLine("Enter THE Height");
            double height = Convert.ToDouble(Console.ReadLine());
            Console.WriteLine("Enter The Width");
            double width = Convert.ToDouble(Console.ReadLine());
            Rectenglee r1 = new Rectenglee(height,width);
            double areaa = r1.GetArea();
            Console.WriteLine("Area Of Rectengle :-"+areaa);
            
            Console.WriteLine("Squre");
            Console.WriteLine("ENTER THE LENGTH");
            double length = Convert.ToDouble(Console.ReadLine());
            Squre sq = new Squre(length);
            double areaaa = sq.GetArea();
            Console.WriteLine("Area Of The Squre Is :-" +areaaa);

            /*Polymorphism*/

            Shape sh = new Shape();
            sh.draw();
            sh = new Tringle();
            sh.draw();
            sh = new Cube();
            sh.draw();
            sh = new Circle();
            sh.draw();

        }
    }
}
