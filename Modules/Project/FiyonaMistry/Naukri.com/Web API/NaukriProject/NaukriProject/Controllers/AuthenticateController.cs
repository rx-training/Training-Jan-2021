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
using NaukriProject.Authentication;
using NaukriProject.Models;
using NaukriProject.Models.Repository;
using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations.Schema;
using NaukriProject.Models.Authentication;
using NaukriProject.Models.IRepository;

namespace NaukriProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticateController : ControllerBase
    {
        private readonly UserManager<ApplicationUser> userManager;
        private readonly RoleManager<IdentityRole> roleManager;
        private readonly IConfiguration _configuration;
        private readonly NaukriDbContext dbContext;
        private IJobSeeker jobSeeker;
        private ICompany company;
        
        public AuthenticateController(UserManager<ApplicationUser> userManager, RoleManager<IdentityRole> roleManager, IConfiguration configuration, NaukriDbContext context, IJobSeeker jobSeeker, ICompany company)
        {
            this.userManager = userManager;
            this.roleManager = roleManager;
            _configuration = configuration;
            dbContext = context;
            this.jobSeeker = jobSeeker;
            this.company = company;
        }

        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> Login([FromBody] LoginModel loginModel)
        {
            var user = await userManager.FindByEmailAsync(loginModel.Email);
            if (user != null && await userManager.CheckPasswordAsync(user, loginModel.Password))
            {
                var userRoles = await userManager.GetRolesAsync(user);
                var authClaims = new List<Claim>
                {
                    new Claim(ClaimTypes.Email, user.Email),
                    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                    new Claim("UserId", user.Id)
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
                var id = 0;

                if(userRoles.First() == "JobSeeker")
                {
                    id = this.jobSeeker.GetAll().ToList().Find(x => x.Id == user.Id).JobSeekerId;
                }
                if (userRoles.First() == "Company")
                {
                    id = this.company.GetAll().ToList().Find(x => x.Id == user.Id).CompanyId;
                }

                return Ok(new
                {
                    token = new JwtSecurityTokenHandler().WriteToken(token),
                    expiration = token.ValidTo,
                    id = id,
                    role = userRoles.First()
                }); ;
            }

            return Unauthorized();
        }

        [HttpPost]
        [Route("register/admin")]
        public async Task<IActionResult> RegisterAdmin([FromBody] RegisterModel model)
        {
            var userExists = await userManager.FindByEmailAsync(model.Email);
            if (userExists != null)
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "User already exists!" });

            ApplicationUser user = new ApplicationUser()
            {
                Email = model.Email,
                SecurityStamp = Guid.NewGuid().ToString(),
                UserName = model.UserName
            };

            Admin admin = new Admin()
            {
                AdminFirstName = model.Fname,
                AdminLastName = model.Lname,
                AdminEmail = model.Email,
                AdminPassword = model.Password,
                AdminPhoneNumber = model.PhoneNumber,
                Id = user.Id
            };

            var result = await userManager.CreateAsync(user, model.Password);

            if (!result.Succeeded)
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "User creation failed! Please check user details and try again." });

            if (!await roleManager.RoleExistsAsync(UserRoles.Admin))
                await roleManager.CreateAsync(new IdentityRole(UserRoles.Admin));
            if (!await roleManager.RoleExistsAsync(UserRoles.Company))
                await roleManager.CreateAsync(new IdentityRole(UserRoles.Company));
            if (!await roleManager.RoleExistsAsync(UserRoles.JobSeeker))
                await roleManager.CreateAsync(new IdentityRole(UserRoles.JobSeeker));

            if (await roleManager.RoleExistsAsync(UserRoles.Admin))
            {
                await userManager.AddToRoleAsync(user, UserRoles.Admin);
            }

            await dbContext.Admins.AddAsync(admin);
            dbContext.SaveChanges();

            return Ok(new Response { Status = "Success", Message = "User created successfully!", Data = admin });
        }


        [HttpPost]
        [Route("register/company")]
        public async Task<IActionResult> RegisterCompany([FromBody] RegisterCompany register)
        {
            var userExists = await userManager.FindByEmailAsync(register.Email);
            if (userExists != null)
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "User already exists!" });

            ApplicationUser user = new ApplicationUser()
            {
                Email = register.Email,
                SecurityStamp = Guid.NewGuid().ToString(),
                UserName = register.UserName
            };

            var result = await userManager.CreateAsync(user, register.Password);
            if (!result.Succeeded)
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "User creation failed! Please check user details and try again.", Data=user });

            if (!await roleManager.RoleExistsAsync(UserRoles.Admin))
                await roleManager.CreateAsync(new IdentityRole(UserRoles.Admin));
            if (!await roleManager.RoleExistsAsync(UserRoles.Company))
                await roleManager.CreateAsync(new IdentityRole(UserRoles.Company));
            if (!await roleManager.RoleExistsAsync(UserRoles.JobSeeker))
                await roleManager.CreateAsync(new IdentityRole(UserRoles.JobSeeker));

            if (await roleManager.RoleExistsAsync(UserRoles.Company))
            {
                await userManager.AddToRoleAsync(user, UserRoles.Company);
            }

            Company company = new Company()
            {
                CompanyName = register.CompanyName,
                CompanySector = register.Sector,
                CompanySize = register.CompanySize,
                CompanyAbout = register.CompanyAbout,
                CompanyReview = register.CompanyReview,
                CompanyWebsite = register.Email,
                CompanyPassword = register.Password,
                SubSectorId = register.SubSector,
                Id = user.Id
            };

            await dbContext.Companies.AddAsync(company);
            dbContext.SaveChanges();

            return Ok(new Response { Status = "Success", Message = "User created successfully!", Data = company });
        }


        [HttpPost]
        [Route("register/jobSeeker")]
        public async Task<IActionResult> RegisterJobSeeker([FromBody] RegisterJobSeeker register)
        {
            var userExists = await userManager.FindByEmailAsync(register.jobSeekerEmail);
            if (userExists != null)
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "User already exists!" });

            ApplicationUser user = new ApplicationUser()
            {
                Email = register.jobSeekerEmail,
                SecurityStamp = Guid.NewGuid().ToString(),
                UserName = register.jobSeekerEmail
            };


            var result = await userManager.CreateAsync(user, register.jobSeekerPassword);
            if (!result.Succeeded)
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "User creation failed! Please check user details and try again.", Data = result });

            if (!await roleManager.RoleExistsAsync(UserRoles.Admin))
                await roleManager.CreateAsync(new IdentityRole(UserRoles.Admin));
            if (!await roleManager.RoleExistsAsync(UserRoles.Company))
                await roleManager.CreateAsync(new IdentityRole(UserRoles.Company));
            if (!await roleManager.RoleExistsAsync(UserRoles.JobSeeker))
                await roleManager.CreateAsync(new IdentityRole(UserRoles.JobSeeker));

            if (await roleManager.RoleExistsAsync(UserRoles.JobSeeker))
            {
                await userManager.AddToRoleAsync(user, UserRoles.JobSeeker);
            }

            JobSeeker jobSeeker = new JobSeeker()
            {
                JobSeekerFirstName = register.jobSeekerFirstName,
                JobSeekerLastName = register.jobSeekerLastName,
                JobSeekerMiddleName = register.jobSeekerMiddleName,
                JobSeekerAddress = register.jobSeekerAddress,
                JobSeekerAreaPinCode = register.jobSeekerAreaPinCode,
                JobSeekerDob = register.jobSeekerDob,
                JobSeekerEmail = register.jobSeekerEmail,
                JobSeekerGender = register.jobSeekerGender,
                JobSeekerPassword = register.jobSeekerPassword,
                JobSeekerPhoneNumber = register.jobSeekerPhoneNumber,
                JobSeekerProjects = register.Projects,
                JobSeekerResume = register.jobSeekerResume,
                JobSeekerSkills = register.jobSeekerSkills,
                JobSeekerType = register.jobSeekerType,
                JobSeekerEducations = register.jobSeekerEducations,
                JobSeekerJobHistories = register.jobSeekerJobHistories,
                Id = user.Id
            };

            await dbContext.JobSeekers.AddAsync(jobSeeker);
            dbContext.SaveChanges();

            return Ok(new Response { Status = "Success", Message = "User created successfully!", Data = jobSeeker });
        }
    }
}
