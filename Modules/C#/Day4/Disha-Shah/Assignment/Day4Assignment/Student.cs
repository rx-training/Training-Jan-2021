using System;
using System.Collections.Generic;
using System.Text;

namespace Day4Assignment
{
    class Student
    {
        public void display()
        {
            try
            {
                // Assigment-2
                Console.WriteLine("Enter your name:");
                string name = Console.ReadLine();
                NameException ne = new NameException();
                ne.validateName(name);

                // Assignment-1
                Console.WriteLine("Enter your age:");
                int age = Convert.ToInt32(Console.ReadLine());
                AgeException ae = new AgeException();
                ae.validateAge(age);

                // Assignment-3
                Console.WriteLine("Enter date:");
                string dateString = Console.ReadLine();
                DateTime dateValue;

                if (DateTime.TryParse(dateString, out dateValue))
                {
                    DateException de = new DateException();
                    de.validateDate(dateValue);
                    Console.WriteLine($"Date entered by a student is: {dateValue:d}");
                }

                Console.WriteLine($"Name of a student is: {name}");
                Console.WriteLine($"Age of a student is: {age}");

            }
            catch (FormatException e)
            {
                Console.WriteLine(e.GetType() + e.Message + e.StackTrace);
            }
            catch (NameException e)
            {
                Console.WriteLine(e.GetType() + e.Message + e.StackTrace);
            }
            catch (AgeException e)
            {
                Console.WriteLine(e.GetType() + e.Message + e.StackTrace);

            }
            catch (DateException e)
            {
                Console.WriteLine(e.GetType() + e.Message + e.StackTrace);
            }
            catch (Exception e)
            {
                Console.WriteLine(e.GetType() + e.Message + e.StackTrace);

            }
        }
    }
}
