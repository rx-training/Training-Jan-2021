using System;


namespace Practice1
{
    
    class Program
    {
        static void Main(string[] args)
        {
            //extension Method
            string str = "Xyz";
            string result = str.ChangeFirstLetterCase();
            //string result = StringHelper.ChangeFirstLetterCase(str);
            Console.WriteLine(result);
        }
    }
}
