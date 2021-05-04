using Assignment.IRepository;
using Assignment.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment.Repository
{
    

    public class DeleteBooking : IDeleteBooking
    {
        private readonly ToysComponyDBContext context;
        public DeleteBooking(ToysComponyDBContext ctx)
        {
            context = ctx;
        }
        void IDeleteBooking.DeleteBooking(string toyname,string customername)
        {
            var custid =context.ToysPeople.Include(s => s.Toy).Include(s => s.Customer).SingleOrDefault
                (s => s.Customer.CustomerName == customername && s.Toy.ToyName == toyname);

            if (custid != null)
            {
                context.ToysPeople.Remove(custid);
                context.SaveChanges();
            }
            else
            {
                throw new Exception("Data is not Found");
            }

        }
    }
}
