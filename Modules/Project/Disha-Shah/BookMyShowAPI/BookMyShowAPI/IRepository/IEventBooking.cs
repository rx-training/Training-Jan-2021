using BookMyShowAPI.Models;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookMyShowAPI.IRepository
{
    public interface IEventBooking : IGenericInterface<EventBookingDTO>
    {
        public IEnumerable GetAllEventBookings();
        public IEnumerable GetEventBookingByContact(string contactno);
        public void BookEvent(EventBookingDTO eventBookingDTO);
    }
}
