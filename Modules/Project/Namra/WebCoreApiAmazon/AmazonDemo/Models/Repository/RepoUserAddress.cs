using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AmazonDemo.Models.IRepository;

namespace AmazonDemo.Models.Repository
{
    public class RepoUserAddress : Amazon<UserAddress>, IUserAddress
    {
        public RepoUserAddress(AmazonContext context) : base(context)
        {

        }
    }
}
