using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment.IRepository
{
    public interface IDeleteBooking
    {
        public void DeleteBooking(string toyname, string customername);
    }
}
