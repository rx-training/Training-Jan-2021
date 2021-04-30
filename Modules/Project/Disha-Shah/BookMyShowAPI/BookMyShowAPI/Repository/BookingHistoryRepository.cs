using BookMyShowAPI.IRepository;
using BookMyShowAPI.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookMyShowAPI.Repository
{
    public class BookingHistoryRepository : GenericRepository<VBookingHistory>, IBookingHistory
    {
        public BookingHistoryRepository(BookMyShowDBContext context) : base(context)
        {

        }

        public IEnumerable GetBookingHistory(string contactNo)
        {
            var bookingHistoryInfo = context.VBookingHistories.FromSqlRaw($"EXECUTE prcBookingHistoryInfo {contactNo}");

            return bookingHistoryInfo;
        }
    }
}
