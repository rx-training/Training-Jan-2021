using System;
using System.Collections.Generic;

namespace Day5_Assignments
{
    public class Mobike
    {
        public string BikeNumber { get; set; }
        public int PhoneNumber { get; set; }
        public string Name { get; set; }
        public int Days { get; set; }

        public void Input()
        {
            Console.Write("Enter Name : ");
            this.Name = Console.ReadLine();

            Console.Write("Enter Phone number : ");
            this.PhoneNumber = Convert.ToInt32(Console.ReadLine());

            Console.Write("Enter bike number : ");
            this.BikeNumber = Console.ReadLine();

            Console.Write("Enter number of Days : ");
            this.Days = Convert.ToInt32(Console.ReadLine());

            this.Display();
            this.Compute();
        }

        public void Compute()
        {
            int rent;
            if (Days >= 1 && Days <= 5)
            {
                rent = 500 * Days;
            }
            else if (Days > 5 && Days <= 10)
            {
                rent = 400 * Days;
            }
            else
            {
                rent = 500 * 5 + 400 * 5 + (Days - 10) * 200;
            }
            Console.WriteLine("\tTotal Rent : " + rent);
            Console.WriteLine();
        }

        public void Display()
        {
            Console.WriteLine();
            Console.WriteLine("\tName : " + this.Name);
            Console.WriteLine("\tPhone Number : " + this.PhoneNumber);
            Console.WriteLine("\tBike Number : " + this.BikeNumber);
            Console.WriteLine("\tNumber of Days : " + this.Days);
            Console.WriteLine();
        }
    }

    class Day5
    {
        static void Main(string[] args)
        {
            int ch;
            Mobike mb = new Mobike();
            List<Mobike> ListObj = new List<Mobike>();

            while (true)
            {
                Console.WriteLine("Press 1 to Add... ");
                Console.WriteLine("Press 2 to Delete... ");
                Console.WriteLine("Press 3 to Edit... ");
                Console.WriteLine("Press 4 to Search... ");
                Console.Write("Enter your choice : ");
                ch = Convert.ToInt32(Console.ReadLine());

                switch (ch)
                {
                    case 1:
                        mb.Input();
                        ListObj.Add(new Mobike() { Name = mb.Name, PhoneNumber = mb.PhoneNumber, BikeNumber = mb.BikeNumber, Days = mb.Days });
                        break;
                    case 2:
                        string deleteName;
                        Console.Write("Enter Name to be removed : ");
                        deleteName = Console.ReadLine();

                        for(int i = 0; i < ListObj.Count; i++)
                        {
                            if(ListObj[i].Name == deleteName)
                            {
                                ListObj.Remove(ListObj[i]);
                                Console.WriteLine("User deleted");
                            }
                        }
                        break;
                    case 3:
                        string editName;
                        Console.Write("Enter Name to be updated : ");
                        editName = Console.ReadLine();

                        for (int i = 0; i < ListObj.Count; i++)
                        {
                            if (ListObj[i].Name == editName)
                            {
                                string newName, newBikeNo;
                                int newPhoneNo, newDays;
                                Console.WriteLine("Enter new Information:");

                                Console.Write("Enter Name:");
                                newName = Console.ReadLine();
                                
                                Console.Write("Enter Phone Number:");
                                newPhoneNo = Convert.ToInt32(Console.ReadLine());

                                Console.Write("Enter Bike Number:");
                                newBikeNo = Console.ReadLine();

                                Console.Write("Enter No. of Days to rent:");
                                newDays = Convert.ToInt32(Console.ReadLine());

                                ListObj[i].Name = newName;
                                ListObj[i].PhoneNumber = newPhoneNo;
                                ListObj[i].BikeNumber = newBikeNo;
                                ListObj[i].Days = newDays;

                                Console.WriteLine("User updated");
                            }
                        }
                        break;
                    case 4:
                        string searchName;
                        Console.Write("Enter Name to be searched : ");
                        searchName = Console.ReadLine();

                        for (int i = 0; i < ListObj.Count; i++)
                        {
                            if (ListObj[i].Name == searchName)
                            {
                                Console.WriteLine("\tName : " + ListObj[i].Name);
                                Console.WriteLine("\tPhone Number : " + ListObj[i].PhoneNumber);
                                Console.WriteLine("\tBike Number : " + ListObj[i].BikeNumber);
                                Console.WriteLine("\tDays to rent a bike : " + ListObj[i].Days);
                            }
                        }
                        break;
                    default:
                        break;
                }
            }
        }
    }
}
