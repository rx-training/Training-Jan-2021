using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AmazonDemo.Models.IRepository;

namespace AmazonDemo.Models.Repository
{
    public class RepoOrder : Amazon<Order> , IOrder
    {
        private readonly AmazonContext context;
        private readonly IProduct product;
        public RepoOrder(AmazonContext context,IProduct _product) : base(context)
        {
            this.context = context;
            this.product = _product;

        }


        public string updateOrder(int id, ClassOrder cls)
        {
            if (this.Any(s => s.OrderId == id))
            {
                Order ordered = context.Orders.Where(s => s.OrderId == id).First();
                if (product.Any(s => s.ProductId == cls.ProductId))
                {
                    if (ordered.UserId == cls.UserId)
                    {
                        Product prc = product.GetById(cls.ProductId);
                        ordered.ProductId = prc.ProductId;
                        ordered.Quantity = cls.Quantity;
                        ordered.Bill = (int)(cls.Quantity * prc.ProductPrice);
                        ordered.OrderedDate = DateTime.Now;
                        context.SaveChanges();
                        return $"OrderId {ordered.OrderId} is updated with product id : {cls.ProductId}, Quantity : {cls.Quantity}, Bill : {ordered.Bill}";
                    }
                    else
                        return $"You can't update user id ...";
                }
                else
                    return $"Product which you want to update is not found...";
            }
            else
                return $"No such order is found...";
        }
    }
}
