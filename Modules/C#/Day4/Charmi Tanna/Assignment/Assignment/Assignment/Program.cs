using System;

namespace Assignment
{
    public class AgeExecption : SystemException
    {
        public AgeExecption(string str)
        {
            Console.WriteLine(str);
        }
    }
    public class NameException : SystemException
    {
        public NameException(string str)
        {
            Console.WriteLine(str);
        }
    }
    public class DateException : SystemException
    {
        public DateException(string str)
        {
            Console.WriteLine(str);
        }
    }
    public class Students
    {
        int age;
        string name;
        public void GetAge()
        {
            try
            {
                Console.WriteLine("Enter Your age:");
                age = Convert.ToInt32(Console.ReadLine());
                if (age < 0)
                {
                    throw new AgeExecption("Age must not be less than 0");
                }
            }
            catch (AgeExecption ex)
            {
                Console.WriteLine(ex.Message);
            }
        }
        public void GetName()
        {
            try
            {
                Console.WriteLine("Enter Your Name:");
                name = Console.ReadLine();
                for (int i = 0; i < name.Length; i++)
                {
                    if (!(name[i] >= 'A' && name[i] <= 'z'))
                    {
                        throw new NameException("Name should only contain characters between A to Z or a to z");
                    }
                }

            }
            catch (NameException ex)
            {
                Console.WriteLine(ex.Message);
            }
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            Students s = new Students();
            s.GetAge();
            s.GetName();
            try
            {
                DateTime Date = new DateTime();
                Console.WriteLine("Enter date:");
                Date = DateTime.Parse(Console.ReadLine());
                if (Date < DateTime.Now.Date)
                {
                    throw new DateException("Date should not be less than current date");
                }
            }
            catch (DateException ex)
            {
                Console.WriteLine(ex.Message);
            }
        }
    }
}
