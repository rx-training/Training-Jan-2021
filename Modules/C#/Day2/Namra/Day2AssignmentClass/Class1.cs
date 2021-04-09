using System;

namespace Persons
{
    public class Person
    {
        public string firstName { get; }
        public string lastName { get; }
        public string Email { get; }
        public DateTime birthDate { get; }
        public Person()
        {

        }
        public Person(string FName, string LName, string email, string date)
        {
            this.firstName = FName;
            this.lastName = LName;
            this.Email = email;
            this.birthDate = DateTime.Parse(date);
        }
        public Person(string Fname , string LName, string email)
        {
            this.firstName = Fname;
            this.lastName = LName;
            this.Email = email;
        }
        public Person(string FName, string LName , DateTime date)
        {
            this.firstName = FName;
            this.lastName = LName;
            this.birthDate = date;
        }
        public bool Adult
        {
            get 
            {
                if ((DateTime.Now.Year - birthDate.Year) >= 18)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
        } 
        public string ChineseSign
        {
            get 
            {
                switch ((birthDate.Year - 4) % 12)
                {
                    case 0:
                        return "Rat";
                        break;
                    case 1:
                        return "Ox";
                        break;
                    case 2:
                        return "Tiger";
                        break;
                    case 3:
                        return "Rabbit";
                        break;
                    case 4:
                        return "Dragon";
                        break;
                    case 5:
                        return "Snake";
                        break;
                    case 6:
                        return "Horse";
                        break;
                    case 7:
                        return "Goat";
                        break;
                    case 8:
                        return "Monkey";
                        break;
                    case 9:
                        return "Rooster";
                        break;
                    case 10:
                        return "Dog";
                        break;
                    case 11:
                        return "Pig";
                        break;
                    default:
                        return "";
                        break;
                }
            }
        }
        public string SunSign
        {
            get 
            {
                int Day = birthDate.Day;
                switch (birthDate.Month)
                {
                    case 1:
                        if (Day < 20)
                            return "Capricorn";
                        else
                            return "aquarius";
                        break;
                    case 2:
                        if (Day < 19)
                            return "Aquarius";
                        else
                            return "pisces";
                        break;
                    case 3:
                        if (Day < 21)
                            return "Pisces";
                        else
                            return "Aries";
                        break;
                    case 4:
                        if (Day < 20)
                            return "Aries";
                        else
                            return "taurus";
                        break;
                    case 5:
                        if (Day < 21)
                            return "Taurus";
                        else
                            return "gemini";
                        break;
                    case 6:
                        if (Day < 21)
                            return "Gemini";
                        else
                            return "cancer";
                        break;
                    case 7:
                        if (Day < 23)
                            return "Cancer";
                        else
                            return "leo";
                        break;
                    case 8:
                        if (Day < 23)
                            return "Leo";
                        else
                            return "virgo";
                        break;
                    case 9:
                        if (Day < 23)
                            return "Virgo";
                        else
                            return "libra";
                        break;
                    case 10:
                        if (Day < 23)
                            return "Libra";
                        else
                            return "scorpio";
                        break;
                    case 11:
                        if (Day < 22)
                            return "scorpio";
                        else
                            return "sagittarius";
                        break;
                    case 12:
                        if (Day < 22)
                            return "Sagittarius";
                        else
                            return "capricorn";
                        break;
                    default:
                        return "";
                        break;
                }
            }
        }
        public bool BirthDayBool
        {
            get
            {
                if(birthDate == DateTime.Now)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
        }
        public string ScreenName
        {
            get
            {
                return $"{firstName}{lastName}{birthDate.Day}{birthDate.Month}{birthDate.Year}";
            }
        }
    }
}
