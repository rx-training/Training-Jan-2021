using Assignment.Authentication;
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

namespace Assignment.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticateController : ControllerBase
    {
        private readonly UserManager<ApplicationUser> userManager;
        private readonly RoleManager<IdentityRole> roleManager;
        private readonly IConfiguration _configuration;

        public AuthenticateController(UserManager<ApplicationUser> userManager, RoleManager<IdentityRole> roleManager, IConfiguration configuration)
        {
            this.userManager = userManager;
            this.roleManager = roleManager;
            _configuration = configuration;

        }

        [HttpPost]
        public async Task<IActionResult> Login([FromBody] LogInModel model)
        {
            var user = await userManager.FindByNameAsync(model.UserName);

            if(user != null && await userManager.CheckPasswordAsync(user,model.Password))
            {
                var userRole = await userManager.GetRolesAsync(user);

                var authclaim = new List<Claim>
                {
                    new Claim (ClaimTypes.Name,user.UserName),
                    new Claim (JwtRegisteredClaimNames.Jti,Guid.NewGuid().ToString())

                };

                foreach (var userRoles in userRole)
                {
                    authclaim.Add(new Claim(ClaimTypes.Role, userRoles));
                }

                var authSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JWT:Secret"]));

                var token = new JwtSecurityToken
                (
                    issuer: _configuration["JWT:ValidIssuer"],
                    audience: _configuration["JWT:ValidAudience"],
                    expires: DateTime.Now.AddHours(24),
                    claims: authclaim,
                    signingCredentials: new SigningCredentials(authSigningKey, SecurityAlgorithms.HmacSha256)
                );

                return Ok(new
                {
                    token = new JwtSecurityTokenHandler().WriteToken(token),
                    expiration = token.ValidTo
                });


            }
            return Unauthorized("You Have Not Register In The Web Api");
            
        }

        [HttpPost]
        [Route("register-user")]
        public async Task<IActionResult> Register([FromBody] RegisterModel model)
        {
            var UserExists = await userManager.FindByNameAsync(model.Username);
            if (UserExists != null)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response {Status="Error",Message="You Have Already Register" });
            }

            ApplicationUser applicationUser = new ApplicationUser()
            {
                Email = model.Email,
                SecurityStamp = Guid.NewGuid().ToString(),
                UserName=model.Username

            };
            var result = await userManager.CreateAsync(applicationUser, model.Password);
            if (!result.Succeeded)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,new Response {Status="Error",Message="PLease Check Your Password" });
            }
            if (!await roleManager.RoleExistsAsync(UserRoles.User))
                await roleManager.CreateAsync(new IdentityRole(UserRoles.User));
            if (await roleManager.RoleExistsAsync(UserRoles.User))
            {
                await userManager.AddToRoleAsync(applicationUser, UserRoles.User);
            }
            return Ok(new Response { Status = "Success", Message = "You Have Successfully Log in" });
        }
        [HttpPost]
        [Route("register-admin")]
        public async Task<IActionResult> RegisterAdmin([FromBody] RegisterModel model)
        {
            var userExists = await userManager.FindByNameAsync(model.Username);
            if (userExists != null)
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "User already exists!" });

            ApplicationUser user = new ApplicationUser()
            {
                Email = model.Email,
                SecurityStamp = Guid.NewGuid().ToString(),
                UserName = model.Username
            };
            var result = await userManager.CreateAsync(user, model.Password);
            if (!result.Succeeded)
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "User creation failed! Please check user details and try again." });

            if (!await roleManager.RoleExistsAsync(UserRoles.Admin))
                await roleManager.CreateAsync(new IdentityRole(UserRoles.Admin));
            

            if (await roleManager.RoleExistsAsync(UserRoles.Admin))
            {
                await userManager.AddToRoleAsync(user, UserRoles.Admin);
            }

            

            return Ok(new Response { Status = "Success", Message = "User created successfully!" });
        }




    }
}
