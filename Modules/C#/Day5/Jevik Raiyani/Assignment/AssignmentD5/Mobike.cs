using System;
using System.Collections.Generic;
using System.Text;

namespace AssignmentD5
{
    public class Mobike
    {
        public string BikeNumber { get; set; }
        public string PhoneNo { get; set; }
        public string Name { get; set; }
        public int Days { get; set; }

        public int Rent
        {
            get
            {
                return Compute();
            }
        }
        public void Input(string name,string bikeno,string phoneNo,int days)
        {
            BikeNumber = bikeno;
            PhoneNo = phoneNo;
            Name = name;
            Days = days;
        }
        int Compute()
        {
            if (Days <= 5)
            {
                return 500 * Days ;
            }
            else if (Days <= 10)
            {
                return 500 * 5 + 400 * (Days - 5);
            } 
            else
                return 500 * 5 + 400 * 5 + 200*(Days - 10);
        }
        public void Display()
        {
            Console.WriteLine($"Name {this.Name} BikeNo. {this.BikeNumber} PhoneNo {this.PhoneNo} Days {this.Days} Charge {this.Rent}");
        }
    }
}
