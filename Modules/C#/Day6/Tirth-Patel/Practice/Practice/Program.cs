using System;
using System.Collections.Specialized;
using Practice;
namespace Practice
{
    public delegate void HelloDelegate(string message);
    class Program
    {
        static void Main(string[] args)
        {
            // var tester = new MediaTester();
            // var mp3 = new Mp3Player();
            // var mp4 = new Mp4Class();
            // var mp3delegate = new MediaTester.TestMedia(mp3.PlayMP3File);
            // var mp4delegate = new MediaTester.TestMedia(mp4.PlayMP4File);
            // tester.RunTest(mp3delegate);
            // tester.RunTest(mp4delegate);
            // var obj = new MethodClass();
            // HelloDelegate Del = new HelloDelegate(Hello);
            //Del("Hello from Delgate");
            // Document Doc = new Document();
            // Doc.Text = "Text here";
            // var blogposter = new BlogPost();
            // var blogdelegete = new Document.SendDoc(blogposter.PostToBloc);
            // Doc.ReportSendingResult(blogdelegete);
            // var EmailSender = new EmailSender();
            // var EmailDelegate = new Document.SendDoc(EmailSender.SendEmail);
            // Doc.ReportSendingResult(EmailDelegate);
            //Events
            var theClock = new Clock();
            var logger = new Logger();
            var visibleClock = new VisibleClock();
            visibleClock.Subscribe(theClock);
            logger.Subscribe(theClock);
            theClock.RunClock();
            
          
            
          

        }
        public static void Hello(string message)
        {
            Console.WriteLine(message);
        }
    }
}
