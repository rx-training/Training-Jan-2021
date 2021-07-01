using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AmazonDemo.Models;
using AmazonDemo.Models.IRepository;
using Microsoft.AspNetCore.Mvc;

namespace AmazonDemo.Controllers
{

    [Route("api/[controller]/[action]")]
    [ApiController]
    public class UserAddressController : Controller
    {
        private readonly IUserAddress userAddress;
        private readonly ICity city;
        private readonly AmazonContext context;
        public UserAddressController(IUserAddress user,ICity city, AmazonContext context)
        {
            this.context = context;
            this.userAddress = user;
            this.city = city;
        }

        [HttpGet]
        public IEnumerable<UserAddress> GetAll()
        {
            return userAddress.GetAll();
        }

        [HttpGet("{UserId}")]
        public IEnumerable<UserAddress> GetAddressById(int UserId)
        {
            return userAddress.Find(s => s.UserId == UserId);
        }

        [HttpPost]
        public int Create([FromBody] UserAddress ud)
        {
            if(userAddress.Any(s=>s.UserAddressFullName == ud.UserAddressFullName && s.UserAdressContact == ud.UserAdressContact && s.UserId == ud.UserId))
            {
                return 0;
            }
            else
            {
                userAddress.Create(ud);
                return context.UserAddresses.ToList().Last().UserAddressId;
            }
        }
        [HttpPut]
        public bool Update([FromBody] UserAddress ud)
        {
            if(city.Any(s=>s.CityId == ud.UserCityId))
            {
                userAddress.Update(ud);
                return true;
            }
            else
            {
                return false;
            }
        }
        [HttpDelete("{AddressId}")]
        public bool Delete(int AddressId)
        {
            if(userAddress.Any(s=> s.UserAddressId == AddressId))
            {
                userAddress.Delete(userAddress.Find(s=>s.UserAddressId == AddressId).First());
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}
