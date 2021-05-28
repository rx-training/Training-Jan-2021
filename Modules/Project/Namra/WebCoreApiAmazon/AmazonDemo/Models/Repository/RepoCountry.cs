using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AmazonDemo.Models.IRepository;

namespace AmazonDemo.Models.Repository
{
    public class RepoCountry :Amazon<Country>, ICountry
    {
        public RepoCountry(AmazonContext context): base(context)
        {

        }
    }
}
