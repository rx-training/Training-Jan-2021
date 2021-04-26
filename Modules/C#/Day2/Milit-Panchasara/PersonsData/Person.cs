using System;

namespace PersonsData
{
    public class Person
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string EmailAddress { get; set; }
        public DateTime DateOfBirth { get; set; }
        public bool Adult
        {
            get
            {
                if (DateOfBirth == new DateTime())
                {
                    return false;
                }
                return (Convert.ToInt32((DateTime.Now - this.DateOfBirth).TotalDays / 365) >= 18);
            }
        }
        public bool Birthday
        {
            get
            {
                if(DateOfBirth == new DateTime())
                {
                    return false;
                }
                return (DateOfBirth.Date == DateTime.Now.Date && DateOfBirth.Month == DateTime.Now.Month);
            }
        }
        public string SunSign {
            get
            {
                return FindSunSign(this.DateOfBirth);
            }
        }

        public string ChineseSign 
        {
            get
            {
                if (DateOfBirth == new DateTime())
                {
                    return String.Empty;
                }
                var fraction = DateOfBirth.Year % 12;
                switch (fraction)
                {
                    case 4:
                        return "Rat";
                    case 5:
                        return "Ox";
                    case 6:
                        return "Tiger";
                    case 7:
                        return "Rabbit";
                    case 8:
                        return "Dragon";
                    case 9:
                        return "Snake";
                    case 10:
                        return "Horse";
                    case 11:
                        return "Goat";
                    case 0:
                        return "Monkey";
                    case 1:
                        return "Rooster";
                    case 2:
                        return "Dog";
                    case 3:
                        return "Pig";
                    default:
                        return String.Empty;
                }

            }
        }


        private string FindSunSign(DateTime dateOfBirth)
        {
            if(dateOfBirth == new DateTime())
            {
                return String.Empty;
            }
            if(dateOfBirth > new DateTime(dateOfBirth.Year, 3, 22) && dateOfBirth <= new DateTime(dateOfBirth.Year, 4, 21))
            {
                return "Aries";
            }
            else if (dateOfBirth > new DateTime(dateOfBirth.Year, 4, 22) && dateOfBirth <= new DateTime(dateOfBirth.Year, 5, 21))
            {
                return "Taurus";
            }
            else if (dateOfBirth > new DateTime(dateOfBirth.Year, 5, 22) && dateOfBirth <= new DateTime(dateOfBirth.Year, 6, 21))
            {
                return "Gemini";
            }
            else if (dateOfBirth > new DateTime(dateOfBirth.Year, 6, 22) && dateOfBirth <= new DateTime(dateOfBirth.Year, 7, 21))
            {
                return "Cancer";
            }
            else if (dateOfBirth > new DateTime(dateOfBirth.Year, 7, 23) && dateOfBirth <= new DateTime(dateOfBirth.Year, 8, 22))
            {
                return "Leo";
            }
            else if (dateOfBirth > new DateTime(dateOfBirth.Year, 8, 23) && dateOfBirth <= new DateTime(dateOfBirth.Year, 9, 22))
            {
                return "Virgo";
            }
            else if (dateOfBirth > new DateTime(dateOfBirth.Year, 9, 23) && dateOfBirth <= new DateTime(dateOfBirth.Year, 10, 22))
            {
                return "Libra";
            }
            else if (dateOfBirth > new DateTime(dateOfBirth.Year, 10, 23) && dateOfBirth <= new DateTime(dateOfBirth.Year, 11, 22))
            {
                return "Scorpio";
            }
            else if (dateOfBirth > new DateTime(dateOfBirth.Year, 11, 23) && dateOfBirth <= new DateTime(dateOfBirth.Year, 12, 22))
            {
                return "Sagittarius";
            }
            else if (dateOfBirth > new DateTime(dateOfBirth.Year-1, 12, 23) && dateOfBirth <= new DateTime(dateOfBirth.Year, 1, 21))
            {
                return "Capricorn";
            }
            else if (dateOfBirth > new DateTime(dateOfBirth.Year, 12, 23) && dateOfBirth <= new DateTime(dateOfBirth.Year + 1, 1, 21))
            {
                return "Capricorn";
            }
            else if (dateOfBirth > new DateTime(dateOfBirth.Year, 1, 23) && dateOfBirth <= new DateTime(dateOfBirth.Year, 2, 20))
            {
                return "Aquarius";
            }
            else if (dateOfBirth > new DateTime(dateOfBirth.Year, 2, 23) && dateOfBirth <= new DateTime(dateOfBirth.Year, 3, 21))
            {
                return "Pisces";
            }
            return String.Empty;
        }

        public string ScreenName { get; }
        private static int screenNameSeed = 1000;

        public Person(string firstName, string lastName, string email, DateTime date)
        {
            if (date > DateTime.Today) // BirthDate validation
            {
                throw new ArgumentException("Date of birth can't be in the future");
            }
            this.FirstName = firstName;
            this.LastName = lastName;
            this.EmailAddress = email;
            this.DateOfBirth = date;
            this.ScreenName = this.FirstName + screenNameSeed.ToString();
            screenNameSeed++;
        }

        public Person(string firstName, string lastName, string email)
        {
            this.FirstName = firstName;
            this.LastName = lastName;
            this.EmailAddress = email;
            this.ScreenName = this.FirstName + screenNameSeed.ToString();
            screenNameSeed++;
        }

        public Person(string firstName, string lastName, DateTime date)
        {
            if (date > DateTime.Today) // BirthDate validation
            {
                throw new ArgumentException("Date of birth can't be in the future");
            }
            this.FirstName = firstName;
            this.LastName = lastName;
            this.DateOfBirth = date;
            this.ScreenName = this.FirstName + screenNameSeed.ToString();
            screenNameSeed++;
        }
    }
}
