using System;

namespace AssignmentTask
{
    class Person
    {
        public Person(string fname, string lname, string email, DateTime dob)
        {
            Firstname = fname;
            Lastname = lname;
            Email = email;
            DOB = dob;
        }

        public Person(string fname, string lname, string email)
        {
            Firstname = fname;
            Lastname = lname;
            Email = email;
        
        }

        public Person(string fname, string lname, DateTime dob)
        {
            Firstname = fname;
            Lastname = lname;
            DOB = dob;
        }

        public string Firstname { get; }

        public string Lastname { get;  }

        public string Email { get; }

        public DateTime DOB { get; }

        public string Adult
        {
            get
            { 
                if ((DateTime.Now.Year - DOB.Year) > 18)
                {
                    return "Adult";
                }
                else
                {
                    return "Teen";
                }
            }
        }

        public string SunSign()
        {
            if (Convert.ToDateTime(DOB.Day + "-" + DOB.Month) >= Convert.ToDateTime("21-03") && Convert.ToDateTime(DOB.Day + "-" + DOB.Month) <= Convert.ToDateTime("19-04"))
            {
                return "Aries";
            }
            else if (Convert.ToDateTime(DOB.Day + "-" + DOB.Month) >= Convert.ToDateTime("20-04") && Convert.ToDateTime(DOB.Day + "-" + DOB.Month) <= Convert.ToDateTime("20-05"))
            {
                return "Taurus";
            }
            else if (Convert.ToDateTime(DOB.Day + "-" + DOB.Month) >= Convert.ToDateTime("21-05") && Convert.ToDateTime(DOB.Day + "-" + DOB.Month) <= Convert.ToDateTime("20-06"))
            {
                return "Gemini";
            }
            else if (Convert.ToDateTime(DOB.Day + "-" + DOB.Month) >= Convert.ToDateTime("21-06") && Convert.ToDateTime(DOB.Day + "-" + DOB.Month) <= Convert.ToDateTime("22-07"))
            {
                return "Cancer";
            }
            else if (Convert.ToDateTime(DOB.Day + "-" + DOB.Month) >= Convert.ToDateTime("23-07") && Convert.ToDateTime(DOB.Day + "-" + DOB.Month) <= Convert.ToDateTime("22-08"))
            {
                return "Leo";
            }
            else if (Convert.ToDateTime(DOB.Day + "-" + DOB.Month) >= Convert.ToDateTime("23-08") && Convert.ToDateTime(DOB.Day + "-" + DOB.Month) <= Convert.ToDateTime("22-09"))
            {
                return "Virgo";
            }
            else if (Convert.ToDateTime(DOB.Day + "-" + DOB.Month) >= Convert.ToDateTime("23-09") && Convert.ToDateTime(DOB.Day + "-" + DOB.Month) <= Convert.ToDateTime("22-10"))
            {
                return "Libra";
            }
            else if (Convert.ToDateTime(DOB.Day + "-" + DOB.Month) >= Convert.ToDateTime("23-10") && Convert.ToDateTime(DOB.Day + "-" + DOB.Month) <= Convert.ToDateTime("21-11"))
            {
                return "Scorpio";
            }
            else if (Convert.ToDateTime(DOB.Day + "-" + DOB.Month) >= Convert.ToDateTime("22-11") && Convert.ToDateTime(DOB.Day + "-" + DOB.Month) <= Convert.ToDateTime("21-12"))
            {
                return "Sagittarius";
            }
            else if (Convert.ToDateTime(DOB.Day + "-" + DOB.Month) >= Convert.ToDateTime("22-12") && Convert.ToDateTime(DOB.Day + "-" + DOB.Month) <= Convert.ToDateTime("19-01"))
            {
                return "Capricorn";
            }
            else if (Convert.ToDateTime(DOB.Day + "-" + DOB.Month) >= Convert.ToDateTime("20-01") && Convert.ToDateTime(DOB.Day + "-" + DOB.Month) <= Convert.ToDateTime("18-02"))
            {
                return "Aquarius";
            }
            else
            {
                return "Pisces";
            }
        }

        public string ChineseSign()
        {
            if (DOB.Year % 12 == 4)
            {
                return "Rat";
            }
            else if (DOB.Year % 12 == 5)
            {
                return "Ox";
            }
            else if (DOB.Year % 12 == 6)
            {
                return "Tiger";
            }
            else if (DOB.Year % 12 == 7)
            {
                return "Rabbit";
            }
            else if (DOB.Year % 12 == 8)
            {
                return "Dragon";
            }
            else if (DOB.Year % 12 == 9)
            {
                return "Snake";
            }
            else if (DOB.Year % 12 == 10)
            {
                return "Horse";
            }
            else if (DOB.Year % 12 == 11)
            {
                return "Sheep";
            }
            else if (DOB.Year % 12 == 0)
            {
                return "Monkey";
            }
            else if (DOB.Year % 12 == 1)
            {
                return "Rooster";
            }
            else if (DOB.Year % 12 == 2)
            {
                return "Dog";
            }
            else
            {
                return "Pig";
            }
        }

        public string BdayWish
        {
            get
            {
                if (DOB.Day == DateTime.Now.Day && DOB.Month == DateTime.Now.Month)
                {
                    return "HBD!!";
                }
                else
                {
                    return "HBD in Advance!!";
                }
            }
        }
        public string ScreenName
        {
            get
            {
                string name = Firstname + Lastname + Convert.ToString(DOB.Month) + Convert.ToString(DOB.Day);
                return name;   
            }
        }

    }

    class Day2Assignment
    {
        static void Main(string[] args)
        {
            Person[] person = new Person[5];
            string[,] personinfo = new string[5, 5];

            for (int i = 0; i < 5; i++)
            {
                string fname, lname, email;
                DateTime dob;

                Console.WriteLine("Enter Firstname:");
                fname = Console.ReadLine();

                Console.WriteLine("Enter Lastname:");
                lname = Console.ReadLine();

                Console.WriteLine("Enter Email:");
                email = Console.ReadLine();

                do
                {
                    Console.WriteLine("Enter DOB:");
                    dob = Convert.ToDateTime(Console.ReadLine());
                }
                while (dob.Year > DateTime.Now.Year && dob.Month > DateTime.Now.Month && dob.Day > DateTime.Now.Day);

                person[i] = new Person(fname, lname, email, dob);
                personinfo[i, 0] = person[i].Adult;
                personinfo[i, 1] = person[i].SunSign();
                personinfo[i, 2] = person[i].ChineseSign();
                personinfo[i, 3] = person[i].BdayWish;
                personinfo[i, 4] = person[i].ScreenName;
            }

            Console.WriteLine("Firstname\tLastname\tEmail\tDate Of Birth\tAge Category\tSun Sign\tChinese Sign\tBithday wishes\t\tScreen Name");
            for (int i = 0; i < 5; i++)
            {
                Console.WriteLine($"{person[i].Firstname}\t{person[i].Lastname}\t{person[i].Email}\t{person[i].DOB}\t{personinfo[i, 0]}\t{personinfo[i, 1]}\t{personinfo[i, 2]}\t{personinfo[i, 3]}\t{personinfo[i, 4]}");
            }
            
        }
    }
}
