using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Linq;
namespace Practice
{
    class MediaTester
    {
        public delegate int TestMedia();
        public void RunTest(TestMedia testDelegate)
        {
            int result = testDelegate();
            if (result == 0)
            {
                Console.WriteLine("Works");
            }
            else
            {
                Console.WriteLine("Failed");
            }
        }
        public delegate void Del(string message);
        public static void DelMethod(string message)
        {
            Console.WriteLine(message);
        }
    }
}
