using System;

namespace PracticeExe2
{
    class Program
    {
        static void Main(string[] args)
        {
            var theClock = new Clock();
            var visibleClock = new VisibleClock();
            visibleClock.Subscribe(theClock);
            theClock.RunClock();

            var logger = new Logger();
            logger.Subs(theClock);
            theClock.RunClock();
        }
    }
}
