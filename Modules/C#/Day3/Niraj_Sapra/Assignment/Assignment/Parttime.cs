using System;
using System.Collections.Generic;
using System.Text;

namespace Assignment
{
    class Parttime:Employee 
    {
        int noofhour;
        int salperhour;

        
        public Parttime(int a, int b)
        {
            this.noofhour = a;
            this.salperhour = b;
        }

       public override void Salary()
        {
            //Console.WriteLine("noofhour salary Parttime hours");
            //noofhour = Convert.ToInt32(Console.ReadLine());
            //Console.WriteLine("noofhour salary Parttime hours");
            //salperhour = Convert.ToInt32(Console.ReadLine());
                Console.WriteLine("noofhour salary Parttime hours" + noofhour);
                Console.WriteLine("salary per hour in Parttime" + salperhour);
                Console.WriteLine("salary is get in Parttime job" + salperhour * noofhour);
        }

    }
}
