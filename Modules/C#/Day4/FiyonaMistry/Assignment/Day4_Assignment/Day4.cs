using System;

namespace Day4_Assignment
{
    class Day4
    {
        public class student
        {
            public string Name { get; set; }
            public int Age { get; set; }
            public DateTime Date { get; set; }

            public void validateName()
            {
                for (int i = 0; i < Name.Length; i++)
                {
                    if(char.IsDigit(Name[i]) == false)
                    {
                        throw new NameException("Name should contain only characters");
                    }
                }
            }

            public void validateAge()
            {
                if(Age <= 0)
                {
                    throw new AgeException("Age should not be less than or equal to 0");
                }
            }

            public void validateDate()
            {
                int result = DateTime.Compare(Date, System.DateTime.Now);
                if(result < 0)
                {
                    throw new DateException("Date should not be less than current date");
                }
            }

        }

        public class AgeException : Exception 
        {
            public AgeException(string message) : base(message){ }
        }

        public class NameException : Exception
        {
            public NameException(string message) : base(message) { }
        }

        public class DateException : Exception
        {
            public DateException(string message) : base(message) { }
        }

        static void Main(string[] args)
        {
            try
            {
                student st = new student();

                Console.Write("Enter Name : ");
                st.Name = Console.ReadLine();

                Console.Write("Enter Age : ");
                st.Age = Convert.ToInt32(Console.ReadLine());

                Console.Write("Enter Current Date : ");
                st.Date = Convert.ToDateTime(Console.ReadLine());

                st.validateName();
                st.validateAge();
                st.validateDate();
            }
            catch (NameException e)
            {
                Console.WriteLine(e.Message);
            }
            catch (AgeException e)
            {
                Console.WriteLine(e.Message);
            }
            catch (DateException e)
            {
                Console.WriteLine(e.Message);
            }
            catch (Exception e)
            {
                throw;
            }
        }
    }
}
