using Assignment.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;

namespace Assignment
{
    class Program
    {
        static void Main(string[] args)
        {
            var breakLoop = false;
            while (!breakLoop)
            {
                Console.WriteLine();
                Console.WriteLine("Select Action:");
                Console.WriteLine("Press 1 to insert doctor");
                Console.WriteLine("Press 2 to update doctor");
                Console.WriteLine("Press 3 to delete doctor");
                Console.WriteLine("Press 4 to see doctor's patient report");
                Console.WriteLine("Press 5 to see patient's medicine report");
                Console.WriteLine("Press 6 to see all doctors-patients report");
                Console.WriteLine("Press any other key to exit");
                var input = Console.ReadLine();
                Console.WriteLine();


                HospitalContext connection = new HospitalContext();
                Staff doctor = new Staff();
                if (input == "1")
                {
                    AddDoctor(connection, doctor, false);
                }
                else if (input == "2")
                {
                    EditDoctor();
                }
                else if (input == "3")
                {
                    DeleteDoctor();
                }
                else if (input == "4")
                {
                    PatientsReport(connection, doctor);
                }
                else if (input == "5")
                {
                    MedicineReport(connection);
                }
                else if (input == "6")
                {
                    DoctorPatientReport(connection);
                }
                else
                {
                    breakLoop = true;
                }
            }
        }
        private static void DeleteDoctor()
        {
            HospitalContext connection = new HospitalContext();
            Console.WriteLine("Enter Doctor ID to delete a Doctor information:");
            var id = Console.ReadLine();
            int verifiedId;
            while (!Int32.TryParse(id, out verifiedId))
            {
                Console.WriteLine("Enter Doctor ID to update a Doctor information:");
                id = Console.ReadLine();
            }
            Doctor doc = new Doctor();
            var retVal = doc.delete(verifiedId);

            if (retVal)
            {
                Console.WriteLine("Deleted successfully.");
            }
            else
            {
                Console.WriteLine("Couldn't delete doctor!");
            }
        }

        private static void EditDoctor()
        {
            HospitalContext connection = new HospitalContext();
            Console.WriteLine("Enter Doctor ID to update a Doctor information:");
            var id = Console.ReadLine();
            int verifiedId;
            while (!Int32.TryParse(id, out verifiedId))
            {
                Console.WriteLine("Enter Doctor ID to update a Doctor information:");
                id = Console.ReadLine();
            }
            Staff doctor = connection.Staff.SingleOrDefault(x => x.Id == verifiedId && x.JobType == "Doctor");
            if (doctor == null)
            {
                Console.WriteLine("Doctor not found!");
            }
            AddDoctor(connection, doctor, true);
        }

        private static void DoctorPatientReport(HospitalContext connection)
        {
            Console.WriteLine();
            Console.WriteLine();
            Console.WriteLine("Doctor - Patient Report:");
            Console.WriteLine();
            // Using view
            var patients = connection.VPatientsWithStaffs;
            var doctors = connection.Staff.Where(x => x.JobType == "Doctor");

            var data = from pat in patients
                       join doc in doctors on pat.StaffId equals doc.Id
                       select new
                       {
                           PatientName = pat.Name,
                           pat.Description,
                           PatientContactNumber = pat.ContactNumber,
                           DoctorName = doc.Name,
                           DoctorContactNuumber = doc.ContactNumber,
                           doc.DepartmentId
                       };

            foreach (var item in data)
            {
                Console.WriteLine($"Patient: {item.PatientName}, Patient Contact: {item.PatientContactNumber}, Description: {item.Description}, Doctor: {item.DoctorName}, Doctor Contact: {item.DoctorContactNuumber}.");
            }
        }

