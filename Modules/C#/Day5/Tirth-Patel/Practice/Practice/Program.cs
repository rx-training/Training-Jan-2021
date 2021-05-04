using System;

using System.Globalization;
using System.IO;
namespace Practice
{
    class Program
    {
        static void Main(string[] args)
        {
            //ListClass list1 = new ListClass();
            //QueueCollection q1 = new QueueCollection();
            //Create a stack which will store Age of person 
            //    and display it last in first out order
           // stackCollection sc = new stackCollection();
           // Console.WriteLine("Enter the count of total person");
           // var count = Convert.ToInt32(Console.ReadLine());
           // stackCollection sc1 = new stackCollection(count);
            //Create a list which will store 5 student names and
            //    then display it search it index number
            ListClass Namelist = new ListClass();


            /* while (true)
              {
                  Console.WriteLine("press A to add students\n or press D to display\n E to exit");
                  char c = Convert.ToChar(Console.ReadLine());
                  switch (c)
                  {
                      case 'A':
                          Console.WriteLine("Enter Name");
                          string name = Console.ReadLine();
                          Namelist.getdata(name);
                          continue;
                      case 'D':
                          Console.WriteLine("enter the number for which you want to see Name");
                          int n = Convert.ToInt32(Console.ReadLine());
                          Namelist.display(n-1);
                          continue;
                      case 'E':
                          break;
                      default:
                          Console.WriteLine("ENTER VALID CHOICE:");
                          continue;

                  }
                  break;
              }*/
            DicitionaryCollection d1 = new DicitionaryCollection();
                       string s1 = "hello world";
            
        }
    }
}
