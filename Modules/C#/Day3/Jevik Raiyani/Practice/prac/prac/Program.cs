using System;
using System.Collections.Generic;

namespace prac
{
    
    class Program
    {
        static void Main(string[] args)
        {
            var myDoc = new Document();
            myDoc.Print();
            myDoc.CountCharacters();
            //can not make
            // Printable mySecondDoc = new Printable();

            Printable printabelItem = myDoc;
            printabelItem.Print();
            //printabelItem.CountCharacters();

            Document theDoc = printabelItem as Document;
            if (theDoc != null)
                theDoc.CountCharacters();

            string contents = theDoc.Read();
            Console.WriteLine("contents:" + contents);


            //----------------------
            //Employees jevik = new Employees("jevik raiyani", "26/11 Bhojarajpara", "Gondal", "GJ", "360311");
            //Console.WriteLine(jevik.ToString());

            //jevik.Insurence = new InsurenceInfo() { PolicyName = "Life", PolicyId = "12" };
            //Console.WriteLine(jevik.ToString());

            //Manager dave = new Manager("dave jones", "2 bhojapra", "Gondal", "GJ", "12");
            //Console.WriteLine(dave);

            //Console.WriteLine(jevik.Dowork());
            //Console.WriteLine(dave.Dowork("Programming"));

            //Employees pratik = new Manager("pratik usadadiya", "kamrej", "surat", "Gj", "1",75000);
            //Console.WriteLine(pratik);
            //Console.WriteLine("Pratik do work: " + pratik.Dowork("Programming"));

            //Console.WriteLine("======");

            //List<Employees> emp = new List<Employees>();
            //emp.Add(jevik);
            //emp.Add(dave);
            //emp.Add(pratik);

            //foreach (Employees i in emp)
            //{
            //    Console.WriteLine(i.Dowork());
            //}
            //--------------------
            //Rectangle rec = new Rectangle(5,10);
            //Console.WriteLine(rec.GetArea());

            //object o = new Rectangle(10, 20);
            //Console.WriteLine(o);
            //Rectangle r = (Rectangle)o;
            //Console.WriteLine(r.length+" "+ r.width);    

        }
    }
}
