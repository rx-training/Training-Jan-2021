using System;
using System.Collections;
using System.Collections.Generic;

namespace PractceExercise2
{
   
    class Program
    {
        static void Main(string[] args)
        {
            Stack<int> PersonAge = new Stack <int>();
            PersonAge.Push(20);
            PersonAge.Push(21);
            PersonAge.Push(22);
            PersonAge.Push(23);
            PersonAge.Push(24);
            PersonAge.Push(25);
            Console.WriteLine("Persons age are:");
            foreach(var age in PersonAge)
            {
                Console.WriteLine(age);
            }
        }
    }
}
