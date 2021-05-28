using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AmazonDemo.Models.IRepository;

namespace AmazonDemo.Models.Repository
{
    public class RepoOrder : Amazon<Order> , IOrder
    {
        public RepoOrder(AmazonContext context) : base(context)
        {

        }
    }
}
