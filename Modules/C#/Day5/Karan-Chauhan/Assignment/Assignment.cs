using System;
using System.Collections;
using System.Collections.Generic;

namespace Assignment
{
    class Mobike
    {
        string BikeNumber { get; set; }
        string Name { get; set; }
        double ContactNumber { get; set; }
        int Days { get; set; }
        int rent { get; set; }

        public void Input()
        {
            Console.WriteLine("Enter the Name: ");
            Name = Console.ReadLine();
            Console.WriteLine("Enter the Contact Number: ");
            ContactNumber = Convert.ToDouble(Console.ReadLine());
            Console.WriteLine("Enter the Bike Number: ");
            BikeNumber = Console.ReadLine();
            Console.WriteLine("Enter the number of days to rent the bike: ");
            Days = Convert.ToInt32(Console.ReadLine());
                    
        }

        public void Compute()
        {
            int i=1;
            rent=0;
            while(Days>0)
            {
                if(i < 6)
                {
                    rent += 500;                    
                }
                else if(i>5 && i<11)
                {
                    rent += 400;
                }
                else
                {
                    rent += 200;
                }
                i++;
                Days -= 1;
            }
            Console.WriteLine(rent);
         
         
           
        }


        public void Display()
        {
            Console.WriteLine("Bike No.    PhoneNumber    No. Of Days    Charge");
            Console.WriteLine(Name + "    " + ContactNumber + "    " + Days + "    " + rent);

        }
    }
    class Assignment
    {
        static void Main(string[] args)
        {
           
            Mobike mb = new Mobike();
            mb.Input();
            mb.Compute();
            List<Mobike> CustomerDetails = new List<Mobike>() { };
            mb.Display();
            Console.ReadKey();
        }
    }
}
