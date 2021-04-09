using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;

namespace Day5Practice
{
    class QueuePractice
    {
        void QueueDisplay(Queue myQueue)
        {
            foreach (var item in myQueue)
            {
                Console.Write($"{item}   ");
            }
            Console.WriteLine();
        }

        void ArrayDisplay(Array myArray, char mySeparator)
        {

            foreach (var item in myArray)
            {
                Console.Write($"{mySeparator}{item}");
            }
            Console.WriteLine();
        }

        public void Display()
        {
            // Creates and initializes a new Queue.
            Queue myQueue = new Queue();
            myQueue.Enqueue("Hello");
            myQueue.Enqueue("World");
            myQueue.Enqueue("!");
            myQueue.Enqueue("Learning");
            myQueue.Enqueue("Queue");
            myQueue.Enqueue("from");
            myQueue.Enqueue("msdn");

            // Displays the properties and values of the Queue.
            Console.WriteLine("Before myQueue:");
            Console.WriteLine("\tCount:    {0}", myQueue.Count);
            Console.Write("\tValues:");
            QueueDisplay(myQueue);

            // Dequeue
            myQueue.Dequeue();
            myQueue.Dequeue();
            myQueue.Dequeue();
            Console.WriteLine("After Dequeue myQueue:");
            Console.WriteLine("\tCount:    {0}", myQueue.Count);
            Console.Write("\tValues:");
            QueueDisplay(myQueue);

            // Peek
            Console.WriteLine($"Peek: {myQueue.Peek()}");

            // Clone queue(copy)
            Queue myNewQueue = (Queue)myQueue.Clone();
            Console.WriteLine($"After Clone operation on myQueue to myNewQueue: ");
            Console.WriteLine($"\tCount:    {myNewQueue.Count}");
            Console.Write("\tValues:");
            QueueDisplay(myNewQueue);

            // Contains()
            Console.WriteLine($"Queue contains Learning: {myQueue.Contains("Learning")}");

            // CopyTo()
            // Creates and initializes the one-dimensional target Array.
            Array myTargetArray = Array.CreateInstance(typeof(String), 15);
            myTargetArray.SetValue("The", 0);
            myTargetArray.SetValue("quick", 1);
            myTargetArray.SetValue("brown", 2);
            myTargetArray.SetValue("fox", 3);
            myTargetArray.SetValue("jumps", 4);
            myTargetArray.SetValue("over", 5);
            myTargetArray.SetValue("the", 6);
            myTargetArray.SetValue("lazy", 7);
            myTargetArray.SetValue("dog", 8);

            // Displays the values of the target Array.
            Console.WriteLine("The target Array contains the following (before and after copying):");
            ArrayDisplay(myTargetArray, ' ');

            // Copies the entire source Queue to the target Array, starting at index 6.
            myQueue.CopyTo(myTargetArray, 6);

            // Displays the values of the target Array.
            ArrayDisplay(myTargetArray, ' ');

            // Copies the entire source Queue to a new standard array.
            Object[] myStandardArray = myQueue.ToArray();

            // Displays the values of the new standard array.
            Console.WriteLine("The new standard array contains the following:");
            ArrayDisplay(myStandardArray, ' ');

            // GetEnumerator
            IEnumerator enumerator = myQueue.GetEnumerator();
            while (enumerator.MoveNext())
            {
                Console.WriteLine(enumerator.Current);
            }

            // Synchronized
            // Creates a synchronized wrapper around the Queue.
            Queue mySyncdQueue = Queue.Synchronized(myQueue);

            // Displays the sychronization status of both Queue.
            Console.WriteLine("myQueue is {0}.",
               myQueue.IsSynchronized ? "synchronized" : "not synchronized");
            Console.WriteLine("mySyncdQueue is {0}.",
               mySyncdQueue.IsSynchronized ? "synchronized" : "not synchronized");

            // Clear
            myQueue.Clear();
            Console.WriteLine("After Clear myQueue:");
            Console.WriteLine("\tCount:    {0}", myQueue.Count);
            Console.Write("\tValues: ");
            QueueDisplay(myQueue);


            // Generic Collections Practice
            Console.WriteLine("Generic Collections Practice:");
            Queue<string> numbers = new Queue<string>();
            numbers.Enqueue("one");
            numbers.Enqueue("two");
            numbers.Enqueue("three");
            numbers.Enqueue("four");
            numbers.Enqueue("five");

            // Display
            foreach (string number in numbers)
            {
                Console.WriteLine(number);
            }

            // Pop
            Console.WriteLine($"Dequeue: {numbers.Dequeue()}");

            // Peek
            Console.WriteLine($"Peek: {numbers.Peek()}");

            // ToArray (To create copy of stack)
            Queue<string> queue2 = new Queue<string>(numbers.ToArray());

            Console.WriteLine("\nContents of the first copy:");
            foreach (string number in queue2)
            {
                Console.WriteLine(number);
            }

            // CopyTo
            string[] arr = new string[numbers.Count * 2];
            numbers.CopyTo(arr, numbers.Count);
            Queue<string> queue3 = new Queue<string>(arr);
            Console.WriteLine("Contents of second copy:");
            foreach (string number in queue3)
            {
                Console.WriteLine(number);
            }

            // Contains
            Console.WriteLine($"Queue contains 'one': {queue3.Contains("one")}");

            // GetEnumerator
            Console.WriteLine("GetEnumerator:");
            IEnumerator queueEnumerator = numbers.GetEnumerator();
            while (queueEnumerator.MoveNext())
            {
                Console.WriteLine(queueEnumerator.Current);
            }

            // TryPeek
            Console.WriteLine($"TryPeek: {queue3.TryPeek(out string result)}");

            // TryDequeue
            Console.WriteLine($"TryPop: {queue3.TryDequeue(out string result1)}");

            // Clear
            queue3.Clear();

            // Count
            Console.WriteLine($"Stack count: {queue3.Count}");

        }
    }
}
