using System;

namespace Day6Practice
{
    class Day6PracticeTasks
    {
        static void Main(string[] args)
        {
            Console.WriteLine("---------------------Delegates Practice--------------------------------");
            DelegatesPractice dp = new DelegatesPractice();
            dp.Text = "Document Text goes here";

            var blogPoster = new BlogPoster();
            var blogDelegate = new DelegatesPractice.SendDoc(blogPoster.PostToBlog);
            dp.ReportSendingResult(blogDelegate);

            var emailSender = new EmailSender();
            var emailDelegate = new DelegatesPractice.SendDoc(emailSender.SendEmail);
            dp.ReportSendingResult(emailDelegate);

            dp.Display();
            Console.WriteLine();
            Console.WriteLine();

            Console.WriteLine("---------------------Events Practice--------------------------------");
            EventsPractice ep = new EventsPractice();
            ep.Display();
            Console.WriteLine();
            Console.WriteLine();

            Console.WriteLine("---------------------Lambda Functions Practice--------------------------------");
            Func<int, int> square = x => x * x;
            Console.WriteLine(square(5));

            Func<int, int, bool> testForEquality = (x, y) => x == y;
            Console.WriteLine(testForEquality(4, 4));

            Func<(int, int, int), (int, int, int)> doubleThem = ns => (2 * ns.Item1, 2 * ns.Item2, 2 * ns.Item3);
            var numbers = (2, 3, 4);
            var doubledNumbers = doubleThem(numbers);
            Console.WriteLine($"The set {numbers} doubled: {doubledNumbers}");

            Func<(int n1, int n2, int n3), (int, int, int)> doubleThem1 = ns => (2 * ns.n1, 2 * ns.n2, 2 * ns.n3);
            var doubledNumbers1 = doubleThem1(numbers);
            Console.WriteLine($"The set {numbers} doubled: {doubledNumbers1}");

            Func<int, bool> equalsFive = x => x == 5;
            bool result = equalsFive(4);
            Console.WriteLine(result);   // False

        }
    }
}
