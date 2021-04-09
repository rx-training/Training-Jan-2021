using System;
using System.Collections.Generic;
using System.Text;

namespace OOP
{
    class WareHouse
    {
        public int ID { get; set; }
        public string WarehouseName { get; set; }
        public WareHouse(string Name, int ID)
        {
            WarehouseName = Name;
            this.ID = ID;
        }
        public Item FindAndReturnItem(int itemID)
        {
            Item returnItem = new Item() { ID = itemID, name = "microsoft office" };
            return returnItem;
        }
    }
}