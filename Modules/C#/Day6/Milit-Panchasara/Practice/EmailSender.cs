using System;
using System.Collections.Generic;
using System.Text;

namespace Practice
{
    public class EmailSender
    {
        private int sendResult;
        public int SendEmail()
        {
            Console.WriteLine("Sendning mail");
            sendResult = 0;
            return sendResult;
        }
    }
}
