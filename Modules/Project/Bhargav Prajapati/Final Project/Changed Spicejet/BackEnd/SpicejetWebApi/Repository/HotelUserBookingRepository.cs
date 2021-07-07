using SpicejetWebApi.IRepository;
using SpicejetWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpicejetWebApi.Repository
{
    public class HotelUserBookingRepository : IHotelUserBookingRepository
    {
        private readonly ANGULARSPICEJETDbContext context;
        private IMailService mailService;
        public HotelUserBookingRepository(ANGULARSPICEJETDbContext context, IMailService mailService)
        {
            this.context = context;
            this.mailService = mailService;
        }
        public void DeleteUser(int UserId)
        {
            var data = context.UserHotelBookingDetails.SingleOrDefault(s=>s.UserId==UserId);
            context.UserHotelBookingDetails.Remove(data);
            context.SaveChanges();


            var userEmail = "";
            userEmail = data.UserEmailAddress;

            MailRequest request = new MailRequest();
            request.ToEmail = userEmail;
            request.Subject = $"Spicejet Hotel Booking";
            request.Body = $"<p style='color:green'> Dear,{data.UserFirstName} {data.UserMiddleName} {data.UserLastName} <br> Your Hotel Booking Has Been Cancel   Your Refund will be send on your Bank account And Any Quary then Contect Our Authority</p>";
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

        public IEnumerable<UserHotelBookingDetail> GetAllBooking()
        {
            var data = context.UserHotelBookingDetails;
            return data;
        }

        public UserHotelBookingDetail GetAllUserByConformationNumber(string ConformationNumber)
        {
            var data = context.UserHotelBookingDetails.SingleOrDefault(s => s.UserConformationNumber==ConformationNumber);
            return data;
        }

        public void InsertUser(UserHotelBookingDetail userHotel)
        {
            context.UserHotelBookingDetails.Add(userHotel);
            context.SaveChanges();
            var userEmail = "";
            userEmail = userHotel.UserEmailAddress;

            MailRequest request = new MailRequest();
            request.ToEmail = userEmail;
            request.Subject = $"Spicejet Hotel Booking";
            request.Body = $"<p style='color:green'> Dear,{userHotel.UserFirstName} {userHotel.UserMiddleName} {userHotel.UserLastName} <br> Your Hotel Booking Successfully Done <br> Your Conformation Number is :- {userHotel.UserConformationNumber}</p>";
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

        public void UpdateUser(int UserId, UserHotelBookingDetail userHotel)
        {
            var data = context.UserHotelBookingDetails.SingleOrDefault(s => s.UserId == UserId);
            data.UserFirstName = userHotel.UserFirstName;
            data.UserMiddleName = userHotel.UserMiddleName;
            data.UserLastName = userHotel.UserLastName;
            data.UserContactNumber = userHotel.UserContactNumber;
            data.UserEmailAddress = userHotel.UserEmailAddress;
            data.NumberOfGuest = userHotel.NumberOfGuest;
            context.SaveChanges();
        }
    }
}
