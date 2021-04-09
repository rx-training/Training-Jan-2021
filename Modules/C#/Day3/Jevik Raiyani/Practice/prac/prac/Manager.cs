using System;
using System.Collections.Generic;
using System.Text;

namespace prac
{
    public class Manager : Employees
    {
        public Manager(string name, string streeet, string city, string state, string postalcode) :
            this(name, streeet, city, state, postalcode, 60000)
        {

        }
        public Manager(string name, string streeet, string city, string state, string postalcode, double salary) :
            base(name,streeet,city,state,postalcode,salary)
        { 

        }
        public override string Dowork()
        {
            return "Manager doing work";
        }
        public override string Dowork(string workType)
        {
            return "Supervising " + workType;
        }
        public string GivePraise()
        {
            return "Manager giving praise.";
        }

    }
}
