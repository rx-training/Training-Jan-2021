using BookMyShowAPI.Models;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookMyShowAPI.IRepository
{
    public interface IMovieBooking : IGenericInterface<MovieBookingDTO>
    {
        public IEnumerable GetAllMovieBookings();
        public IEnumerable GetMovieBookingByContact(string contactno);
        public void BookMovie(MovieBookingDTO movieBookingDTO);
    }
}
