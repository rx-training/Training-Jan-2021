using System;

namespace Practice
{
    public delegate string Notify(); // new delegate

    class Program
    {
        public static event EventHandler Progress;
        
        static void Main(string[] args)
        {
            Document newDoc = new Document();
            newDoc.Text = "Hello there!";

            var blog = new BlogPoster();

            var blogDelegate = new Document.SendDoc(blog.PostToBlog);

            newDoc.ReportSendingResult(blogDelegate);

            var mail = new EmailSender();

            var mailDelegate = new Document.SendDoc(mail.SendEmail);

            newDoc.ReportSendingResult(mailDelegate);

            Console.WriteLine(newDoc.calculateTotal(4, 5, 7));
            Console.WriteLine(newDoc.calculateTotal2(4, 5)); // here user dont know which function this delegate will use.


            CustomEvent x = new CustomEvent();
            x.ProcessCompleted += () => { return "PROCESS HAS BEEN FINISHED"; };
            x.ProcessCompleted += SignOffString;
            x.ProcessCompleted -= SignOffString;
            x.ProcessCompleted += delegate ()
            {
                return "Bye";
            };

            Console.WriteLine(x.ShowProcessComplete());

            //clock example
            var clk = new Clock();
            var visClk = new VisibleClock();
            visClk.Subscribe(clk);
            clk.RunClock();

            

        }

        private static string SignOffString()
        {
            return "SIGNING OFF";
        }
    }

    class CustomEvent
    {
        public event Notify ProcessCompleted; // event with type of delegate

        public string ShowProcessComplete()
        {
            Console.WriteLine("Inside ShowProcessComplete before invoking event");
            return ProcessCompleted?.Invoke(); // will invoke when function is called
        }
    }
}
