using System;

namespace Day2_Assignment
{
    public class Person
    {
        public string firstName { get; set; }
        public string lastName { get; }
        public string email { get; }
        public DateTime DOB { get; }

        public Person(string firstName, string lastName, string email, DateTime DOB )
        {
            this.firstName = firstName;
            this.lastName = lastName;
            this.email = email;
            this.DOB = DOB;
        }

        public Person(string firstName, string lastName, string email)
        {
            this.firstName = firstName;
            this.lastName = lastName;
            this.email = email;
        }

        public Person(string firstName, string lastName, DateTime DOB)
        {
            this.firstName = firstName;
            this.lastName = lastName;
            this.DOB = DOB;
        }

        public void Adult()
        {
            if (System.DateTime.Today.Year - DOB.Year > 18)
            {
                Console.WriteLine(firstName + " is over 18 years");
            }

        }

        public void SunSign()
        {
            if (DOB.Month == 3)
            {
                if (DOB.Day >= 21)
                {
                    Console.WriteLine("Sun Sign : Aries");
                }
                else
                {
                    Console.WriteLine("Sun Sign : Pisces");
                }
            }
            else if (DOB.Month == 4)
            {
                if (DOB.Day >= 22)
                {
                    Console.WriteLine("Sun Sign : Taurus");
                }
                else
                {
                    Console.WriteLine("Sun Sign : Aries");
                }
            }
            else if (DOB.Month == 5)
            {
                if (DOB.Day >= 22)
                {
                    Console.WriteLine("Sun Sign : Gemini");
                }
                else
                {
                    Console.WriteLine("Sun Sign : Taurus");
                }
            }
            else if (DOB.Month == 6)
            {
                if (DOB.Day >= 22)
                {
                    Console.WriteLine("Sun Sign : Cancer");
                }
                else
                {
                    Console.WriteLine("Sun Sign : Gemini");
                }
            }
            else if (DOB.Month == 7)
            {
                if (DOB.Day >= 23)
                {
                    Console.WriteLine("Sun Sign : Leo");
                }
                else
                {
                    Console.WriteLine("Sun Sign : Cancer");
                }
            }
            else if (DOB.Month == 8)
            {
                if (DOB.Day >= 23)
                {
                    Console.WriteLine("Sun Sign : Virgo");
                }
                else
                {
                    Console.WriteLine("Sun Sign : Leo");
                }
            }
            else if (DOB.Month == 9)
            {
                if (DOB.Day >= 23)
                {
                    Console.WriteLine("Sun Sign : Libra");
                }
                else
                {
                    Console.WriteLine("Sun Sign : Virgo");
                }
            }
            else if (DOB.Month == 10)
            {
                if (DOB.Day >= 23)
                {
                    Console.WriteLine("Sun Sign : Scorpio");
                }
                else
                {
                    Console.WriteLine("Sun Sign : Libra");
                }
            }
            else if (DOB.Month == 11)
            {
                if (DOB.Day >= 23)
                {
                    Console.WriteLine("Sun Sign : Sagittarius");
                }
                else
                {
                    Console.WriteLine("Sun Sign : Scorpio");
                }
            }
            else if (DOB.Month == 12)
            {
                if (DOB.Day >= 23)
                {
                    Console.WriteLine("Sun Sign : Capricorn");
                }
                else
                {
                    Console.WriteLine("Sun Sign : Sagittarius");
                }
            }
            else if (DOB.Month == 1)
            {
                if (DOB.Day >= 22)
                {
                    Console.WriteLine("Sun Sign : Aquarius");
                }
                else
                {
                    Console.WriteLine("Sun Sign : Capricorn");
                }
            }
            else if (DOB.Month == 2)
            {
                if (DOB.Day >= 21)
                {
                    Console.WriteLine("Sun Sign : Pisces");
                }
                else
                {
                    Console.WriteLine("Sun Sign : Aquarius");
                }
            }
        }

        public void ChineseSign()
        {
            if (DOB.Year % 12 == 4)
            {
                Console.WriteLine("Chinese Sign : Rat");
            }
            else if (DOB.Year % 12 == 5)
            {
                Console.WriteLine("Chinese Sign : Ox");
            }
            else if (DOB.Year % 12 == 6)
            {
                Console.WriteLine("Chinese Sign : Tiger");
            }
            else if (DOB.Year % 12 == 7)
            {
                Console.WriteLine("Chinese Sign : Rabbit");
            }
            else if (DOB.Year % 12 == 8)
            {
                Console.WriteLine("Chinese Sign : Dragon");
            }
            else if (DOB.Year % 12 == 9)
            {
                Console.WriteLine("Chinese Sign : Sanke");
            }
            else if (DOB.Year % 12 == 10)
            {
                Console.WriteLine("Chinese Sign : Horse");
            }
            else if (DOB.Year % 12 == 11)
            {
                Console.WriteLine("Chinese Sign : Goat");
            }
            else if (DOB.Year % 12 == 0)
            {
                Console.WriteLine("Chinese Sign : Monkey");
            }
            else if (DOB.Year % 12 == 1)
            {
                Console.WriteLine("Chinese Sign : Rooster");
            }
            else if (DOB.Year % 12 == 2)
            {
                Console.WriteLine("Chinese Sign : Dog");
            }
            else if (DOB.Year % 12 == 3)
            {
                Console.WriteLine("Chinese Sign : Pig");
            }
        }
        public string ScreenName => $"{firstName} {lastName} born on {DOB.ToString("MMMM")} {DOB.ToString("dd")}, {DOB.ToString("yyyy")}";
    }

    class Program
    {
        static void Main(string[] args)
        {
            string firstName, lastName, email;
            DateTime DOB;

            Console.Write("Enter First Name : ");
            firstName = Console.ReadLine();

            Console.Write("Enter Last Name: ");
            lastName = Console.ReadLine();

            Console.Write("Enter email : ");
            email = Console.ReadLine();

            Console.Write("Enter DOB : ");
            DOB = Convert.ToDateTime(Console.ReadLine());


            Person p = new Person(firstName, lastName, email, DOB);
            p.Adult();
            p.SunSign();
            p.ChineseSign();
            Console.WriteLine(p.ScreenName);
        }
    }
}
