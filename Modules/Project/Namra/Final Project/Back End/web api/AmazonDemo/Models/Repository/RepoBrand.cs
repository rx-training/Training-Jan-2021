using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AmazonDemo.Models.IRepository;

namespace AmazonDemo.Models.Repository
{
    public class RepoBrand : Amazon<Brand>, IBrand
    {
        public RepoBrand(AmazonContext context):base(context)
        {

        }
    }
}
