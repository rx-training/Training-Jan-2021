using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AmazonDemo.Models.IRepository;

namespace AmazonDemo.Models.Repository
{
    public class RepoPlacedOrder : Amazon<PlacedOrder>, IPlacedOrder
    {
        public RepoPlacedOrder(AmazonContext context): base(context)
        {

        }
    }
}
