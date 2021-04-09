using System;

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
            
            Item newItm = Item.GetItem();
            Console.WriteLine("new Item Id ={0} , NAame {1}",newItm.ID ,newItm.name);

        }
    }
}
