using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AmazonDemo.Models.IRepository;

namespace AmazonDemo.Models.Repository
{
    public class RepoCategory :Amazon<Category>, ICategory
    {
        public RepoCategory(AmazonContext context) : base(context)
        {

        }
    }
}
