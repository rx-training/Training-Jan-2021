using SpicejetApi.Models.IRepositorySpicejet;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpicejetApi.Models.RepositorySpicejet
{
    public class BookingManagerRepository : SpicjetGenericClass<BookingDetail>, IBookingManagerRepository
    {
        private readonly SPICEJETContext context;
        public BookingManagerRepository(SPICEJETContext ctx) : base(ctx)
        {
            context = ctx;
        }

        public void DeleteBooking(string PNRNUmber)
        {
            var data = context.Bookingmanagers.Single(s=>s.Pnrno==PNRNUmber);
            context.Bookingmanagers.Remove(data);

        }

        public IEnumerable<BookingDetail> ViewBookingDetails(string PNRNUMBER)
        {
            var data = context.BookingDetails.Where(s=>s.Pnrno==PNRNUMBER);
            return data;
        }
    }
}
