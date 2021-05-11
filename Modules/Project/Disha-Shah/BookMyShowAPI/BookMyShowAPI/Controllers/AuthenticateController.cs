﻿using BookMyShowAPI.Authentication;
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
    [Route("api/BookMyShow/[controller]")]
    [ApiController]
    public class AuthenticateController : ControllerBase
    {
        private readonly IUser users;
        private readonly IAdmin admins;
        private readonly IMailService mailService;
        private readonly IConfiguration _configuration;

        public AuthenticateController(IUser user, IAdmin admin, IMailService mailService, IConfiguration configuration)
        {
            users = user;
            admins = admin;
            this.mailService = mailService;
            _configuration = configuration;
        }

        // POST: api/bookmyshow/authenticate/login?otp=1234
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

            if (newToken != null)
            {
                return Ok(new
                {
                    token = newToken
                });
            }

            return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "Email is not confirmed!" });
        }

        // POST: api/bookmyshow/authenticate/register
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

            return Ok(new Response { Status = "Success", Message = "User created successfully!" });

        }

        // POST: api/bookmyshow/authenticate/register-admin
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

            return Ok(new Response { Status = "Success", Message = "Admin created successfully!" });
        }

        // POST: api/bookmyshow/authenticate/confirmemail
        [HttpGet("ConfirmEmail")]
        public async Task<IActionResult> ConfirmEmail(string userId, string token)
        {
            if(string.IsNullOrWhiteSpace(userId) || string.IsNullOrWhiteSpace(token))
            {
                return NotFound();
            }

            var result = await users.ConfirmEmailAsync(userId, token);

            if(result.Status == "Success")
            {
                return Redirect($"{_configuration["AppUrl"]}/confirmemail.html");
            }

            return BadRequest(result);
        }
    }
}