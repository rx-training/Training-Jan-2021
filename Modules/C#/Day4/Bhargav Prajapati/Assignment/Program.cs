using System;

namespace Assignment
{
    /* Create a user defined Exception Class AgeException. If Age is less than 0 it should be thrown an exception. And you need to handle that exception in student class*/

    public class AgeException : ApplicationException
    {
        public AgeException(string message) : base(message)
        { 
        }
        public static void Validateage( )
        {
                throw new AgeException("PLease Enter Valid Date");
            
        }
    }

    public class student
    {
        public void GetAge()
        {
            try
            {
                Console.WriteLine("Please Enter The Age :-");
                int age = Convert.ToInt32(Console.ReadLine());
                if (age < 0 || age > 110)
                {
                    AgeException.Validateage();
                }
                Console.WriteLine("your Age Is "+age);
                
            }
            catch (AgeException e)
            {
                Console.WriteLine(e.Message);
            }
        }
    }
    /*2. Create a user defined exception class NameException which will validate a Name
        and name should contain only character. If name does not contain proper value it should 
        throw an exception. You need to handle exception in student class*/

    class NameExection : ApplicationException
    {
       public  NameExection(string message) : base(message)
        { 
        }
        public static void ValidateName()
        {
            throw new NameExection("Name Should be only Charactor");
        }
    }

    class Person
    {
        
        public void GetName()
        {
            try
            { 
            Console.WriteLine("Enter The Name");
            string Name = Console.ReadLine();
                
                for (int i = 0; i < Name.Length; i++)
                {
                    if(char.IsDigit(Name[i])==true)
                    {
                        NameExection.ValidateName();
                    }
                }
               

                Console.WriteLine("Name Is :-"+Name);
            }
            catch(NameExection v)
            {
                Console.WriteLine(v.Message);
            }

        }
    }
    






    /*3. Create a user defined Exception DateException class which will validate 
     date should not be less than the current date. 
      If date is less than current date it should throw an exception*/
    public class DateValidationException : ApplicationException
    {
        public DateValidationException(String message) : base(message)
        { 
        }
        public static void Datevalidation()
        {
            throw new DateValidationException("date should not be less than the current date"); 
        }
    }

    public class Date
    {
        public void GetDate()
        {
            try
            {
                Console.WriteLine("Enter The Date in the form of the dd/mm/yyyy");
                String date = Console.ReadLine();
                var split = date.Split("/");
                int[] arr = new int[split.Length];
                for (int j = 0; j < split.Length; j++)
                {
                    arr[j] = Convert.ToInt32(split[j]);
                }
                DateTime dt = new DateTime(arr[2], arr[1], arr[0]);
                DateTime dt2 = DateTime.Today;
                if (dt < dt2)
                {
                    DateValidationException.Datevalidation();
                }
                Console.WriteLine("Enter Date :- "+dt);
            }
            catch (DateValidationException d)
            {
                Console.WriteLine(d.Message);
            }


        }
    }


    class Program
    {
        static void Main(string[] args)
        {
            
            student a1 = new student();
            a1.GetAge();
            Person p = new Person();
            p.GetName();
            Date d1 = new Date();
            d1.GetDate();
        }
    }
}
