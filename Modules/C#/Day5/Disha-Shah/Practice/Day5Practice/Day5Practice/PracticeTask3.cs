using System;
using System.Collections.Generic;
using System.Text;

namespace Day5Practice
{
    class Product
    {
        public string Name { get; set; }

        public int Price { get; set; }

        public override string ToString()
        {
            return "Name:" + Name + "is of Rs." + Price;
        }

    }

    class PracticeTask3
    {
        Dictionary<string, int> productinfo = new Dictionary<string, int>();

        public void AddProduct()
        {
            Console.WriteLine("Enter product name:");
            string name = Console.ReadLine();
            Console.WriteLine("Enter product price:");
            int price = Convert.ToInt32(Console.ReadLine());
            try
            {
                validateName(name);
                validatePrice(price);
                if (!productinfo.ContainsKey(name))
                {
                    productinfo.Add(name, price);
                    Console.WriteLine($"Value added for key = \"{name}\": {productinfo[name]}");
                }

            }
            catch(FormatException e)
            {
                Console.WriteLine(e.Message);
            }
            catch(IndexOutOfRangeException e)
            {
                Console.WriteLine(e.Message);
            }
            catch(Exception e)
            {
                Console.WriteLine(e.Message);
            }


        }

        public void DisplayProduct()
        {
            Console.WriteLine();
            Console.WriteLine("Product Details:");
            foreach (KeyValuePair<string, int> kvp in productinfo)
            {
                Console.WriteLine("Key = {0}, Value = {1}",
                    kvp.Key, kvp.Value);
            }

        }

        public void SearchProduct()
        {
            Console.WriteLine("Enter product name to search:");
            string prodName = Console.ReadLine();

            if (!productinfo.ContainsKey(prodName))
            {
                Console.WriteLine($"Product = \"{prodName}\", value = {productinfo[prodName]}.");
            }
            else
            {
                Console.WriteLine("Product not found!");
            }
        }

        void validateName(string name)
        {
            if (String.IsNullOrWhiteSpace(name))
            {
                throw new FormatException("Name can not be an empty value");
            }
            else
            {
                for (int i = 0; i < name.Length; i++)
                {
                    if (!char.IsLetter(name[i]) && !char.IsWhiteSpace(name[i]))
                    {
                        throw new FormatException("Name can only contain alphabetic characters");
                    }
                }
            }
        }

        void validatePrice(int price)
        {
            if(price<0)
            {
                throw new IndexOutOfRangeException("price can not be less than or equal to 0");
            }
        }

    }
}
