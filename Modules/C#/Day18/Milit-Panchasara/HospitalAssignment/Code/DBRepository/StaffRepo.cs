using HospitalAssignment.Code.Interfaces;
using HospitalAssignment.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HospitalAssignment.Code.DBRepository
{
    public class StaffRepo : GenericRepo<staff>, IStaff
    {
        public StaffRepo(HospitalContext _context) : base(_context)
        {
        }

        public override IEnumerable<staff> Index()
        {
            return context.staff.Include(x => x.Department);
        }

        public IEnumerable<staff> DoctorIndex()
        {
            return context.staff.Include(x => x.Department).Where(x => x.JobType == "Doctor").ToList();
        }

        public IEnumerable<staff> AssistantIndex()
        {
            return context.staff.Include(x => x.Department).Where(x => x.JobType == "Assistant").ToList();
        }

        public override IEnumerable<staff> Find(Func<staff, bool> predicate)
        {
            return context.staff.Include(x => x.Department).Where(predicate);
        }

        public IEnumerable<VPatientsWithStaff> GetStaffPatientsData(int sid)
        {
            return context.VPatientsWithStaffs.Where(x => x.StaffId == sid).ToList();
        }
    }
}
