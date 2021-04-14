using System;
using System.Collections.Generic;
using System.Text;

namespace PracticeExe
{
    class Maps
    {
        public int Price;
        public string Item;
        public Maps(string item, int price)
        {
            this.Item = item;
            this.Price = price;
        }

        public override string ToString()
        {
            return $"{Item}\t\t{Price}INR";
        }
    }
}
