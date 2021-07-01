using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NaukriProject.Models.IRepository
{
    public interface IJobSeeker : GenericInterface<JobSeeker>
    {
        IEnumerable<Job> GetJob(string job);
        IEnumerable<BestPlace> GetBestPlaces();
        public JobSeeker GetByJobSeekerId(int id);
        JobSeeker UpdateJobSeeker(int id, JobSeeker entity);
        JobSeekerEducation PostJobSeekerEducation(int id, JobSeekerEducation entity);
    }
}
