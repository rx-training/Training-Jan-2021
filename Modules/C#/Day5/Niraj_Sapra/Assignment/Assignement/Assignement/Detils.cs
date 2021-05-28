using System;
using System.Collections.Generic;
using System.Text;

namespace Assignement
{
    public class Detils
    {

        public int Bikenumber
        {
            get; set;
        }
        public double phoneno
        {
            get; set;
        }
        public int day
        {
            get;
            set;
        }
        public int charge;
        //{
        //    get; set;
        //}
        public string customer_name
        {
            get; set;
        }

     public int Compute(int day)
        {
            if (day <= 5)
            {
                charge = day*500;
            }
            else if (day <= 10)
            {
                charge = day * 400;
            }
            else if (day > 10)
            {
                charge = day * 200;
            }
            return charge;
        }

       
        public Detils(int bikeno, double phoneno, int day, string customername,int charge)
        {
           this.Bikenumber = bikeno;
            this.phoneno = phoneno;
            this.day = day;
            this.customer_name = customername;
            this.charge = charge;
        }
        public Detils()
        {

        }
        public void Input()
        {
            Detils[] perarry = new Detils[10];
            for (int i = 0; i < 11; i++) { 
            Console.Write("Please Enter BikeNumber:");
            this.Bikenumber = Convert.ToInt32(Console.ReadLine());
            Console.Write("Please Enter phone:");
            this.phoneno = Convert.ToDouble(Console.ReadLine());
            Console.Write("Please Enter day:");
            this.day = Convert.ToInt32(Console.ReadLine());
            Console.Write("Please Enter Customer Name:");
            this.customer_name = Console.ReadLine();
            this.charge = Compute(day); 
            perarry[i] = new Detils(this.Bikenumber,this.phoneno,this.day,this.customer_name,charge);
            }
        }
        public void Display()
        {
            Console.WriteLine("Bike-number:\tphoneno\tday\tcustomer-name\tcharge");
            Console.WriteLine("----------------------------------------------------------------------------------------------------------------------");
            for (int i = 0; i < perarry.Length; i++)
            {
                Console.WriteLine(perarry[i].Bikenumber + "\t" + perarry[i].phoneno + "\t" + perarry[i].day + "\t" + perarry[i].customer_name + "\t" + perarry[i].charge;
            }
        }
    }    
}
