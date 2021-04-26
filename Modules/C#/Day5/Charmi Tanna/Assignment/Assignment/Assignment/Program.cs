using System;
using System.Collections;
using System.Collections.Generic;
namespace Assignment
{
    public class Mobike
    {
        public int charge, phoneNumber, days;
        public string bikeNumber, name;
        public string BikeNumber { get; set; }
        public int PhoneNumber { get; set; }
        public string Name { get; set; }
        public int Days { get; set; }
        public int Charge { get; set; }
        int Count = 0;
        List<Mobike> bike = new List<Mobike>();
        public void Input()
        {
            Console.WriteLine("Enter Bike No:");
            bikeNumber = Console.ReadLine();
            Console.WriteLine("Enter Phone No:");
            phoneNumber = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Enter Name:");
            name = Console.ReadLine();
            Console.WriteLine("Enter Days:");
            days = Convert.ToInt32(Console.ReadLine());
            Count = Count + 1;
            Console.WriteLine("Count is:"+Count);
        }
        public void Compute()
        {
            for (int i = 0; i < Count; i++)
            {
                charge = 0;
                Console.WriteLine("Days:are" + Days);
                if (days <= 5)
                {
                    charge += 500 * days;
                }
                else if (days <= 10)
                {
                    charge += 500 * 5 + (days - 5) * 400;
                }
                else
                {
                    charge += 500 * 5 + 400 * 5 + (days - 10) * 200;
                }
            }
            bike.Add(new Mobike() { BikeNumber = bikeNumber, PhoneNumber = phoneNumber, Name = name, Days = days, Charge = charge });
        }
        public void Display()
        {
            Console.WriteLine("Bike No     PhoneNo   No Of Days    Charge");
            for (int i = 0; i < bike.Count; i++)
            {
                Console.WriteLine(bike[i].BikeNumber + "              " + bike[i].PhoneNumber + "          " + bike[i].Days + "         " + bike[i].Charge);
            }
        }
        public void Delete()
        {
            Console.WriteLine("Enter Nmae you want to remove");
            String RName = Console.ReadLine();
            for(int  i =0;i <bike.Count;i++)
            {
                if(RName == bike[i].Name)
                {
                    bike.RemoveAt(i);
                }
            }
        }
        public void Search()
        {
            Console.WriteLine("Enter name you want to search:");
            string SName = Console.ReadLine();
            for(int i = 0;i<bike.Count;i++)
            {
                if(bike[i].Name.Contains(SName))
                {
                    Console.WriteLine($"Name {Name} Found in the record at index no {i}");
                }
            }
        }
        public void Edit()
        {
            Console.WriteLine("Enter record you want to update:");
            string UName = Console.ReadLine();
            for(int i= 0;i<bike.Count;i++)
            {
                if(bike[i].Name == UName)
                {
                    Console.WriteLine("Enter Bike No:");
                    bikeNumber = Console.ReadLine();
                    Console.WriteLine("Enter Phone No:");
                    phoneNumber = Convert.ToInt32(Console.ReadLine());
                    Console.WriteLine("Enter Name:");
                    name = Console.ReadLine();
                    Console.WriteLine("Enter Days:");
                    days = Convert.ToInt32(Console.ReadLine());
                    Count = Count + 1;
                    Console.WriteLine("Count is:" + Count);
                }
                bike.RemoveAt(i);
                Compute();
            }
        }
        class Program
        {
            static void Main(string[] args)
            {
                int n;
                Console.WriteLine("How many data you want to insert:");
                n = Convert.ToInt32(Console.ReadLine());
                Console.WriteLine("Enter your choice:");
                int choice = Convert.ToInt32(Console.ReadLine());
                Mobike m = new Mobike();
                m.Input();
                m.Compute();
                m.Display();
                m.Delete();
                m.Edit();
                m.Display();
            }
        }
    }
}
           
    
