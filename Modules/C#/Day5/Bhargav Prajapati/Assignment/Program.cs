using System;
using System.Collections;
using System.Collections.Generic;
namespace Assignment
{
     class Mobike
    {
        public string BikeNumber { get; set; }
        public double PhoneNumber { get; set; }
        public string Name { get; set; }
        public int Days { get; set; }
        public int charge { get; set;}

        List<Mobike> bike = new List<Mobike>();
        public override string ToString()
        {
            return BikeNumber+"\t\t" + PhoneNumber+"\t\t" + Name+"\t\t" + Days;
        }
        public void input()
        {
            Console.WriteLine("Enter Bike Number");
            string bikeNumber = Console.ReadLine();
            Console.WriteLine("Enter Phone Number");
            double phoneNumber = Convert.ToDouble(Console.ReadLine());
            Console.WriteLine("Enter Your Name");
            string name = Console.ReadLine();
            Console.WriteLine("Enter Number Of Days");
            int days = Convert.ToInt32(Console.ReadLine());
            bike.Add(new Mobike() { BikeNumber = bikeNumber, PhoneNumber = phoneNumber, Name = name, Days = days });
          
         }

        


        public void Compute(int days)
        {
            charge=0;
            int cnt = 1;
            while(days>0)
            {
                if (cnt <= 5)
                {
                    charge = charge + 500;
                }
                else if (cnt > 5 && cnt <= 10)
                {
                    charge= charge + 400;
                }
                else
                {
                   charge =charge + 200;
                }
                cnt++;
                days--;

            }

        }

        public void Display()
        {
            if (bike.Count != 0)
            {
                Console.WriteLine("Bike No\t\t     PhoneNo\t\tName\t\tDays\t\tCharge");
                foreach (Mobike item in bike)
                {
                    Compute(item.Days);
                    Console.WriteLine($"{item}\t\t{charge}");
                }
            }
            else
            {
                Console.WriteLine("Data is Not Found");
            }

        }

        public void SearchCustomer()
        {
            Console.WriteLine("Enter The  Name Of The Customer");
            string cname = Console.ReadLine();
            
            var finddta = bike.Find(Mobike => Mobike.Name == cname);
            Console.WriteLine("BikeNumber\t\tPhonenumber\t\tName\t\tDays\t\tCharge");
            if (finddta.Name == cname)
            {
                Compute(finddta.Days);
                Console.WriteLine($"{finddta.BikeNumber}\t\t{finddta.PhoneNumber}\t\t{finddta.Name}\t\t{finddta.Days}\t\t{charge}");
            }
            else
            {
                Console.WriteLine("Data Is Not Found");
            }

        }

        public void deletedata()
        {
            if (bike.Count != 0)
            {
                Console.WriteLine("Enter The Customer name");
                string cname = Console.ReadLine();
                var finddta = bike.Find(Mobike => Mobike.Name == cname);
                bike.Remove(finddta);
            }
            else
            {
                Console.WriteLine("Data Is Not Found");
            }
        }

        public void editdata()
        {
            Console.WriteLine("Enter The Customer name YOU WANT TO EDIT");
            string cname = Console.ReadLine();
            if (bike.Exists(Mobike=>Mobike.Name==cname))
            {
                var finddta = bike.Find(Mobike => Mobike.Name == cname);
                bike.Remove(finddta);
                Console.WriteLine("Enter New Bike Number");
                string bikeNumber = Console.ReadLine();
                Console.WriteLine("Enter New Phone Number");
                double phoneNumber = Convert.ToDouble(Console.ReadLine());
                Console.WriteLine("Enter New Name");
                string name = Console.ReadLine();
                Console.WriteLine("Enter Number Of Days");
                int days = Convert.ToInt32(Console.ReadLine());
                bike.Add(new Mobike() {BikeNumber=bikeNumber,PhoneNumber=phoneNumber,Name=name,Days=days });



            }
            else
            {
                Console.WriteLine("Data Is Not Found");
            }
        }
        

    }
    class Program
    {
        static void Main(string[] args)
        {
            Mobike m1 = new Mobike();
            int i =8;
            while (i==8)
            {
                Console.WriteLine("Press 1  Insert The Data");
                Console.WriteLine("Press 2  Display Data");
                Console.WriteLine("Press 3 Search Data");
                Console.WriteLine("Press 4 Delete The Recored");
                Console.WriteLine("Press 5 Edit The Record");
                int ch = Convert.ToInt32(Console.ReadLine());
                switch (ch)
                {
                    case 1:
                        m1.input();
                        Console.WriteLine("===SuccessFull  Added The Data======");
                        
                        break;
                    case 2:
                        m1.Display();
                        break;
                    case 3:
                        m1.SearchCustomer();
                        break;
                    case 4:
                        m1.deletedata();
                        Console.WriteLine("===SuccessFull  Deleted The Data======");
                        break;
                    case 5:
                        m1.editdata();
                        Console.WriteLine("===SuccessFull  Edited The Data======");
                        break;
                    default:
                            Console.WriteLine("invalid Choise");
                        break;
                        



                }

                Console.WriteLine();
                Console.WriteLine("===========================================");
                Console.WriteLine("Do you Want TO Continue Then Press 8");
                i = Convert.ToInt32(Console.ReadLine());


            }
            
                        
        }
    }
}
