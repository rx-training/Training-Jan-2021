using Day11Assignment.Models;
using System.Linq;
using System;

namespace Day11Assignment
{
    class DoctorInfo
    {
        public void InsertDoctor(string fname, string lname, string address, int contact, int age, string dept)
        {
            using (var context = new ERCore1DBContext())
            {

                var deptInfo = context.Departments
                                    .Where(p => p.Name == dept)
                                    .Select(p => new
                                    {
                                        deptId = p.Id
                                    }).SingleOrDefault();

                var departmentId = deptInfo.deptId;

                var doctor = new Doctor() { FirstName = fname, Lastname = lname, Address = address, Contact = contact, Age = age, DepartmentId = departmentId };
                context.Doctors.Add(doctor);
                context.SaveChanges();


            }
        }

        public void UpdateDoctor(string oldFname, string oldLname, string fname, string lname, string address, int contact, int age, string dept)
        {
            using (var context = new ERCore1DBContext())
            {

                var updateDoctor = context.Doctors
                                       .SingleOrDefault<Doctor>(x => x.FirstName == oldFname && x.Lastname == oldLname);


                var deptInfo = context.Departments
                                    .Where(p => p.Name == dept)
                                    .Select(p => new
                                    {
                                        deptId = p.Id
                                    }).SingleOrDefault();

                var departmentId = deptInfo.deptId;

                updateDoctor.FirstName = fname;
                updateDoctor.Lastname = lname;
                updateDoctor.Address = address;
                updateDoctor.Contact = contact;
                updateDoctor.Age = age;
                updateDoctor.DepartmentId = departmentId;
                context.SaveChanges();

            }
        }

        public void DeleteDoctor(string oldFname, string oldLname)
        {
            using (var context = new ERCore1DBContext())
            {

                var deleteDoctor = context.Doctors
                                           .SingleOrDefault<Doctor>(x => x.FirstName == oldFname && x.Lastname == oldLname);

                context.Doctors.Remove(deleteDoctor);
                context.SaveChanges();

            }
        }

        public void PatientDoctorReport(string oldFname)
        {
            using (var context = new ERCore1DBContext())
            {

                var report = context.VDoctorPatientReports
                                    .Where(x => x.Doctor == oldFname)
                                    .ToList();


                foreach (var item in report)
                {
                    Console.WriteLine($"Patient: {item.Patient}\nContact: {item.Contact}\nAge: {item.Age}\nAddress: {item.Address}\nProblem: {item.ProblemDesc}\nDepartment: {item.Department}\nHealthCare Taker: {item.HealthCarePerson}\nDoctor:{item.Doctor}");
                    Console.WriteLine();
                }
            }
        }

    }
}
