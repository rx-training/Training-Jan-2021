using System;

namespace Practice
{
    class Program
    {
        static void Main(string[] args)
        {
            Publication newPub = new Books("XYZ", 200, true, "Milit", 12);
            Console.WriteLine(newPub.GetNameOfAuthor());

            Books newBook = new Books("XYZ", 2000, true, "John", 10);
            Console.WriteLine(newBook.GetPublicationName());

            Publication x = newBook as Publication; // explicit casting
            Console.WriteLine(x.GetPublicationName());
            Console.WriteLine(x.GetPages());
            //x.GetBookChapters(); // Parent class can't access method of child

            Console.WriteLine(((Books)x).GetBookChapters()); // explicit casting
            Console.WriteLine();
            Console.WriteLine();

            Shape[] shapes = { new Rectangle(10, 12), new Square(5), new Circle(3) };
            foreach (var shape in shapes)
            {
                Console.WriteLine($"{shape}: area, {Shape.GetArea(shape)}; " + $"perimeter, {Shape.GetPerimeter(shape)}");
                var rect = shape as Rectangle; // explicit casting
                if (rect != null)
                {
                    Console.WriteLine($"Is Square: {rect.IsSquare()}, Diagonal: {rect.Diagonal}");
                    continue;
                }
                var sq = shape as Square; // explicit casting
                if (sq != null)
                {
                    Console.WriteLine($"Diagonal: {sq.Diagonal}");
                    sq.Test();
                    ((Shape)sq).Test();// casted to Shape class
                    continue;
                }
            }

            Console.WriteLine();
            Console.WriteLine();

            Car car1 = new Car();
            car1.Make = "Honda";
            car1.Model = "Civic";
            car1.Year = 2020;
            car1.Price = 2000000;

            Car car2 = new Car();
            car2.Make = "Honda";
            car2.Model = "Civic";
            car2.Year = 2020;
            car1.Price = 2000000;

            Car car3 = new Car();
            car3.Make = "Hyundai";
            car3.Model = "Verna";
            car3.Year = 2020;
            car1.Price = 1500000;

            Console.WriteLine(car1.Equals(car2));
            Console.WriteLine(car1.Equals(car3));
            Console.WriteLine(car1.IsMoreExpensiveThan(car3));
        }
    }
}
