using SpicejetApi.Models.IRepositoryHotel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpicejetApi.Models.RepositoryHotel
{
    public class PaymentRepository : HotelGenericRepository<Payment>, IPaymentRepository
    {
        public PaymentRepository(SPICEJETContext context) : base(context)
        {
        }
    }
}
