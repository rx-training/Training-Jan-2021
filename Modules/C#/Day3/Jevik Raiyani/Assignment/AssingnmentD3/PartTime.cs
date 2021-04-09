using System;
using System.Collections.Generic;
using System.Text;

namespace AssingnmentD3
{
    class  PartTime : Employee
    {
        public int noofhour { get; set; }
        public int saleperhour { get; set; }

        public new int Salary()
        {
            
            return saleperhour * noofhour;
        }
    }
}
