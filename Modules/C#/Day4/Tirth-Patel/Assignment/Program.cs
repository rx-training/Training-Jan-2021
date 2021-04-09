using System;

namespace Assignment
{
    class Program
    {
        static void Main(string[] args)
        {
            student s1 = new student();
            try
            {
                s1.get();

            }
            catch(AgeException Ae)
            {
                Console.WriteLine(Ae.Message);
            }
            catch(NameException ne)
            {
                Console.WriteLine(ne.Message);
            }
            catch(DateException de)
            {
                Console.WriteLine(de.Message);
            }
        }
    }
}
