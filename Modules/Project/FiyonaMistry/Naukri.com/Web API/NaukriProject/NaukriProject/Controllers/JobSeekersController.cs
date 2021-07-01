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
    [Route("api/[controller]")]
    [ApiController]
    public class JobSeekersController : ControllerBase
    {
        IJobSeeker jobSeeker;
        ICompany Company;
        IJobOpenings jobOpenings;
        IApplicants applicants;

        public JobSeekersController(IJobSeeker jobSeeker, ICompany company, IJobOpenings jobOpenings, IApplicants applicants)
        {
            this.jobSeeker = jobSeeker;
            this.Company = company;
            this.jobOpenings = jobOpenings;
            this.applicants = applicants;
        }

        // View their details
        [Authorize(Roles = UserRoles.JobSeeker)]
        [HttpGet("{jsid}")]
        public IActionResult GetJobSeeker(int jsid)
        {
            var id = jobSeeker.GetAll().ToList().Find(x => x.Id == User.Claims.FirstOrDefault(x => x.Type == "UserId").Value);
            if (id == null)
            {
                return StatusCode(StatusCodes.Status204NoContent, new Response { Status = "Error 204", Message = "Please enter some value" });
            }
            if (id.JobSeekerId != jsid)
            {
                return StatusCode(StatusCodes.Status403Forbidden, new Response { Status = "Error 403", Message = "Cannot see details of other Job Seekers" });
            }
            if (!jobSeeker.Any(x => x.JobSeekerId == jsid))
            {
                return StatusCode(StatusCodes.Status404NotFound, new Response { Status = "Error 404", Message = "JobSeeker not found!" });
            }
            else
            {
                var jsId = jobSeeker.GetByJobSeekerId(jsid);
                return StatusCode(StatusCodes.Status200OK, new Response { Status = "Success", Message = "JobSeeker found successfully!", Data = jsId });
            }
        }

        // Edit their details
        [Authorize(Roles = UserRoles.JobSeeker)]
        [HttpPut("{jsid}")]
        public IActionResult PutJobSeeker(int jsid, JobSeeker seeker)
        {
            var id = jobSeeker.GetAll().ToList().Find(x => x.Id == User.Claims.FirstOrDefault(x => x.Type == "UserId").Value);
            if (id == null)
            {
                return StatusCode(StatusCodes.Status204NoContent, new Response { Status = "Error 204", Message = "Please enter some value" });
            }
            if (id.JobSeekerId != jsid)
            {
                return StatusCode(StatusCodes.Status403Forbidden, new Response { Status = "Error 403", Message = "Cannot change details of other Job Seekers" });
            }
            if (!jobSeeker.Any(x => x.JobSeekerId == jsid))
            {
                return StatusCode(StatusCodes.Status404NotFound, new Response { Status = "Error 404", Message = "JobSeeker not found!" });
            }
            else
            {
                var jsId = jobSeeker.UpdateJobSeeker(jsid, seeker);
                return StatusCode(StatusCodes.Status200OK, new Response { Status = "Success", Message = "JobSeeker details updated successfully!", Data = jsId });
            }
        }


        // Add new Education details
        [Authorize(Roles = UserRoles.JobSeeker)]
        [HttpPost("educationDetails/{jsid}")]
        public IActionResult PostJobSeekerEducation(int jsid, JobSeekerEducation seeker)
        {
            var id = jobSeeker.GetAll().ToList().Find(x => x.Id == User.Claims.FirstOrDefault(x => x.Type == "UserId").Value);
            if (id == null)
            {
                return StatusCode(StatusCodes.Status204NoContent, new Response { Status = "Error 204", Message = "Please enter some value" });
            }
            if (id.JobSeekerId != jsid)
            {
                return StatusCode(StatusCodes.Status403Forbidden, new Response { Status = "Error 403", Message = "Cannot change details of other Job Seekers" });
            }
            if (!jobSeeker.Any(x => x.JobSeekerId == jsid))
            {
                return StatusCode(StatusCodes.Status404NotFound, new Response { Status = "Error 404", Message = "JobSeeker not found!" });
            }
            else
            {
                var jsId = jobSeeker.PostJobSeekerEducation(jsid, seeker);
                return StatusCode(StatusCodes.Status200OK, new Response { Status = "Success", Message = "JobSeeker details updated successfully!", Data = jsId });
            }
        }


        // View companies details
        [HttpGet("companies")]
        public IEnumerable<Company> GetCompanies()
        {
            return Company.GetAll();
        }

        // View Job Openings
        [HttpGet("jobOpenings")]
        public IEnumerable<Job> GetJobs()
        {
            return jobOpenings.GetAll();
        }

        // Best Places to Work
        [HttpGet("bestPlaces")]
        public IEnumerable<BestPlace> GetBestPlaces()
        {
            return jobSeeker.GetBestPlaces();
        }

        // Search Job Openings
        [HttpGet("jobOpenings/search/{job}")]
        public IActionResult GetJobsBySearch(string job)
        {
            if(job == null)
            {
                return StatusCode(StatusCodes.Status204NoContent, new Response { Status = "Error 204", Message = "Please enter some value" });
            }
            else
            {
                var search = jobSeeker.GetJob(job);
                return StatusCode(StatusCodes.Status200OK, new Response { Status = "Success", Message = "Jobs found successfully", Data = search });
            }
        }

        // Can apply for Open Jobs
        [Authorize(Roles = UserRoles.JobSeeker)]
        [HttpPost("{jsid}/ApplyFor/{cid}/{jobid}")]
        public IActionResult ApplyJob(int jsid, int cid, int jobid)
        {
            var id = jobSeeker.GetAll().ToList().Find(x => x.Id == User.Claims.FirstOrDefault(x => x.Type == "UserId").Value);
            if (id == null)
            {
                return StatusCode(StatusCodes.Status204NoContent, new Response { Status = "Error 204", Message = "Please enter some value" });
            }
            if (id.JobSeekerId != jsid)
            {
                return StatusCode(StatusCodes.Status403Forbidden, new Response { Status = "Error 403", Message = "Cannot change details of other Job Seekers" });
            }
            if (!jobSeeker.Any(x => x.JobSeekerId == jsid))
            {
                return StatusCode(StatusCodes.Status404NotFound, new Response { Status = "Error 404", Message ="JobSeekeno found!" });
            }
            else if (!Company.Any(x => x.CompanyId == cid))
            {
                return StatusCode(StatusCodes.Status404NotFound, new Response { Status = "Error 404", Message = "Company not found!" });
            }
            else if (!jobOpenings.Any(x => x.JobId == jobid))
            {
                return StatusCode(StatusCodes.Status404NotFound, new Response { Status = "Error 404", Message ="Job not found!" });
            }
            else
            {
                var jsId = applicants.CreateApplicant(jsid, cid, jobid);
                return StatusCode(StatusCodes.Status200OK, new Response { Status = "Success", Message = "Applied for job successfully!", Data = jsId });
            }
        }
    }
}
