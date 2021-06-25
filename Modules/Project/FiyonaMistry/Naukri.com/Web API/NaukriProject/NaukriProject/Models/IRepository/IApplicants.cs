using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NaukriProject.Models.IRepository
{
    public interface IApplicants : GenericInterface<AppliedForJob>
    {
        IEnumerable JSappliedForJobs(int cid, int jobid);
        AppliedForJob CreateApplicant(int jsid, int cid, int jobid);
    }
}
