using System;

namespace Test
{
    interface Species
    {
        void African();


        void Asian();

    }

    interface BodyCharacteristics
    {

        void Trunk();


        void Tusk();


        void Teeth();


        void Skin();


        void Legs();


        void Ears();


    }

    interface Diet
    {
        void Herbivores();
    }

    interface Reproduction
    {
        void Interval();


        void Weight();

    }

    interface Domestication
    {
        void Use();

    }

    class Elephants : Species, BodyCharacteristics, Diet, Domestication, Reproduction
    {
        
            public void African()
            {
                Console.WriteLine("About African Elephant");
                Console.WriteLine("African Elephants are found in 38 Contries");
                Console.WriteLine($"Height\t4m");
                Console.WriteLine($"Weight\t7000kgs");
            }

            public void Asian()
            {
                Console.WriteLine("About Asian Elephant");
                Console.WriteLine($"Height\t3.4m");
                Console.WriteLine($"Weight\t5400kgs");
            }
        

        

            public void Trunk()
            {
                Console.Write("\tUsed to tear up their food and then place it in their Mounth");
            }

            public void Tusk()
            {
                Console.WriteLine("\tUsed to dig for water, salt and roots, and to move trees and branches  when clearing the path.");
            }

            public void Teeth()
            {
                Console.WriteLine("\tUsually have 28 teeth");
            }

            public void Skin()
            {
                Console.WriteLine("\tExtremely tough around most parts of its body and measures about 2.5 cm");
            }

            public void Legs()
            {
                Console.WriteLine("\tThey are great straight pillers, as the must be to support its blk weight");
            }

            public void Ears()
            {
                Console.WriteLine("\tThey are made of a very thin layer of skin stretched over cartilage and a rich network of blood vessels.");
            }


        

       
            public void Herbivores()
            {
                Console.WriteLine("\tHerbivores:  Can spend 16 hours a day collecting plant food.");
            }
        

        
            public void Interval()
            {
                Console.WriteLine("\tFemale gives birth at interval of 5 Years");
            }

            public void Weight()
            {
                Console.WriteLine("\tAt birth, calves weigh around 90-115 kg");
            }
        

        
            public void Use()
            {
                Console.WriteLine("\tElephants have been working animals used in various capacities by humans.");
            }
        
    }
    class Program
    {
        static void Main(string[] args)
        {
            Elephants e = new Elephants();
            Console.WriteLine("Species:");
            e.African();
            e.Asian();
            Console.WriteLine(" ");
            Console.WriteLine("Body Characteristic:");
            e.Ears();
            e.Teeth();
            e.Trunk();
            e.Tusk();
            e.Skin();
            e.Legs();
            Console.WriteLine(" ");
            Console.WriteLine("Deit");
            e.Herbivores();
            Console.WriteLine(" ");
            Console.WriteLine("Reproduction");
            e.Interval();
            e.Weight();
            Console.WriteLine(" ");
            Console.WriteLine("Domestication");
            e.Use();

        }
    }
}
