using HospitalAPI.IRepository;
using HospitalAPI.Models;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HospitalAPI.Repository
{
    public class DoctorRepository : GenericRepository<Doctor>, IDoctor
    {
        public DoctorRepository(ERCore1DBContext context) : base(context)
        {

        }


        public override void Create(Doctor doctor)
        {
            var dept = context.Departments.SingleOrDefault(x => x.Name == doctor.Department.Name);

            context.Doctors.Add(new Doctor()
            {
                FirstName = doctor.FirstName,
                Lastname = doctor.Lastname,
                Age = doctor.Age,
                Address = doctor.Address,
                Contact = doctor.Contact,
                DepartmentId=dept.Id
            });

            context.SaveChanges();
        }

        public override void Update(int id, Doctor entity)
        {
            var dept = context.Departments.SingleOrDefault(x => x.Name == entity.Department.Name);

            var existingDoctor = context.Doctors.Where(s => s.Id == id)
                                                    .SingleOrDefault<Doctor>();

            existingDoctor.FirstName = entity.FirstName;
            existingDoctor.Lastname = entity.Lastname;
            existingDoctor.Age = entity.Age;
            existingDoctor.Address = entity.Address;
            existingDoctor.Contact = entity.Contact;
            existingDoctor.DepartmentId = dept.Id;

            context.SaveChanges();

        }

        public override void Delete(int id)
        {
            var doctor = context.Doctors
                .Where(s => s.Id == id)
                .SingleOrDefault();

            context.Doctors.Remove(doctor);
            context.SaveChanges();
        }

        public IEnumerable PatientDoctorReport(int id)
        {
            var doctor = context.Doctors.SingleOrDefault(x => x.Id == id);

            var report = context.VDoctorPatientReports
                                    .Where(x => x.Doctor == (doctor.FirstName + " " + doctor.Lastname))
                                    .ToList();

            return report;
        }

    }
}
