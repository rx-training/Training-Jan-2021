using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AmazonDemo.Models.IRepository;

namespace AmazonDemo.Models.Repository
{
    public class RepoOrderTable : Amazon<OrderTable> , IOrderTable
    {
        public RepoOrderTable(AmazonContext context) : base(context)
        {
            
        }
    }
}
