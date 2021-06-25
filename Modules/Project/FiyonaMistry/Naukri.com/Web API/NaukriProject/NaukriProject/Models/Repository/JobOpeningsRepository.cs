using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using NaukriProject.Authentication;
using NaukriProject.Models.IRepository;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NaukriProject.Models.Repository
{
    public class JobOpeningsRepository : GenericRepository<Job>, IJobOpenings
    {
        public JobOpeningsRepository(NaukriDbContext context) : base(context)
        {
        }

        public Job CloseJob(int cid, int jobid)
        {
            var del = context.Jobs.FirstOrDefault(x => x.CompanyId == cid && x.JobId == jobid);
            del.IsOpen = 0;
            context.SaveChanges();
            return del;
        }

        public Job EditJob(int cid, Job job, int jobid)
        {
            var con = context.Jobs.SingleOrDefault(x => x.CompanyId == cid && x.JobId == jobid);
            
            con.JobKeySkills = job.JobKeySkills;
            con.JobLocation = job.JobLocation;
            con.JobName = job.JobName;
            con.JobRole = job.JobRole;
            con.JobSalary = job.JobSalary;
            con.JobExperienceNeeded = job.JobExperienceNeeded;
            con.JobEmploymentType = job.JobEmploymentType;
            con.JobDescription = job.JobDescription;

            context.SaveChanges();
            return con;
        }

        public Job OpenJob(int cid, Job job)
        {
            var ID = context.Companies.FirstOrDefault(x => x.CompanyId == cid);
            job.CompanyId = cid;
            context.Jobs.Add(job);
            
            context.SaveChanges();
            return job;
        }

        public IQueryable ViewOpenJobs(int cid)
        {
            var view = context.Jobs.Where(x => x.CompanyId == cid).Select(x => new { x.JobId, x.JobName , x.JobLocation, x.JobKeySkills, x.JobDescription, x.JobRole, x.JobExperienceNeeded, x.JobSalary, x.JobEmploymentType, x.IsOpen, x.CompanyId}).Distinct();
            return view;
        }
    }
}
