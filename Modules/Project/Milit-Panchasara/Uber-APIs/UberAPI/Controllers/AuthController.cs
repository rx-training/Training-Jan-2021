using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;
using UberAPI.Code.Interfaces;
using UberAPI.Models;
using MailKit.Net.Smtp;
using MimeKit;
using UberAPI.Models.Auth;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Authorization;
using System.Web;

namespace UberAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IRiderRepo riderRepo;
        private readonly List<string> registrationUserType = new List<string>() { "rider", "driver" };
        private readonly List<string> loginUserType = new List<string>() { "rider", "driver", "admin" };
        private readonly IUserRepo userRepo;
        private readonly IDriverRepo driverRepo;
        private readonly IAdminRepo adminRepo;
        private readonly IConfiguration configuration;

        public AuthController(IUserRepo userRepo, IRiderRepo riderRepo, IDriverRepo driverRepo, IAdminRepo adminRepo, IConfiguration configuration)
        {
            this.riderRepo = riderRepo;
            this.userRepo = userRepo;
            this.driverRepo = driverRepo;
            this.adminRepo = adminRepo;
            this.configuration = configuration;
        }

        // POST: api/<AuthController>/register/{userRole}
        [HttpPost("register/{userRole}")]
        public async Task<IActionResult> RegisterUser(string userRole, [FromBody] Register request)
        {
            AppUser newUser;
            string role;
            if (userRole.ToLower() == "rider")
            {
                if (riderRepo.IsExist(x => x.Email == request.Email))
                {
                    return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "Rider already exists!" });
                }

                // User Creation
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

                // Rider Table entry
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

                // User Creation
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

                // Driver Table entry
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
                // User Creation
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

                // Admin Table entry
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

            // validating contact number and account blocked status
            if (userRole.ToLower() == "rider")
            {
                if (!riderRepo.IsExist(x => x.ContactNumber.ToString() == request.ContactNumber))
                {
                    return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "Rider not exists!" });
                }
                var rider = riderRepo.Find(x => x.ContactNumber.ToString() == request.ContactNumber).Single();

                if (rider.IsBlocked == true)
                {
                    return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "Account has been block by Admin" });
                }

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

                if (driver.IsBlocked == true)
                {
                    return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "Account has been block by Admin" });
                }

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

            // generate login token for a user
            var newToken = await userRepo.LoginUser(userId);
            return Ok(new
            {
                token = newToken,
            });

        }

        [Authorize]
        [HttpGet("{userRole}/sendEmail/{id}")]
        public async Task<ActionResult<bool>> SendVerificationEmail(string userRole, int id)
        {
            var cred = User.Claims.FirstOrDefault(c => c.Type == "UserId").Value;
            if (!riderRepo.ValidateRider(cred, id))
            {
                return Unauthorized();
            }
            String email = String.Empty;
            if (userRole.ToLower() == "rider")
            {
                var rider = riderRepo.Find(x => x.RiderId == id).Single();
                if (rider.IsBlocked == true)
                {
                    return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "Account has been block by Admin" });
                }
                email = rider.Email;
            }
            else if (userRole.ToLower() == "driver")
            {
                var driver = driverRepo.Find(x => x.DriverId == id).Single();
                if (driver.IsBlocked == true)
                {
                    return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "Account has been block by Admin" });
                }
                email = driver.Email;
            }

            // generating token to verify email
            var token = await userRepo.SendEmail(cred);

            //encoding token to put into url
            string codeHtmlVersion = HttpUtility.UrlEncode(token);

            //url to send in mail
            var confirmationLink = configuration["BaseUrl"] + "api/Auth/Confirm?userId=" + cred + "&token=" + codeHtmlVersion;

            MimeMessage message = new MimeMessage();

            // sender email conf.
            MailboxAddress from = new MailboxAddress("Uber",
            configuration["MailSettings:Mail"]);
            message.From.Add(from);

            // reciever(user) email conf.
            MailboxAddress to = new MailboxAddress("User",
            email);
            message.To.Add(to);

            message.Subject = "Uber Email Verification";

            BodyBuilder bodyBuilder = new BodyBuilder();
            bodyBuilder.HtmlBody = "<h1>Hello!</h1>";
            bodyBuilder.HtmlBody += "<a href='" + confirmationLink + "'>Click here</a>";

            message.Body = bodyBuilder.ToMessageBody();

            // smtp client cofig.
            SmtpClient client = new SmtpClient();
            client.Connect(configuration["MailSettings:Host"], Convert.ToInt32(configuration["MailSettings:Port"]), true);
            client.Authenticate(configuration["MailSettings:UserName"], configuration["MailSettings:Password"]);

            // sending mail
            client.Send(message);
            client.Disconnect(true);
            client.Dispose();

            return true;
        }

        [HttpGet("Confirm")]
        public async Task<ActionResult<bool>> VerifyEmail(string userId, string token)
        {
            // confirming token recieved from url
            bool isVerified = await userRepo.confirmToken(userId, token);
            return isVerified;
        }

        [HttpGet("ContactNumber/Confirm")]
        public ActionResult<bool> VerifyContactNumber(string contact, string otp)
        {

            // verifying dummy OTP
            if (otp == "000000")
            {
                return userRepo.VerifyContactNumber(contact);
            }
            else
                return false;
        }
    }
}
