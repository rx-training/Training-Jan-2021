using System;
using System.Collections;
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
    [Authorize(Roles = UserRoles.Company)]
    [Route("api/[controller]")]
    [ApiController]
    public class CompaniesController : ControllerBase
    {
        ICompany company;
        IJobOpenings openings;
        IApplicants applicants;
        NaukriDbContext context;

        public CompaniesController(ICompany company, IJobOpenings openings, IApplicants applicants, NaukriDbContext context)
        {
            this.company = company;
            this.openings = openings;
            this.applicants = applicants;
            this.context = context;
        }

        // Get their company details
        [HttpGet("{cid}")]
        public IActionResult GetCompany(int cid)
        {
            //var check = from user in context.Users 
            //            from comp in context.Companies 
            //                where user.Id == comp.Id 
            //                    && comp.CompanyId == cid 
            //            select user.Id;
            //var userId = from user in context.Users
            //             select user.Id;
            //var userId = context.Users;
            //var compId = from comp in context.Companies
            //             //where comp.CompanyId == cid
            //             select comp.Id;
            //if(compId != null && userId.Any(x => x.Id == compId.ToString()) == true)
            //{
            //    var compId1 = company.GetById(cid);
            //    return StatusCode(StatusCodes.Status200OK, new Response { Status = "Success", Message = "Company found successfully!", Data = userId });
            //}
            //else
            //{
            //    return StatusCode(StatusCodes.Status404NotFound, new Response { Status = "Error 404", Message = "Company not found!", Data = compId });
            //}

            //c1798c32 - 17a4 - 4c81 - b648 - 8f1ac621174d
            //c1798c32 - 17a4 - 4c81 - b648 - 8f1ac621174d

            //if (check == true)
            //{
            if (!company.Any(x => x.CompanyId == cid))
            {
                return StatusCode(StatusCodes.Status404NotFound, new Response { Status = "Error 404", Message = "Company not found!" });
            }
            else
            {
                var compId = company.GetById(cid);
                return StatusCode(StatusCodes.Status200OK, new Response { Status = "Success", Message = "Company found successfully!", Data = compId });
            }
            //}
            //else
            //{
            //    return StatusCode(StatusCodes.Status403Forbidden, new Response { Status = "Error 403", Message = "Cannot change details of other Job Seekers" });
            //}

        }

        // Edit their company's details
        [HttpPut("{cid}")]
        public IActionResult PutCompany(int cid, Company companies)
        {
            var compId = company.Any(x => x.CompanyId == cid);
            if (compId == true)
            {
                var updated = company.Update(cid, companies);
                return StatusCode(StatusCodes.Status200OK, new Response { Status = "Success", Message = "Company details updated successfully!", Data = updated});
            }
            else
            {
                return StatusCode(StatusCodes.Status404NotFound, new Response { Status = "Error 404", Message = "Company not found!" });
            }
        }

        // View the Job Openings    
        [HttpGet("{cid}/JobOpenings")]
        public IActionResult GetOpening(int cid)
        {
            if(!company.Any(x => x.CompanyId == cid))
            {
                return StatusCode(StatusCodes.Status404NotFound, new Response { Status = "Error 404", Message = "Company not found!" });
            }
            else
            {
                var compId = openings.ViewOpenJobs(cid);
                return StatusCode(StatusCodes.Status200OK, new Response { Status = "Success", Message = "Job Openings found successfully!", Data = compId });
            }
        }

        // View JobSeekers who has applied for the job
        [HttpGet("{cid}/Applicants/{jobid}")]
        public IActionResult GetApplieds(int cid, int jobid)
        {
            if (!applicants.Any(x => x.CompanyId == cid))
            {
                return StatusCode(StatusCodes.Status404NotFound, new Response { Status = "Error 404", Message = "Company not found!" });
            }
            else if (!applicants.Any(x => x.JobId == jobid))
            {
                return StatusCode(StatusCodes.Status404NotFound, new Response { Status = "Error 404", Message = "Job not found!" });
            }
            else
            {
                var compId = applicants.JSappliedForJobs(cid, jobid);
                return StatusCode(StatusCodes.Status200OK, new Response { Status = "Success", Message = "Applicants found successfully!", Data = compId });
            }
        }

        // Add new Job Opening
        [HttpPost("{cid}")]
        public IActionResult PostOpening(int cid,[FromBody] Job job)
        {
            if (!company.Any(x => x.CompanyId == cid))
            {
                return StatusCode(StatusCodes.Status404NotFound, new Response { Status = "Error 404", Message = "Company not found!" });
            }
            else
            {
                var compId = openings.OpenJob(cid, job);
                return StatusCode(StatusCodes.Status200OK, new Response { Status = "Success", Message = "Job Opening added successfully!", Data = compId });
            }
        }

        // Edit the Job Opening
        [HttpPut("{cid}/JobOpenings/{jobid}")]
        public IActionResult PutOpening(int cid, [FromBody] Job job, int jobid)
        {
            if (!openings.Any(x => x.CompanyId == cid))
            {
                return StatusCode(StatusCodes.Status404NotFound, new Response { Status = "Error 404", Message = "Company not found!" });
            }
            else if (!openings.Any(x => x.JobId == jobid))
            {
                return StatusCode(StatusCodes.Status404NotFound, new Response { Status = "Error 404", Message = "Job Opening not found!" });
            }
            else
            {
                var compId = openings.EditJob(cid, job, jobid);
                return StatusCode(StatusCodes.Status200OK, new Response { Status = "Success", Message = "Job Opening details updated successfully!", Data = compId });
            }
        }

        // Close the Job Opening
        [HttpDelete("{cid}/JobOpenings/{jobid}")]
        public IActionResult DeleteOpening(int cid, int jobid)
        {
            if (!openings.Any(x => x.CompanyId == cid))
            {
                return StatusCode(StatusCodes.Status404NotFound, new Response { Status = "Error 404", Message = "Company not found!" });
            }
            else if (!openings.Any(x => x.JobId == jobid))
            {
                return StatusCode(StatusCodes.Status404NotFound, new Response { Status = "Error 404", Message = "Job Opening not found!" });
            }
            else
            {
                var compId = openings.CloseJob(cid, jobid);
                return StatusCode(StatusCodes.Status200OK, new Response { Status = "Success", Message = "Job Opening closed successfully!", Data = compId });
            }
        }
    }
}
