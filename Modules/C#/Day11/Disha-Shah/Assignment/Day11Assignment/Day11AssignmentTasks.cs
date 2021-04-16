using Day11Assignment.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System;
using System.Collections.Generic;

namespace Day11Assignment
{
    class Day11AssignmentTasks
    {
        static void Main(string[] args)
        {
            bool moreChoice = true;
            while (moreChoice)
            {
                Console.WriteLine("Select operation you want to perform:");
                Console.WriteLine("1: Insert a Doctor");
                Console.WriteLine("2. Update a Doctor");
                Console.WriteLine("3. Delete a Doctor");
                Console.WriteLine("4. Get Report of Patients for a particular Doctor");
                Console.WriteLine("5. Get Report of Medicines List for a particular Patient");
                Console.WriteLine("6. Summary Report of Doctor and Patients");
                Console.WriteLine("Enter your operation");
                int op = Convert.ToInt32(Console.ReadLine());
                switch (op)
                {
                    case 1:
                        InsertDoctor();
                        break;
                    case 2:
                        UpdateDoctor();
                        break;
                    case 3:
                        DeleteDoctor();
                        break;
                    case 4:
                        PatientDoctorReport();
                        break;
                    case 5:
                        PatientMedicineReport();
                        break;
                    case 6:
                        PatientDoctorSummary();
                        break;
                    default:
                        Console.WriteLine("Please choose correct option");
                        break;
                }

                Console.WriteLine("Want to perform more operations? (Y/N)");
                char choice = Convert.ToChar(Console.ReadLine());
                if(choice == 'Y' || choice == 'y')
                {
                    moreChoice = true;
                }
                else
                {
                    moreChoice = false;
                }

            }

        }

        public static void InsertDoctor()
        {
            using (var context = new ERCore1DBContext())
            {
                Console.WriteLine("Enter Doctor Firstname: ");
                string fname = Console.ReadLine();
                Console.WriteLine("Enter Lastname:");
                string lname = Console.ReadLine();
                Console.WriteLine("Enter Address:");
                string address = Console.ReadLine();
                Console.WriteLine("Enter Contact No.:");
                int contact = Convert.ToInt32(Console.ReadLine());
                Console.WriteLine("Enter Age:");
                int age = Convert.ToInt32(Console.ReadLine());
                Console.WriteLine("Enter Department name:");
                string dept = Console.ReadLine();
                var deptInfo = context.Departments
                                    .Where(p => p.Name == dept)
                                    .Select(p => new
                                    {
                                        deptId = p.Id
                                    }).SingleOrDefault();

                var departmentId = deptInfo.deptId;

                var doctor = new Doctor() { FirstName = fname, Lastname = lname, Address=address, Contact=contact, Age=age, DepartmentId=departmentId};
                context.Doctors.Add(doctor);
                context.SaveChanges();

                Console.WriteLine("Data Added Successfully");
            }
        }

        public static void UpdateDoctor()
        {
            using (var context = new ERCore1DBContext())
            {
                Console.WriteLine("Enter Firstname of Doctor whose information is to be modified:");
                string oldFname = Console.ReadLine();
                Console.WriteLine("Enter lastname of Doctor whose information is to be modified:");
                string oldLname = Console.ReadLine();
                var updateDoctor = context.Doctors
                                       .SingleOrDefault<Doctor>(x => x.FirstName == oldFname && x.Lastname==oldLname);

                Console.WriteLine("Enter Doctor Firstname: ");
                string fname = Console.ReadLine();
                Console.WriteLine("Enter Lastname:");
                string lname = Console.ReadLine();
                Console.WriteLine("Enter Address:");
                string address = Console.ReadLine();
                Console.WriteLine("Enter Contact No.:");
                int contact = Convert.ToInt32(Console.ReadLine());
                Console.WriteLine("Enter Age:");
                int age = Convert.ToInt32(Console.ReadLine());
                Console.WriteLine("Enter Department name:");
                string dept = Console.ReadLine();
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

                Console.WriteLine("Data Updated Successfully");
            }
        }

