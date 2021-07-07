using SpicejetWebApi.IRepository;
using SpicejetWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpicejetWebApi.Repository
{
    public class UserFlightBookingRepository : IUserFlightBookingRepository
    {
        private readonly ANGULARSPICEJETDbContext context;
        private IMailService mailService;
        public UserFlightBookingRepository(ANGULARSPICEJETDbContext context, IMailService mailService)
        {
            this.context = context;
            this.mailService = mailService;
        }
        public void DeleteBooking(int UserId)
        {
            var data = context.UserFlightBookingDetails.SingleOrDefault(s=>s.UserId==UserId);
           
            context.UserFlightBookingDetails.Remove(data);
            context.SaveChanges();
            var userEmail = "";
            userEmail = data.UserEmail;

            MailRequest request = new MailRequest();
            request.ToEmail = userEmail;
            request.Subject = $"SpicejetBooking";
            request.Body = $"<p style='color:red'> Dear,{data.UserFirstName} {data.UserMiddleName} {data.UserLastName} <br> Your Flight Has Been cancel Your Refund will be send on your Bank account And Any Quary then Contect Our Authority </p>";
            try
            {
                if (userEmail != null)
                {
                    mailService.SendEmailAsync(request);
                }
            }
            catch (Exception)
            {
                throw;
            }

        }

        public IEnumerable<UserFlightBookingDetail> GetAllBooking()
        {
            var data = context.UserFlightBookingDetails;
            return data;
        }

        public IEnumerable<UserFlightBookingDetail> GetByPnrNumber(string PnrNumber)
        {
            var data = context.UserFlightBookingDetails.Where(s=>s.PnrNumber==PnrNumber);
            return data;
        }

        public void InsertBooking(UserFlightBookingDetail bookingDetail)
        {
            context.UserFlightBookingDetails.Add(bookingDetail);
            context.SaveChanges();
            var userEmail = "";
            userEmail = bookingDetail.UserEmail;

            MailRequest request = new MailRequest();
            request.ToEmail = userEmail;
            request.Subject = $"Spicejet Booking";
            request.Body = $"<p style='color:green'> Dear,{bookingDetail.UserFirstName} {bookingDetail.UserMiddleName} {bookingDetail.UserLastName} Your Flight Booking Successfully Done  Your PNRNUMBER is :- {bookingDetail.PnrNumber}</p>";
            try
            {
                if (userEmail != null)
                {
                    mailService.SendEmailAsync(request);
                }
            }
            catch (Exception)
            {
                throw;
            }
        }

        public void UpdateBooking(UserFlightBookingDetail bookingDetail, int UserId)
        {
            var data = context.UserFlightBookingDetails.SingleOrDefault(s => s.UserId == UserId);
            data.UserFirstName = bookingDetail.UserFirstName;
            data.UserMiddleName = bookingDetail.UserMiddleName;
            data.UserLastName = bookingDetail.UserLastName;
            data.UserContactNumber = bookingDetail.UserContactNumber;
            data.UserEmail = bookingDetail.UserEmail;
            context.SaveChanges();


        }
    }
}
