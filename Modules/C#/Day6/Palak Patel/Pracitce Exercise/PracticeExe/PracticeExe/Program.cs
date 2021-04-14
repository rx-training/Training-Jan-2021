using System;

namespace PracticeExe
{
    class Program
    {
        static void Main(string[] args)
        {
            document doc = new document();
            doc.text = "Document text goes here";
            var blogPoster = new BlogPoster();
            var blogDelegate = new document.SendDoc(blogPoster.PostToBlog);
            doc.ReportSendingResult(blogDelegate);

            var emailSender = new EmailSender();
            var emailDelegate = new document.SendDoc(emailSender.sendEmail);
            doc.ReportSendingResult(emailDelegate);
        }
    }
}
