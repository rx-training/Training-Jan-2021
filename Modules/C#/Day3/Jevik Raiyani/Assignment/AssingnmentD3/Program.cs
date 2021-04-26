using System;

namespace AssingnmentD3
{
    class Program
    {
        static void Main(string[] args)
        {


            PartTime p = new PartTime()
            {
                Id = 1,
                Name = "jevik",
                Address = "26/11 Bhojarajpara",
                saleperhour = 200,
                noofhour = 4,
                PanNumber = "2012154"
            };
            Console.WriteLine($"id is {p.Id}, Name is {p.Name}, Address is {p.Address}, PanNo is {p.PanNumber}, salary is{p.Salary()}");

            FullTime f = new FullTime()
            {
                Id = 2,
                Name = "jevik",
                Address = "26/11 Bhojarajpara",
                PanNumber = "10212",
                Basic = 7000,
                HRA = 5000,
                DA = 2000,
                TA = 2000
            };
            Console.WriteLine($"id is {f.Id}, Name is {f.Name}, Address is {f.Address}, PanNo is {f.PanNumber}, salary is{f.Salary()}");


        }
    }
}
