using System;
using System.Collections.Generic;

namespace OOP
{
    class Program
    {
        static void Main(string[] args)
        {
            var myComputer = new Computer();
            myComputer.ID = 102;
            Item mySecondComputer = new Computer();
            mySecondComputer.ID = 103;
            Computer mySecondComputer2 = mySecondComputer as Computer;
            string myCputype = mySecondComputer2.Cputype;
            mySecondComputer2.name = "CoolerMaster";
            mySecondComputer2.Cputype = "Amd";
            mySecondComputer2.Purchase();
            Software mySoftware = new Software();
            mySoftware.ISBN = "1234";
            mySoftware.name = "Office-2021";
            mySoftware.Purchase();

            List<Item> myItems = Item.GetItems(20);
            foreach (var item in myItems)
            {
                Console.WriteLine("new Item Id ={0} , NAame {1}", item.ID,item.name);
            }
          

        }
    }
}