        public static void DeleteDoctor()
        {
            using (var context = new ERCore1DBContext())
            {
                Console.WriteLine("Enter Firstname of Doctor whose information is to be deleted:");
                string oldFname = Console.ReadLine();
                Console.WriteLine("Enter lastname of Doctor whose information is to be deleted:");
                string oldLname = Console.ReadLine();

                var deleteDoctor = context.Doctors
                                           .SingleOrDefault<Doctor>(x => x.FirstName == oldFname && x.Lastname == oldLname);

                context.Doctors.Remove(deleteDoctor);
                context.SaveChanges();

                Console.WriteLine("Data deleted successfully");
            }
        }

        public static void PatientDoctorReport()
        {
            using (var context = new ERCore1DBContext())
            {
                Console.WriteLine("Enter Name of Doctor whose information is to be searched:");
                string oldFname = Console.ReadLine();
                
                var report = context.VDoctorPatientReports
                                    .Where(x=>x.Doctor==oldFname)
                                    .ToList();

                Console.WriteLine($"Information of Patients under {oldFname}:");
                Console.WriteLine();
                foreach (var item in report)
                {
                    Console.WriteLine($"Patient: {item.Patient}\nContact: {item.Contact}\nAge: {item.Age}\nAddress: {item.Address}\nProblem: {item.ProblemDesc}\nDepartment: {item.Department}\nHealthCare Taker: {item.HealthCarePerson}\nDoctor:{item.Doctor}");
                    Console.WriteLine();
                }
            }
        }

        public static void PatientMedicineReport()
        {
            using (var context = new ERCore1DBContext())
            {
                Console.WriteLine("Enter Name of Patient whose information is to be searched:");
                string oldFname = Console.ReadLine();

                var report = context.VPatientMedicineReports
                                    .Where(x => x.Patient == oldFname)
                                    .ToList();

                Console.WriteLine($"Medicines Information of {oldFname}:");
                Console.WriteLine();
                foreach (var item in report)
                {
                    Console.WriteLine($"Patient: {item.Patient}\nContact: {item.Contact}\nAge: {item.Age}\nProblem: {item.ProblemDesc}\nDepartment: {item.Department}\nMedicine: {item.Drugs}\nMedicine Description:{item.Description}\nExpiry date: {item.ExpiryDate}\nPrice: {item.Price}\nMedicineTime: {item.MedicineTime}");
                    Console.WriteLine();
                }
            }
        }

        public static void PatientDoctorSummary()
        {
            using (var context = new ERCore1DBContext())
            {
                var summaryDoctorPatient = context.Patients
                                            .Include(p => p.Department)
                                            .Include(p => p.HealthCare)
                                            .Include(p => p.PatientsDoctors)
                                                .ThenInclude(g => g.Doctor)
                                            .Include(p => p.PatientsDrugsShifts)
                                                .ThenInclude(g => g.Drugs)
                                                .ThenInclude(h => h.PatientsDrugsShifts)
                                                    .ThenInclude(i => i.Shift)
                                            .ToList();


                Console.WriteLine("Patients Details:");
                Console.WriteLine();
                foreach (var item in summaryDoctorPatient)
                {
                    Console.WriteLine($"Patient name: {item.FirstName} {item.LastName}\nAge: {item.Age}\nContact No.: {item.Contact}\nProblem: {item.ProblemDesc}\nDepartment: {item.Department.Name}\nHealthCare Taker: {item.HealthCare.FirstName} {item.HealthCare.Lastname}");
                    Console.Write("Doctors:");
                    var doctorsList = new List<string>();

                    foreach (var doctors in item.PatientsDoctors)
                    {
                        doctorsList.Add(doctors.Doctor.FirstName + " " + doctors.Doctor.Lastname);
                    }
                    Console.Write(String.Join(",", doctorsList.ToArray()));

                    Console.WriteLine();
                    Console.WriteLine("Medicines List:");
                    foreach (var drugs in item.PatientsDrugsShifts)
                    {
                        Console.WriteLine($"{drugs.Drugs.Name}\t{drugs.Shift.Name}");
                    }
                    Console.WriteLine();

                }
            }
        }
    }
}
