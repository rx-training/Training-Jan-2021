using System;
using System.Collections.Generic;


namespace StudentAngular.Model
{
    public class Student
    {
        public int? StudentId { get; set; }
        public string StudentFirstName { get; set; }
        public string StudentMiddleName { get; set; }
        public string StudentLastName { get; set; }
        public string Address { get; set; }
        public string Contact { get; set; }
        public int Marks { get; set; }
    }
}
