using System;
using Persons;

namespace Day2Assignment
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            Persons.Person[] personArr = new Persons.Person[5];
            personArr[0] = new Persons.Person("a", "A", "pate@gmail.com","12 january 1999");
            personArr[1] = new Persons.Person("b", "B", "pate@gmail.com", "25 july 2005");
            personArr[2] = new Persons.Person("c", "C", "pate@gmail.com", "16 june 1999");
            personArr[3] = new Persons.Person("d", "D", "pate@gmail.com", "12 december 2021");
            personArr[4] = new Persons.Person("e", "E", "pate@gmail.com", "21 july 2001");
            Console.WriteLine($"Name\t Birthdate \t\t Email \t\t Adult \t Birthday \t Sugessted\t Chinese \t Sun ");
            foreach (var item in personArr)
            {
                Console.WriteLine($"{item.firstName} {item.lastName}\t{item.birthDate}\t{item.Email}\t{item.Adult}\t{item.BirthDayBool}\t\t{item.ScreenName}\t{item.ChineseSign}\t\t{item.SunSign}");
            }


        }
    }
}
