using System;

namespace Assignment
{
  
    class Final
    {
        
        public static void Main(string[] args)
        {
            
            Parttime ob = new Parttime(10,9);
            Fulltime ob1 = new Fulltime(1000);

            ob.Salary();
            ob1.Salary();

            //ob.GetDisplay(1, "Niraj", "nirmalnager",1264);
            //ob.GetSalary(20,300);
            //Fulltime ob1 = new Fulltime();
        }
    }
}
 