using System;
using ZodicSign;

public class Person
{
    public string FirstName
    {
        get;
        set;

    }
    public string LastName
    {
        get;
        set;
    }
    public string EmailAddress
    {
        get;
        set;

    }
    public DateTime DOB
    {
        get;
        set;
    }
    public int dayofbirth
    {
        get => Convert.ToInt32(this.DOB.Day);


    }
    public string monthofbirth
    {
        get => this.DOB.ToString("MMMM");


    }
    public int monthofdob
    {
        get => Convert.ToInt32(this.DOB.Month);
    }
    public int yearofBirth
    {
        get => Convert.ToInt32(this.DOB.Year);


    }
    public Person() { }
    public Person(string FirstName, string LastName, string EmailAddress, DateTime DOB)
    {
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.EmailAddress = EmailAddress;
        this.DOB = DOB;
    }
    public Person(string FirstName, string LastName, String EmailAddress)
    {
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.EmailAddress = EmailAddress;
    }
    public Person(string FirstName, string LastName, DateTime DOB)
    {
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.DOB = DOB;
    }
    public DateTime CurrentDate = DateTime.Now;
    public String Isadult
    {

        get
        {
            if ((CurrentDate.Year - this.DOB.Year) > 18)
            {
                return "Adult";
            }
            return "Not Adult";
        }
        private set {; }

    }

    public string zodiac
    {
        get
        {

            var z1 = new Zodiac();

            return (z1.verifysign(dayofbirth, monthofbirth));



        }
    }
    public string Chinese
    {
        get
        {

            Zodiac z1 = new Zodiac();

            return (z1.chiniseSign(yearofBirth));



        }
    }
    public string screenname
    {
        get => $"{this.FirstName}{this.LastName}{monthofdob}{dayofbirth}{yearofBirth}";
    }
    public string Checkbirthday
    {
        get
        {
            if (this.DOB == CurrentDate)
            {
                return "Yes";
            }
            return "NO";
            ;
        }
    }
    public void display()
    {
        //Console.WriteLine($"{this.monthofbirth} {this.dayofbirth}");
        Zodiac z1 = new Zodiac();
        Console.WriteLine(z1.verifysign(dayofbirth, monthofbirth));
        Console.WriteLine(z1.chiniseSign(yearofBirth));
        Console.WriteLine(screenname);
    }




}
