using HospitalAPI.IRepository;
using HospitalAPI.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HospitalAPI.Repository
{
    public class PatientRepository : GenericRepository<Patient>, IPatient
    {
        public PatientRepository(ERCore1DBContext context) : base(context)
        {

        }

        public override void Create(Patient patient)
        {
            context.Patients.Add(new Patient()
            {
                FirstName = patient.FirstName,
                LastName = patient.LastName,
                Contact = patient.Contact,
                Address = patient.Address,
                Age = patient.Age,
                ProblemDesc = patient.ProblemDesc,
                DepartmentId = patient.DepartmentId,
                HealthCareId = patient.HealthCareId
            });

            context.SaveChanges();
        }

        public override void Update(int id, Patient entity)
        {
            var existingPatient = context.Patients.Where(s => s.Id == id)
                                                    .SingleOrDefault<Patient>();

            existingPatient.FirstName = entity.FirstName;
            existingPatient.LastName = entity.LastName;
            existingPatient.Age = entity.Age;
            existingPatient.Address = entity.Address;
            existingPatient.Contact = entity.Contact;
            existingPatient.ProblemDesc = entity.ProblemDesc;
            existingPatient.DepartmentId = entity.DepartmentId;
            existingPatient.HealthCareId = entity.HealthCareId;

            context.SaveChanges();

        }

        public override void Delete(int id)
        {
            var patient = context.Patients
                .Where(s => s.Id == id)
                .SingleOrDefault();

            context.Patients.Remove(patient);
            context.SaveChanges();
        }

        public IEnumerable PatientMedicineReport(int id)
        {
            var patient = context.Patients.SingleOrDefault(x => x.Id == id);

            var report = context.VPatientMedicineReports
                                    .Where(x => x.Patient == (patient.FirstName + " " + patient.LastName))
                                    .ToList();

            return report;
        }
    }
}
