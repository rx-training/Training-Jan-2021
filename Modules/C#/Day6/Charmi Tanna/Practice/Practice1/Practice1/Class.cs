using System;
using System.Collections.Generic;
using System.Text;
using static Practice1.Program;

namespace Practice1
{
    class Class
    {
        private readonly Employee emp;
        public Class(Employee emp)
        {
            this.emp = emp;
        }
        public void Event1()
        {
            Console.WriteLine("Event Occured");
        }
    }
}
