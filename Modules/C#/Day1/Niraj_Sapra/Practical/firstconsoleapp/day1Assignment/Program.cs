using System;

namespace day1Assignment
{
    class Program
    {
        static void Main(string[] args)
        {
            int limit, Totaleven = 0;
            Console.WriteLine("enter range of number");
            limit = Convert.ToInt32(Console.ReadLine());
            for (int no = 0; no < limit; no++)
            {
                if (no % 2 == 0)
                {
                    Console.Write(" {0}", no);
                    Totaleven = Totaleven + no;
                }
            }
            Console.WriteLine(" \n sum of all even numbers are : {0} ", Totaleven);
        }
    
    }
}
