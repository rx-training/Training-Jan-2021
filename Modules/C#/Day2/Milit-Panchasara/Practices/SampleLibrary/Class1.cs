using System;

namespace SampleLibrary
{
    public class SampleData
    {
        private static int accountNumberSeed = 1234567890;

        public void GetData()
        {
            Console.WriteLine($"Library has been called and private static variable is {accountNumberSeed}");
            accountNumberSeed++;
        }
    }
}
