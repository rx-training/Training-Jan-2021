using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AmazonDemo.Authenticate;
using AmazonDemo.Models;
using AmazonDemo.Models.IRepository;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AmazonDemo.Controllers
{
    [Authorize(Roles = UserRolesAmazon.Admin)]
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {

        private readonly AmazonContext context;
        IAdmin admin;
        IUser user;
        public AdminController(AmazonContext _context, IAdmin admin, IUser user)
        {
            this.context = _context;
            this.admin = admin;
            this.user = user;
        }
        //To get all 
        [HttpGet]
        public IEnumerable<Admin> GetAllAdmin()
        {
            return admin.GetAll();
        }

        [HttpDelete("{AdminLogInId}")]
        public string DeleteAdmin(string AdminLogInId)
        {
            var AdminDelete = context.Admins.Single(s=>s.AdminLoginId == AdminLogInId);
            if(AdminDelete == null)
            {
                return $"Admin id is not valid...";
            }
            else
            {
                admin.Delete(AdminDelete);
                return $"Admin is deleted successfully...";
            }
            
        }
        [HttpPut("{AdminLogInId}")]
        public string UpdateAdmin(string AdminLogInId, [FromBody] Admin UpdateAdmin)
        {
            var AdminUpdate = context.Admins.Single(s => s.AdminLoginId == AdminLogInId);
            if (AdminUpdate == null)
            {
                return $"Admin id is not valid...";
            }
            else if((AdminUpdate.AdminLoginId != UpdateAdmin.AdminLoginId && AdminUpdate.AdminPassword !=UpdateAdmin.AdminPassword) || (AdminUpdate.AdminLoginId != UpdateAdmin.AdminLoginId) ||(AdminUpdate.AdminPassword != UpdateAdmin.AdminPassword))
            {
                return $"You can't update your log in id and password from here...";
            }
            else
            {
                admin.Update(UpdateAdmin);
                return $"Your data is updated successfully...";
            }
        }
        [HttpPost]
        public string CreateAdmin([FromBody] Admin CreateAdmin)
        {
            if (admin.Any(s => s.AdminLoginId == CreateAdmin.AdminLoginId) || user.Any(s => s.UserLogIn == CreateAdmin.AdminLoginId))
            {
                return $"please try with another login id...";
            }
            else if (admin.Any(s => s.AdminContactNumber == CreateAdmin.AdminContactNumber))
            {
                return $"There is already admin with same contact so please try with another number or check entered contact number...";
            }
            else if (admin.Any(s => s.AdminEmail == CreateAdmin.AdminEmail))
            {
                return $"Check your email id there is already admin who is using the same email id...";
            }
            else
            {
                admin.Create(CreateAdmin);
                Admin AddedAdmin =  context.Admins.ToList().Last();
                return $"Your admin id is {AddedAdmin.AdminId}, please keep it with you for future usage...";
            }
        }
    }
}
