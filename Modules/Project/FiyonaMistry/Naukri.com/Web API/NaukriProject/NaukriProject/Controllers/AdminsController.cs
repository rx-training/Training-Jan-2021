using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NaukriProject.Authentication;
using NaukriProject.Models;
using NaukriProject.Models.IRepository;

namespace NaukriProject.Controllers
{
    [Authorize(Roles = UserRoles.Admin)]
    [Route("api/[controller]")]
    [ApiController]
    public class AdminsController : ControllerBase
    {
        IAdmin admin;
        ICompany company;
        IJobSeeker jobSeeker;

        public AdminsController(IAdmin admin, IJobSeeker jobSeeker, ICompany company)
        {
            this.admin = admin;
            this.company = company;
            this.jobSeeker = jobSeeker;
        }

        // Can view Companies
        [HttpGet("Companies")]
        public IEnumerable<Company> GetCompanies()
        {
            return company.GetAll();
        }

        // Can view a particular Company
        [HttpGet("Companies/{cid}")]
        public IActionResult GetCompany(int cid)
        {
            if (!company.Any(x => x.CompanyId == cid))
            {
                return StatusCode(StatusCodes.Status404NotFound, new Response { Status = "Error 404", Message = "Company not found!" });
            }
            else
            {
                var compId = company.GetById(cid);
                return StatusCode(StatusCodes.Status200OK, new Response { Status = "Success", Message = "Company found successfully!", Data = compId });
            }
        }

        // Can view JobSeeker
        [HttpGet("JobSeekers")]
        public IEnumerable<JobSeeker> GetJobSeekers()
        {
            return jobSeeker.GetAll();
        }

        // Can view a particular Company
        [HttpGet("JobSeekers/{jsid}")]
        public IActionResult GetJobSeeker(int jsid)
        {
            if (!jobSeeker.Any(x => x.JobSeekerId == jsid))
            {
                return StatusCode(StatusCodes.Status404NotFound, new Response { Status = "Error 404", Message = "JobSeeker not found!" });
            }
            else
            {
                var jsId = jobSeeker.GetById(jsid);
                return StatusCode(StatusCodes.Status200OK, new Response { Status = "Success", Message = "JobSeeker found successfully!", Data = jsId });
            }
        }

        // Delete a company
        [HttpDelete("Companies/{cid}")]
        public IActionResult DeleteCompany(int cid)
        {
            if (!company.Any(x => x.CompanyId == cid))
            {
                return StatusCode(StatusCodes.Status404NotFound, new Response { Status = "Error 404", Message = "Company not found!" });
            }
            else
            {
                var compId = company.Delete(cid);
                return StatusCode(StatusCodes.Status200OK, new Response { Status = "Success", Message = "Company deleted successfully!", Data = compId });
            }
        }

        // Delete a JobSeeker
        [HttpDelete("JobSeekers/{jsid}")]
        public IActionResult DeleteJobSeeker(int jsid)
        {
            if (!jobSeeker.Any(x => x.JobSeekerId == jsid))
            {
                return StatusCode(StatusCodes.Status404NotFound, new Response { Status = "Error 404", Message = "JobSeeker not found!" });
            }
            else
            {
                var jsId = jobSeeker.Delete(jsid);
                return StatusCode(StatusCodes.Status200OK, new Response { Status = "Success", Message = "JobSeeker deleted successfully!", Data = jsId });
            }
        }
    }
}
