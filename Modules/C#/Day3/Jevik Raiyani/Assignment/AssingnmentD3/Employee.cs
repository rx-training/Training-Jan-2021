using System;
using System.Collections.Generic;
using System.Text;

namespace AssingnmentD3
{
    abstract class Employee : Emp
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string PanNumber { get; set; }

        public virtual void Get()
        {
            throw new NotImplementedException();
        }
        public virtual void Display()
        {
            throw new NotImplementedException();
        }

        

        public  int Salary()
        {
            throw new NotImplementedException();
    }

}
}
