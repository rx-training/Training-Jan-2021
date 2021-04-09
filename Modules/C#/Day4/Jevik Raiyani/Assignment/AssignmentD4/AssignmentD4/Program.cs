using System;

namespace AssignmentD4
{
    class Program
    {
        static void Main(string[] args)
        {
            Student jevik = new Student();

            Console.WriteLine(jevik.ValidAge(21));
            Console.WriteLine(jevik.ValidAge(12));
            try
            {
                var x = jevik.ValidAge(Convert.ToInt32(Console.ReadLine()));
                Console.WriteLine(x);
            }
            catch (AgeException a)
            {
                Console.WriteLine(a.Message);
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }

            Student2 jevik1 = new Student2();

            Console.WriteLine(jevik1.ValidName("jevik"));
            Console.WriteLine(jevik1.ValidName("as"));
            try
            {
                string p = jevik1.ValidName(Convert.ToString(Console.ReadLine()));
                Console.WriteLine(p);
            }
            catch (NameException n)
            {
                Console.WriteLine(n.Message);
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }

            Student3 jevik3 = new Student3();

            Console.WriteLine(jevik3.ValidDate(new DateTime(2022,12,2)));
            Console.WriteLine(jevik3.ValidDate(new DateTime(2025, 1, 2)));
            Console.WriteLine(jevik3.ValidDate(new DateTime(2025, 1, 2, 1, 1, 1, 1)));
            try
            {
                string d = jevik3.ValidDate(Convert.ToDateTime(Console.ReadLine()));
                Console.WriteLine(d);
            }
            catch (DateException d)
            {
                Console.WriteLine(d.Message);
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }
        }
    }
}
