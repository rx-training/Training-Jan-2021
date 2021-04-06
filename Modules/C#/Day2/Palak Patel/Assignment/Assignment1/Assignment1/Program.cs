using System;
using Persons;

namespace Assignment1
{
    class Program
    {
        static void Main(string[] args)
        {
            Person[] p = new Person[1];
            string fn, ln, email;
            DateTime dob;
            for (int i = 0; i < p.Length; i++)
            {
                Console.WriteLine($"Enter {i + 1} Person's First Name");
                fn = Console.ReadLine();

                Console.WriteLine($"Enter {i + 1} Person's Last Name");
                ln = Console.ReadLine();

                Console.WriteLine($"Enter {i + 1} Person's Email Address");
                email = Console.ReadLine();

                Console.WriteLine($"Enter {i + 1} Person's Date Of Birth");
                dob = Convert.ToDateTime(Console.ReadLine());

                p[i] = new Person(fn, ln, email, dob);
            }
            
            Console.WriteLine("Name\t\t\t Email\t\t\t Date Of Birth\t Adult\t SunSign\t ChineseSign\t Birthday\t ScreenName");
            for (int i = 0; i < p.Length; i++)
            {
                Console.WriteLine($"{p[i].firstname} {p[i].lastname}\t {p[i].email}\t {p[i].dob}\t {p[i].adult}\t {p[i].SunSign}\t {p[i].ChineseSign}\t {p[i].birthday}\t {p[i].ScreenName}");
            //      Console.WriteLine($"{p[i].firstname} {p[i].lastname}\t");
            }
        }
    }
}
