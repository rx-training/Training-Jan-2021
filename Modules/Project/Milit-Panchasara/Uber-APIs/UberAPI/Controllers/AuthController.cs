using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UberAPI.Code.Interfaces;
using UberAPI.Models;
using UberAPI.Models.Auth;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace UberAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IRiderRepo riderRepo;
        private readonly List<string> registrationUserType = new List<string>() { "rider", "driver"};
        private readonly List<string> loginUserType = new List<string>() { "rider", "driver", "admin"};
        private readonly IUserRepo userRepo;
        private readonly IDriverRepo driverRepo;
        private readonly IAdminRepo adminRepo;

        public AuthController(IUserRepo userRepo, IRiderRepo riderRepo, IDriverRepo driverRepo, IAdminRepo adminRepo)
        {
            this.riderRepo = riderRepo;
            this.userRepo = userRepo;
            this.driverRepo = driverRepo;
            this.adminRepo = adminRepo;
        }
        // POST: api/<AuthController>/register/{userRole}
        [HttpPost("register/{userRole}")]
        public async Task<IActionResult> RegisterUser(string userRole, [FromBody] Register request)
        {
            AppUser newUser;
            string role;
            if(userRole.ToLower() == "rider")
            {
                if (riderRepo.IsExist(x => x.Email == request.Email))
                {
                    return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "Rider already exists!" });
                }

                role = UserRoles.RiderRole;
                var result = await userRepo.CreateUser(request, role);
                if (!result.Succeeded)
                {
                    var mes = "Error:";
                    foreach (var error in result.Errors)
                    {
                        mes += " " + error.Description;
                    }
                    return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = mes });
                }

                newUser = userRepo.Find(x => x.Email == request.Email).Single();
                var newRider = new Rider()
                {
                    FirstName = request.FirstName,
                    LastName = request.LastName,
                    Email = request.Email,
                    ContactNumber = Convert.ToDecimal(request.ContactNumber),
                    Password = request.Password, User = newUser,
                    InviteCode = request.ContactNumber,
                    CreatedAt = DateTime.Now
                };
                var addedRider = riderRepo.Add(newRider);
            }
            else if (userRole.ToLower() == "driver")
            {
                if (driverRepo.IsExist(x => x.Email == request.Email))
                {
                    return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "Driver already exists!" });
                }

                role = UserRoles.DriverRole;
                var result = await userRepo.CreateUser(request, role);
                if (!result.Succeeded)
                {
                    var mes = "Error:";
                    foreach (var error in result.Errors)
                    {
                        mes += " " + error.Description;
                    }
                    return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = mes });
                }

                newUser = userRepo.Find(x => x.Email == request.Email).Single();
                var newDriver = new Driver()
                {
                    FirstName = request.FirstName,
                    LastName = request.LastName,
                    Email = request.Email,
                    ContactNumber = Convert.ToDecimal(request.ContactNumber),
                    Password = request.Password,
                    User = newUser,
                    CreatedAt = DateTime.Now
                };
                var addedDriver = driverRepo.Add(newDriver);
            }
            else if (userRole.ToLower() == "admin")
            {
                if (adminRepo.IsExist(x => x.Email == request.Email))
                {
                    return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "Admin already exists!" });
                }

                role = UserRoles.AdminRole;
                var result = await userRepo.CreateUser(request, role);
                if (!result.Succeeded)
                {
                    var mes = "Error:";
                    foreach (var error in result.Errors)
                    {
                        mes += " " + error.Description;
                    }
                    return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = mes });
                }

                newUser = userRepo.Find(x => x.Email == request.Email).Single();
                var newAdmin = new Admin()
                {
                    FirstName = request.FirstName,
                    LastName = request.LastName,
                    Email = request.Email,
                    ContactNumber = Convert.ToDecimal(request.ContactNumber),
                    Password = request.Password,
                    User = newUser,
                    CreatedAt = DateTime.Now
                };
                var addedAdmin = adminRepo.Add(newAdmin);
            }
            else
            {
                return Unauthorized();
            }

            // generate login token for a user
            var newToken = await userRepo.GetToken(newUser);
            return Ok(new
            {
                token = newToken
            });
        }

        [HttpPost]
        [Route("login/{userRole}")]
        public async Task<IActionResult> Login(string userRole, [FromBody] Login request)
        {
            string userPass;
            string userId;
            string role = String.Empty;
            if (userRole.ToLower() == "rider")
            {
                if (!riderRepo.IsExist(x => x.ContactNumber.ToString() == request.ContactNumber))
                {
                    return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "Rider not exists!" });
                }
                var rider = riderRepo.Find(x => x.ContactNumber.ToString() == request.ContactNumber).Single();
                userPass = rider.Password;
                userId = rider.UserId;
                role = UserRoles.RiderRole;
            }
            else if (userRole.ToLower() == "driver")
            {
                if (!driverRepo.IsExist(x => x.ContactNumber.ToString() == request.ContactNumber))
                {
                    return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "Driver not exists!" });
                }

                var driver = driverRepo.Find(x => x.ContactNumber.ToString() == request.ContactNumber).Single();
                userPass = driver.Password;
                userId = driver.UserId;
                role = UserRoles.DriverRole;
            }
            else if (userRole.ToLower() == "admin")
            {
                if (!adminRepo.IsExist(x => x.ContactNumber.ToString() == request.ContactNumber))
                {
                    return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "Admin not exists!" });
                }

                var admin = adminRepo.Find(x => x.ContactNumber.ToString() == request.ContactNumber).Single();
                userPass = admin.Password;
                userId = admin.UserId;
                role = UserRoles.AdminRole;
            }
            else
            {
                return Unauthorized();
            }
            if (request.Password.Trim() != userPass)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "Incorrect Password!" });
            }

            var newToken = await userRepo.LoginUser(userId);
            return Ok(new
            {
                token = newToken,
            });

        }
    }
}
