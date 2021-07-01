using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AmazonDemo.Models.IRepository;

namespace AmazonDemo.Models.Repository
{
    public class RepoPlacedProductDetail : Amazon<PlacedProductDetail>, IPlacedProductDetail
    {
        public RepoPlacedProductDetail(AmazonContext context) : base(context)
        {
                
        }
    }
}
