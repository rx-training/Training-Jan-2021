using System;

namespace Day4Assignment
{
    class AgeException : Exception
    {
        public AgeException()
        {

        }
        public AgeException(string ex) : base(ex)
        {

        }
        public void validateAge(int age)
        {
            if(age < 18)
            {
                throw new AgeException("Age should be greater than 18");
            }
        }
    }
    class NameException : Exception
    {
        public NameException()
        {

        }
        public NameException(string ex) : base(ex)
        {

        }
        public void validateName(string name)
        {
            name = name.Replace(" ", "");
            char[] charArr = name.ToCharArray();
            foreach(char item in charArr)
            {
                if (((int)item >= 97 && (int)item <= 122) || ((int)item >= 65 && (int)item <= 90))
                {
                    continue;
                }
                else
                {
                    throw new NameException("All characters should be alphabets");
                }
            }
        }
    }
    class DateException : Exception
    {
        public DateException()
        {

        }
        public DateException(string ex) : base(ex)
        {

        }
        public void validateDate(DateTime date)
        {
            if(date < DateTime.Today)
            {
                throw new DateException("Date should be equal or greater than date of today.");
            }
        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            try
            {
                AgeException ae = new AgeException();
   
                Console.WriteLine($"Enter your age : ");
                int age = Convert.ToInt32(Console.ReadLine());
                ae.validateAge(age);
                Console.WriteLine($"Age is {age}");

            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }
            try
            {
                NameException ne = new NameException();
                Console.WriteLine($"Enter your name : ");
                string name = Console.ReadLine();
                ne.validateName(name);
                Console.WriteLine($"Name is {name}");
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }
            try
            {
                DateException de = new DateException();
                Console.WriteLine($"Enter a date");
                DateTime date = Convert.ToDateTime(Console.ReadLine());
             
                de.validateDate(date);
                Console.WriteLine($"Date is {date}");
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }
        }
    }
}
