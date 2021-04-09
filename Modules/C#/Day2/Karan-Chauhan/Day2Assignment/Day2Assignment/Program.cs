using Day2Assignment;
using System;

namespace Day2Assignment
{
    public class Person
    {
        
        
        string firstname;
        string lastname;
        string email;
        DateTime dt;

        public Person(string firstname, string lastname, string email, DateTime dob)
        {
            this.firstname = firstname;
            this.lastname = lastname;
            this.email = email;
            this.dt = dob;
            
        }

        public Person(string firstname, string lastname, string email)
        {
            this.firstname = firstname;
            this.lastname = lastname;
            this.email = email;
        }

        public Person(string firstname,  string lastname, DateTime dob)
        {
            this.firstname = firstname;
            this.lastname = lastname;
            this.dt = dob;
        }


        public string Adult 
        {
            get {
                int birthyear = Convert.ToInt32(dt.ToString("yyyy"));
                int currentyear = Convert.ToInt32(DateTime.Now.ToString("yyyy"));
                int age = currentyear - birthyear;

                if(age>18)
                {
                    return "Adult!";
                }
                else
                {
                    return "Not Adult!";
                }
            }
        }

        public string ChineseSign
        {
            get
            {
                if(dt.ToString("yyyy")=="1984" || dt.ToString("yyyy") == "1996" || dt.ToString("yyyy") == "2008")
                {
                    return "Chinese Zodiac Animal - Rat";
                }
                else if (dt.ToString("yyyy") == "1985" || dt.ToString("yyyy") == "1997" || dt.ToString("yyyy") == "2009")
                {
                    return "Chinese Zodiac Animal - Ox";
                }
                else if (dt.ToString("yyyy") == "1986" || dt.ToString("yyyy") == "1998" || dt.ToString("yyyy") == "2010")
                {
                    return "Chinese Zodiac Animal - Tiger";
                }
                else if (dt.ToString("yyyy") == "1987" || dt.ToString("yyyy") == "1999" || dt.ToString("yyyy") == "2011")
                {
                    return "Chinese Zodiac Animal - Rabbit";
                }
                else if (dt.ToString("yyyy") == "1988" || dt.ToString("yyyy") == "2000" || dt.ToString("yyyy") == "2012")
                {
                    return "Chinese Zodiac Animal - Dragon";
                }
                else if (dt.ToString("yyyy") == "1989" || dt.ToString("yyyy") == "2001" || dt.ToString("yyyy") == "2013")
                {
                    return "Chinese Zodiac Animal - Snake";
                }
                else if (dt.ToString("yyyy") == "1990" || dt.ToString("yyyy") == "2002" || dt.ToString("yyyy") == "2014")
                {
                    return "Chinese Zodiac Animal - Horse";
                }
                else if (dt.ToString("yyyy") == "1991" || dt.ToString("yyyy") == "2003" || dt.ToString("yyyy") == "2015")
                {
                    return "Chinese Zodiac Animal - Sheep";
                }
                else if (dt.ToString("yyyy") == "1992" || dt.ToString("yyyy") == "2004" || dt.ToString("yyyy") == "2016")
                {
                    return "Chinese Zodiac Animal - Monkey";
                }
                else if (dt.ToString("yyyy") == "1993" || dt.ToString("yyyy") == "2005" || dt.ToString("yyyy") == "2017")
                {
                    return "Chinese Zodiac Animal - Rooster";
                }
                else if (dt.ToString("yyyy") == "1994" || dt.ToString("yyyy") == "2006" || dt.ToString("yyyy") == "2018")
                {
                    return "Chinese Zodiac Animal - Dog";
                }
                else if (dt.ToString("yyyy") == "1995" || dt.ToString("yyyy") == "2007" || dt.ToString("yyyy") == "2019")
                {
                    return "Chinese Zodiac Animal - Pig";
                }
                else
                {
                    return "Invalid Birthyear!";
                }
            }
        }

