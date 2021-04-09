using System;

namespace Method_Overriding
{   
    class Animal
    {
        void Eat()
        {
            Console.WriteLine("Animal is Eating");
        }
    }
    class Dog : Animal
    {
        void Eat()
        {
            Console.WriteLine("Dog is Eating");
        }
        public static void Main(string[] args)
        {
            Dog miki = new Dog();
            miki.Eat();
        }
    }
}
