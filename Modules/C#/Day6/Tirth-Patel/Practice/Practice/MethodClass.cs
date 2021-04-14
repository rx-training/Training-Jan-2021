using System;
using System.Collections.Generic;
using System.Text;
using static Practice.MediaTester;

namespace Practice
{
   
    class MethodClass
    {
        
        public delegate void Del(string message);
        public void Method1(string message) { }
        public void Method2(string message) { }
        public static void DelegateMethod(string message)
        {
            Console.WriteLine(message);
        }

    }
}
