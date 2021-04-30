using HospitalAssignment.Code.Interfaces;
using HospitalAssignment.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HospitalAssignment.Code.DBRepository
{
    public class PatientRepo : GenericRepo<Patient> , IPatient
    {
        public PatientRepo(HospitalContext _context) : base(_context)
        {
        }

        public override IEnumerable<Patient> Index()
        {
            return context.Patients.Include(x => x.Department);
        }

        public override IEnumerable<Patient> Find(Func<Patient, bool> predicate)
        {
            return context.Patients.Include(x => x.Department).Where(predicate);
        }

        public IEnumerable<VPatientsWithStaff> GetAllPatientsStaffReport()
        {
            return context.VPatientsWithStaffs;
        }

        public IEnumerable<VPatientsWithStaff> GetPatientStaffReport(int pid)
        {
            return context.VPatientsWithStaffs.Where(x => x.Id == pid).ToList();
        }

        public IEnumerable<VPatientsMedicine> GetPatientMedicines(int pid)
        {
            return context.VPatientsMedicines.Where(x => x.PatientId == pid).ToList();
        }

        public IEnumerable<VPatientsWithStaff>? SetPatientsStaff(int pid, List<AssignedStaff> staff)
        {
            foreach (var person in staff)
            {
                if(!context.staff.Any(x => x.Id == person.StaffId))
                {
                    return null;
                }
                person.PatientId = pid;
            }
            context.AssignedStaffs.AddRange(staff);
            context.SaveChanges();

            return context.VPatientsWithStaffs.Where(x => x.Id == pid).ToList();
        }
    }
}
