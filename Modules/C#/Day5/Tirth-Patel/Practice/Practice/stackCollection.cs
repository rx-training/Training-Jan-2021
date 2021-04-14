using System;
using System.Collections.Generic;
using System.Text;

namespace Practice
{
    class stackCollection
    {
        public stackCollection()
        {
            var myStack = new Stack<int>();
            myStack.Push(100);
            int val = myStack.Pop();
            Console.WriteLine(val);
            for (int i = 0; i < 50; i++)
            {
                myStack.Push(i + 1);
            }
            foreach (var item in myStack)
            {
                Console.Write("{0}, ", item);
            }
            var vcalue = myStack.Pop();
            Console.WriteLine("\n Poped value is :{0}", vcalue);
        }
        //Create a stack which will store Age of person and
        //    display it last in first out order.
        public stackCollection(int n)
        {
            var AgeStack = new Stack<int>();
            for (int i = 0; i < n; i++)
            {
                Console.WriteLine("enter {0}th person Age",i+1);
                AgeStack.Push(Convert.ToInt32(Console.ReadLine()));
            }
            var count = n;
            foreach (var item in AgeStack)
            { 
                Console.WriteLine("Age of Person {0} is:{1}",count,item);
                count--;
            }
        }
    }
}
