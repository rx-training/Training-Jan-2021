using BookMyShowAPI.Authentication;
using BookMyShowAPI.IRepository;
using BookMyShowAPI.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.WebUtilities;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace BookMyShowAPI.Repository
{
    public class AdminRepository : GenericRepository<ApplicationUser>, IAdmin
    {
        private readonly UserManager<ApplicationUser> userManager;
        private readonly RoleManager<IdentityRole> roleManager;
        private readonly IConfiguration _configuration;
        private readonly IMailService mailService;

        public AdminRepository(BookMyShowDBContext context, UserManager<ApplicationUser> userManager, RoleManager<IdentityRole> roleManager, IConfiguration configuration, IMailService mailService) : base(context)
        {
            this.userManager = userManager;
            this.roleManager = roleManager;
            _configuration = configuration;
            this.mailService = mailService;
        }

        // To Register admin
        public async Task<IdentityResult> RegisterAdmin(RegisterModel model)
        {
            ApplicationUser admin = new ApplicationUser()
            {
                Email = model.Email,
                SecurityStamp = Guid.NewGuid().ToString(),
                UserName = model.Username,
                PhoneNumber = model.PhoneNumber
            };
            var result = await userManager.CreateAsync(admin, model.Password);

            if (!await roleManager.RoleExistsAsync(UserRoles.Admin))
                await roleManager.CreateAsync(new IdentityRole(UserRoles.Admin));

            if(await roleManager.RoleExistsAsync(UserRoles.Admin))
            {
                await userManager.AddToRoleAsync(admin, UserRoles.Admin);
            }

            if (result.Succeeded)
            {
                var confirmEmailToken = await userManager.GenerateEmailConfirmationTokenAsync(admin);
                var encodedEmailToken = Encoding.UTF8.GetBytes(confirmEmailToken);
                var validEmailToken = WebEncoders.Base64UrlEncode(encodedEmailToken);

                string url = $"{_configuration["AppUrl"]}/api/authenticate/confirmemail?userid={admin.Id}&token={validEmailToken}";

                MailRequest request = new MailRequest();

                request.ToEmail = model.Email;
                request.Subject = $"Hello {model.Username}, Confirm Your Email!";
                request.Body = $"<h1>You have successfully registered yourself with BookMyShow!</h1><h4>Your OTP is: 1234</h4><p><a href='{url}'>Click here</a> to verify your email</p>";

                try
                {
                    mailService.SendEmailAsync(request);
                }
                catch (Exception ex)
                {
                    throw;
                }
            }

            return result;
        }

        // Map admin details to Admins table in BookMyShowDB from Users table in BookMyShowAuthenticationAPIDB
        public void CreateAdmin(RegisterModel model)
        {
            context.Admins.Add(new Admin()
            {
                ContactNo = model.PhoneNumber,
                Email = model.Email,
                Password = model.Password,
                UserName = model.Username
            });

            context.SaveChanges();
        }

        // Return Admin information based on username
        public Admin FindName(string name)
        {
            var registeredAdmin = context.Admins.SingleOrDefault(x => x.UserName == name);
            return registeredAdmin;
        }

        public Admin FindContact(string contact)
        {
            var registeredAdmin = context.Admins.SingleOrDefault(x => x.ContactNo == contact);
            return registeredAdmin;
        }

        // Confirm Email
        public async Task<Response> ConfirmEmailAsync(string userId, string token)
        {
            var user = await userManager.FindByIdAsync(userId);
            if (user == null)
            {
                return new Response
                {
                    Status = "Error",
                    Message = "User not found"
                };
            }

            var decodedToken = WebEncoders.Base64UrlDecode(token);
            string normalToken = Encoding.UTF8.GetString(decodedToken);

            var result = await userManager.ConfirmEmailAsync(user, normalToken);

            if (result.Succeeded)
            {
                return new Response
                {
                    Status = "Success",
                    Message = "Email Confirmed Successfully"
                };
            }

            return new Response
            {
                Status = "Error",
                Message = "Email not confirmed"
            };
        }
    }
}
