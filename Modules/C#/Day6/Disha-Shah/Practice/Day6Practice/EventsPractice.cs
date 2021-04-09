using System;
using System.Collections.Generic;
using System.Text;

namespace Day6Practice
{
    public class ProcessEventArgs : EventArgs
    {
        public bool IsSuccessful { get; set; }
        public DateTime CompletionTime { get; set; }
    }

    public delegate void Notify();  // delegate

    public class ProcessBusinessLogic // Publisher Class
    {
        public event Notify ProcessCompleted; // event

        public void StartProcess()
        {
            Console.WriteLine("Process Started!");
            // some code here..
            OnProcessCompleted();
        }

        protected virtual void OnProcessCompleted() //protected virtual method
        {
            //if ProcessCompleted is not null then call delegate
            ProcessCompleted?.Invoke();
        }

        // declaring an event using built-in EventHandler
        public event EventHandler ProcessCompleted1;

        public void StartProcess1()
        {
            Console.WriteLine("Process Started!");
            // some code here..
            OnProcessCompleted(EventArgs.Empty); //No event data
        }

        protected virtual void OnProcessCompleted(EventArgs e)
        {
            ProcessCompleted1?.Invoke(this, e);
        }

        // declaring an event using built-in EventHandler
        public event EventHandler<bool> ProcessCompleted2;

        public void StartProcess2()
        {
            try
            {
                Console.WriteLine("Process Started!");

                // some code here..

                OnProcessCompleted2(true);
            }
            catch (Exception ex)
            {
                OnProcessCompleted2(false);
            }
        }

        protected virtual void OnProcessCompleted2(bool IsSuccessful)
        {
            ProcessCompleted2?.Invoke(this, IsSuccessful);
        }

        // declaring an event using built-in EventHandler
        public event EventHandler<ProcessEventArgs> ProcessCompleted3;

        public void StartProcess3()
        {
            var data = new ProcessEventArgs();

            try
            {
                Console.WriteLine("Process Started!");

                // some code here..

                data.IsSuccessful = true;
                data.CompletionTime = DateTime.Now;
                OnProcessCompleted3(data);
            }
            catch (Exception ex)
            {
                data.IsSuccessful = false;
                data.CompletionTime = DateTime.Now;
                OnProcessCompleted3(data);
            }
        }

        protected virtual void OnProcessCompleted3(ProcessEventArgs e)
        {
            ProcessCompleted3?.Invoke(this, e);
        }
    }

    class EventsPractice
    {
        // event handler
        public static void bl_ProcessCompleted()
        {
            Console.WriteLine("Process Completed!");
        }

        // event handler
        public static void bl_ProcessCompleted(object sender, EventArgs e)
        {
            Console.WriteLine("Process Completed!");
        }

        // event handler
        public static void bl_ProcessCompleted(object sender, bool IsSuccessful)
        {
            Console.WriteLine("Process " + (IsSuccessful ? "Completed Successfully" : "failed"));
        }

        // event handler
        public static void bl_ProcessCompleted1(object sender, ProcessEventArgs e)
        {
            Console.WriteLine("Process " + (e.IsSuccessful ? "Completed Successfully" : "failed"));
            Console.WriteLine("Completion Time: " + e.CompletionTime.ToLongDateString());
        }

        public void Display()
        {

            // Practice from video of drive
            //var theClock = new Clock();
            //var visibleClock = new VisibleClock();
            //visibleClock.Subscribe(theClock);
            ////theClock.RunClock();

            //var logger = new Logger();
            //logger.Subscribe(theClock);
            //theClock.RunClock();

            Console.WriteLine();
            Console.WriteLine();
            // Practice from msdn
            Console.WriteLine();
            Console.WriteLine("Declare an Event");
            ProcessBusinessLogic bl = new ProcessBusinessLogic();
            bl.ProcessCompleted += bl_ProcessCompleted; // register with an event
            bl.StartProcess();

            Console.WriteLine();
            Console.WriteLine("Built in Event Handler");
            ProcessBusinessLogic b2 = new ProcessBusinessLogic();
            b2.ProcessCompleted1 += bl_ProcessCompleted; // register with an event
            b2.StartProcess1();

            Console.WriteLine();
            Console.WriteLine("Passing an Event data");
            ProcessBusinessLogic b3 = new ProcessBusinessLogic();
            b3.ProcessCompleted2 += bl_ProcessCompleted; // register with an event
            b3.StartProcess2();

            Console.WriteLine();
            Console.WriteLine("Passing Custom EventArgs");
            ProcessBusinessLogic b4 = new ProcessBusinessLogic();
            b4.ProcessCompleted3 += bl_ProcessCompleted1; // register with an event
            b4.StartProcess3();
        }
    }
}
