using System;
using System.Collections.Generic;
using System.Text;

namespace Practice
{
 


    class Tester
    {
        public void Mehod1()
        {
            Console.WriteLine("method1 begins");
                Method2();
            Console.WriteLine("Method1 ends");
        }
        public void Method2()
        {
            Console.WriteLine("method 2 begins");
            Console.WriteLine("File opened");
           
            try
            {
               
                int c = 0;
                if (c == 0)
                {
                    throw new MyCustomeException("cant divide by zero");
                }

            }
            catch (MyCustomeException ce)
            {
                Console.WriteLine(ce.Message);
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                
            }
           
            finally
            {
                Console.WriteLine("file closed");
            }
            Console.WriteLine("file closed");
            Console.WriteLine("method2 ends");
        }
    }
    public class MyCustomeException : Exception
    {
        public MyCustomeException(string message) : base(message)
        {

        }
    }

}
