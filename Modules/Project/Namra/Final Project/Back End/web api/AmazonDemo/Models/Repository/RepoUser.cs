using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AmazonDemo.Models.IRepository;

namespace AmazonDemo.Models.Repository
{
    public class RepoUser : Amazon<User> , IUser
    {
        public RepoUser( AmazonContext context ): base(context)
        {

        }
    }
}
