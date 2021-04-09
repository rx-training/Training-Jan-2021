using System;

namespace Assignment
{
    class Person
    {
        //DateTime dt = new DateTime();
        string firstname;
        string lastname;
        string email;
        DateTime dob;
        public Person(string firstname, string lastname, string email, DateTime dob)
        {
            this.firstname = firstname;
            this.lastname = lastname;
            this.email = email;
            this.dob = dob ;
        }
        public Person(string firstname, string lastname, string email)
        {
            this.firstname = firstname;
            this.lastname = lastname;
            this.email = email;
        }
        public Person(string firstname,string lastname,DateTime dob)
        {
            this.firstname = firstname;
            this.dob = dob;
            this.lastname = lastname;
            

        }

        public string Adult
        {
            get
            {
                int birthday = Convert.ToInt32(dob.ToString("yyyy"));
                int today = Convert.ToInt32(DateTime.Now.ToString("yyyy"));
                int age = today - birthday;
                if (age > 18)
                {
                    return "Adult";
                }
                else
                    return "Minor";
            }
        }
        public string Chinesesign
        {
            get
            {
                if (dob.ToString("yyyy") == "1924" || dob.ToString("yyyy") == "1936" || dob.ToString("yyyy") == "1948" || dob.ToString("yyyy") == "1960" || dob.ToString("yyyy") == "1972" || dob.ToString("yyyy") == "1984" || dob.ToString("yyyy") == "1996" || dob.ToString("yyyy") == "2008")
                {
                    return "RAT";
                }
                else if (dob.ToString("yyyy") == "1925" || dob.ToString("yyyy") == "1937" || dob.ToString("yyyy") == "1949" || dob.ToString("yyyy") == "1961" || dob.ToString("yyyy") == "1973" || dob.ToString("yyyy") == "1985" || dob.ToString("yyyy") == "1997" || dob.ToString("yyyy") == "2009")
                {
                    return "Ox";
                }

                else if (dob.ToString("yyyy") == "1926" || dob.ToString("yyyy") == "1938" || dob.ToString("yyyy") == "1950" || dob.ToString("yyyy") == "1962" || dob.ToString("yyyy") == "1974" || dob.ToString("yyyy") == "1986" || dob.ToString("yyyy") == "1998" || dob.ToString("yyyy") == "2010")
                {
                    return "Tiger";
                }
                else if (dob.ToString("yyyy") == "1927" || dob.ToString("yyyy") == "1939" || dob.ToString("yyyy") == "1951" || dob.ToString("yyyy") == "1963" || dob.ToString("yyyy") == "1975" || dob.ToString("yyyy") == "1987" || dob.ToString("yyyy") == "1999" || dob.ToString("yyyy") == "2011")
                {
                    return "Rabbit";
                }
                else if (dob.ToString("yyyy") == "1928" || dob.ToString("yyyy") == "1940" || dob.ToString("yyyy") == "1952" || dob.ToString("yyyy") == "1964" || dob.ToString("yyyy") == "1976" || dob.ToString("yyyy") == "1988" || dob.ToString("yyyy") == "2000" || dob.ToString("yyyy") == "2012")
                {
                    return "Dragon";
                }
                else if (dob.ToString("yyyy") == "1929" || dob.ToString("yyyy") == "1941" || dob.ToString("yyyy") == "1953" || dob.ToString("yyyy") == "1965" || dob.ToString("yyyy") == "1977" || dob.ToString("yyyy") == "1989" || dob.ToString("yyyy") == "2001" || dob.ToString("yyyy") == "2013")
                {
                    return "Snake";
                }
                else if (dob.ToString("yyyy") == "1930" || dob.ToString("yyyy") == "1942" || dob.ToString("yyyy") == "1954" || dob.ToString("yyyy") == "1966" || dob.ToString("yyyy") == "1978" || dob.ToString("yyyy") == "1990" || dob.ToString("yyyy") == "2002" || dob.ToString("yyyy") == "2013")
                {
                    return "Horse";
                }
                else if (dob.ToString("yyyy") == "1931" || dob.ToString("yyyy") == "1943" || dob.ToString("yyyy") == "1955" || dob.ToString("yyyy") == "1967" || dob.ToString("yyyy") == "1979" || dob.ToString("yyyy") == "1991" || dob.ToString("yyyy") == "2003" || dob.ToString("yyyy") == "2014")
                {
                    return "Sheep";
                }
                else if (dob.ToString("yyyy") == "1932" || dob.ToString("yyyy") == "1944" || dob.ToString("yyyy") == "1956" || dob.ToString("yyyy") == "1968" || dob.ToString("yyyy") == "1980" || dob.ToString("yyyy") == "1992" || dob.ToString("yyyy") == "2004" || dob.ToString("yyyy") == "2015")
                {
                    return "Monkey";
                }
                else if (dob.ToString("yyyy") == "1933" || dob.ToString("yyyy") == "1945" || dob.ToString("yyyy") == "1957" || dob.ToString("yyyy") == "1969" || dob.ToString("yyyy") == "1981" || dob.ToString("yyyy") == "1993" || dob.ToString("yyyy") == "2005" || dob.ToString("yyyy") == "2015")
                {
                    return "Rooster";
                }
                else if (dob.ToString("yyyy") == "1934" || dob.ToString("yyyy") == "1946" || dob.ToString("yyyy") == "1958" || dob.ToString("yyyy") == "1970" || dob.ToString("yyyy") == "1982" || dob.ToString("yyyy") == "1994" || dob.ToString("yyyy") == "2006" || dob.ToString("yyyy") == "2016")
                {
                    return "Dog";
                }
                else if (dob.ToString("yyyy") == "1935" || dob.ToString("yyyy") == "1947" || dob.ToString("yyyy") == "1959" || dob.ToString("yyyy") == "1971" || dob.ToString("yyyy") == "1983" || dob.ToString("yyyy") == "1995" || dob.ToString("yyyy") == "2007" || dob.ToString("yyyy") == "2017")
                {
                    return "Pig";
                }
                else
                {
                    return "Sorry Name Is Not Found";
                }
            }

        }
        public string Todaysbirthday
        {
            get
            {
                if (DateTime.Now.ToString("MM/dd") == dob.ToString("MM/dd"))
                {
                    return "Happy Birthday";
                }
                else
                {
                    return "Todays not your birthday";
                }
            }
        }
        public string Screenname
        {
            get
            {
                string sname = firstname.ToLower() + lastname.ToLower() + dob.ToString("MM") + dob.ToString("yy");
                return sname;
            }
        }

