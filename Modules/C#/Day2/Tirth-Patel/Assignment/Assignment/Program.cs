using System;
using ZodicSign;

namespace Assignment
{
    class Program
    {
        static void Main(string[] args)
        {
           Person[] p = new Person[2];
            for (int i = 0; i < 2; i++)
            {
                Console.WriteLine("Enter FirstName LastName emailaddress and Dob");
                p[i] = new Person() { FirstName = Console.ReadLine(), LastName = Console.ReadLine(), EmailAddress = Console.ReadLine(), DOB = Convert.ToDateTime(Console.ReadLine()) } ;

            }

         /*   foreach (var item in p)
            {   
                Console.WriteLine("\tPerson Detail-Card");
                Console.WriteLine($"\n\tName:\t\t{item.FirstName}{item.LastName}");
                Console.WriteLine($"\n\tEmailId:\t{item.EmailAddress}");
                Console.WriteLine($"\n\tBorn-Day:\t{ item.DOB}");
                Console.WriteLine($"\n\tlegleShip:\t{item.Isadult}");
                Console.WriteLine($"\n\tZodiac-Sign:\t{item.zodiac}");
                Console.WriteLine($"\n\tChinese-Sign:\t{item.Chinese}");
                Console.WriteLine($"\n\tScreenName:\t{item.screenname}");
                Console.WriteLine($"\n\tIs today his/her birthday?:\t{ item.Checkbirthday}");
               
                
            }*/
            string Username = Console.ReadLine();
            foreach (var item in p)
	{
                if(item.FirstName == Username)
                {
                     Console.WriteLine("\tPerson Detail-Card");
                Console.WriteLine($"\n\tName:\t\t{item.FirstName}{item.LastName}");
                Console.WriteLine($"\n\tEmailId:\t{item.EmailAddress}");
                Console.WriteLine($"\n\tBorn-Day:\t{ item.DOB}");
                Console.WriteLine($"\n\tlegleShip:\t{item.Isadult}");
                Console.WriteLine($"\n\tZodiac-Sign:\t{item.zodiac}");
                Console.WriteLine($"\n\tChinese-Sign:\t{item.Chinese}");
                Console.WriteLine($"\n\tScreenName:\t{item.screenname}");
                Console.WriteLine($"\n\tIs today his/her birthday?:\t{ item.Checkbirthday}");
                }
	}
       
           



        }
    }
}
