using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpicejetApi.Models.IRepositorySpicejet
{
    public interface IBookingManagerRepository:SpicejetGeneric<BookingDetail>
    {
       
       IEnumerable<BookingDetail> ViewBookingDetails(string PNRNUMBER);

        public void DeleteBooking(string PNRNUmber);
        
    }
}
