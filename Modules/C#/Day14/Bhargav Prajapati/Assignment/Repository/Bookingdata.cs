using Assignment.IRepository;
using Assignment.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment.Repository
{
    public class Bookingdata : IBooking
    {
        private readonly ToysComponyDBContext c1;
        public Bookingdata(ToysComponyDBContext context)
        {
            c1 = context;
        }



        void IBooking.bookingdata(string toyName, string custName)
        {
            var customerid = c1.Customers.Single(s => s.CustomerName == custName);
            var toyida = c1.Toys.Single(s => s.ToyName == toyName);
            List<ToysPerson> bookingdata = new List<ToysPerson>()
                { new ToysPerson() {CustomerId=customerid.CustomerId,ToyId=toyida.ToyId } };
            foreach (var item in bookingdata)
            {
                c1.ToysPeople.Add(item);
                c1.SaveChanges();
            }
            
        }

    }
}

