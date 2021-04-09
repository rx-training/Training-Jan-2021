using System;

namespace OOP
{
    public class Item
    {
        public int ID { get; set; }
        public string name;
        public virtual void Purchase()
        {
            System.Console.WriteLine("purchasing {0}", name);
        }
        public  static Item GetItem()
        {
            var newitem = new Item { ID = 101, name = "myItem1" };
            return newitem;
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