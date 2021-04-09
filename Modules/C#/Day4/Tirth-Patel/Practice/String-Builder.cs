using System;
using System.Collections.Generic;
using System.Text;
using System.Reflection;
namespace Practice
{
    class String_Builder
    {
        public String_Builder()
        {
                        StringBuilder sb = new StringBuilder("ABC", 50);
            sb.Append(new char[] { 'D', 'E', 'F' });
            sb.AppendFormat("GHI{0}{1}",'J','K');
              Console.WriteLine("{0} chars: {1}",sb.Length,sb.ToString());
            sb.Insert(0, "Alphabets:");
            Console.WriteLine(sb);
            StringBuilder sb1 = new StringBuilder();
            Console.WriteLine(sb.GetType().GetProperties().GetValue(1));
            for (int i = 0; i < sb.Length; i++)
            {
                Console.WriteLine(sb[i]);
            }
            StringBuilder new1 = new StringBuilder("A sb object");
            string texttremove = "object";
            int pos = new1.ToString().IndexOf(texttremove);
            Console.WriteLine("orginal string :{0}",new1.ToString());
            if(pos >= 0)
            {
                new1.Remove(pos, texttremove.Length);
            }
            Console.WriteLine(new1);
            StringBuilder exm = new StringBuilder("hello this is xyz from ABC");
            string strng = exm.ToString();
            string find = "xyz";
           int indx= strng.IndexOf(find);
            string res = strng.Substring(indx,find.Length);
            Console.WriteLine("orginal string:{0} and text to find:{1}",strng,find);
            Console.WriteLine("outp[ut from search operation:{0}",res);
        }
    }
}
