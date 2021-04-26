using System;
using System.Collections.Generic;
using System.Text;

namespace prac
{
    public class Employees
    {
        public string Name { get; set; }
        public AddressInfo Address { get; set; }
        public InsurenceInfo Insurence { get; set; }
        public double Salary { get; set; }

        public Employees(string name, string streeet, string city, string state, string postalcode) :
            this(name,streeet,city,state,postalcode,50000)
        {
        }


        public Employees(string name,string streeet,string city, string state, string postalcode,double salary)
        {
            Name = name;
            Salary = salary;
            Address = new AddressInfo()
            {
                Street = streeet,
                City = city,
                State = state,
                PostalCode = postalcode
            };
        }
        public virtual string Dowork()
        {
            return "Empolyee doing work";
        }
        public virtual string Dowork(string workType)
        {
            return "Doing " + workType;
        }

        public override string ToString()
        {
            string retVal = Name + " " +
                Address.Street + " " +
                Address.City + " " +
                Address.State + " " +
                Address.PostalCode + " " +
                "\tSalary: " + Salary + "\t";

            if (Insurence!= null)
            {
                retVal += " " +
                    Insurence.PolicyName + " " +
                    Insurence.PolicyId;
            }
            return retVal; 
        }


    }
}
