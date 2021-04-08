using System;
using System.Collections.Generic;

namespace Day5Practice
{
    class Day5PracticeTasks
    {
        static void validateAge(int age)
        {
            if(age<=0)
            {
                throw new FormatException("Age can not be less than or equal to zero");
            }
        }

        static void Main(string[] args)
        {
            Console.WriteLine("-------------------------Array & List Practice------------------------------");
            ArrayPractice arrayPractice = new ArrayPractice();
            arrayPractice.Display();
            Console.WriteLine();
            Console.WriteLine();

            Console.WriteLine("-------------------------Stack Practice------------------------------");
            StackPractice stackPractice = new StackPractice();
            stackPractice.Display();
            Console.WriteLine();
            Console.WriteLine();

            Console.WriteLine("-------------------------Queue Practice------------------------------");
            QueuePractice queuePractice = new QueuePractice();
            queuePractice.Display();
            Console.WriteLine();
            Console.WriteLine();

            Console.WriteLine("-------------------------Dictionary Practice------------------------------");
            DictionaryPractice dictionaryPractice = new DictionaryPractice();
            dictionaryPractice.Display();
            Console.WriteLine();
            Console.WriteLine();

            Console.WriteLine("---------------------------Practice Tasks - 1--------------------------------");
            // Q. Create a list which will store 5 student names and then display it search it index number

            bool moreChoice = true;
            PracticeTask1 practiceTask1 = new PracticeTask1();
            while(moreChoice)
            { 
                Console.WriteLine("Choose from below options:");
                Console.WriteLine("a: Adding Student name");
                Console.WriteLine("d: Displaying all students info");
                Console.WriteLine("s: search for a particular student");
                char choice = Convert.ToChar(Console.ReadLine());
                switch(choice)
                {
                    case 'a':
                        practiceTask1.AddStudent();
                        break;
                    case 'd':
                        practiceTask1.DisplayStudent();
                        break;
                    case 's':
                        practiceTask1.SearchStudent();
                        break;
                    default:
                        Console.WriteLine("Enter correct choice!");
                        break;
                }

                Console.WriteLine("Want to perform more actions? (Y/N)");
                char more = Convert.ToChar(Console.ReadLine());
                if(more=='Y')
                {
                    moreChoice = true;
                }
                else
                {
                    moreChoice = false;
                }
            }

            Console.WriteLine();
            Console.WriteLine("------------------------------------Practice Task - 2-----------------------------");
            // Q 2.Create a stack which will store Age of person and display it last in first out order.

            Stack<int> age = new Stack<int>();
            bool moreEntry = true;
            while(moreEntry)
            {
                Console.WriteLine("Enter Age of a person:");
                try
                {
                    int input = Convert.ToInt32(Console.ReadLine());
                    validateAge(input);
                    age.Push(input);

                }
                catch(FormatException e)
                {
                    Console.WriteLine(e.Message);
                }

                Console.WriteLine("Want to enter more age? (Y/N)");
                char more = Convert.ToChar(Console.ReadLine());
                if (more == 'Y')
                {
                    moreEntry = true;
                }
                else
                {
                    moreEntry = false;
                }
            }

            // Display
            Console.WriteLine();
            Console.WriteLine("Entered ages are: ");
            foreach (int number in age)
            {
                Console.WriteLine(number);
            }

            Console.WriteLine();
            Console.WriteLine("------------------------------------Practice Task - 3-----------------------------");
            // Q 3. Store a product information in map object. Key will be a product item and value will be the price of that 
            // product. Search the product by product name.

            bool flag = true;
            PracticeTask3 practiceTask3 = new PracticeTask3();
            while (flag)
            {
                Console.WriteLine("Choose from below options:");
                Console.WriteLine("a: Adding Product information");
                Console.WriteLine("d: Displaying all products info");
                Console.WriteLine("s: search for a particular product");
                char choice = Convert.ToChar(Console.ReadLine());
                switch (choice)
                {
                    case 'a':
                        practiceTask3.AddProduct();
                        break;
                    case 'd':
                        practiceTask3.DisplayProduct();
                        break;
                    case 's':
                        practiceTask3.SearchProduct();
                        break;
                    default:
                        Console.WriteLine("Enter correct choice!");
                        break;
                }

                Console.WriteLine("Want to perform more actions? (Y/N)");
                char more = Convert.ToChar(Console.ReadLine());
                if (more == 'Y')
                {
                    flag = true;
                }
                else
                {
                    flag = false;
                }
            }

        }
    }
}
