using System;

namespace Day3PracticeOops
{
    interface Bank
    {
        void deposit();
        void withdrawl();
    }
    abstract class Account : Bank
    {
        public  int Balance { get; set; }
        public int ActNo { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public virtual void LogIn() {
            Console.WriteLine($"Login");
            // virtual methods are that methods which are defined in abstract class.
            // Also, can be overridden in another inherited class
        }


        public abstract void deposit();
        public abstract void withdrawl();
    }
    class Saving : Account
    {
        public override void deposit()
        {
            // defination
            Console.WriteLine("Saving deposit");
        }

        public override void withdrawl()
        {
            // defination
            Console.WriteLine("Saving withdrawl");
        }
        public override void LogIn()
        {
            base.LogIn();
            Console.WriteLine("Saving login");
        }
        public void reward()
        {
            Console.WriteLine("reward is here");
        }
    }
    class Current : Account
    {
        public override void deposit()
        {
            // defination
            Console.WriteLine("Current deposit");
        }

        public override void withdrawl()
        {
            // defination
            Console.WriteLine("Withdrawl current");
        }
    }
    public struct testStruct
    {
        public int Id { get; set; }
    }
    public class testClass
    {
        public string name { get; set; }
    }
    class Day3PracticeOOPS
    {
        static void Main(string[] args)
        {
            testStruct t = new testStruct();
            t.Id = 1;
            testStruct t1 = t;
            Console.WriteLine($"Before[struct]:");
            Console.WriteLine($"{t.Id} {t1.Id}");
            t1.Id = 2;
            Console.WriteLine($"After [struct]:");
            Console.WriteLine($"{t.Id} {t1.Id}");

            testClass tc = new testClass();
            tc.name = "a";
            testClass tc1 = tc;

            Console.WriteLine($"Before[class]:");
            Console.WriteLine($"{tc.name} {tc1.name}");
            tc1.name = "b";


            Console.WriteLine($"After[class]:");
            Console.WriteLine($"{tc.name} {tc1.name}");

            // Account p = new account() can not create object of abstract class
            Account p = new Saving();
            p.deposit();
            p.LogIn();
            

            Saving sac = p as Saving;
            sac.LogIn();
            sac.reward();   
        }
    }
}
