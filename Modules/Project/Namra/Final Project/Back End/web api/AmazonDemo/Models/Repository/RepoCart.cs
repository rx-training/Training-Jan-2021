using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AmazonDemo.Models.IRepository;

namespace AmazonDemo.Models.Repository
{
    public class RepoCart : Amazon<Cart>, ICart
    {
        public RepoCart(AmazonContext context) : base(context)
        {

        }
    }
}
