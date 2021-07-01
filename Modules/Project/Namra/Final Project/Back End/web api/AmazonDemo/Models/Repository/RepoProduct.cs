using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AmazonDemo.Models.IRepository;

namespace AmazonDemo.Models.Repository
{
    public class RepoProduct : Amazon<Product>, IProduct
    {
        public RepoProduct(AmazonContext context) : base(context)
        {

        }
    }
}
