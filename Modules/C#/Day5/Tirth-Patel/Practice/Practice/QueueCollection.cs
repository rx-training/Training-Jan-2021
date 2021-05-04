using System;
using System.Collections.Generic;
using System.Text;

namespace Practice
{
    class QueueCollection
    {
        public QueueCollection()
        {
            var myQueue = new Queue<int>();
            myQueue.Enqueue(100);
            int val = myQueue.Dequeue();
            Console.WriteLine(val);
            for (int i = 0; i < 50; i++)
            {
                myQueue.Enqueue(i+1);
            }
            foreach (var item in myQueue)
            {
                Console.Write("{0}, ",item);
            }
            var vcalue = myQueue.Dequeue();
            Console.WriteLine("\n dequeud value is :{0}",vcalue);
        }

    }
}
