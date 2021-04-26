using System;
using System.Collections;
using System.Collections.Generic;

namespace Day5PracticeExercise
{
    class Day5Exercise
    {
        class ExceptionName : Exception
        {
            public ExceptionName()
            {
                    
            }
            public ExceptionName(string ex):base(ex)
            {
                    
            }
            public int FindName(List<string> names, string Name)
            {
                for(int i = 0; i < names.Count; i++)
                {
                    if(Name == names[i])
                    {
                        return i;
                    }
                }
                throw new ExceptionName("Name is not in the list");
            }
        }
        class ExceptionProduct : Exception
        {
            public ExceptionProduct()
            {

            }
            public ExceptionProduct(string ex) : base(ex)
            {

            }
            public void validatePrice(int price)
            {
                if(price <= 0)
                {
                    throw new ExceptionProduct("price should be greater than zero");
                }
            }

            public void ValidateProduct(IDictionary<string, int> products, string productName)
            {
                foreach (KeyValuePair<string, int> kvp in products)
                {
                    if (kvp.Key == productName)
                    {
                        throw new ExceptionProduct($"product is already added...");
                    }
                }
            }
            public bool FindProduct(IDictionary<string, int> products, string productName)
            {
                foreach(KeyValuePair<string, int> kvp in products)
                {
                    if(kvp.Key == productName)
                    {
                        return true;
                    }
                }
                throw new ExceptionProduct($"product is not found");
            }
        }
        static void Main(string[] args)
        {
            //1. Create a list which will store 5 student names and then display it search it index number
            try
            {
                var Names = new List<string>();
                Names.Capacity = 5;
                ExceptionName en = new ExceptionName();

                for (int i = 0; i < Names.Capacity; i++)
                {
                    Console.WriteLine($"Enter {i + 1} name :");
                    Names.Add(Console.ReadLine());
                }
                Console.WriteLine($"-------------------------------------------------------------------------------------------------------------");
                Console.WriteLine($"Enter a name which you want to search : ");
                string name = Console.ReadLine();
                int index = en.FindName(Names, name);
                Console.WriteLine($"Name {name} is at {index}");
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }

            Stack ages = new Stack();
            bool newAge = true;
            while(newAge == true)
            {
                Console.WriteLine($"-------------------------------------------------------------------------------------------------------------");
                Console.WriteLine($"Enter a age");
                ages.Push(Convert.ToInt32(Console.ReadLine()));
                Console.WriteLine($"Enter true to enter another age or false to exit");
                newAge = Convert.ToBoolean(Console.ReadLine());
            }
            Console.WriteLine($"-------------------------------------------------------------------------------------------------------------");
            Console.WriteLine($"Printing ages in last in first out order");
            for (int i = 0; i <= ages.Count - 1; i++)
            {
                Console.WriteLine($"{ages.ToArray()[i]}");
            }
            // Store a product information in map object. Key will be a product item and value will be the price of that product. 
            //Search the product by product name.
            ExceptionProduct ep = new ExceptionProduct();
            IDictionary<string, int> products = new Dictionary<string, int>();

            try
            {
                bool newProduct = true;
                while (newProduct == true)
                {
                    Console.WriteLine($"-------------------------------------------------------------------------------------------------------------");
                    Console.WriteLine($"Do you want to add a product?Enter 'yes' or 'no'");
                    string flag = Console.ReadLine();
                    if (flag.ToLower() == "yes")
                    {
                        newProduct = true;
                        Console.WriteLine($"Enter product name and price respectively:");
                        string productName = Console.ReadLine();
                        ep.ValidateProduct(products, productName);
                        int price = Convert.ToInt32(Console.ReadLine());
                        ep.validatePrice(price);
                        products.Add(productName, price);
                    }
                    else
                    {
                        newProduct = false;
                    }
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }
            try 
            { 
            Console.WriteLine($"-------------------------------------------------------------------------------------------------------------");
                Console.WriteLine($"Enter product name to find it out...");
                string ProductName = Console.ReadLine();
                bool flagProduct = ep.FindProduct(products, ProductName);
                if(flagProduct == true)
                {
                    Console.WriteLine($"product is founded successfully..");
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }
        }
    }
}
