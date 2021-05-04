using Assignment.IRepository;
using Assignment.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment.Repository
{
    public class ViewInfoRepository : IViewinfo
    {
        private readonly HospitaldatabaseContext context;

        public ViewInfoRepository(HospitaldatabaseContext ctx)
        {
            context = ctx;
        }

        public IList<Doctor> GetAllDoctor()
        {


                IList<Doctor> data = context.Doctors.ToList();
                return data;
                
            
        }

        public IList<Doctor> DoctorById(string Name)
        {
            IList<Doctor> data = context.Doctors.Where(s=>s.DoctorName==Name).ToList();
            return data;
        }

        public IQueryable<PatientDrugTable> detailsofdrug(string patientName)
        {
            var druglist = context.PatientDrugTables.Include(s => s.Patient).Include(s => s.Drug).Where(s=>s.Patient.PatientName==patientName);
            return druglist;

        }

        public IQueryable<PatientDetail> findPatientByDoctor(string doctorName)
        {
            var data = context.Doctors.Single(s => s.DoctorName == doctorName);
            var patientdata = context.PatientDetails.Where(s => s.DoctorId==data.DoctorId);
            return patientdata;



        }

        public IQueryable<ReportTable> ReportPatient(string Patientname)
        {
            //var find= context.PatientDetails.SingleOrDefault(s => s.PatientName==Patientname);
            var data = context.ReportTables.Include(p => p.Doctor).Include(p=>p.Patient).Where(p=>p.Patient.PatientName==Patientname);
            return data;
        }
    }
}
