using System;
using System.Collections.Generic;
using System.Text;

namespace Assignment
{
    public class Mobike
    {
        public string BikeNumber { get; set; }
        public string PhoneNumber { get; set; }
        public string Name { get; set; }
        public DateTime Date { get; set; }
        public string Totaldays { get; set; }
        private  int Charges { get; set; }
        public void input()
        {
            Console.WriteLine("Enter Customer Name:");
            Name = Console.ReadLine();
            Console.WriteLine("Enter phoneNo");
            PhoneNumber = Console.ReadLine();
            Console.WriteLine("Enter the Bikenumber");
            BikeNumber = Console.ReadLine();
            Console.WriteLine("Enter Returning date");
            Date = Convert.ToDateTime(Console.ReadLine());
            if(Date < DateTime.Now)
            {
                throw new CustomException("This is not a valid date");
            }
        }
        public void Compute()
        {
            //    First five days Rs 500 per day

            //     Next five days Rs 400 per day

            //       Rest of the days Rs 200 per day
            //
            var totalDays = Date - DateTime.Now.Date;
            Totaldays = Convert.ToString(totalDays.Days);
            Console.WriteLine(Totaldays);
            if(totalDays.Days < 5)
            {
                Charges = 500 * totalDays.Days;
            }
            else if (totalDays.Days < 10)
            {
                Charges = 400 * totalDays.Days;
            }
            else
            {
                Charges = 200 * totalDays.Days;
            }
        }
        public void Display()
        {
            Console.WriteLine("Bike No.\tPhoneNo\t\tNo.OfDays\tCharges");
            Console.WriteLine("{0}\t{1}\t{2}\t\t{3}",BikeNumber,PhoneNumber,Totaldays,Charges);
            
            //Console.WriteLine("{0,-8}{1,15}{2,8}{1,5}\n\n","BikeNO","PhoneNo","No.Of.Days","Charges");
            //Console.WriteLine("{0,-8}{1,15}{2,8}{1,5:N0}\n\n", BikeNumber, PhoneNumber, Totaldays, Charges);
        }
  
       
    }
}
