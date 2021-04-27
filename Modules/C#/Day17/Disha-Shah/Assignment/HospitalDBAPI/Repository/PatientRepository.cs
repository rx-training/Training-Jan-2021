using HospitalDBAPI.IRepository;
using HospitalDBAPI.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HospitalDBAPI.Repository
{
    public class PatientRepository : GenericRepository<Patient>, IPatient
    {
        public PatientRepository(ERCore1DBContext context) : base(context)
        {

        }

        public IEnumerable PatientDoctors(int id)
        {
            var summaryDoctorPatient = context.PatientsDoctors
                                            .Include(p => p.Patient)
                                            .Include(p => p.Doctor)
                                            .Where(x => x.PatientId == id)
                                            .Select(x => new PatientsDoctor
                                            {
                                                PatientId = id,
                                                DoctorId = x.DoctorId,
                                                Patient = new Patient
                                                {
                                                    Id = id,
                                                    FirstName = x.Patient.FirstName,
                                                    LastName = x.Patient.LastName,
                                                    Address = x.Patient.Address,
                                                    Age = x.Patient.Age,
                                                    Contact = x.Patient.Contact,
                                                    ProblemDesc = x.Patient.ProblemDesc,
                                                    DepartmentId = x.Patient.DepartmentId,
                                                    Department = new Department
                                                    {
                                                        Id = x.Patient.Department.Id,
                                                        Name = x.Patient.Department.Name
                                                    },
                                                    HealthCareId = x.Patient.HealthCareId,
                                                    HealthCare = new HealthCare
                                                    {
                                                        Id = x.Patient.HealthCare.Id,
                                                        FirstName = x.Patient.HealthCare.FirstName,
                                                        Lastname = x.Patient.HealthCare.Lastname,
                                                        Address = x.Patient.HealthCare.Address,
                                                        Age = x.Patient.HealthCare.Age,
                                                        Contact = x.Patient.HealthCare.Contact
                                                    }
                                                },
                                                Doctor = new Doctor
                                                {
                                                    Id = x.Doctor.Id,
                                                    FirstName = x.Doctor.FirstName,
                                                    Lastname = x.Doctor.Lastname,
                                                    Address = x.Doctor.Address,
                                                    Age = x.Doctor.Age,
                                                    Contact = x.Doctor.Contact
                                                }
                                            }
                                            );

            return summaryDoctorPatient;
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