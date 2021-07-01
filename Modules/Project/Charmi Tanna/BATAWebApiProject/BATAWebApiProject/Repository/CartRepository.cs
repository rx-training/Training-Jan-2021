using BATAWebAPI.Models.IRepository;
using BATAWebApiProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BATAWebAPI.Models.Repository
{
        public class CartRepository : BATARepository<Cart>, ICart
        {
            public CartRepository(BATAContext context) : base(context)
            {

            }
        }
}
