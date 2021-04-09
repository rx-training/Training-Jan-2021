using System;
using System.Collections.Generic;

namespace Day5Assignment
{
    class MobileException : Exception
    {
        public MobileException()
        {
                
        }
        public MobileException(string ex):base(ex)
        {

        }
        public void validateBike(List<Mobile> users, int number)
        {
            if(number > 1000 || number < 0)
            {
                throw new MobileException($"Enter valid cycle number");
            }
            foreach(var item in users)
            {
                if(number == item.BikeNumber)
                {
                    throw new MobileException($"Bike is already hired... please try again...");
                }
            }
        }
        public void validateName(List<Mobile> users, string name)
        {
            foreach(var item in users)
            {
                if((item.Name).ToLower() == name.ToLower())
                {
                    throw new MobileException($"Name is already there... please update your data...");
                }
            }
        }
        public void validateContact(string contact)
        {
            char[] charArr = contact.ToCharArray();
            foreach(var item in charArr)
            {
                if((int)item < 48 || (int)item > 57)
                {
                    throw new MobileException($"please enter valid phone number");
                }
            }
            if(charArr.Length != 10)
            {
                throw new MobileException($"please enter valid phone number");
            }
        }
        public int searchUser(List<Mobile> users,string userName)
        {
            int index = 0;
            foreach (var item in users)
            {
                if ((item.Name).ToLower() == userName.ToLower())
                {
                    index = users.IndexOf(item) + 1;
                }
            }
            return index;
        }

    }
    class Mobile
    {
        public int BikeNumber { get; set; }
        public string PhoneNumber { get; set; }
        public string Name { get; set; }
        public int Days { get; set; }
        public int Charge { get; set; }


