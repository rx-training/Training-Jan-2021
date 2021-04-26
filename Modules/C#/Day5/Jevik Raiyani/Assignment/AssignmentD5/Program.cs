using System;
using System.Collections.Generic;

namespace AssignmentD5
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("enter no of detail element which you want to store");
            int n = Convert.ToInt32(Console.ReadLine());

            List<Mobike> myList = new List<Mobike>();


            for (int i = 0; i < n; i++)
            {
                Console.WriteLine("enter {0} detail :", i + 1);
                Console.WriteLine("Enter Name,Bikenumber,phonenumber,days :");
                var data = new Mobike();
                data.Input(Console.ReadLine(), Console.ReadLine(), Console.ReadLine(), Convert.ToInt32(Console.ReadLine()));
                myList.Add(data);

            }

            Console.WriteLine("List data-----");

            foreach (Mobike item in myList)
            {
                item.Display();
            }

            Console.WriteLine("Enter one more datail");
            Console.WriteLine("Enter Name,Bikenumber,phonenumber,days :");

            var addOneMore = new Mobike();
            addOneMore.Input(Console.ReadLine(), Console.ReadLine(), Console.ReadLine(), Convert.ToInt32(Console.ReadLine()));
            myList.Add(addOneMore);

            Console.WriteLine("List data-----");
            foreach (Mobike item in myList)
            {
                item.Display();
            }
            Console.WriteLine("enter name and get their rent");
            string pp = Console.ReadLine();
            Mobike search = myList.Find(myList => myList.Name == pp);
            Console.WriteLine(search.Rent);
            Console.WriteLine("List data-----");
            foreach (Mobike item in myList)
            {
                item.Display();
            }

            Console.WriteLine("enter name Which you want to delete");
            string ppp = Console.ReadLine();
            Mobike delete = myList.Find(myList => myList.Name == ppp);
            myList.Remove(delete);
            Console.WriteLine("List data-----");
            foreach (Mobike item in myList)
            {
                item.Display();
            }


            Console.WriteLine("enter name Which you want to Edit");
            Mobike edit = myList.Find(myList => myList.Name == Console.ReadLine());
            Console.WriteLine("new name");
            edit.Name = Console.ReadLine();
            Console.WriteLine("List data-----");
            foreach (Mobike item in myList)
            {
                item.Display();
            }



        }
    }
}
