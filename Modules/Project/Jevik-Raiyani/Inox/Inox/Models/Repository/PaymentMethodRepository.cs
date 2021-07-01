using Inox.Models.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Inox.Models.Repository
{
    public class PaymentMethodRepository : GenericRepository<PaymentMethod>, IPaymentMethod
    {
        public PaymentMethodRepository(inoxContext context) : base(context)
        {

        }
    }
}