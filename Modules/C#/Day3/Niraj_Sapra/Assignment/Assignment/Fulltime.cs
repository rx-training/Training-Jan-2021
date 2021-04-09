using System;
using System.Collections.Generic;
using System.Text;

namespace Assignment
{
    class Fulltime:Employee
    {
        int basic, HRA=250, TA=100, DA=200;
        public Fulltime(int basic)
        {
            this.basic = basic;
        }

       public override void Salary()
        {
            Console.WriteLine("basic salary Fulltime empployee ");
            basic = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("HRA salary Fulltime empployee");
            HRA = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("DA salary Fulltime empployee");
            DA = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("TA salary Fulltime empployee" );
            TA = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("total salary Fulltime hours" + (basic+HRA+DA+TA));
        }
    }
}
