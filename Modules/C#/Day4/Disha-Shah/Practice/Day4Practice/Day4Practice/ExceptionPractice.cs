using System;
using System.Collections.Generic;
using System.Text;

namespace Day4Practice
{
    // Derive an exception with a predefined message.
    class NotEvenException : ApplicationException
    {
        public NotEvenException() :
            base("The argument to a function requiring " +
                "even input is not divisible by 2.")
        { }
    }

    class Person
    {
        private string _name;

        public string Name
        {
            get { return _name; }
            set { _name = value; }
        }

        public override int GetHashCode()
        {
            return this.Name.GetHashCode();
        }

        public override bool Equals(object obj)
        {
            // This implementation handles a null obj argument.
            Person p = obj as Person;
            if (p == null)
                return false;
            else
                return this.Name.Equals(p.Name);
        }
    }

    class Guest
    {
        private string FirstName;
        private string LastName;
        private int Age;

        public Guest(string fName, string lName, int age)
        {
            FirstName = fName;
            LastName = lName;
            if (age < 21)
                throw new ArgumentOutOfRangeException("age", "All guests must be 21-years-old or older.");
            else
                Age = age;
        }

        public string GuestInfo()
        {
            string gInfo = FirstName + " " + LastName + ", " + Age.ToString();
            return (gInfo);
        }
    }

    class ExceptionPractice
    {
        static int DivideByTwo(int num)
        {
            // If num is an odd number, throw an ArgumentException.
            if ((num & 1) == 1)
                throw new ArgumentException(String.Format("{0} is not an even number", num),
                                          "num");

            // num is even, return half of its value.
            return num / 2;
        }

        static void FutureFeature()
        {
            // Not developed yet.
            throw new NotImplementedException();
        }

        // Half throws a base exception if the input is not even.
        static int Half(int input)
        {
            if (input % 2 != 0)
                throw new Exception();

            else return input / 2;
        }

        // Half2 throws a derived exception if the input is not even.
        static int Half2(int input)
        {
            if (input % 2 != 0)
                throw new NotEvenException();

            else return input / 2;
        }

        // CalcHalf calls Half and catches any thrown exceptions.
        static void CalcHalf(int input)
        {
            try
            {
                int halfInput = Half(input);
                Console.WriteLine(
                    "Half of {0} is {1}.", input, halfInput);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
            }
        }

        // CalcHalf2 calls Half2 and catches any thrown exceptions.
        static void CalcHalf2(int input)
        {
            try
            {
                int halfInput = Half2(input);
                Console.WriteLine(
                    "Half of {0} is {1}.", input, halfInput);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
            }
        }

        public void Display()
        {
            Person p1 = new Person();
            p1.Name = "John";
            Person p2 = null;

            // The following throws a NullReferenceException.
            Console.WriteLine("p1 = p2: {0}", p1.Equals(p2));

            try
            {
                Console.WriteLine("Enter denominator:");
                int x = Convert.ToInt32(Console.ReadLine());
                int y = 100 / x;
                Console.WriteLine(y);
            }
            catch(FormatException e)
            {
                Console.WriteLine($"FormatException Handler: {e.GetType()} \n {e.Message} \n {e.StackTrace}");
                Console.WriteLine("Please enter only numeric value!!");
            }
            catch (ArithmeticException e)
            {
                Console.WriteLine($"ArithmeticException Handler: {e.GetType()} \n {e.Message} \n {e.StackTrace}");
            }
            catch (Exception e)
            {
                Console.WriteLine($"Generic Exception Handler: {e}");
            }


            // ArgumentException
            int[] values = { 10, 7 };
            foreach (var value in values)
            {
                try
                {
                    Console.WriteLine("{0} divided by 2 is {1}", value, DivideByTwo(value));
                }
                catch (ArgumentException e)
                {
                    Console.WriteLine("{0}: {1}", e.GetType().Name, e.Message);
                }
                Console.WriteLine();
            }


            // ArgumentOutOfRangeException
            try
            {
                Guest guest1 = new Guest("Ben", "Miller", 17);
                Console.WriteLine(guest1.GuestInfo());
            }
            catch (ArgumentOutOfRangeException outOfRange)
            {

                Console.WriteLine("Error: {0}", outOfRange.Message);
            }

            // DivideByZeroException
            int number1 = 3000;
            int number2 = 0;
            try
            {
                Console.WriteLine(number1 / number2);
            }
            catch (DivideByZeroException)
            {
                Console.WriteLine("Division of {0} by zero.", number1);
            }

            // IndexOutOfRangeException
            try
            {
                int[] values1 = { 3, 6, 9, 12, 15, 18, 21 };
                int[] values2 = new int[6];

                // Assign last element of the array to the new array.
                values2[values1.Length - 1] = values1[values1.Length - 1];
            }
            catch(IndexOutOfRangeException e)
            {
                Console.WriteLine(e);
            }

            // NotImplementedException
            try
            {
                FutureFeature();
            }
            catch (NotImplementedException notImp)
            {
                Console.WriteLine(notImp.Message);
            }
            finally
            {
                Console.WriteLine("Always display");
            }

            // Custom Exception
            Console.WriteLine(
                "This example of the Exception( ) constructor " +
                "generates the following output.");
            Console.WriteLine(
                "\nHere, an exception is thrown using the \n" +
                "parameterless constructor of the base class.\n");

            CalcHalf(12);
            CalcHalf(15);

            Console.WriteLine(
                "\nHere, an exception is thrown using the \n" +
                "parameterless constructor of a derived class.\n");

            CalcHalf2(24);
            CalcHalf2(27);
        }
    }
}
