using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Security.Policy;
using System.Text;
using System.Threading.Tasks;
using UberAPI.Code.Interfaces;
using UberAPI.Models;
using UberAPI.Models.Auth;

namespace UberAPI.Code.RepositoryDB
{
    public class UserRepo : GenericRepo<AppUser>, IUserRepo
    {
        private readonly UserManager<AppUser> userManager;
        private readonly RoleManager<IdentityRole> roleManager;
        private readonly IConfiguration _configuration;

        public UserRepo(UberContext context, UserManager<AppUser> userManager, RoleManager<IdentityRole> roleManager, IConfiguration configuration): base(context)
        {
            this.userManager = userManager;
            this.roleManager = roleManager;
            _configuration = configuration;
        }

        public async Task<bool> confirmToken(string userId, string token)
        {
            // get user from id
            var user = await userManager.FindByIdAsync(userId);

            //confirming email using token
            var result = await userManager.ConfirmEmailAsync(user, token);
            if(result.Succeeded)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        public async Task<IdentityResult> CreateUser(Register request, string role)
        {
            //creating user object
            var user = new AppUser()
            {
                Email = request.Email,
                SecurityStamp = Guid.NewGuid().ToString(),
                UserName = request.Email,
                PhoneNumber = request.ContactNumber
            };
            var result = await userManager.CreateAsync(user, request.Password);

            //assigning role
            if (!await roleManager.RoleExistsAsync(role))
                await roleManager.CreateAsync(new IdentityRole(role));
            if (!await roleManager.RoleExistsAsync(role))
                await roleManager.CreateAsync(new IdentityRole(role));

            if (await roleManager.RoleExistsAsync(role))
            {
                await userManager.AddToRoleAsync(user, role);
            }
            return result;
        }

        public async Task<string> GetToken(AppUser user)
        {
            //getting role of user
            var UserRole = await userManager.GetRolesAsync(user);

            //setting up claims and token payload
            var authClaims = new List<Claim>
                {
                    new Claim(ClaimTypes.Email, user.Email),
                    new Claim(ClaimTypes.MobilePhone, user.PhoneNumber),
                    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                    new Claim("UserId", user.Id)
        };

            foreach (var userRole in UserRole)
            {
                authClaims.Add(new Claim(ClaimTypes.Role, userRole));
            }

            var authSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JWT:Secret"]));

            var token = new JwtSecurityToken(
                issuer: _configuration["JWT:Issuer"],
                audience: _configuration["JWT:Audience"],
                expires: DateTime.Now.AddHours(24),
                claims: authClaims,
                signingCredentials: new SigningCredentials(authSigningKey, SecurityAlgorithms.HmacSha256)
                );

            //generating token
            var newToken = new JwtSecurityTokenHandler().WriteToken(token);

            return newToken;
        }

        public async Task<string> LoginUser(string id)
        {
            // get user from id
            var user = await userManager.FindByIdAsync(id);

            // get token for the user
            return await this.GetToken(user);
        }

        public async Task<string> SendEmail(string id)
        {
            // get user from id
            var user = await userManager.FindByIdAsync(id);

            // get token for email confirmation
            var token = await userManager.GenerateEmailConfirmationTokenAsync(user);
            return token;

                
        }

        public bool VerifyContactNumber(string contact)
        {
            // get user from contact number
            var user = context.Users.SingleOrDefault(x => x.PhoneNumber == contact);
            if (user == null)
                return false;

            //updating verified contact number field
            user.PhoneNumberConfirmed = true;
            context.SaveChanges();
            return true;
        }
    }
}
