using System;
using System.Collections.Generic;
using System.Text;

namespace Day7_8AssignmentTask
{
    class Employee : IComparable<Employee>

    {

        public int ID { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public double Salary { get; set; }

        public DateTime JoiningDate { get; set; }

        public string Deparment { get; set; }

        public int CompareTo(Employee other)
        {
            if (this.Salary >= other.Salary)
                return 1;

            return 0;
        }
    }
}
