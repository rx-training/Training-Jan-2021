using Microsoft.EntityFrameworkCore;
using NaukriProject.Models.IRepository;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NaukriProject.Models.Repository
{
    public class JobSeekerRepository : GenericRepository<JobSeeker>, IJobSeeker
    {
        public JobSeekerRepository(NaukriDbContext context) : base(context)
        {
        }

        public IEnumerable<Job> GetJob(string job)
        {
            var search = context.Jobs.Where(x => x.JobKeySkills.Contains(job) || x.JobLocation == job || x.JobRole == job || x.Company.CompanyName.Contains(job)).Include(x => x.Company);
            return search;
        }
        public IEnumerable<BestPlace> GetBestPlaces()
        {
            return context.BestPlaces;
        }

        public JobSeeker GetByJobSeekerId(int id)
        {
            var jsid = context.JobSeekers.Include(x => x.JobSeekerEducations).Include(x => x.JobSeekerJobHistories).FirstOrDefault(x => x.JobSeekerId == id);
            return jsid;
        }

        public JobSeeker UpdateJobSeeker(int id, JobSeeker entity)
        {
            var educationDetail = entity.JobSeekerEducations;
            foreach (var detail in educationDetail)
            {
                context.Entry(detail).State = EntityState.Modified;
            }
            context.Entry(entity).State = EntityState.Modified;
            context.SaveChanges();
            return entity;
        }

        public JobSeekerEducation PostJobSeekerEducation(int id, JobSeekerEducation entity)
        {
            if(context.JobSeekerEducations.Any(x => x.JobSeekerId == id))
            {
                context.Add(entity);
                context.SaveChanges();
            }
            return entity;
        }
    }
}
