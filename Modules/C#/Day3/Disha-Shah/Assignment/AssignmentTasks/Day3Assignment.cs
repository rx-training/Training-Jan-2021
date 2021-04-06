using System;

namespace AssignmentTasks
{
    class Day3Assignment
    {
        static void Main(string[] args)
        {
            Employee emp1 = new PartTime();
            emp1.Get();
            emp1.Display();

            Employee emp2 = new FullTime();
            emp2.Get();
            emp2.Display();
        }
    }
}
