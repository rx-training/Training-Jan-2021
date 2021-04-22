using System;
using System.Collections.Generic;

namespace test2
{

    class student
    {
        public int Aptitude { get; }
        public int English { get; }
        public int Maths { get; }
        public int Gk { get; }

        public bool[] exam = new bool[4] { false,false,false,false };
        public string Name { get; set; }
        public int RollNo { get; set; }

        private int marks = 0;
        public void queAptitude()
        {
            exam[0] = true;
            Console.WriteLine($"What is aptitude");
            Console.WriteLine($"enter 1 for true or 2 for false");
            int ans = Convert.ToInt32(Console.ReadLine());
            if (ans == 1)
            {
                marks += 10;
            }
            else {
                marks += 0;
            }
        }
        public void queEnglish()
        {
            exam[1] = true;
            Console.WriteLine($"tell the name of first vowel?");
            Console.WriteLine($"enter your answer");
            string ans = Console.ReadLine();
            if (ans.ToLower() == "a")
            {
                marks += 10;
            }
            else
            {
                marks += 0;
            }
        }
        public void queMath()
        {
            exam[2] = true;
            Console.WriteLine($"What would be ans for 10 + 12 ?");
            Console.WriteLine($"enter your answer :");
            int ans = Convert.ToInt32(Console.ReadLine());
            if (ans == 22)
            {
                marks += 10;

            }
            else
            {
                marks += 0;

            }
        }
        public void queGK()
        {
            exam[3] = true;
            Console.WriteLine($"Who is PM of India");
            Console.WriteLine($"enter your answer :");
            string  ans = Console.ReadLine();
            if (ans.ToLower() == "narendra modi" || ans.ToLower() == "modi")
            {
                marks += 10;

            }
            else
            {
                marks += 0;

            }
        }
        public void countBonus() { 
             switch(marks)
            {
                case 10:
                    marks += 0;
                    break;
                case 20:
                    marks += 2;
                    break;
                case 30:
                    marks += 5;
                    break;
                case 40:
                    marks += 10;
                    break;
                default:
                    break;
            }
        }
        public void display()
        {
            countBonus();
            Console.WriteLine($"Name : {Name}, roll No {RollNo}");
            Console.WriteLine($"Marks : {marks}");

            if (marks == 0)
            {
                Console.WriteLine("Your iq level is so bad");
            }
            else if (marks == 10)
            {
                Console.WriteLine($"Your id level is below avrage");
            }
            else if (marks == 22)
            {
                Console.WriteLine($"your id level is avaargae");
            }
            else if (marks == 35)
            {
                Console.WriteLine("Your iq level is inteligent");
            }
            else
            {
                Console.WriteLine("You are genius");
            }

        }



    }
    class Program
    {
        static void Main(string[] args)
        {
            student s = new student() { Name = "Namra",RollNo = 10};
            int i = 0;
            while (i != 5)
            {
                Console.WriteLine($"Enter your choise which test you would liek to do...");
                Console.WriteLine($"1.apptitude");
                Console.WriteLine($"2.Math");
                Console.WriteLine($"3.English");
                Console.WriteLine($"4.GK");
                Console.WriteLine($"5.Exit");

                i = Convert.ToInt32(Console.ReadLine());

                switch (i)
                {
                    case 1:
                        Console.WriteLine("You have choose apptiude");
                        if (s.exam[0] == true)
                        {
                            Console.WriteLine("You already given the aptitude test");
                        }
                        else
                        {
                            s.queAptitude();
                        }
                        break;
                    case 2:
                        Console.WriteLine("You have choose Math");
                        if (s.exam[2] == true)
                        {
                            Console.WriteLine("You already given the math test");
                        }
                        else
                        {
                            s.queMath();
                        }
                        break;
                    case 3:
                        Console.WriteLine("You have choose English");
                        if (s.exam[1] == true)
                        {
                            Console.WriteLine("You already given the english test");
                        }
                        else
                        {
                            s.queEnglish();
                        }
                        break;
                    case 4:
                        Console.WriteLine("You have choose Gk");
                        if (s.exam[3] == true)
                        {
                            Console.WriteLine("You already given the GK test");
                        }
                        else
                        {
                            s.queGK();
                        }
                        break;
                    case 5:
                        s.display();
                        i = 5;
                        break;
                    default:
                        Console.WriteLine("You have entered wrong choice");
                        break;
                }
            }
        }
    }
}
