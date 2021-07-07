using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using SpicejetWebApi.Authentication;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace SpicejetWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticateController : ControllerBase
    {
        private readonly UserManager<SpicejetUser> userManager;
        private readonly RoleManager<IdentityRole> roleManager;
        private readonly IConfiguration _configuration;

        public AuthenticateController(UserManager<SpicejetUser> userManager, RoleManager<IdentityRole> roleManager, IConfiguration configuration)
        {
            this.userManager = userManager;
            this.roleManager = roleManager;
            _configuration = configuration;
        }
        [HttpPost]
        [Route("login")]

        public async Task<ActionResult> Login([FromBody] LoginModel model)
        {
            var user = await userManager.FindByNameAsync(model.Username);
            if (user != null && await userManager.CheckPasswordAsync(user, model.Password))
            {
                var userRoles = await userManager.GetRolesAsync(user);

                var authclaim = new List<Claim>()
                {
                    new Claim(ClaimTypes.Name,user.UserName),
                    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
                };

                foreach (var userrole in userRoles)
                {
                    authclaim.Add(new Claim(ClaimTypes.Role, userrole));
                }

                var authsignature = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JWT:Secret"]));

                var token = new JwtSecurityToken(
                   issuer: _configuration["JWT:ValidIssuer"],
                   audience: _configuration["JWT:ValidAudience"],
                   expires: DateTime.Now.AddHours(3),
                   claims: authclaim,
                   signingCredentials: new SigningCredentials(authsignature, SecurityAlgorithms.HmacSha256)
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
        [Route("Register-User")]
        public async Task<IActionResult> RegisterUser([FromBody] RegisterModel model)
        {
            var UserExiest = await userManager.FindByNameAsync(model.Username);
            if (UserExiest != null)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "You have Already Register" });
            }

            SpicejetUser applicationUser = new SpicejetUser()
            {
                Email = model.Email,
                SecurityStamp = Guid.NewGuid().ToString(),
                UserName = model.Username

            };
            var result = await userManager.CreateAsync(applicationUser, model.Password);

            if (!result.Succeeded)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "PLease Check Your Details and Try Again" });

            }

            if (!await roleManager.RoleExistsAsync(SpicejetUserRoles.User))
            {
                await roleManager.CreateAsync(new IdentityRole(SpicejetUserRoles.User));
            }

            if (await roleManager.RoleExistsAsync(SpicejetUserRoles.User))
            {
                await userManager.AddToRoleAsync(applicationUser, SpicejetUserRoles.User);
            }

            return Ok(new Response { Status = "Success", Message = "User is Created Successfully" });

        }
        [HttpPost]
        [Route("Register-Admin")]
        public async Task<IActionResult> RegisterAdmin(RegisterModel model)
        {
            var AdminExiest = await userManager.FindByNameAsync(model.Username);
            if (AdminExiest != null)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "You Have Allready Register  User" });
            }
            SpicejetUser applicationUser = new SpicejetUser()
            {
                Email = model.Email,
                SecurityStamp = Guid.NewGuid().ToString(),
                UserName = model.Username

            };

            var result = await userManager.CreateAsync(applicationUser, model.Password);
            if (!result.Succeeded)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "Please Check Your Details And TryAgain" });
            }

            if (!await roleManager.RoleExistsAsync(SpicejetUserRoles.Admin))
            {
                await roleManager.CreateAsync(new IdentityRole(SpicejetUserRoles.Admin));
            }

            if (await roleManager.RoleExistsAsync(SpicejetUserRoles.Admin))
            {
                await userManager.AddToRoleAsync(applicationUser, SpicejetUserRoles.Admin);
            }
            return Ok(new Response() { Status = "Success", Message = "Admin registration Successfull" });
        }

    }
}
