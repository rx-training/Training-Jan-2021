using System;
using PersonsData;

namespace Assignment
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Assignment\nAuthor: Milit Panchasara");
            Console.WriteLine();
            var count = 2;
            Person[] personsData = new Person[count];
            
            for (int i = 0; i < count; i++)
            {
                var fname = String.Empty;
                var lname = String.Empty;
                var email = String.Empty;
                var date = string.Empty;
                var screenName = String.Empty;
                Console.WriteLine($"Enter Details for Student {i + 1}");
                Console.WriteLine("Enter First Name (compulsory): ");
                fname = Console.ReadLine();
                while(fname.Trim() == String.Empty)
                {
                    Console.WriteLine("Please enter proper First Name: ");
                    fname = Console.ReadLine();
                }
                Console.WriteLine("Enter Last Name (compulsory): ");
                lname = Console.ReadLine();
                while (lname.Trim() == String.Empty)
                {
                    Console.WriteLine("Please enter proper Last Name: ");
                    lname = Console.ReadLine();
                }
                Console.WriteLine("Enter Email: ");
                email = Console.ReadLine();
                Console.WriteLine("Enter DOB (in yyyy-mm-dd): ");
                date = Console.ReadLine();
                DateTime verifiedDate = new DateTime();

                if(date.Trim() == String.Empty)
                {
                    personsData[i] = new Person(fname.Trim(), lname.Trim(), email.Trim());
                }
                else
                {
                    while (!DateTime.TryParse(date, out verifiedDate))
                    {
                        Console.WriteLine("Please enter proper DOB (in yyyy-mm-dd): ");
                        date = Console.ReadLine();
                        if (date.Trim() == string.Empty) break;
                    }
                    personsData[i] = new Person(fname.Trim(), lname.Trim(), email.Trim(), verifiedDate);
                }
            }
            Console.WriteLine("-------------------------------------------------------------------------------------------------------------------");
            Console.WriteLine("| Screen Name      | First Name    | Last Name     | Email            | Date Of Birth | Adult? | B'Day? | Sun Sign    | Chinese Zodiac Sign |");
            Console.WriteLine("-------------------------------------------------------------------------------------------------------------------");
            for (int i = 0; i < count; i++)
            {
                var date = (personsData[i].DateOfBirth == new DateTime() ? "-" : personsData[i].DateOfBirth.ToString("yyyy-MMM-dd"));
                var email = (personsData[i].EmailAddress == String.Empty) ? "-" : personsData[i].EmailAddress;
                var sunSign = (personsData[i].SunSign == String.Empty) ? "-" : personsData[i].SunSign;
                var chineseSign = (personsData[i].ChineseSign == String.Empty) ? "-" : personsData[i].ChineseSign;

                Console.Write($"| {personsData[i].ScreenName} ");
                AddEmptySpace(personsData[i].ScreenName, 15);
                Console.Write($"| {personsData[i].FirstName} ");
                AddEmptySpace(personsData[i].FirstName, 12);
                Console.Write($"| {personsData[i].LastName} ");
                AddEmptySpace(personsData[i].LastName, 12);
                Console.Write($"| { email } ");
                AddEmptySpace(email, 15);
                Console.Write($"| { date } ");
                AddEmptySpace(date, 12);
                Console.Write($"| {personsData[i].Adult} ");
                AddEmptySpace(personsData[i].Adult.ToString(), 5);
                Console.Write($"| {personsData[i].Birthday} ");
                AddEmptySpace(personsData[i].Birthday.ToString(), 5);
                Console.Write($"| {sunSign} ");
                AddEmptySpace(sunSign, 10);
                Console.Write($"| {chineseSign} ");
                AddEmptySpace(chineseSign, 18);
                Console.WriteLine("|");
                Console.WriteLine("-------------------------------------------------------------------------------------------------------------------");
            }
        }

        private static void AddEmptySpace(string personsData, int count)
        {
            int len = count - personsData.Length;
            while (len-- >= 0)
            {
                Console.Write(" ");
            }
        }
    }
}
