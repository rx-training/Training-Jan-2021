using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace OOP
{
    public class Item
    {
        public int ID { get; set; }
        public string name { get; set; }
        public virtual void Purchase()
        {
            System.Console.WriteLine("purchasing {0}", name);
        }
        public  static List<Item> GetItems(int numToGet)
        {
            var random = new Random();
            var newList = new List<Item>();
            Item newItem;
            for (int i = 0; i <numToGet; i++)
            {
                 newItem = new Item() { ID = random.Next(), name = "Myitem" +i.ToString() };
                newList.Add(newItem);
           
            }

            return newList;
        }
    }
    class Software : Item
    {
        public string ISBN { get; set; }
        public override void Purchase()
        {
            Console.WriteLine("not calling base and my isbn is{0}",ISBN);
        }
    }
    class Hardware : Item
    {
        public string SerialNumber { get; set; }
    }
    class Computer : Hardware
    {

        public string Cputype { get; set; }
        public string Disks { get; set; }
        public override void Purchase()
        {
            base.Purchase();
            System.Console.WriteLine("My cpu type is {0}", Cputype);
        }
    }
    class Peripheral : Hardware
    {
        public string description { get; set; }
    }
}