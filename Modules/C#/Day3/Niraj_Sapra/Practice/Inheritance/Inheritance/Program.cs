using System;

namespace Inheritance
{
    class car
    {
       protected string model, color;
       protected int price;
        protected void carinfo()
        {
            Console.WriteLine("Model"+model);
            Console.WriteLine("Color" + color);
            Console.WriteLine("Price" + price);
        }
    }

    class Ferrari : car
    {
        protected string speed;
        protected void Speeding()
        {
            Console.WriteLine("Speed:" + speed);
        }
    }
    class Maruti:Ferrari
    {
        float mileage;
        void printMileage()
        {
            Console.WriteLine("Mileage:" + mileage);
        }
        static void Main(string[] args)
        {
            Maruti ob = new Maruti();
            Encepsulation ob1 = new Encepsulation();
            ob.model = "Alto";
            ob.color = "White";
            ob.price = 200000;
            ob.mileage = 22.5f;
            ob.speed="76km/h";
            ob.carinfo();
            ob.Speeding();
            ob.printMileage();
            ob1.Balance = 1000;
            Console.WriteLine("your account balance is :" + ob1.Balance); 
            Console.ReadLine();
        }
    }
}
