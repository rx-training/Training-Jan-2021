using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AmazonDemo.Models.IRepository;

namespace AmazonDemo.Models.Repository
{
    public class RepoProductDescription : Amazon<ProductDescription>, IProductDescription
    {
        public RepoProductDescription(AmazonContext context) : base(context)
        {

        }
    }
}
