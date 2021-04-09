using System;
//enums 
enum Days { Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday };
namespace Practice6
{
    class Program
    {
        static void Main(string[] args)
        {
        
        string s = Enum.GetName(typeof(Days), 3);
            Console.WriteLine(s);
        }
    }
}
