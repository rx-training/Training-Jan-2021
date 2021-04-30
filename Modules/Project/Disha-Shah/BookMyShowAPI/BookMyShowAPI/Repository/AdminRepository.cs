using BookMyShowAPI.Authentication;
using BookMyShowAPI.IRepository;
using BookMyShowAPI.Models;
using Microsoft.AspNetCore.Identity;
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

        public AdminRepository(BookMyShowDBContext context, UserManager<ApplicationUser> userManager, RoleManager<IdentityRole> roleManager, IConfiguration configuration) : base(context)
        {
            this.userManager = userManager;
            this.roleManager = roleManager;
            _configuration = configuration;
        }

        public async Task<string> LoginAdmin(string userName)
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
                expires: DateTime.Now.AddHours(3),
                claims: authClaims,
                signingCredentials: new SigningCredentials(authSigningKey, SecurityAlgorithms.HmacSha256)
                );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

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

            return result;
        }

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

        public Admin FindName(string name)
        {
            var registeredAdmin = context.Admins.SingleOrDefault(x => x.UserName == name);
            return registeredAdmin;
            //if (registeredAdmin != null)
            //{
            //    return true;
            //}
            //else
            //{
            //    return false;
            //}


        }
    }
}
