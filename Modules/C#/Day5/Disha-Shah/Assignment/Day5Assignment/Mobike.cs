using System;
using System.Collections.Generic;
using System.Text;

namespace Day5Assignment
{
    class Mobike
    {
        string BikeNumber { get; set; }

        int PhoneNumber { get; set; }

        string Name { get; set; }

        int Days { get; set; }

        int Charge { get; set; }

        List<Mobike> mobike = new List<Mobike>();

        public override string ToString()
        {
            return BikeNumber + "\t\t" + PhoneNumber + "\t\t" + Days ;
        }

        public void Input()
        {

                Console.WriteLine("Enter Bike Number:");
                string bikeNumber = Console.ReadLine();

                Console.WriteLine("Enter Customer Phone Number:");
                int phoneNumber = Convert.ToInt32(Console.ReadLine());

                Console.WriteLine("Enter Customer Name:");
                string name = Console.ReadLine();

                Console.WriteLine("Enter Number of days on Rent:");
                int days = Convert.ToInt32(Console.ReadLine());

                try
                {
                    validateName(name);
                    validateDays(days);
                    mobike.Add(new Mobike() { BikeNumber = bikeNumber, PhoneNumber = phoneNumber, Name = name, Days = days });
                }
                catch(FormatException e)
                {
                    Console.WriteLine(e.Message);
                }
                catch(IndexOutOfRangeException e)
                {
                    Console.WriteLine(e.Message);
                }
                catch(Exception e)
                {
                    Console.WriteLine(e.Message);
                }

        }

        void Compute(int days)
        {
            
                if (days <= 5)
                {
                    Charge = 500 * days;
                }
                else if (days <= 10)
                {
                    Charge = 500 * 5 + (days - 5) * 400;
                }
                else
                {
                    Charge = 500 * 5 + 400 * 5 + (days - 10) * 200;
                }
            
        }

        public void Display()
        {
            Console.WriteLine();
            Console.WriteLine("Bike No.\t\tPhone No.\tNo. of Days\tCharge");

            foreach (Mobike item in mobike)
            {
                Compute(item.Days);
                Console.WriteLine(item + "\t" + Charge);
            }
        }

        public void SearchCustomer()
        {
            Console.WriteLine("Enter Customer Name to search:");
            string name = Console.ReadLine();
            if(mobike.Exists(x => x.Name == name))
            {
                Console.WriteLine("Bike No.\t\tPhone No.\tNo. of Days\tCharge");

                foreach (Mobike item in mobike)
                {
                    if(item.Name == name)
                    {
                        Compute(item.Days);
                        Console.WriteLine(item + "\t" + Charge);
                    }
                }
            }    
        }

        public void DeleteCustomer()
        {
            Console.WriteLine("Enter Customer name to delete his/her record");
            string name = Console.ReadLine();
            for (var i = 0; i<mobike.Count; i++)
            {
                if(mobike[i].Name==name)
                {
                    Console.WriteLine(mobike.Remove(mobike[i]));
                    Console.WriteLine("Customer information deleted successfully");
                }
            }

            Console.WriteLine("Updated Details:" + mobike.Count);
            Display();
        }

        public void UpdateCustomer()
        {
            Console.WriteLine("Enter Customer name to update his/her record");
            string name = Console.ReadLine();
            for(var i=0; i<mobike.Count;i++)
            {
                if(mobike[i].Name==name)
                {
                    Console.WriteLine("Old Customer information");
                    Console.WriteLine($"Bike Number: {mobike[i].BikeNumber}");
                    Console.WriteLine($"Phone Number: {mobike[i].PhoneNumber}");
                    Console.WriteLine($"Name: {mobike[i].Name}");
                    Console.WriteLine($"No. of days: {mobike[i].Days}");

                    Console.WriteLine();
                    Console.WriteLine("Enter new Information:");
                    Console.WriteLine("Enter Bike Number:");
                    string newBno = Console.ReadLine();
                    Console.WriteLine("Enter Name:");
                    string newName = Console.ReadLine();
                    Console.WriteLine("Enter Phone Number:");
                    int newPhone = Convert.ToInt32(Console.ReadLine());
                    Console.WriteLine("Enter No. of Days to rent:");
                    int newDays = Convert.ToInt32(Console.ReadLine());

                    try
                    {
                        validateName(newName);
                        validateDays(newDays);
                        mobike[i].BikeNumber = newBno;
                        mobike[i].Name = newName;
                        mobike[i].PhoneNumber = newPhone;
                        mobike[i].Days = newDays;
                    }
                    catch(FormatException e)
                    {
                        Console.WriteLine(e.Message);
                    }
                    catch(IndexOutOfRangeException e)
                    {
                        Console.WriteLine(e.Message);
                    }
                    catch(Exception e)
                    {
                        Console.WriteLine(e.Message);
                    }

                    Console.WriteLine($"Update details:\n{mobike[i].BikeNumber}\n{mobike[i].Name}\n{mobike[i].PhoneNumber}\n{mobike[i].Days}");

                }
            }

            Console.WriteLine("Updated Customer Details:" + mobike.Count);
            Display();
        }

        void validateName(string name)
        {
            if (String.IsNullOrWhiteSpace(name))
            {
                throw new FormatException("Name can not be an empty value");
            }
            else
            {
                for (int i = 0; i < name.Length; i++)
                {
                    if (!char.IsLetter(name[i]) && !char.IsWhiteSpace(name[i]))
                    {
                        throw new FormatException("Name can only contain alphabetic characters");
                    }
                }
            }
        }

        void validateDays(int days)
        {
            if (days < 0)
            {
                throw new IndexOutOfRangeException("price can not be less than or equal to 0");
            }
        }

    }
}
