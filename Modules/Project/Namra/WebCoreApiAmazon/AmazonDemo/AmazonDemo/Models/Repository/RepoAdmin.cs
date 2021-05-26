using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AmazonDemo.Models.IRepository;

namespace AmazonDemo.Models.Repository
{
    public class RepoAdmin : Amazon<Admin> , IAdmin
    {
        public RepoAdmin(AmazonContext context) : base(context)
        {

        }
    }
}
