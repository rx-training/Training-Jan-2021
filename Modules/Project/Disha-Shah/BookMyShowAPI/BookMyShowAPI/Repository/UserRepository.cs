using BookMyShowAPI.Authentication;
using BookMyShowAPI.IRepository;
using BookMyShowAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.WebUtilities;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Net.Mail;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Security.Policy;
using System.Text;
using System.Threading.Tasks;

namespace BookMyShowAPI.Repository
{
    public class UserRepository : GenericRepository<ApplicationUser>, IUser
    {
        private readonly UserManager<ApplicationUser> userManager;
        private readonly RoleManager<IdentityRole> roleManager;
        private readonly IConfiguration _configuration;
        private IMailService mailService;

        public UserRepository(BookMyShowDBContext context, UserManager<ApplicationUser> userManager, RoleManager<IdentityRole> roleManager, IConfiguration configuration, IMailService mailService): base(context)
        {
            this.userManager = userManager;
            this.roleManager = roleManager;
            _configuration = configuration;
            this.mailService = mailService;
        }

        // Login Users
        public async Task<string> LoginUser(string userName)
        {
            if (await IsEmailConfirmedAsync(userName))
            {
                var user = await userManager.FindByNameAsync(userName);

                var userRoles = await userManager.GetRolesAsync(user);

                var authClaims = new List<Claim>
                {
                    new Claim(ClaimTypes.Name, user.UserName),
                    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                };

                foreach (var userRole in userRoles)
                {
                    authClaims.Add(new Claim(ClaimTypes.Role, userRole));
                }

                var authSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JWT:Secret"]));

                var token = new JwtSecurityToken(
                    issuer: _configuration["JWT:ValidIssuer"],
                    audience: _configuration["JWT:ValidAudience"],
                    expires: DateTime.Now.AddHours(8),
                    claims: authClaims,
                    signingCredentials: new SigningCredentials(authSigningKey, SecurityAlgorithms.HmacSha256)
                    );

                return new JwtSecurityTokenHandler().WriteToken(token);
            }

            return null;
        }

        // Register User
        public async Task<IdentityResult> RegisterUser(RegisterModel model)
        {
            ApplicationUser user = new ApplicationUser()
            {
                Email = model.Email,
                SecurityStamp = Guid.NewGuid().ToString(),
                UserName = model.Username,
                PhoneNumber = model.PhoneNumber
            };
            var result = await userManager.CreateAsync(user, model.Password);

            if (!await roleManager.RoleExistsAsync(UserRoles.User))
                await roleManager.CreateAsync(new IdentityRole(UserRoles.User));

            if (await roleManager.RoleExistsAsync(UserRoles.User))
            {
                await userManager.AddToRoleAsync(user, UserRoles.User);
            }

            if (result.Succeeded)
            {
                Random rnd = new Random();
                var otp = rnd.Next(1000, 9999);

                context.Users.Add(new User()
                {
                    ContactNo = model.PhoneNumber,
                    Email = model.Email,
                    Password = ProtectPassword(model.Password),
                    UserName = model.Username,
                    Otp = otp
                });

                context.SaveChanges();

                var confirmEmailToken = await userManager.GenerateEmailConfirmationTokenAsync(user);
                var encodedEmailToken = Encoding.UTF8.GetBytes(confirmEmailToken);
                var validEmailToken = WebEncoders.Base64UrlEncode(encodedEmailToken);

                string url = $"{_configuration["AppUrl"]}/api/authenticate/confirmemail?userid={user.Id}&token={validEmailToken}";

                MailRequest request = new MailRequest();

                request.ToEmail = model.Email;
                request.Subject = $"Hello {model.Username}, Confirm Your Email!";
                request.Body = $"<h1>You have successfully registered yourself with BookMyShow!</h1><h4>Your OTP is: {otp}</h4><p><a href='{url}'>Click here</a> to verify your email</p>";

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

        // Map user details to Users table in BookMyShowDB from Users table in BookMyShowAuthenticationAPIDB
        public void CreateUser(RegisterModel model)
        {
            context.Users.Add(new User()
            {
                ContactNo = model.PhoneNumber,
                Email = model.Email,
                Password = ProtectPassword(model.Password),
                UserName = model.Username
            });

            context.SaveChanges();
        }

        // Get information of a particular user based on username
        public User FindName(string name)
        {
            var registeredUser = context.Users.SingleOrDefault(x=>x.UserName==name);
            return registeredUser;
        }

        public User FindContact(string contact)
        {
            var registeredUser = context.Users.SingleOrDefault(x => x.ContactNo == contact);
            return registeredUser;
        }

        public string FindPassword(string name)
        {
            var registeredUser = context.Users.SingleOrDefault(x => x.UserName == name);
            var pass = UnprotectPassword(registeredUser.Password);
            return pass;
        }

        // Confirm email
        public async Task<Response> ConfirmEmailAsync(string userId, string token)
        {
            var user = await userManager.FindByIdAsync(userId);
            if(user==null)
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

            if(result.Succeeded)
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

        // Check whether email is confirmed
        public async Task<bool> IsEmailConfirmedAsync(string userName)
        {
            var user = await userManager.FindByNameAsync(userName);

            if(user.EmailConfirmed)
            {
                return true;
            }

            return false;
        }

        public IEnumerable GetAllUsers()
        {
            var users = context.Users;

            return users;
        }

        public string ProtectPassword(string password)
        {
            byte[] bytes = Encoding.Unicode.GetBytes(password);
            byte[] protectedPassword = ProtectedData.Protect(bytes, null, DataProtectionScope.CurrentUser);
            return Convert.ToBase64String(protectedPassword);
        }
        public static string UnprotectPassword(string protectedPassword)
        {
            byte[] bytes = Convert.FromBase64String(protectedPassword);
            byte[] password = ProtectedData.Unprotect(bytes, null, DataProtectionScope.CurrentUser);
            return Encoding.Unicode.GetString(password);
        }
    }
}
