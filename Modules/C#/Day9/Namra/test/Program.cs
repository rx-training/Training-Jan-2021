using System;
using System.Threading;

namespace test
{
    class Program
    {
        interface Species
        {
            public void African();
            public void Asian();
        }
        interface BodyChatacteristics
        { 
            public void Trunk();
            public void Tusk();
            public void Teeth();
            public void Legs();
            public void Skin();
            public void Ears();
        }

        interface Diet {
            public void Herbivores();
        }
        interface Reproduction
        {
            public void interval();
            public void Weight();
        }
        interface Domestication
        {
            public void Domestication();
        }

        class Elephants : Species, BodyChatacteristics, Diet, Reproduction, Domestication
        {
            public void African()
            {
                Console.WriteLine("------------------------------------------------------------------------------------------------------------");
                Console.WriteLine("---------------------------------------------- African elephants -------------------------------------------");
                Console.WriteLine("------------------------------------------------------------------------------------------------------------");
                Console.WriteLine($"African Elephants are found in 38 countries of africa.\nthey stand up to 4m and weigh around 7000kg. ");
            }

            public void Asian()
            {

                Console.WriteLine("------------------------------------------------------------------------------------------------------------");
                Console.WriteLine("---------------------------------------------- Asian elephants ---------------------------------------------");
                Console.WriteLine("------------------------------------------------------------------------------------------------------------");

                Console.WriteLine($"Asian elephants are 3.4 m and weight 5400 kgs.");
            }

            public void Domestication()
            {
                Console.WriteLine($"Elephants have been working animals used in various capacitites by humans");
            }

            public void Ears()
            {
                Console.WriteLine($"Elephants are made of a very thin layer of skin stretched over cartilage and a rich network of blood vessels");
            }

            public void Herbivores()
            {
                Console.WriteLine($"elephants are herbevores, spending 16 hours a day collecting plant food");
            }

            public void interval()
            {
                Console.WriteLine($"Females gives birth at intervals og about every 5 years");
            }

            public void Legs()
            {
                Console.WriteLine($"They are great straight pillars, as they must be to support its bulk weight");
            }

            public void Skin()
            {
                Console.WriteLine($"it is extremely tough around most parts of its body and measures about 2.5 cm thick");
            }

            public void Teeth()
            {
                Console.WriteLine($"They usually have teeth");
            }

            public void Trunk()
            {
                Console.WriteLine($"It is used to tear up their food and then place it in theit mouth");
            }

            public void Tusk()
            {
                Console.WriteLine($"It is used to dig for water,salt, and roots; to debark trees, to eat the bark; to dig into baobab trees to get at the pulp inside; and to move trees and branches when clearing a path.");
            }

            public void Weight()
            {
                Console.WriteLine($"At birth, calves weigh around 90-115 kgs.");
            }
            public void AfricanData() {
                African();
                Trunk();
                Tusk();
                Teeth();
                Skin();
                Legs();
                Herbivores();
                interval();
                Weight();
                Domestication();
            }
            public void AsianData() {
                Asian();
                Trunk();
                Tusk();
                Teeth();
                Skin();
                Legs();
                Herbivores();
                interval();
                Weight();
                Domestication();
            }
        }

        static void Main(string[] args)
        {
            Console.WriteLine($"Welcome to the Zoology department of microdoc college");
            Console.WriteLine($"Can you please tell us which elephant's data you would like to see?");
            Console.WriteLine($"Enter 1 for african or 2 for asian");

            int flag = Convert.ToInt32(Console.ReadLine());
            Elephants ep = new Elephants();
            Console.WriteLine($"you entered {flag}, getting data of your choice");
            Thread.Sleep(3000);
            if (flag == 1)
            {
                ep.AfricanData();
            }
            else if (flag == 2)
            {
                ep.AsianData();
            }
            else
            {
                Console.WriteLine("Please enter right number for right data");
            }
        }
    }
}
