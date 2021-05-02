using System;
using System.Collections.Generic;
using System.Collections;
namespace list
{

    public class Person
    {
        public int Item { get; set; }
        public int Price { get; set; }
        public string Name { get; set; }
        //public Person(int Item, int Price, string Name)
        //{
        //    Item = Item;
        //    Price = Price;
        //    Name = Name;
        //}
        
    }
    class Program
    {

        static void Main(string[] args)
        {
            // Create a list which will store 5 student names and then display it search it index number
            List<string> studentlist = new List<string>() { "niraj", "charmi", "palak", "tirth", "namra" };

            studentlist.Insert(1, "nill");
            Console.WriteLine(studentlist[0]);
            Console.WriteLine("Hello World!");

            for (int i = 0; i < studentlist.Count; i++)
            {
                Console.WriteLine(studentlist[i]);
            }

            // Create a stack which will store Age of person and display it last in first out order.
            int[] arr = new int[] { 1, 2, 3, 4 };
            Stack<int> agestack = new Stack<int>(arr);
            agestack.Push(18);

            foreach (var item in agestack)
                Console.Write(item + ",");

            //Store a product information in map object.Key will be a product item and value
            //    will be the price of that product. Search the product by product name.
            Person p = new Person();
            //ArrayList arrayList = new ArrayList();
            //arrayList.Add((new Person() { Item = 1, Price = 1000, Name = "Tshirt" }));
            
            Dictionary<string,int> listData = new Dictionary<string,int>();
            listData.Add("Tshirt", 1);
            listData.Add("shirt", 2);
            listData.Add("bat", 3);
            listData.Add("phone",4);
            Console.WriteLine("Enter Name");
            string name = Console.ReadLine();

            foreach (var data in listData)
            {
                if (data.Key == name)
                {
                    Console.WriteLine("product is match");
                    break;
                }
                
            }
        }
       
    }
}
