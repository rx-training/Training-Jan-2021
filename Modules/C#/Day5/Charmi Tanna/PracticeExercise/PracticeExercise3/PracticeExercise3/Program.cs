using System;
using System.Collections.Generic;

namespace PracticeExercise3
{
    public class Products
    {
        public string ProductItem { get; set; }
        public int ProductPrice { get; set; }
    }
    class Program
    {
        static void Main(string[] args)
        {
            Products Product1 = new Products()
            {
                ProductItem = "Pencil",
                ProductPrice = 10
            };
            Products Product2 = new Products()
            {
                ProductItem = "Pen",
                ProductPrice = 100
            };
            Products Product3 = new Products()
            {
                ProductItem = "Notebook",
                ProductPrice = 200
            };
            Dictionary <string, Products> DictionaryProducts = new Dictionary<string, Products>();
            DictionaryProducts.Add(Product1.ProductItem, Product1);
            DictionaryProducts.Add(Product2.ProductItem, Product2);
            DictionaryProducts.Add(Product3.ProductItem, Product3);
            foreach(KeyValuePair<string,Products> ProductkeyValuePair in DictionaryProducts)
            {
                Console.WriteLine($"Product Key is:{ProductkeyValuePair.Key}");
                Products product = ProductkeyValuePair.Value;
                Console.WriteLine($"Product Item is : {product.ProductItem} , ProductPrice is : {product.ProductPrice}");                
            }
            Console.WriteLine("Enter Product Item You want to search:");
            string item = Console.ReadLine();
            foreach (KeyValuePair<string, Products> ProductkeyValuePair in DictionaryProducts)
            {
                Products product = ProductkeyValuePair.Value;
                if (item == product.ProductItem)
                {
                    Console.WriteLine($"Product item : {product.ProductItem} is found and price of it is : {product.ProductPrice}");
                }
            }
        }
    }
}
