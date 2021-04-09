using System;
using System.Collections.Generic;
using System.Text;

namespace calc
{
    public class faculty
    {
        int id;
        string address, name, skills;

        public faculty(int id,string name, string address)
        {
            this.id = id;
            this.name = name;
            this.address = address;
        }

        public faculty(int id, string name)
        {
            this.id = id;
            this.name = name;
        }
        public faculty(int id,string name,string address, string skills)
        {
            this.id = id;
            this.name = name;
            this.address = address;
            this.skills = skills;
        }
        public void display()
        {
            Console.WriteLine($"id is{id}  name is {name} address is{address} skills are {skills}");
        }
    }
}
