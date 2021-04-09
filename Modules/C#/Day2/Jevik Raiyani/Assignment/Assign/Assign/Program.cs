using System;

namespace Assign
{
    class Person
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string EmailAddress { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string Adult
        {
            get
            {
                return compute();
            }
        }

        string compute()
        {
            if (Convert.ToInt32(DateTime.Now.Year) - Convert.ToInt32(DateOfBirth.Year)  >= 18)
                return "You are an Adult";
            else
                return "You are not an Adult";
        }
        public string bothday
        {
            get
            {
                return compute1();
            }
        }
        string compute1()
        {
            if (Convert.ToInt32(DateTime.Now.Day) == Convert.ToInt32(DateOfBirth.Day) &&
                Convert.ToInt32(DateTime.Now.Month) == Convert.ToInt32(DateOfBirth.Month))
                return "Happy Birthday";
            else
                return "Today is not Your birthday";
        }
        public string ScreenName
        {
            get
            {
                return compute2();
            }
        }
        string p;
        string compute2()
        {
            string s1 = FirstName.Substring(0, 1) + LastName + DateOfBirth.Month + DateOfBirth.Day;
            string s2 = FirstName + LastName + DateOfBirth.Month + DateOfBirth.Day + Convert.ToString(DateOfBirth.Year).Substring(2, 2);
            p = s1 + " " + s2;
            return p;

        }
        public string SunSign
        {
            get
            {
                return calculatesunsign();
            }
        }
        string calculatesunsign()
        {
            int d = Convert.ToInt32(DateOfBirth.Day);
            int m = Convert.ToInt32(DateOfBirth.Month);
            if ((m == 12 && d >= 22) || (m == 1 && d <= 19))
                return "Capricorn";
            else if ((m == 1 && d >= 20) || (m == 2 && d <= 17))
                return "Aquarius";
            else if ((m == 2 && d >= 18) || (m == 3 && d <= 19))
                return "Pisces";
            else if ((m == 3 && d >= 20) || (m == 4 && d <= 19))
                return "Aries";
            else if ((m == 4 && d >= 20) || (m == 5 && d <= 20))
                return "Taurus";
            else if ((m == 5 && d >= 21) || (m == 6 && d <= 20))
                return "Gemini";
            else if ((m == 6 && d >= 21) || (m == 7 && d <= 22))
                return "Cancer";
            else if ((m == 7 && d >= 23) || (m == 8 && d <= 22))
                return "Leo";
            else if ((m == 8 && d >= 23) || (m == 9 && d <= 22))
                return "Virgo";
            else if ((m == 9 && d >= 23) || (m == 10 && d <= 22))
                return "Libra";
            else if ((m == 10 && d >= 23) || (m == 11 && d <= 21))
                return "Scorpio";
            else
                return "Sagittarius";
        }
        public string ChineseSign
        {
            get
            {
                return calculateCsign();
            }
        }
        string calculateCsign()
        {
            int y = Convert.ToInt32(DateOfBirth.Year);  
                if (y % 12 == 8)
                return "Dragon";
            else if (y % 12 == 9)
                return "Snake";
            else if (y % 12 == 10)
                return "Horse";
            else if (y % 12 == 11)
                return "Sheep";
            else if (y % 12 == 0)
                return "Monkey";
            else if (y % 12 == 1)
                return "Rooster";
            else if (y % 12 == 2)
                return "Dog";
            else if (y % 12 == 3)
                return "Pig";
            else if (y % 12 == 4)
                return "Rate";
            else if (y % 12 == 5)
                return "Ox";
            else if (y % 12 == 6)
                return "Tiger";
            else 
                return "Rabbit";    
        }
        public Person(string fname, string lname, string email, DateTime dob)
        {
            this.FirstName = fname;
            this.LastName = lname;
            this.EmailAddress = email;
            this.DateOfBirth = dob;
        }
        public Person(string fname, string lname, string email)
        {
            this.FirstName = fname;
            this.LastName = lname;
            this.EmailAddress = email;
        }
        public Person(string fname, string lname, DateTime dob)
        {
            this.FirstName = fname;
            this.LastName = lname;
            this.DateOfBirth = dob;
        }
        public void display()
        {
            Console.WriteLine($"name is {FirstName} {LastName} , email is {EmailAddress}, dob is {DateOfBirth}  {Adult}, {bothday}, {ScreenName}, {SunSign}, {ChineseSign} ");
        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            Person jevik = new Person("jeviik", "Raiyani", "jevikraiyani12@gmail.com", new DateTime(1999, 12, 12));
            jevik.display();


            Person[] data = new Person[5];

            for (int i = 0; i < 5; i++)
            {
                Console.WriteLine("enter firstname,lasstname,email,birthdate");
                data[i] = new Person( Console.ReadLine(),  Console.ReadLine(), Console.ReadLine(), Convert.ToDateTime (Console.ReadLine()) );
            }
            foreach (var item in data)
            {
                Console.WriteLine($"Name:{item.FirstName} {item.LastName} Email:{item.EmailAddress} DOB{item.DateOfBirth}");
            }
        }
    }
}
