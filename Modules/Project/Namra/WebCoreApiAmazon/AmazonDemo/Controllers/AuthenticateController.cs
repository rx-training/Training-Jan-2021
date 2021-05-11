using AmazonDemo.Authenticate;
using AmazonDemo.Models;
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

namespace Day17RoleBased.Controllers
{
   
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticateController : ControllerBase
    {
        private readonly UserManager<ApplicationUserAmazon> userManager;
        private readonly RoleManager<IdentityRole> roleManager;
        private readonly IConfiguration _configuration;
        private readonly AmazonContext context;

        public AuthenticateController(UserManager<ApplicationUserAmazon> userManager, RoleManager<IdentityRole> roleManager, IConfiguration configuration, AmazonContext context)
        {
            this.userManager = userManager;
            this.context = context;
            this.roleManager = roleManager;
            _configuration = configuration;
        }
        public void setUserPassword(string userName,string password)
        {
            User setPassword = context.Users.Single(s =>s.UserLogIn == userName);
            setPassword.UserPassword = password;
            context.SaveChanges();
        }
        public bool validateUser(string userName)
        {
            User userFind = context.Users.SingleOrDefault(s=> s.UserLogIn==userName);
            if(userFind == null)
            {
                return false;
            }
            else
            {
                return true;
            }
        }

        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> Login([FromBody] LoginModelAmazon model)
        {
            var user = await userManager.FindByNameAsync(model.Username);
            if (user != null && await userManager.CheckPasswordAsync(user, model.Password))
            {
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

                return Ok(new
                {
                    token = new JwtSecurityTokenHandler().WriteToken(token),
                    expiration = token.ValidTo
                });
            }
            return Unauthorized();
        }

        [HttpPost]
        [Route("register")]
        public async Task<IActionResult> Register([FromBody] RegisterModelAmazon model)
        {
            if(!validateUser(model.Username))
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new ResponseAmazon { Status = "Error", Message = "User doesn't exists!" });
            }
            var userExists = await userManager.FindByNameAsync(model.Username);
            if (userExists != null)
                return StatusCode(StatusCodes.Status500InternalServerError, new ResponseAmazon { Status = "Error", Message = "User already exists!" });

            ApplicationUserAmazon user = new ApplicationUserAmazon()
            {
                Email = model.Email,
                SecurityStamp = Guid.NewGuid().ToString(),
                UserName = model.Username
            };
            var result = await userManager.CreateAsync(user, model.Password);
            if (!result.Succeeded)
                return StatusCode(StatusCodes.Status500InternalServerError, new ResponseAmazon { Status = "Error", Message = "User creation failed! Please check user details and try again." });
            setUserPassword(model.Username, model.Password);
            return Ok(new ResponseAmazon { Status = "Success", Message = "User created successfully!" });
        }

        public bool checkAdmin(string adminName)
        {
            Admin findAdmin = context.Admins.SingleOrDefault(s => s.AdminLoginId == adminName);

            if(findAdmin == null)
            {
                return false;
            }
            else
            {
                return true;
            }
        }
        public void updateAdminPassword(string adminName, string adminPassword)
        {
            Admin findAdmin = context.Admins.Single(s=>s.AdminLoginId == adminName);
            findAdmin.AdminPassword = adminPassword;
            context.SaveChanges();
        }
        [HttpPost]
        [Route("register-admin")]
        public async Task<IActionResult> RegisterAdmin([FromBody] RegisterModelAmazon model)
        {
            if(!checkAdmin(model.Username))
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new ResponseAmazon { Status = "Error", Message = "Admin doesn't exists, please register first to register here...!" });

            }
            var userExists = await userManager.FindByNameAsync(model.Username);
            if (userExists != null)
                return StatusCode(StatusCodes.Status500InternalServerError, new ResponseAmazon { Status = "Error", Message = "User already exists!" });

            ApplicationUserAmazon user = new ApplicationUserAmazon()
            {
                Email = model.Email,
                SecurityStamp = Guid.NewGuid().ToString(),
                UserName = model.Username
            };
            var result = await userManager.CreateAsync(user, model.Password);
            if (!result.Succeeded)
                return StatusCode(StatusCodes.Status500InternalServerError, new ResponseAmazon { Status = "Error", Message = "User creation failed! Please check user details and try again." });

            if (!await roleManager.RoleExistsAsync(UserRolesAmazon.Admin))
                await roleManager.CreateAsync(new IdentityRole(UserRolesAmazon.Admin));
            if (!await roleManager.RoleExistsAsync(UserRolesAmazon.User))
                await roleManager.CreateAsync(new IdentityRole(UserRolesAmazon.User));

            if (await roleManager.RoleExistsAsync(UserRolesAmazon.Admin))
            {
                await userManager.AddToRoleAsync(user, UserRolesAmazon.Admin);
            }
            updateAdminPassword(model.Username, model.Password);
            return Ok(new ResponseAmazon { Status = "Success", Message = "User created successfully!" });
        }
    }
}

