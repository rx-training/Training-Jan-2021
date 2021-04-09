using System;
using System.Collections.Generic;
using System.Text;

namespace RentalBikes

{
    class MoBike
    {
        protected int BikeNo;
        protected decimal PhoneNo;
        public string Name;
        protected int Days;
        protected int Charge=0;

        public void input()
        {
            Console.WriteLine("Enter Bike No.");
            this.BikeNo = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Enter Phone No.");
            this.PhoneNo = Convert.ToDecimal(Console.ReadLine());
            Console.WriteLine("Enter Name of Customer");
            this.Name = Console.ReadLine();
            Console.WriteLine("Enter the No. of days customer rented the bike");
            this.Days = Convert.ToInt32(Console.ReadLine());
        }

        private int compute()
        {
            if (Days > 5)
            {
                Charge = 5 * 500;
                Days = Days - 5;
                if (Days <= 5)
                {
                    Charge = Charge + (Days * 400);
                    return Charge;
                }
                else
                {
                    Charge = Charge + (5 * 400);
                    Days = Days - 5;
                    Charge = Charge + (Days * 200);
                    return Charge;
                }
            }else
            {
                Charge = Days * 500;
                return Charge;
            }
            
        }

        public void display()
        {
            Console.WriteLine($"{BikeNo}\t\t{PhoneNo}\t\t{Days}\t{compute()}");
        }
    }
}
