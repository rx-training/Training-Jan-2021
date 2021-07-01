using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AmazonDemo.Models.IRepository;

namespace AmazonDemo.Models.Repository
{
    public class RepoState :Amazon<State>, IState
    {
        public RepoState(AmazonContext context): base(context) 
        {

        }
    }
}
