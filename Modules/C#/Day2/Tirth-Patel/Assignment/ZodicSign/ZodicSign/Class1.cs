using System;

namespace ZodicSign
{
    public class Zodiac{
   public string verifysign(int day, string month)
    {
        string astro_sign = "";

     
        if (month == "December")
        {

            if (day < 22)
                astro_sign = "Sagittarius";
            else
                astro_sign = "capricorn";
        }

        else if (month == "January")
        {
            if (day < 20)
                astro_sign = "Capricorn";
            else
                astro_sign = "aquarius";
        }

        else if (month == "February")
        {
            if (day < 19)
                astro_sign = "Aquarius";
            else
                astro_sign = "pisces";
        }

        else if (month == "March")
        {
            if (day < 21)
                astro_sign = "Pisces";
            else
                astro_sign = "aries";
        }
        else if (month == "April")
        {
            if (day < 20)
                astro_sign = "Aries";
            else
                astro_sign = "taurus";
        }

        else if (month == "May")
        {
            if (day < 21)
                astro_sign = "Taurus";
            else
                astro_sign = "gemini";
        }

        else if (month == "june")
        {
            if (day < 21)
                astro_sign = "Gemini";
            else
                astro_sign = "cancer";
        }

        else if (month == "July")
        {
            if (day < 23)
                astro_sign = "Cancer";
            else
                astro_sign = "leo";
        }

        else if (month == "August")
        {
            if (day < 23)
                astro_sign = "Leo";
            else
                astro_sign = "virgo";
        }

        else if (month == "September")
        {
            if (day < 23)
                astro_sign = "Virgo";
            else
                astro_sign = "libra";
        }

        else if (month == "October")
        {
            if (day < 23)
                astro_sign = "Libra";
            else
                astro_sign = "scorpio";
        }

        else if (month == "November")
        {
            if (day < 22)
                astro_sign = "scorpio";
            else
                astro_sign = "sagittarius";
        }

        return astro_sign;
    }
        public string chiniseSign(int year)
        {
            if (year % 12 == 0) { return "Monkey"; }
          
            else if (year % 12 == 1) { return "Rooster"; }
            else if (year % 12 == 2) { return "Dog"; }
            else if (year % 12 == 3) { return "Pig"; }
            else if (year % 12 == 4) { return "Rat"; }
            else if (year % 12 == 5) { return "Ox"; }
            else if (year % 12 == 6) { return "Tiger"; }
            else if (year % 12 == 7) { return "Rabbit"; }
            else if (year % 12 == 8) { return "Dragon"; }
            else if (year % 12 ==9) { return "Snake"; }
            else if (year % 12 == 10) { return "Horse"; }
            else { return "Sheep"; }
        }
    }
}

