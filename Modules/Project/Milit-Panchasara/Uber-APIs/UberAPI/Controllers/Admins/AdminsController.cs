using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UberAPI.Code.Interfaces;
using UberAPI.Models;
using UberAPI.Models.Auth;

namespace UberAPI.Controllers.Admins
{
    [Authorize(Roles = UserRoles.AdminRole)]
    [Route("api/[controller]")]
    [ApiController]
    public class AdminsController : ControllerBase
    {
        private readonly IAdminRepo adminRepo;

        public AdminsController(IAdminRepo adminRepo)
        {
            this.adminRepo = adminRepo;
        }

        //POST: api/admins/{id}/rider/{rid}
        [HttpPost("{id}/rider/{rid}")] 
        public ActionResult<Response> BlockUnblockRider(long id, long rid, BlockUnblockAction action) 
        {
            var cred = User.Claims.FirstOrDefault(c => c.Type == "UserId").Value;
            if (!adminRepo.ValidateAdmin(cred, id))
            {
                return Unauthorized();
            }

            if(adminRepo.BlockRider(rid, action.Action))
            {
                return new Response() { Status = "1", Message = "User " + action.Action + "ed successfully." };
            }
            else
            {
                return new Response() { Status = "0", Message = "Error occured!" };
            }
        }
    }
}
