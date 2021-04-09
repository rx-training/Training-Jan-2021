using System;

namespace Persons
{
    public class Person
    {
        string FirstName;
        string LastName;
        string EmailID;
        DateTime DOB;

        public string firstname
        {
            get
            {
                return FirstName;
            }
            set { FirstName = value; }
        }
        public string lastname
        {
            get { return LastName; }
            set { LastName = value; }
        }

        public string email
        {
            get { return EmailID; }
            set
            {
                string[] parts = value.Split('@');
                if(parts.Length!=2)
                {
                    throw new ArgumentException("Invalid Email Address");
                }
                else { EmailID = value; }
            }
        }

        public DateTime dob
        {
            get { return DOB; }
            set
            {
                //Checking if the date of birth is older than today
                if(value>DateTime.Today)
                { throw new ArgumentException("Date of birth must be before today's date"); }
                else { DOB = value; }
            }
        }

        //Constructors

        public Person(string FN, string LN, string email, DateTime dob)
        {
            this.FirstName = FN;
            this.LastName = LN;
            try
            {
                this.EmailID = email;
            }
            catch(ArgumentException e) { Console.WriteLine(e); }
            try
            {
                this.DOB = dob;
            }
            catch(ArgumentException e) { Console.WriteLine(e); }
        }

        public Person(string FN, string LN, string email)
        {
            this.FirstName = FN;
            this.LastName = LN;
            try
            {
                this.EmailID = email;
            }
            catch (ArgumentException e) { Console.WriteLine(e); }
        }

        public Person(string FN, string LN, DateTime dob)
        {
            this.FirstName = FN;
            this.LastName = LN;
            try
            {
                this.DOB = dob;
            }
            catch (ArgumentException e) { Console.WriteLine(e); }
        }


        //Output Strings
        public bool adult
        {
            get
            {
                var today = DateTime.Today;
                TimeSpan diff = today - DOB;
                if (diff.TotalDays > 78840)     //78840 is total no of days of an 18 year old person
                {
                    return(true);
                }
                else { return(false); }
            }
        }

        public bool birthday
        {
            get
            {
                var today = DateTime.Today;
                if(today.Month == DOB.Month && today.Day == DOB.Day)
                {
                    return (true);
                }
                else 
                {
                    return (false);
                }
            }
        }

        public string SunSign
        {
            get
            {
                if((DOB.Month >= 3 && DOB.Day >= 22) && (DOB.Month<=4 && DOB.Day <= 21))
                {
                    return ("Aries");
                }else if((DOB.Month >= 4 && DOB.Day >= 22) && (DOB.Month <= 5 && DOB.Day <= 21))
                {
                    return ("Taurus");
                }
                else if ((DOB.Month >= 5 && DOB.Day >= 22) && (DOB.Month <= 6 && DOB.Day <= 21))
                {
                    return ("Gemini");
                }
                else if ((DOB.Month >= 6 && DOB.Day >= 22) && (DOB.Month <= 7 && DOB.Day <= 22))
                {
                    return ("Cancer");
                }
                else if ((DOB.Month >= 7 && DOB.Day >= 23) && (DOB.Month <= 8 && DOB.Day <= 22))
                {
                    return ("Leo");
                }
                else if ((DOB.Month >= 8 && DOB.Day >= 23) && (DOB.Month <= 9 && DOB.Day <= 22))
                {
                    return ("Virgo");
                }
                else if ((DOB.Month >= 9 && DOB.Day >= 23) && (DOB.Month <= 10 && DOB.Day <= 22))
                {
                    return ("Libra");
                }
                else if ((DOB.Month >= 10 && DOB.Day >= 23) && (DOB.Month <= 11 && DOB.Day <= 22))
                {
                    return ("Scorpio");
                }
                else if ((DOB.Month >= 11 && DOB.Day >= 23) && (DOB.Month <= 12 && DOB.Day <= 22))
                {
                    return ("Sagittarius");
                }
                else if ((DOB.Month >= 12 && DOB.Day >= 23) && (DOB.Month <= 1 && DOB.Day <= 21))
                {
                    return ("Capricorn");
                }
                else if ((DOB.Month >= 1 && DOB.Day >= 22) && (DOB.Month <= 2 && DOB.Day <= 20))
                {
                    return ("Aquarius");
                }
                else if ((DOB.Month >= 2 && DOB.Day >= 20) && (DOB.Month <= 3 && DOB.Day <= 21))
                {
                    return ("Pisces");
                }
                else
                {
                    return ("problem");
                }
            }
        }

        public string ChineseSign
        {
            get
            {
                if ((DOB.Year % 12) == 4)
                {
                    return ("Rat");
                } 
                else if ((DOB.Year % 12) == 5)
                {
                    return ("Ox");
                }
                else if ((DOB.Year % 12) == 6)
                {
                    return ("Tiger");
                }
                else if ((DOB.Year % 12) == 7)
                {
                    return ("Rabbit");
                }
                else if ((DOB.Year % 12) == 8)
                {
                    return ("Dragon");
                }
                else if ((DOB.Year % 12) == 9)
                {
                    return ("Snake");
                }
                else if ((DOB.Year % 12) == 10)
                {
                    return ("Horse");
                }
                else if ((DOB.Year % 12) == 11)
                {
                    return ("Goat");
                }
                else if ((DOB.Year % 12) == 0)
                {
                    return ("Monkey");
                }
                else if ((DOB.Year % 12) == 1)
                {
                    return ("Rooster");
                }
                else if ((DOB.Year % 12) == 2)
                {
                    return ("Dog");
                }
                else if ((DOB.Year % 12) == 3)
                {
                    return ("Pig");
                }
                else
                {
                    return ("Problamatic code");
                }
            }
        }

        public string ScreenName
        {
            get
            {
                return ($"{FirstName.Substring(0,1)}{LastName}{DOB.Day}{DOB.Month}");
            }
        }
    }
}
