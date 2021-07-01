using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AmazonDemo.Models.IRepository;

namespace AmazonDemo.Models.Repository
{
    public class RepoSellerDeliverable : Amazon<SellerDeliverable>, ISellerDeliverable
    {
        public RepoSellerDeliverable(AmazonContext context):base(context)
        {

        }
    }
}
