using System;
using System.Collections.Generic;
using System.Text;

namespace Practice
{
    public class Document
    {
        public string Text { get; set; }

        public delegate int SendDoc();

        // Func delegate with ANONYMOUS FUNCTION
        public Func<int, int, int, string> calculateTotal = new Func<int, int, int, string>(delegate (int a, int b, int c)
        {
            return $"Sum of {a}, {b} and {c} is {a + b + c}";
        });

        // Func Delegate with LAMBDA FUNCTION
        public Func<int, int, string> calculateTotal2 = new Func<int, int, string>((a, b) =>
        {
            return $"Sum of {a} and {b} is {a + b}";
        });
        public void ReportSendingResult(SendDoc sendingDelegate)
        {
            var result = sendingDelegate();
            if(result == 0)
            {
                Console.WriteLine("Sucess!");
            }
            else
            {
                Console.WriteLine("Failed!");
            }
        }
    }
}
