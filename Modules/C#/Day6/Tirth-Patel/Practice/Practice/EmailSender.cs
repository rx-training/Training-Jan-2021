using System;
using System.Collections.Generic;
using System.Text;

namespace Practice
{
   public  class EmailSender
    {
        private int SendResult;
        public int SendEmail()
        {
            Console.WriteLine("Sending Email");
            SendResult = 0;
            return SendResult;
        }
    }
}
