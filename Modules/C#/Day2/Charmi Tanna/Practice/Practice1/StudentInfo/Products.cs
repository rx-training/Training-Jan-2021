using System;
using System.Collections.Generic;
using System.Text;

namespace StudentInfo
{
    //Constructors
    public class Products
    {
        int id;
        string name;
        string category;
        int price;
        public Products()
        {
        }
        public Products(int id, string name)
        {
            this.id = id;
            this.name = name;
        }
        public Products(int id, string name,string category)
        {
            this.id = id;
            this.name = name;
            this.category = category;
        }
        public Products(int id, string name, string category, int price)
        {
            this.id = id;
            this.name = name;
            this.category = category;
            this.price = price;
        }
        public void display()
        {
            Console.WriteLine($"ID is:{id},Name is:{name},category is: {category},Price is: {price}");
        }
    }
}
