using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AmazonDemo.Models.IRepository;

namespace AmazonDemo.Models.Repository
{
    public class RepoSeller : Amazon<Seller>, ISeller 
    {
        public RepoSeller(AmazonContext context) : base(context)
        {

        }
    }
}
