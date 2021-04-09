using System;
using System.Collections.Generic;
using System.Text;

namespace prac
{
    public class Document : Printable,Storeable
    {
       
        string DocName { get; set; }
        public void CountCharacters()
        {
            Console.WriteLine("5,426 characters");
        }

        public void Print()
        {
            Console.WriteLine("Writing document to printer...");
        }

        public string Read()
        {
            Console.WriteLine("Geeting Document from File..");
            return "abc";
        }

        public void Write()
        {
            Console.WriteLine("Writing Document to File..");
        }

        public int Status
        {
            get
            {
                return 0;
            }
        }

    }
}
