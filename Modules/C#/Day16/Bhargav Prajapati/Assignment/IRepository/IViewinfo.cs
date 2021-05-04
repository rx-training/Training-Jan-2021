using Assignment.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment.IRepository
{
    public interface IViewinfo
    {
        public IQueryable<PatientDetail> findPatientByDoctor(string doctorName);
        public IQueryable<PatientDrugTable> detailsofdrug(string patientName);
        public IQueryable<ReportTable> ReportPatient(string PatientNae);
        public IList<Doctor> GetAllDoctor();
        public IList<Doctor> DoctorById(string Name);
    }
}
