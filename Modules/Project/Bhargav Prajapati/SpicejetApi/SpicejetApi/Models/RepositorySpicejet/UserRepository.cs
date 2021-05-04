using SpicejetApi.Models.IRepositorySpicejet;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpicejetApi.Models.RepositorySpicejet
{
    public class UserRepository : SpicjetGenericClass<Userforbooking>, IUserRepository
    {   
        public UserRepository(SPICEJETContext ctx) : base(ctx)
        {
        }
    }
}
