using BookMyShowAPI.Authentication;
using BookMyShowAPI.IRepository;
using BookMyShowAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using MailKit.Net.Smtp;
using MimeKit;

namespace BookMyShowAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticateController : ControllerBase
    {
        private readonly IUser users;
        private readonly IAdmin admins;
        private readonly IMailService mailService;

        public AuthenticateController(IUser user, IAdmin admin, IMailService mailService)
        {
            users = user;
            admins = admin;
            this.mailService = mailService;
        }

        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> Login([FromBody] LoginModel model, int otp)
        {
            var username = "";
            var pass = "";
            if (users.FindName(model.Username) != null && otp == 1234)
            {
                username = model.Username;
                pass = users.FindName(model.Username).Password;
            }
            else if (admins.FindName(model.Username) != null && otp == 1234)
            {
                username = model.Username;
                pass = admins.FindName(model.Username).Password;
            }
            else
            {
                return Unauthorized();
            }

            if(model.Password.Trim() != pass)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "Incorrect Password!" });
            }

            var newToken = await users.LoginUser(username);
            return Ok(new
            {
                token = newToken
            });
        }

        [HttpPost]
        [Route("register")]
        public async Task<IActionResult> Register([FromBody] RegisterModel model)
        {
            if(users.FindName(model.Username) != null)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "User already exists!" });
            }

            var result = await users.RegisterUser(model);
            if (!result.Succeeded)
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "User creation failed! Please check user details and try again." });

            users.CreateUser(model);

            // Mail Sending
            MailRequest request = new MailRequest();

            request.ToEmail = users.FindName(model.Username).Email;
            request.Subject = "Hello!";
            request.Body = "You have successfully registered yourself!";

            try
            {
                await mailService.SendEmailAsync(request);
                return Ok(new Response { Status = "Success", Message = "User created successfully!" });
            }
            catch (Exception ex)
            {
                throw;
            }

        }

        [HttpPost]
        [Route("register-admin")]
        public async Task<IActionResult> RegisterAdmin([FromBody] RegisterModel model)
        {
            if (admins.FindName(model.Username) != null)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "Admin already exists!" });
            }

            var result = await admins.RegisterAdmin(model);
            if (!result.Succeeded)
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "Admin creation failed! Please check admin details and try again." });

            admins.CreateAdmin(model);

            // Mail Sending
            MailRequest request = new MailRequest();

            request.ToEmail = admins.FindName(model.Username).Email;
            request.Subject = "Hello!";
            request.Body = "You have successfully registered yourself!";

            try
            {
                await mailService.SendEmailAsync(request);
                return Ok(new Response { Status = "Success", Message = "Admin created successfully!" });
            }
            catch (Exception ex)
            {
                throw;
            }
        }

    }
}
