using System;
using System.Collections.Generic;
using System.Text;

namespace Practice
{
    class ListClass
    {
        public List<string> names = new List<string>();
        public ListClass()
        {
            //var r = new Random();
            //List<int> myList = new List<int>();
            //for (int i = 0; i < 10; i++)
            //{
            //    myList.Add(r.Next());
            //}
            //myList.Sort();
            //foreach (var item in myList)
            //{
            //    Console.WriteLine(item);
            //}

        }
        //Create a list which 
        //    will store 5 student names and then display it 
        //    search it index number
        public void  getdata(string s)
        {
            
            names.Add(s);
        }
     public   void display(int n)
        {
            if ( names.Count <=n )
            {
                Console.WriteLine("Check list the number you searching is not in list");
                Console.WriteLine("Either list is empty or the number is too large");
            }
            else
            {
                string[] name = new string[names.Count+1];
                name = names.ToArray();
                for (int i = 0; i <= name.Length; i++)
                {
                    if(i == n)
                    {
                        Console.WriteLine(name[n]);
                    }
                }
              

                  
                    
                
            }
        }

    }
}
