using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AmazonDemo.Models.IRepository;

namespace AmazonDemo.Models.Repository
{
    public class RepoSellerProduct : Amazon<SellerProduct> , ISellerProduct
    {
        public RepoSellerProduct(AmazonContext context):base(context)
        {

        }
    }
}
