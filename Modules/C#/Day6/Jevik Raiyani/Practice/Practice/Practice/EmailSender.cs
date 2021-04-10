using System;
using System.Collections.Generic;
using System.Text;

namespace Practice
{
    public class EmailSender
    {
        private int SendResult;
        public int SendEmail()
        {
            Console.WriteLine("Simulating sending email.....");
            SendResult = 0;
            return SendResult;
        }
    }
}