        public string sunsing
        {

            get 
            {
                if (dob.ToString("MMMM") == "January")
                {
                    if (Convert.ToInt32(dob.Day) < 20)
                    {
                        return "Capricon";
                    }
                    else
                    {
                        return "Aquarious";
                    }
                }
                else if (dob.ToString("MMMM") == "Febuary")
                {
                    if (Convert.ToInt32(dob.Day) < 19)
                    {
                        return "Aquarius";
                    }
                    else
                    {
                        return "Pisces";
                    }
                }
                else if (dob.ToString("MMMM") == "March")
                {
                    if (Convert.ToInt32(dob.Day) < 21)
                    {
                        return "Pisces";
                    }
                    else
                    {
                        return "Aries";
                    }
                }
                else if (dob.ToString("MMMM") == "April")
                {
                    if (Convert.ToInt32(dob.Day) < 20)
                    {
                        return "Aries";
                    }
                    else
                    {
                        return "Taurus";
                    }
                }
                else if (dob.ToString("MMMM") == "May")
                {
                    if (Convert.ToInt32(dob.Day) < 21)
                    {
                        return "Taurus";
                    }
                    else
                    {
                        return "Gemini";
                    }
                }
                else if (dob.ToString("MMMM") == "June")
                {
                    if (Convert.ToInt32(dob.Day) < 21)
                    {
                        return "Gemini";
                    }
                    else
                    {
                        return "Cancer";
                    }
                }
                else if (dob.ToString("MMMM") == "July")
                {
                    if (Convert.ToInt32(dob.Day) < 21)
                    {
                        return "Cancer";
                    }
                    else
                    {
                        return "Leo";
                    }
                }
                else if (dob.ToString("MMMM") == "August")
                {
                    if (Convert.ToInt32(dob.Day) < 23)
                    {
                        return "Leo";
                    }
                    else
                    {
                        return "Virgo";
                    }
                }
                else if (dob.ToString("MMMM") == "September")
                {
                    if (Convert.ToInt32(dob.Day) < 23)
                    {
                        return "Virgo";
                    }
                    else
                    {
                        return "Libra";
                    }
                }
                else if (dob.ToString("MMMM") == "October")
                {
                    if (Convert.ToInt32(dob.Day) < 24)
                    {
                        return "Libra";
                    }
                    else
                    {
                        return "Scorpio";
                    }
                }
                else if (dob.ToString("MMMM") == "November")
                {
                    if (Convert.ToInt32(dob.Day) < 23)
                    {
                        return "Scorpio";
                    }
                    else
                    {
                        return "Sagittarius";
                    }
                }
                else
                {
                    if (Convert.ToInt32(dob.Day) < 22)
                    {
                        return "Sagittarius";
                    }
                    else
                    {
                        return "Capricon";
                    }
                }
            }

        }

        public void display()
        {
            /*Console.WriteLine($"FirstName {firstname}");
            Console.WriteLine($"LastName {lastname}");
            Console.WriteLine($"Date OF Birth {dob}");
            Console.WriteLine($"Email {email}");
            Console.WriteLine($"Adult/Minor  {Adult}");
            Console.WriteLine($"Chinesesign {Chinesesign}");
            Console.WriteLine( $"SunSing {sunsing}");
            Console.WriteLine($"Todaysbirthday {Todaysbirthday}");
            Console.WriteLine($"ScreenName {Screenname}");*/
            Console.WriteLine($"{firstname}     {lastname}     {dob}     {email}     {Adult}     {Chinesesign}     {sunsing}     {Todaysbirthday}     {Screenname}");
        }

    }
    class Program
    {
        static void Main(string[] args)
        {
            Person [] p = new Person[5];


            for (int i = 0; i < 5; i++)
            {
                Console.WriteLine("Enter FirstName");
                string fname = Console.ReadLine();
                Console.WriteLine("Enter The LastName");
                string lname = Console.ReadLine();
                Console.WriteLine("Enter The Email");
                string email = Console.ReadLine();
                Console.WriteLine("ENTER THE BIRTHDATE IN dd/mm/yyyy formet");
                String date = Console.ReadLine();
                var split = date.Split("/");
                int[] arr = new int[split.Length];
                for (int j = 0; j < split.Length; j++)
                {
                    arr[j] = Convert.ToInt32(split[j]);
                }
                DateTime dt = new DateTime(arr[2], arr[1], arr[0]);
                p[i] = new Person(fname,lname,email,dt);
            }
            Console.WriteLine("FIRSTNAME        LASTNAME        DateOFBirth       EMAIL         Adult/Minor       Chinesesign     SunSing        Todaysbirthday       ScreenName");
            foreach (var item in p)
            {
                item.display();
            }
            
            
            
            
            Console.ReadLine();
        }
    }
}
