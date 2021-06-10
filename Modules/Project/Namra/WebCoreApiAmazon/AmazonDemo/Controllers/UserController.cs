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
    public class UserController : Controller
    {
        private readonly IUser user;
        private readonly AmazonContext context;
        public UserController(IUser user,AmazonContext context)
        {
            this.user = user;
            this.context = context;
        }

        [HttpGet]
        public IEnumerable<User> GetAll()
        {
            return user.GetAll();
        }

        [HttpGet("{UserId}")]
        public User GetById(int UserId)
        {
            return user.GetById(UserId);
        }

        [HttpGet("{UserId}")]
        public bool Any(int UserId)
        {
            return user.Any(s => s.UserId == UserId);
        }

        [HttpGet("{FirstName}/{LastName}")]
        public IEnumerable<User> GetUserByName(string FirstName, string LastName)
        {
            return user.Find(s => s.UserFirstName.Contains(FirstName) && s.UserLastName.Contains(LastName));
        }
        

        [HttpGet("{LogInId}")]
        public User GetByUserLogin(string LogInId)
        {
                return user.Find(s => s.UserLogIn == LogInId).First();
            
        }

        [HttpPost]
        public int Create([FromBody] User addUser)
        {
            if(user.Any(s=>s.UserContactNo == addUser.UserContactNo || s.UserEmail == addUser.UserEmail))
            {
                return 0;
            }
            else
            {
                user.Create(addUser);
                int ID = context.Users.ToList().Last().UserId;
                return ID;
            }
        }

        [HttpPut]
        public bool Update([FromBody]User UpdateUser)
        {
            if(user.Any(s=>s.UserContactNo == UpdateUser.UserContactNo))
            {
                User ur = user.Find(s=> s.UserContactNo==UpdateUser.UserContactNo).First();
                if(ur.UserId == UpdateUser.UserId)
                {
                    user.Update(UpdateUser);
                    return true;
                }
                else
                {
                    return false;
                }
            }
            else if(user.Any(s=>s.UserEmail == UpdateUser.UserEmail))
            {
                User ur = user.Find(s => s.UserEmail == UpdateUser.UserEmail).First();
                if(ur.UserId == UpdateUser.UserId)
                {
                    user.Update(UpdateUser);
                    return true;
                }
                else
                {
                    return false;
                }
            }
            else
            {
                user.Update(UpdateUser);
                return true;
            }
        }
    }
}