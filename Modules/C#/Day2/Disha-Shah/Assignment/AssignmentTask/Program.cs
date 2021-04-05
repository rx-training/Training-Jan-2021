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
                if ((Convert.ToDateTime(DOB).Year - DateTime.Now.Year) > 18)
                {
                    return "Adult";
                }
                else
                {
                    return "Teen";
                }
            }
        }

        public string SunSign
        {
            get
            {
                if (Convert.ToDateTime((Convert.ToDateTime(DOB).Day + "-" + Convert.ToDateTime(DOB).Month)) >= Convert.ToDateTime("21-03") && Convert.ToDateTime((Convert.ToDateTime(DOB).Day + "-" + Convert.ToDateTime(DOB).Month)) <= Convert.ToDateTime("19-04"))
                {
                    return "Aries";
                }
                else if (Convert.ToDateTime((Convert.ToDateTime(DOB).Day + "-" + Convert.ToDateTime(DOB).Month)) >= Convert.ToDateTime("20-04") && Convert.ToDateTime((Convert.ToDateTime(DOB).Day + "-" + Convert.ToDateTime(DOB).Month)) <= Convert.ToDateTime("20-05"))
                {
                    return "Taurus";
                }
                else if (Convert.ToDateTime((Convert.ToDateTime(DOB).Day + "-" + Convert.ToDateTime(DOB).Month)) >= Convert.ToDateTime("21-05") && Convert.ToDateTime((Convert.ToDateTime(DOB).Day + "-" + Convert.ToDateTime(DOB).Month)) <= Convert.ToDateTime("20-06"))
                {
                    return "Gemini";
                }
                else if (Convert.ToDateTime((Convert.ToDateTime(DOB).Day + "-" + Convert.ToDateTime(DOB).Month)) >= Convert.ToDateTime("21-06") && Convert.ToDateTime((Convert.ToDateTime(DOB).Day + "-" + Convert.ToDateTime(DOB).Month)) <= Convert.ToDateTime("22-07"))
                {
                    return "Cancer";
                }
                else if (Convert.ToDateTime((Convert.ToDateTime(DOB).Day + "-" + Convert.ToDateTime(DOB).Month)) >= Convert.ToDateTime("23-07") && Convert.ToDateTime((Convert.ToDateTime(DOB).Day + "-" + Convert.ToDateTime(DOB).Month)) <= Convert.ToDateTime("22-08"))
                {
                    return "Leo";
                }
                else if (Convert.ToDateTime((Convert.ToDateTime(DOB).Day + "-" + Convert.ToDateTime(DOB).Month)) >= Convert.ToDateTime("23-08") && Convert.ToDateTime((Convert.ToDateTime(DOB).Day + "-" + Convert.ToDateTime(DOB).Month)) <= Convert.ToDateTime("22-09"))
                {
                    return "Virgo";
                }
                else if (Convert.ToDateTime((Convert.ToDateTime(DOB).Day + "-" + Convert.ToDateTime(DOB).Month)) >= Convert.ToDateTime("23-09") && Convert.ToDateTime((Convert.ToDateTime(DOB).Day + "-" + Convert.ToDateTime(DOB).Month)) <= Convert.ToDateTime("22-10"))
                {
                    return "Libra";
                }
                else if (Convert.ToDateTime((Convert.ToDateTime(DOB).Day + "-" + Convert.ToDateTime(DOB).Month)) >= Convert.ToDateTime("23-10") && Convert.ToDateTime((Convert.ToDateTime(DOB).Day + "-" + Convert.ToDateTime(DOB).Month)) <= Convert.ToDateTime("21-11"))
                {
                    return "Scorpio";
                }
                else if (Convert.ToDateTime((Convert.ToDateTime(DOB).Day + "-" + Convert.ToDateTime(DOB).Month)) >= Convert.ToDateTime("22-11") && Convert.ToDateTime((Convert.ToDateTime(DOB).Day + "-" + Convert.ToDateTime(DOB).Month)) <= Convert.ToDateTime("21-12"))
                {
                    return "Sagittarius";
                }
                else if (Convert.ToDateTime((Convert.ToDateTime(DOB).Day + "-" + Convert.ToDateTime(DOB).Month)) >= Convert.ToDateTime("22-12") && Convert.ToDateTime((Convert.ToDateTime(DOB).Day + "-" + Convert.ToDateTime(DOB).Month)) <= Convert.ToDateTime("19-01"))
                {
                    return "Capricorn";
                }
                else if (Convert.ToDateTime((Convert.ToDateTime(DOB).Day + "-" + Convert.ToDateTime(DOB).Month)) >= Convert.ToDateTime("20-01") && Convert.ToDateTime((Convert.ToDateTime(DOB).Day + "-" + Convert.ToDateTime(DOB).Month)) <= Convert.ToDateTime("18-02"))
                {
                    return "Aquarius";
                }
                else
                {
                    return "Pisces";
                }
            }
        }

        public string ChineseSign
        {
            get
            {
                if ((Convert.ToDateTime(DOB).Year) == 1960 && (Convert.ToDateTime(DOB).Year) == 1972 && (Convert.ToDateTime(DOB).Year) == 1984 && (Convert.ToDateTime(DOB).Year) == 1996 && (Convert.ToDateTime(DOB).Year) == 2008 && (Convert.ToDateTime(DOB).Year) == 2032)
                {
                    return "Rat";
                }
                else if ((Convert.ToDateTime(DOB).Year) == 1961 && (Convert.ToDateTime(DOB).Year) == 1973 && (Convert.ToDateTime(DOB).Year) == 1985 && (Convert.ToDateTime(DOB).Year) == 1997 && (Convert.ToDateTime(DOB).Year) == 2009 && (Convert.ToDateTime(DOB).Year) == 2033)
                {
                    return "Ox";
                }
                else if ((Convert.ToDateTime(DOB).Year) == 1962 && (Convert.ToDateTime(DOB).Year) == 1974 && (Convert.ToDateTime(DOB).Year) == 1986 && (Convert.ToDateTime(DOB).Year) == 1998 && (Convert.ToDateTime(DOB).Year) == 2010 && (Convert.ToDateTime(DOB).Year) == 2034)
                {
                    return "Tiger";
                }
                else if ((Convert.ToDateTime(DOB).Year) == 1963 && (Convert.ToDateTime(DOB).Year) == 1975 && (Convert.ToDateTime(DOB).Year) == 1987 && (Convert.ToDateTime(DOB).Year) == 1999 && (Convert.ToDateTime(DOB).Year) == 2011 && (Convert.ToDateTime(DOB).Year) == 2035)
                {
                    return "Rabbit";
                }
                else if ((Convert.ToDateTime(DOB).Year) == 1964 && (Convert.ToDateTime(DOB).Year) == 1976 && (Convert.ToDateTime(DOB).Year) == 1988 && (Convert.ToDateTime(DOB).Year) == 2000 && (Convert.ToDateTime(DOB).Year) == 2012 && (Convert.ToDateTime(DOB).Year) == 2036)
                {
                    return "Dragon";
                }
                else if ((Convert.ToDateTime(DOB).Year) == 1965 && (Convert.ToDateTime(DOB).Year) == 1977 && (Convert.ToDateTime(DOB).Year) == 1989 && (Convert.ToDateTime(DOB).Year) == 2001 && (Convert.ToDateTime(DOB).Year) == 2013 && (Convert.ToDateTime(DOB).Year) == 2037)
                {
                    return "Snake";
                }
                else if ((Convert.ToDateTime(DOB).Year) == 1966 && (Convert.ToDateTime(DOB).Year) == 1978 && (Convert.ToDateTime(DOB).Year) == 1990 && (Convert.ToDateTime(DOB).Year) == 2002 && (Convert.ToDateTime(DOB).Year) == 2014 && (Convert.ToDateTime(DOB).Year) == 2038)
                {
                    return "Horse";
                }
                else if ((Convert.ToDateTime(DOB).Year) == 1967 && (Convert.ToDateTime(DOB).Year) == 1979 && (Convert.ToDateTime(DOB).Year) == 1991 && (Convert.ToDateTime(DOB).Year) == 2003 && (Convert.ToDateTime(DOB).Year) == 2015 && (Convert.ToDateTime(DOB).Year) == 2039)
                {
                    return "Sheep";
                }
                else if ((Convert.ToDateTime(DOB).Year) == 1968 && (Convert.ToDateTime(DOB).Year) == 1980 && (Convert.ToDateTime(DOB).Year) == 1992 && (Convert.ToDateTime(DOB).Year) == 2004 && (Convert.ToDateTime(DOB).Year) == 2016 && (Convert.ToDateTime(DOB).Year) == 2040)
                {
                    return "Monkey";
                }
                else if ((Convert.ToDateTime(DOB).Year) == 1969 && (Convert.ToDateTime(DOB).Year) == 1981 && (Convert.ToDateTime(DOB).Year) == 1993 && (Convert.ToDateTime(DOB).Year) == 2004 && (Convert.ToDateTime(DOB).Year) == 2017 && (Convert.ToDateTime(DOB).Year) == 2041)
                {
                    return "Rooster";
                }
                else if ((Convert.ToDateTime(DOB).Year) == 1970 && (Convert.ToDateTime(DOB).Year) == 1982 && (Convert.ToDateTime(DOB).Year) == 1994 && (Convert.ToDateTime(DOB).Year) == 2005 && (Convert.ToDateTime(DOB).Year) == 2018 && (Convert.ToDateTime(DOB).Year) == 2042)
                {
                    return "Dog";
                }
                else
                {
                    return "Pig";
                }
            }
        }

        public string BdayWish
        {
            get
            {
                if (Convert.ToDateTime(DOB).Day == DateTime.Now.Day && Convert.ToDateTime(DOB).Month == DateTime.Now.Month)
                {
                    return "Happy Birthday!!";
                }
                else
                {
                    return "Happy Birthday in Advance!!";
                }
            }
        }
        public string ScreenName
        {
            get
            {
                string name = Firstname + Lastname + Convert.ToString(Convert.ToDateTime(DOB).Month) + Convert.ToString(Convert.ToDateTime(DOB).Day);
                return name;   
            }
        }

    }

    class Program
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
                while (Convert.ToDateTime(dob).Year > Convert.ToDateTime(DateTime.Now).Year && Convert.ToDateTime(dob).Month > Convert.ToDateTime(DateTime.Now).Month && Convert.ToDateTime(dob).Day > Convert.ToDateTime(DateTime.Now).Day);

                person[i] = new Person(fname, lname, email, dob);
                personinfo[i, 0] = person[i].Adult;
                personinfo[i, 1] = person[i].SunSign;
                personinfo[i, 2] = person[i].ChineseSign;
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
