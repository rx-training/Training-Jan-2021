using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NaukriProject.Models.IRepository
{
    public interface IJobOpenings : GenericInterface<Job>
    {
        IQueryable ViewOpenJobs(int cid);
        Job OpenJob(int cid, Job job);
        Job EditJob(int id, Job job, int cid);
        Job CloseJob(int cid, int jobid);
    }
}
