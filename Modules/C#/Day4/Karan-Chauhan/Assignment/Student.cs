using System;

namespace Assignment
{
    class Student
    {
        public class AgeException : Exception
        {
            public AgeException(string message) : base (message)
            {
             
            }

            public static void AgeValid ()
            {
                throw new AgeException("Age cannot be negative! Please enter valid age!");

            }
        }

        public class NameException : Exception
        {
            public NameException(string message) : base(message)
            {

            }

            public static void NameValid()
            {
                throw new NameException("Name should contain only character! Please enter valid name!");

            }
        }

        public class DateException : Exception
        {
            public DateException(string message) : base(message)
            {

            }

            public static void DateValid()
            {
                throw new DateException("Date should not be less than the current date! Please enter valid date!");

            }
        }

        public class Age
        {
            public void CheckAge()
            {
                try
                {
                    Console.WriteLine("Enter your age: ");
                    int age = Convert.ToInt16(Console.ReadLine());
                    if (age < 0)
                    {
                        AgeException.AgeValid();
                    }
                    Console.WriteLine("Age is " + age);
                }
                catch (AgeException e)
                {
                    Console.WriteLine(e.Message);
                }

            }
        }

        public class Name
        {
            public void CheckName()
            {
                try
                {
                    Console.WriteLine("Enter your name: ");
                    string name = Console.ReadLine();
                    for (int i=0; i<name.Length; i++)
                    {
                        if(Char.IsDigit(name[i]))
                        {
                            NameException.NameValid();
                        }
                    }
                    Console.WriteLine("Name is " + name);
                }
                catch (NameException e)
                {
                    Console.WriteLine(e.Message);
                }

            }
        }

        public class Date
        {
            public void CheckDate()
            {
                try
                {
                    Console.WriteLine("Enter the day: ");
                    int day = Convert.ToInt16(Console.ReadLine());
                    Console.WriteLine("Enter the month: ");
                    int month = Convert.ToInt16(Console.ReadLine()); 
                    Console.WriteLine("Enter the year: ");
                    int year = Convert.ToInt16(Console.ReadLine());
                    if (Convert.ToInt32(DateTime.Now.ToString("yyyy")) > year)
                    {
                        DateException.DateValid();
                    }
                    else if(Convert.ToInt32(DateTime.Now.ToString("yyyy")) == year)
                    {
                        if(Convert.ToInt32(DateTime.Now.ToString("MM")) > month)
                        {
                            DateException.DateValid();
                        }
                        else if(Convert.ToInt32(DateTime.Now.ToString("MM")) == month)
                        {
                            if(Convert.ToInt32(DateTime.Now.ToString("dd")) > day)
                            {
                                DateException.DateValid();
                            }
                            else
                            {
                                Console.WriteLine("Date is valid");
                            }

                        }
                        else
                        {
                            Console.WriteLine("Date is valid");
                        }
                    }
                    else
                    {
                        Console.WriteLine("Date is valid");
                    }
                    
                }
                catch (DateException e)
                {
                    Console.WriteLine(Convert.ToInt32(DateTime.Now.ToString("yyyy")));
                    Console.WriteLine(e.Message);
                }

            }
        }
        static void Main(string[] args)
        {
            Age a = new Age();
            a.CheckAge();
            Name n = new Name();
            n.CheckName();
            Date d = new Date();
            d.CheckDate();
            Console.ReadKey();
            
        }
    }
}
