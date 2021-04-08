using System;
using System.Collections.Generic;
using System.Text;

namespace Assignment
{
    public class student
    {
        int age;
        string name;
        char test;
        DateTime AdDate;
       public void get()
        {
            Console.WriteLine("ENTER STUDENT AGE(>0)");
            age = Convert.ToInt32(Console.ReadLine());
            if (age <= 0)
            {
                throw new AgeException("Age should be greater then zero");
            }
            else
            {
                Console.WriteLine("Great student is eligible");
            }
            Console.WriteLine("Enter student name");
            name = Console.ReadLine();
            
            foreach (var ch in name)
            {
               
                if (!char.IsLetter(ch))
                {
                 throw new NameException("name is not correct");
                }
            }
            Console.WriteLine("Enter Admission Date");
            AdDate = Convert.ToDateTime(Console.ReadLine());
           
            if(DateTime.Compare(AdDate.Date,DateTime.Now.Date) != 0 )
            {
                throw new DateException("Please enter todays date");
            }
            else
            {
                Console.WriteLine("you are Registred with us");
            }
                
        }
    }
}
