using System;

namespace Assignments
{
    

        //Person(string fname, string lname, string email, DateTime dob)
        //{
        //    firstname = fname;
        //    lastname = lname;
        //    emailaddress = email;
        //    dateofbirth = dob;
        //    Console.WriteLine("enter first name:-  "+firstname);
        //    Console.WriteLine("enter last name:-  " + lastname);
        //    Console.WriteLine("enter email:-  " + emailaddress);
        //    Console.WriteLine("enter date of birth :-  " + dateofbirth);
        //}
    
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            Person.Person[] perarry = new Person.Person[5];
            perarry[0] = new Person.Person("N","s","ni@gmail.com","21 august 1999");
            perarry[1] = new Person.Person("C", "J", "ni@gmail.com", "11 march 2000");
            perarry[2] = new Person.Person("x", "a", "xa@gmail.com", "2 may 2002");
            perarry[3] = new Person.Person("y", "b", "yb@gmail.com", "16 june 1996");
            perarry[4] = new Person.Person("z", "c", "zc@gmail.com", "19 april 2004");
            Console.WriteLine($"Name \tBirthdate \t\tEmail\t\tAdult\tbirthday\tsugessted\tchinees\tsun");
            foreach(var item in perarry)
            {
                Console.WriteLine($"{item.firstName}{item.lastName}\t{item.birthDate}\t{item.Email}\t{item.Adult}\t{item.BirthDayBool}\t\t{item.ScreenName}\t{item.ChineseSign}\t{item.SunSign}");
            }
        }
    }
}