        public void Input(int Bike, string PhoneNo, string CName, int DaysRent)
        {
            this.BikeNumber = Bike;
            this.PhoneNumber = PhoneNo;
            this.Name = CName;
            this.Days = DaysRent;
            this.Charge = Compute(DaysRent);
        }
        public int Compute(int DaysRent)
        {
            if (DaysRent <= 5)
            {
                return DaysRent * 500;
            }
            else if (DaysRent <= 10)
            {
                int rent = 5 * 500;
                DaysRent = DaysRent - 5;
                rent += 400 * DaysRent;
                return rent;
            }
            else
            {
                int rent = 5 * 500 + 5 * 400;
                DaysRent -= 10;
                rent += DaysRent * 200;
                return rent;
            }
        }
        public void Display()
        {
            Console.WriteLine($"{BikeNumber} \t\t {Name} \t {PhoneNumber} \t\t {Days} \t {Charge}");
            Console.WriteLine($"--------------------------------------------------------------------------------------------------------------");
        }

    }
    class Day5Assignment
    {
        static void Main(string[] args)
        {
            var customer = new List<Mobile>();
            var me = new MobileException();
            string Choice = "";
            while (Choice != "E")
            {
                Console.WriteLine($"--------------------------------------------------------------------------------------------------------------");
                Console.WriteLine($"What would you like to do in system?");
                Console.WriteLine($"press [I] to 'Insert', [U] to 'Update', [S] to 'Search', [D] to 'Delete', [E] to 'Exit', [Display] to 'Display data'");
                Choice = Console.ReadLine();
                switch (Choice)
                {
                    case "I":
                    case "i":
                        try
                        {
                            Console.WriteLine($"Enter bike number");
                            int bikeInput = Convert.ToInt32(Console.ReadLine());
                            me.validateBike(customer, bikeInput);

                            Console.WriteLine($"Enter your name");
                            string NameInput = Console.ReadLine();
                            me.validateName(customer, NameInput);

                            Console.WriteLine($"Enter your phone number");
                            string PhoneInput = Console.ReadLine();
                            me.validateContact(PhoneInput);

                            Console.WriteLine($"For how many days do you hire a bicycle?");
                            int DayInput = Convert.ToInt16(Console.ReadLine());

                            Mobile m = new Mobile();
                            m.Input(bikeInput, PhoneInput, NameInput, DayInput);
                            customer.Add(m);
                        }
                        catch (Exception e)
                        {
                            Console.WriteLine(e.Message);
                        }
                        break;
                    case "U":
                    case "u":
                        Console.WriteLine($"please enter your name");
                        string NameFind = Console.ReadLine();
                        int index = me.searchUser(customer, NameFind);
                        
                        if(index == 0)
                        {
                            Console.WriteLine($"User is not found");
                            break;
                        }
                        else
                        {
                            index--;
                            try
                            {
                                Console.WriteLine($"--------------------------------------------------");

                                Console.WriteLine($"What do you want to update?");
                                Console.WriteLine($" Press 1 'to change name', 2 'to change bike number', 3 'to add days', 4 'to change days', 5 'to change contact'");
                                int choiceUpdate = Convert.ToInt32(Console.ReadLine());
                                switch(choiceUpdate)
                                {
                                    case 1:
                                        Console.WriteLine($"Enter a name:");
                                        string UpdateName = Console.ReadLine();
                                        me.validateName(customer, UpdateName);
                                        customer[index].Name = UpdateName;
                                        Console.WriteLine();
                                        Console.WriteLine($"your name is successfully changed and your updated name : {UpdateName}");
                                        Console.WriteLine();
                                        break;
                                    case 2:
                                        Console.WriteLine($"Enter bike number:");
                                        int UpdateBike = Convert.ToInt32(Console.ReadLine());
                                        me.validateBike(customer, UpdateBike);
                                        customer[index].BikeNumber = UpdateBike;
                                        Console.WriteLine();
                                        Console.WriteLine($"your ride is successfully changed and your updated cycle number : {UpdateBike}");
                                        Console.WriteLine();
                                        break;
                                    case 3:
                                        Console.WriteLine($"How many days you want to add?");
                                        int addDays = Convert.ToInt32(Console.ReadLine());
                                        customer[index].Days += addDays;
                                        customer[index].Charge = customer[index].Compute(customer[index].Days);
                                        Console.WriteLine();
                                        Console.WriteLine($"your days are successfully added and your days for ride : {customer[index].Days}");
                                        Console.WriteLine();
                                        break;
                                    case 4:
                                        Console.WriteLine($"How many days you want a cycle?");
                                        int newDays = Convert.ToInt32(Console.ReadLine());
                                        customer[index].Days = newDays;
                                        customer[index].Charge = customer[index].Compute(newDays);
                                        Console.WriteLine();
                                        Console.WriteLine($"your days are successfully changed and your days for ride : {customer[index].Days}");
                                        Console.WriteLine();
                                        break;
                                    case 5:
                                        Console.WriteLine($"Enter a contact number to change");
                                        string updateContact = Console.ReadLine();
                                        me.validateContact(updateContact);
                                        customer[index].PhoneNumber = updateContact;
                                        Console.WriteLine();
                                        Console.WriteLine($"your contact number is successfully changed and your contact number is : {customer[index].PhoneNumber}");
                                        Console.WriteLine();
                                        break;
                                    default:
                                        Console.WriteLine($"Enter a valid choice");
                                        break;
                                }

                            }
                            catch (Exception e)
                            {
                                Console.WriteLine(e.Message);
                            }
                        }
                        Console.WriteLine();
                        break;
                    case "E":
                    case "e":
                        Choice = "E";
                        Console.WriteLine($"--------------------------------------------------------------------------------------------------------------");
                        Console.WriteLine($"you are out successfully......");
                        Console.WriteLine($"--------------------------------------------------------------------------------------------------------------");
                        break;
                    case "D":
                    case "d":
                        Console.WriteLine($"please enter name to delete a user:");
                        string deleteName = Console.ReadLine();
                        int DeleteIndex = me.searchUser(customer, deleteName);
                        if(DeleteIndex == 0)
                        {
                            Console.WriteLine($"There is no such user whose name  is {deleteName}");
                        }
                        else
                        {
                            DeleteIndex--;
                            customer.Remove(customer[DeleteIndex]);
                        }
                        break;
                    case "S":
                    case "s":
                        Console.WriteLine($"Enter a name to search user");
                        string searchName = Console.ReadLine();
                        int i = me.searchUser(customer, searchName);
                        if(i==0)
                        {
                            Console.WriteLine($"Searched input is not founded...");
                        }
                        else
                        {
                            i--;
                            //customer[i].Display();
                            Console.WriteLine($"Name : {customer[i].Name}");
                            Console.WriteLine($"Bike number : {customer[i].BikeNumber}\t Contact number : {customer[i].PhoneNumber}\t Days : {customer[i].Days} \t charge {customer[i].Charge} ");
                        }
                        break;
                    case "Display":
                    case "display":
                        if(customer.Count == 0)
                        {
                            Console.WriteLine($"There is nothing to show...");
                        }
                        else
                        {
                            Console.WriteLine($"Bike Number \t Name \t Contact Number \t Days \t Charge");
                            foreach(var item in customer)
                            {
                                item.Display();
                            }
                        }
                        break;
                    default:
                        Console.WriteLine($"Please enter valid choice");
                        break;
                }
            }
            
        }
    }
}
