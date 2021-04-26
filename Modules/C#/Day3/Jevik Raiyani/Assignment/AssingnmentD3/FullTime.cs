using System;
using System.Collections.Generic;
using System.Text;

namespace AssingnmentD3
{
    class FullTime : Employee
    {
        public int Basic { get; set; }
        public int HRA { get; set; }
        public int TA { get; set; }
        public int DA { get; set; }

        public new int Salary()
        {
            return Basic + HRA + TA + DA;
        }
    }
}