        private static void MedicineReport(HospitalContext connection)
        {
            Console.WriteLine();
            Console.WriteLine();
            Console.WriteLine("Patient's Medicine Report:");
            Console.WriteLine();
            Patient patient = new Patient();
            Console.WriteLine("Enter Patient ID to find medicine list:");
            var id = Console.ReadLine();
            int verifiedId;
            while (!Int32.TryParse(id, out verifiedId))
            {
                Console.WriteLine("Enter Patient ID to find medicine list:");
                id = Console.ReadLine();
            }
            patient = connection.Patients.SingleOrDefault(x => x.Id == verifiedId);
            if (patient == null)
            {
                Console.WriteLine("Patient not found!");
                return;
            }
            // include() used
            var medicines = connection.Dosages.Include(x => x.Medicine).Where(x => x.PatientId == patient.Id).ToList();
            if (medicines.Count == 0)
            {
                Console.WriteLine("No medicines found");
                return;
            }
            foreach (var medicine in medicines)
            {
                Console.Write($"Name: {medicine.Medicine.Name}, Dosages: ");
                if (medicine.Morning)
                {
                    Console.Write("Morning, ");
                }
                if (medicine.Afternoon)
                {
                    Console.Write("Afternoon, ");
                }
                if (medicine.Night)
                {
                    Console.Write("Night, ");
                }
                if(medicine.AfterMeal)
                {
                    Console.WriteLine("After a meal.");
                }
                else
                {
                    Console.WriteLine("Before a meal.");
                }
            }
        }

        private static void PatientsReport(HospitalContext connection, Staff doctor)
        {
            Console.WriteLine();
            Console.WriteLine();
            Console.WriteLine("Doctor's Patients Report:");
            Console.WriteLine();
            Console.WriteLine("Enter Doctor ID to find all patients:");
            var id3 = Console.ReadLine();
            int verifiedId3;
            while (!Int32.TryParse(id3, out verifiedId3))
            {
                Console.WriteLine("Enter Doctor ID to find all patients:");
                id3 = Console.ReadLine();
            }
            doctor = connection.Staff.SingleOrDefault(x => x.Id == verifiedId3 && x.JobType == "Doctor");
            if (doctor == null)
            {
                Console.WriteLine("Doctor not found!");
                return;
            }
            var patientsId = connection.AssignedStaffs.Where(x => x.StaffId == doctor.Id).Select(x => x.PatientId);
            var patients = connection.Patients.Where(x => patientsId.Contains(x.Id)).ToList();
            if (patients.Count == 0)
            {
                Console.WriteLine("No patients found");
                return;
            }
            foreach (var patient in patients)
            {
                Console.WriteLine($"Name: {patient.Name}, Contact Number: {patient.ContactNumber}, Description: {patient.Description}");
            }
        }

        private static void AddDoctor(HospitalContext connection, Staff doctor, bool isExist)
        {
            Console.WriteLine("Enter a Name of Doctor: ");
            var name = Console.ReadLine();
            while (String.IsNullOrWhiteSpace(name))
            {
                Console.WriteLine("Enter a Name of Doctor: ");
                name = Console.ReadLine();
            }
            Console.WriteLine("Enter a Email of Doctor: ");
            var email = Console.ReadLine();
            while (String.IsNullOrWhiteSpace(email))
            {
                Console.WriteLine("Enter a Email of Doctor: ");
                email = Console.ReadLine();
            }
            Console.WriteLine("Enter a Contact Number of Doctor: ");
            var contactNumber = Console.ReadLine();
            while (contactNumber.Length != 10)
            {
                Console.WriteLine("Enter a correct Contact Number of Doctor: ");
                contactNumber = Console.ReadLine();
            }
            Console.WriteLine("Departments available:");
            var allDeps = connection.Departments;
            foreach (var dep in allDeps)
            {
                Console.WriteLine($"Id: {dep.Id}, Name: {dep.Name}");
            }
            Console.WriteLine("Enter a Name of department: ");
            var department = Console.ReadLine();
            Department depFromDB = connection.Departments.SingleOrDefault(d => d.Name == department);
            while (String.IsNullOrWhiteSpace(department) || depFromDB == null)
            {
                Console.WriteLine("Enter a Name of department: ");
                department = Console.ReadLine();
                depFromDB = connection.Departments.SingleOrDefault(d => d.Name == department);
            }

            
            doctor.Name = name;
            doctor.Email = email;
            doctor.ContactNumber = contactNumber;
            doctor.DepartmentId = depFromDB.Id;
            doctor.JobType = "Doctor";
            if (!isExist)
            {
                Doctor doc = new Doctor();
                var retVal = doc.insert(doctor);
                if (retVal)
                {
                    Console.WriteLine("Added successfully.");
                }
                else
                {
                    Console.WriteLine("Couldn't add doctor!");
                }
            }
            else
            {
                connection.SaveChanges();
                Console.WriteLine("Updated successfully.");
            }
            
        }
    }
}
