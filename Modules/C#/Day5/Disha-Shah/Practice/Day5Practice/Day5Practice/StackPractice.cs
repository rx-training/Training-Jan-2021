using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;

namespace Day5Practice
{
    class StackPractice
    {
        void StackDisplay(Stack myStack)
        {

            foreach (var item in myStack)
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
            // Creates and initializes a new Stack.
            Stack myStack = new Stack();
            myStack.Push("Hello");
            myStack.Push("World");
            myStack.Push("!");
            myStack.Push("Learning");
            myStack.Push("Stack");
            myStack.Push("from");
            myStack.Push("Msdn");
            myStack.Push(",");
            myStack.Push("Stack");
            myStack.Push("follows");
            myStack.Push("LIFO");

            // Displays the properties and values of the Stack.
            Console.WriteLine($"Before myStack: ");
            Console.WriteLine($"\tCount:    {myStack.Count}");
            Console.Write("\tValues:");
            StackDisplay(myStack);

            // Pop from stack
            myStack.Pop();
            myStack.Pop();
            Console.WriteLine($"After Pop myStack: ");
            Console.WriteLine($"\tCount:    {myStack.Count}");
            Console.Write("\tValues:");
            StackDisplay(myStack);

            // Peek
            Console.WriteLine($"Peek: {myStack.Peek()}");

            // Clone stack(copy)
            Stack myNewStack = (Stack)myStack.Clone();
            Console.WriteLine($"After Clone operation on myStack to myNewStack: ");
            Console.WriteLine($"\tCount:    {myNewStack.Count}");
            Console.Write("\tValues:");
            StackDisplay(myNewStack);

            // Contains()
            Console.WriteLine($"Stack contains Learning: {myStack.Contains("Learning")}");

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

            // Copies the entire source Stack to the target Array, starting at index 6.
            myStack.CopyTo(myTargetArray, 6);

            // Displays the values of the target Array.
            ArrayDisplay(myTargetArray, ' ');

            // Copies the entire source Stack to a new standard array.
            Object[] myStandardArray = myStack.ToArray();

            // Displays the values of the new standard array.
            Console.WriteLine("The new standard array contains the following:");
            ArrayDisplay(myStandardArray, ' ');

            // GetEnumerator
            IEnumerator enumerator = myStack.GetEnumerator();
            while(enumerator.MoveNext())
            {
                Console.WriteLine(enumerator.Current);
            }

            // Synchronized
            // Creates a synchronized wrapper around the Stack.
            Stack mySyncdStack = Stack.Synchronized(myStack);

            // Displays the sychronization status of both Stacks.
            Console.WriteLine("myStack is {0}.",
               myStack.IsSynchronized ? "synchronized" : "not synchronized");
            Console.WriteLine("mySyncdStack is {0}.",
               mySyncdStack.IsSynchronized ? "synchronized" : "not synchronized");

            // Clear Stack
            myStack.Clear();
            Console.WriteLine($"After Clear myStack: ");
            Console.WriteLine($"\tCount:    {myStack.Count}");
            Console.Write("\tValues:");
            StackDisplay(myStack);
            Console.WriteLine();
            Console.WriteLine();

            // Generic Collections Practice
            Console.WriteLine("Generic Collections Practice:");
            Stack<string> numbers = new Stack<string>();
            numbers.Push("one");
            numbers.Push("two");
            numbers.Push("three");
            numbers.Push("four");
            numbers.Push("five");

            // Display
            foreach (string number in numbers)
            {
                Console.WriteLine(number);
            }

            // Pop
            Console.WriteLine($"Pop: {numbers.Pop()}");

            // Peek
            Console.WriteLine($"Peek: {numbers.Peek()}");

            // ToArray (To create copy of stack)
            Stack<string> stack2 = new Stack<string>(numbers.ToArray());

            Console.WriteLine("\nContents of the first copy:");
            foreach (string number in stack2)
            {
                Console.WriteLine(number);
            }

            // CopyTo
            string[] arr = new string[numbers.Count * 2];
            numbers.CopyTo(arr, numbers.Count);
            Stack<string> stack3 = new Stack<string>(arr);
            Console.WriteLine("Contents of second copy:");
            foreach (string number in stack3)
            {
                Console.WriteLine(number);
            }

            // Contains
            Console.WriteLine($"Stack contains 'one': {stack3.Contains("one")}");

            // GetEnumerator
            Console.WriteLine("GetEnumerator:");
            IEnumerator stackEnumerator = numbers.GetEnumerator();
            while (stackEnumerator.MoveNext())
            {
                Console.WriteLine(stackEnumerator.Current);
            }

            // TryPeek
            Console.WriteLine($"TryPeek: {stack3.TryPeek(out string result)}");

            // TryPop
            Console.WriteLine($"TryPop: {stack3.TryPop(out string result1)}");

            // Clear
            stack3.Clear();

            // Count
            Console.WriteLine($"Stack count: {stack3.Count}");

        }
    }
}
