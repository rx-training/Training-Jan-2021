using System;
namespace assidnmentDay1
{
	public enum Days { 
		Sunday,
		Monday,
		Tuesday,
		Wednesday,
		Thursday,
		Friday,
		Saturday
	}
	public class Class1
	{
		static void Main(string[] args)
		{
			//Print sum of all the even numbers

			Console.WriteLine($"Enter a number :");
			int number = Convert.ToInt32(Console.ReadLine());
			int sum = 0;
			for (int i = 1; i <= number; i++)
			{
				if (i % 2 == 0)
				{
					sum += i;
				}
			}
			Console.WriteLine($"Your entered number{number} and sum of even numbers {sum}");

			// Store your name in one string and find out how many vowel characters are there in your name.
			Console.WriteLine($"Now, Enter your name here : ");
			String name = Console.ReadLine();

			char[] charArray = name.ToCharArray();
			int count = 0;
			foreach (char ch in charArray)
			{
				if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' || ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U')
				{
					count++;
				}
			}
			Console.WriteLine($"There are {count} vowels in your name [{name}]");

			// Create a weekday enum and accept week day number and display week day.

			Console.WriteLine($"Now,Please Enter a week day : ");
			int weekDay = Convert.ToInt32(Console.ReadLine());

			if (weekDay < 1 || weekDay > 7)
			{
				Console.WriteLine($"You entered a wrong weekday number");
			}
			else 
			{
				Console.WriteLine($"The week day is {(Days)weekDay-1}");
			}


			// Accept 10 student Name,Address,Hindi,English,Maths Marks ,do the total and compute Grade. Note do it with Array and display the result in grid format

			string[,] studentName = new string[2, 3];
			
			int[,] studentMarks = new int[2, 4];
			for (int i = 0; i < 2; i++)
			{
				Console.WriteLine($"Enter student {i+1} name and address: ");
				studentName[i, 0] = Console.ReadLine();
				studentName[i, 1] = Console.ReadLine();
				Console.WriteLine($"Enter marks of hindi,english and maths");
				
				studentMarks[i, 0] = Convert.ToInt32(Console.ReadLine());
				studentMarks[i, 1] = Convert.ToInt32(Console.ReadLine());
				studentMarks[i, 2] = Convert.ToInt32(Console.ReadLine());
				studentMarks[i, 3] = studentMarks[i, 0] + studentMarks[i, 1] + studentMarks[i, 2];
				if ((studentMarks[i, 3] / 3) >= 70)
				{
					studentName[i, 2] = "A";
				}
				else if ((studentMarks[i, 3] / 3) >= 50)
				{
					studentName[i, 2] = "B";
				}
				else if ((studentMarks[i, 3] / 3) >= 40)
				{
					studentName[i, 2] = "C";
				}
                else
                {
					studentName[i, 2] = "D";
                }
			}


			for (int i = 0; i < 2; i++) 
			{
				Console.WriteLine($"Student {i} data :");
                for (int j = 0; j < 3; j++)
                {
					Console.WriteLine($"{studentName[i, j]}, ");
                }
				Console.WriteLine($"");
				for (int k = 0; k < 4; k++)
				{
					Console.Write($"{studentMarks[i, k]}");
				}
				Console.WriteLine();
			}

			// Accept Age from user, if age is more than 18 eligible for vote otherwise it should be displayed as not eligible. Do it with ternary operator

			Console.WriteLine($"Now, please enter your age : ");
			int age = Convert.ToInt32(Console.ReadLine());
			String message = age >= 18 ? "You are eligible for voting" : "You are not eligible for voting";
			Console.WriteLine($"{message}");

		}
	}
}
