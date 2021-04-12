using System;
using System.Collections.Generic;
using System.Linq;
//Delegate
public delegate void helloDelegate(string message);
public delegate void Notify();

namespace Practice1
{
    public class ProcessBusinessLogic
    {
        //event
        public event Notify ProcessCompleted;
        public void StartProcess()
        {
            Console.WriteLine("Process Started!");
            OnProcessCompleted();
        }

        protected virtual void OnProcessCompleted()
        {
            ProcessCompleted?.Invoke();
        }

    }


    public class Employee
    {
        public delegate int DelegateMethod();
        public event DelegateMethod Event1;
        
        public void Method()
        {
            Event1();
        }
    }
    class Program
    {
        delegate double CalAreaPointer(int r);

        public static void hello(string str)
        {
            Console.WriteLine(str);
        }
        static void Main(string[] args)
        {
            helloDelegate h = new helloDelegate(hello);
            h("This is Delegate");
            Console.WriteLine("Enter a number:");
            int i = Convert.ToInt32(Console.ReadLine());
            Employee emp = new Employee();
            ProcessBusinessLogic bl = new ProcessBusinessLogic();
            bl.ProcessCompleted += bl_ProcessCompleted; // register with an event
            bl.StartProcess();
            //Lambda Expression
            CalAreaPointer Cpointer = r => 3.14 * r * r;
            Func<Double, Double> FPointer = r => 3.14 * r * r;
            double Area = Cpointer(20);
            Console.WriteLine(Cpointer);
        }
        public static void bl_ProcessCompleted()
        {
            Console.WriteLine("Process Completed!");
        }
    }
}
