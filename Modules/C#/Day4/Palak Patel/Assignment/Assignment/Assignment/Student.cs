using System;


namespace Assignment
{
    
    class Student
    {
        static void Main(string[] args)
        {
            AgeException a = new AgeException();
            DateException d = new DateException();
            NameException n = new NameException();

            try
            {
                //checking age
                Console.WriteLine("Enter Name:");
                string name = Console.ReadLine();
                n.check(name);

                //checking age
                Console.WriteLine("Enter Age:");
                int age = Convert.ToInt32(Console.ReadLine());
                a.check(age);

                //checking Date
                Console.WriteLine("Enter Date");
                DateTime date = Convert.ToDateTime(Console.ReadLine());
                d.check(date);
            }
            catch (AgeException e)
            {
                Console.WriteLine(e);
            }
            catch (DateException e)
            { 
                Console.WriteLine(e); 
            }
            catch(NameException e)
            {
                Console.WriteLine(e);
            }
        }
    }
}
