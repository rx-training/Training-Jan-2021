using System;

namespace Assignment2
{
    public class Person
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string EmailAddress { get; set; }
        public DateTime DateOfBirth { get; set; }
        public Person()
        {

        }

        public Person(string FirstName, string LastName, string EmailAddress, DateTime DateOfBirth)
        {
            this.FirstName = FirstName;
            this.LastName = LastName;
            this.EmailAddress = EmailAddress;
            this.DateOfBirth = DateOfBirth;
        }
        public Person(string FirstName, string LastName, string EmailAddress)
        {
            this.FirstName = FirstName;
            this.LastName = LastName;
            this.EmailAddress = EmailAddress;
        }
        public Person(string FirstName, string LastName, DateTime DateOfBirth)
        {
            this.FirstName = FirstName;
            this.LastName = LastName;
            this.DateOfBirth = DateOfBirth;
        }
        public int DateDiff(DateTime Dob)
        {
            TimeSpan ts = DateTime.Now.Subtract(Dob);
            int age = ts.Days / 365;
            return age;
        }
        public string Adult
        {
            get
            {
                return IsAdult();
            }
        }
        public string BirthdayToday
        {
            get
            {
                return IsBirthday();
            }
        }
        public string ChineseZodiac
        {
            get
            {
                return IsChineseZodiac();
            }
        }
        public string SunSign
        {
            get
            {
                return ISSunSign();
            }
        }
        public string ScreenName
        {
            get
            {
                return IsScreenName();
            }
        }
        string IsAdult()
        {
            //var date = new DateTime(Person.);
            //Person.
            var date1 = DateTime.Now;
            //Console.WriteLine(date1);
            TimeSpan ts = (date1 - DateOfBirth);
            int age = ts.Days / 365;
            //Console.WriteLine(age);
            if (age > 18)
            {
                return "You are an adult";
            }
            else
            {
                return "you are not an adult";
            }
        }
        string IsBirthday()
        {
            var date1 = DateTime.Now;
            if (date1.Date == DateOfBirth)
            {
                return "Today is your birthday";
            }
            else
            {
                return "Today is not your birthday";
            }
        }
        
        string IsChineseZodiac()
        {
            var y = DateOfBirth.Year;
            var diff = (y - 1936) % 12;
            //Console.WriteLine(diff);
            if (diff == 0)
            {
                return "Rat";
            }

            else if (diff == 1)
            {
                return "OX";
            }
            else if (diff == 2)
            {
                return "Tiger";
            }
            else if (diff == 3)
            {
                return "Rabbit";
            }
            else if (diff == 4)
            {
                return "Dragon";
            }
            else if (diff == 5)
            {
                return "Snake";
            }
            else if (diff == 6)
            {
                return "Horse";
            }
            else if (diff == 7)
            {
                return "Goat";
            }
            else if (diff == 8)
            {
                return "Monkey";
            }
            else if (diff == 9)
            {
                return "Rooster";
            }
            else if (diff == 10)
            {
                return "Dog";
            }
            else  if (diff == 11)
            {
                return "Pig";
            }
            else
            {
                return "Invalid input";
            }
        }
        string ISSunSign()
        {
            int m = DateOfBirth.Month;
            int d = DateOfBirth.Day;
            if ((m == 12 && d >= 22) || (m == 1 && d <= 19))
            {
                return "Capricon";
            }
            else if ((m == 1 && d >= 20) || (m == 2 && d <= 17))
            {
                return "Aquarius";
            }
            else if ((m == 2 && d >= 18) || (m == 3 && d <= 19))
            {
                return "Pisces";
            }
            else if ((m == 3 && d >= 20) || (m == 4 && d <= 19))
            {
                return "Aries";
            }
            else if ((m == 4 && d >= 20) || (m == 5 && d <= 20))
            {
                return "Taurus";
            }
            else if ((m == 5 && d >= 21) || (m == 6 && d <= 20))
            {
                return "Gemini";
            }
            else if ((m == 6 && d >= 21) || (m == 7 && d <= 22))
            {
                return "Cancer";
            }
            else if ((m == 7 && d >= 23) || (m == 8 && d <= 22))
            {
                return "Leo";
            }
            else if ((m == 8 && d >= 23) || (m == 9 && d <= 22))
            {
                return"Virgo";
            }
            else if ((m == 9 && d >= 23) || (m == 10 && d <= 22))
            {
                return"Libra";
            }
            else if ((m == 10 && d >= 23) || (m == 11 && d <= 21))
            {
                return "Scorpio";
            }
            else if ((m == 11 && d >= 22) || (m == 12 && d <= 21))
            {
                return"Sagittarius";
            }
            else
            {
                return "Invalid Input";
            }
        }
        string IsScreenName()
        {
            return FirstName + " "+LastName + " " + "born on" +" "+DateOfBirth.Month+" "+DateOfBirth.Day+"th "+ DateOfBirth.Year+" "+"might be"+"  "+EmailAddress;
        }
        }
        class Program
        {
            static void Main(string[] args)
            {
                Person[] per = new Person[10];
                for (int i = 0; i < 5; i++)
                {
                    Console.WriteLine("Enter FirstName,LastName,Email Address,Date Of Birth:");
                    per[i] = new Person() { FirstName = Console.ReadLine(), LastName = Console.ReadLine(), EmailAddress = Console.ReadLine(), DateOfBirth = DateTime.Parse(Console.ReadLine()) };
                }
                for (int i = 0; i < 1; i++)
                {
                Console.Write("  FirstName");
                Console.Write("  LastName");
                Console.Write("  Email ID");
                Console.Write("  Date Of Birth");
                Console.Write("  Adult");
                Console.Write("  Sun Sign");
                Console.Write("  Chinese Zodiac Sign");
                Console.Write("  Is Birthay Today?");
                Console.Write("  Screen Name");
                
                }
                for (int i = 0; i < 5; i++)
                {
                Console.WriteLine();
                Console.Write(per[i].FirstName);
                Console.Write(" " + per[i].LastName);
                Console.Write(" " + per[i].EmailAddress);
                Console.Write("  "+ per[i].DateOfBirth.Date);
                Console.Write("  " + per[i].Adult);
                Console.Write("  " + per[i].SunSign);
                Console.Write("  " + per[i].ChineseZodiac);
                Console.Write("  " + per[i].BirthdayToday); 
                Console.Write("  " + per[i].ScreenName);
            }
        }
        }
    }
