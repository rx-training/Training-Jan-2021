using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UberAPI.Code.Interfaces;
using UberAPI.Models;

namespace UberAPI.Code.RepositoryDB
{
    public class RiderRepo : GenericRepo<Rider>, IRiderRepo
    {
        public RiderRepo(UberContext context): base(context)
        {
        }

        public VRider EditProfile(int id, VRider request)
        {
            if(id != request.RiderId)
            {
                return null;
            }    
            try
            {
                var rider = context.Riders.SingleOrDefault(x => x.RiderId == id);
                if(rider == null)
                {
                    return request;
                }

                var user = context.Riders.Include(x => x.User).Single(x => x.RiderId == id).User;
                user.Email = request.Email;
                user.NormalizedEmail = request.Email.ToUpper();
                user.UserName = request.Email;
                user.NormalizedUserName = request.Email.ToUpper();
                user.PhoneNumber = request.ContactNumber.ToString();

                rider.Email = request.Email;
                rider.FirstName = request.FirstName;
                rider.LastName = request.LastName;
                rider.ContactNumber = request.ContactNumber;
                rider.Email = request.Email;
                rider.ModifiedAt = DateTime.Now;
                request.ModifiedAt = DateTime.Now;
                context.SaveChanges();

                return request;
            }
            catch (Exception)
            {

                throw;
            }
        }

        public VRider ViewProfile(int id)
        {
            try
            {
                return context.VRiders.SingleOrDefault(x => x.RiderId == id);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public bool ValidateRider(string cred, int id)
        {
            var rider = context.Riders.SingleOrDefault(x => x.RiderId == id);
            if (rider == null || rider.UserId != cred)
            {
                return false;
            }
            return true;
        }

    }
}
