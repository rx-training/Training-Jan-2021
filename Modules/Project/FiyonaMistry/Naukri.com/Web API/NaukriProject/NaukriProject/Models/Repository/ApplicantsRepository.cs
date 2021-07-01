using Microsoft.EntityFrameworkCore;
using NaukriProject.Models.IRepository;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NaukriProject.Models.Repository
{
    public class ApplicantsRepository : GenericRepository<AppliedForJob>, IApplicants
    {
        public ApplicantsRepository(NaukriDbContext context) : base(context)
        {
        }

        public AppliedForJob CreateApplicant(int jsid, int cid, int jobid)
        {
            AppliedForJob applicant = new AppliedForJob();

            applicant.CompanyId = cid;
            applicant.JobId = jobid;
            applicant.JobSeekerId = jsid;

            context.Add(applicant);
            context.SaveChanges();
            return applicant;
        }

        public IEnumerable JSappliedForJobs(int cid, int jobid)
        {
            var applicant = context.AppliedForJobs.Where(a => a.CompanyId == cid && a.JobId == jobid).Select(a => a.JobSeeker);
            return applicant;
        }


    }
}