        public string SunSign
        {
            get
            {
                if(dt.ToString("MMMM")=="January")
                {
                    if(Convert.ToInt32(dt.Day)<20)
                    {
                        return "Capricon";
                    }
                    else
                    {
                        return "Aquarius";
                    }
                }
                else if(dt.ToString("MMMM") == "February")
                {
                    if (Convert.ToInt32(dt.Day) < 19)
                    {
                        return "Aquarius";
                    }
                    else
                    {
                        return "Pisces";
                    }
                }
                else if (dt.ToString("MMMM") == "March")
                {
                    if (Convert.ToInt32(dt.Day) < 21)
                    {
                        return "Pisces";
                    }
                    else
                    {
                        return "Aries";
                    }
                }
                else if (dt.ToString("MMMM") == "April")
                {
                    if (Convert.ToInt32(dt.Day) < 20)
                    {
                        return "Aries";
                    }
                    else
                    {
                        return "Taurus";
                    }
                }
                else if (dt.ToString("MMMM") == "May")
                {
                    if (Convert.ToInt32(dt.Day) < 21)
                    {
                        return "Tauras";
                    }
                    else
                    {
                        return "Gemini";
                    }
                }
                else if (dt.ToString("MMMM") == "June")
                {
                    if (Convert.ToInt32(dt.Day) < 22)
                    {
                        return "Gemini";
                    }
                    else
                    {
                        return "Cancer";
                    }
                }
                else if (dt.ToString("MMMM") == "July")
                {
                    if (Convert.ToInt32(dt.Day) < 23)
                    {
                        return "Cancer";
                    }
                    else
                    {
                        return "Leo";
                    }
                }
                else if (dt.ToString("MMMM") == "August")
                {
                    if (Convert.ToInt32(dt.Day) < 23)
                    {
                        return "Leo";
                    }
                    else
                    {
                        return "Virgo";
                    }
                }
                else if (dt.ToString("MMMM") == "September")
                {
                    if (Convert.ToInt32(dt.Day) < 23)
                    {
                        return "Virgo";
                    }
                    else
                    {
                        return "Libra";
                    }
                }
                else if (dt.ToString("MMMM") == "October")
                {
                    if (Convert.ToInt32(dt.Day) < 24)
                    {
                        return "Libra";
                    }
                    else
                    {
                        return "Scorpio";
                    }
                }
                else if (dt.ToString("MMMM") == "November")
                {
                    if (Convert.ToInt32(dt.Day) < 23)
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
                    if (Convert.ToInt32(dt.Day) < 22)
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
        public string Birthday
        {
            get
            {
                if(DateTime.Now.ToString("MM/dd") == dt.ToString("MM/dd"))
                {
                    return "Today is birthday!";
                }
                else
                {
                    return "Today is not birthday!";
                }
            }
        }

        public string ScreenName
        {
            get
            {
                string username = firstname.ToLower() + lastname.ToLower() + dt.ToString("dd") + dt.ToString("MM")
                    + dt.ToString("yy");
                return username;
            }
        }
        
        public void display()
        {
        Console.WriteLine($"{firstname}    {lastname}    {dt}    {Adult}    {SunSign}    {ChineseSign}    {Birthday}    {ScreenName}    ");
        }

    }
    class Program
    {
        static void Main(string[] args)
        {
            Person[] p = new Person[5];

            for(int i=0; i<5; i++)
            {
                Console.WriteLine("Details of Person - "+(i+1));
                Console.WriteLine("Enter the firstname:");
                string firstname = Console.ReadLine();
                Console.WriteLine("Enter the lastname: ");
                string lastname = Console.ReadLine();
                Console.WriteLine("Enter the email: ");
                string email = Console.ReadLine();
                Console.WriteLine("Enter day of birth");
                int day = Convert.ToInt16(Console.ReadLine());
                Console.WriteLine("Enter month of birth");
                int month = Convert.ToInt16(Console.ReadLine());
                Console.WriteLine("Enter year of birth");
                int year = Convert.ToInt16(Console.ReadLine());
                DateTime dt = new DateTime(year, month, day);
                p[i] = new Person(firstname, lastname, email, dt);
            }
            Console.WriteLine("FIRSTNAME    LASTNAME    DOB    ADULT    SUNSIGN    CHINESESIGN    BIRTHDAY    SCREENNAME    ");
            foreach (var item in p)
            {
                item.display();
            }
            
            //Console.WriteLine(dt.Date.ToString());
           // Console.WriteLine(dt.Date.ToString("MM/dd/yyyy"));
        }
    }
}
