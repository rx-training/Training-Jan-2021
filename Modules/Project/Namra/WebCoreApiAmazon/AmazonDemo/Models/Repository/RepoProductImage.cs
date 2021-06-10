using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AmazonDemo.Models.IRepository;

namespace AmazonDemo.Models.Repository
{
    public class RepoProductImage : Amazon<ProductImage>, IProductImage
    {
        public RepoProductImage(AmazonContext context) : base(context)
        {

        }
    }
}
