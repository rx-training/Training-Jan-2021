using System;
using System.Collections.Generic;
using System.Text;
using System.Linq.Expressions;

namespace LINQPractice
{
    public class Students
    {
        public int StudentID { get; set; }
        public String StudentName { get; set; }
        public int age { get; set; }
        public int StandardId { get; set; }
       

    }
    public class Standard
    {
        public int StandardID { get; set; }
        public string StandardName { get; set; }

    }
    
    public class StudentComparer : IEqualityComparer<Students>
    {
        public bool Equals(Students x ,Students y)
        {
            if (x.StudentID == y.StudentID && x.StudentName.ToLower() == y.StudentName.ToLower())
            {
                return true;
            }
            else
            {
               return  false;
            }
        }
        public int GetHashCode(Students obj)
        {
            return obj.GetHashCode();
        }
    }
   

}
