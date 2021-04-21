using System;
using System.Linq;
using ConsoleApp1.DBModels;
using Microsoft.EntityFrameworkCore;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            
            CSharpDBContext context = new CSharpDBContext();

            //adding a doctor
            Doctor doctor = new Doctor() { DoctorId = 15, Name = "Dixita Shetty", DepartmentId = 5, Experience = 18 };
            context.Doctors.Add(doctor);

            //Updating a doctor
            var changeRecord = context.Doctors.Single(d => d.DoctorId == 3);
            changeRecord.Name = "David Macwan";
            Console.WriteLine($"{changeRecord.DoctorId}\t{changeRecord.Name}");

            //Deleting a doctor
            var deleteRecord = context.Doctors.Single(d => d.DoctorId == 13);
            Console.WriteLine($"{deleteRecord.DoctorId}\t{deleteRecord.Name}");
            context.Doctors.Remove(deleteRecord);


            Console.WriteLine("Doctor Name\tExperience");
            foreach (var item in context.Doctors)
            {
                Console.WriteLine($"{item.Name}\t\t {item.Experience}");
            }
            context.SaveChanges();

            Console.WriteLine("Enter the name of doctor");
            var docName = Console.ReadLine();

            var result = context.PatientDetailRecords.Single(p => p.DoctorName == docName);
            Console.WriteLine("Name\t\tDisease\t\tDepartment\t\tMorningPills AfternoonPills NightPills DoctorName\tHealthcareAssistants");
            Console.WriteLine(result);

            Console.WriteLine("Enter the name of Patient");
            var patientName = Console.ReadLine();
            var result1 = context.Patients.Single(p => p.Name == patientName);
            Console.WriteLine($"Morning Pills {result1.MorningPills}\t Afternoon Pills {result1.AfternoonPills}\t Night Pills {result1.NightPills}");

            Console.WriteLine("Enter Name of Doctor");
            var dName = Console.ReadLine();
            var result2 = context.PatientDetailRecords.Join(context.DoctorDetailRecords, p => p.DoctorName, d => d.Name, (p, d) => new { Patients = p, Doctors = d });

            Console.WriteLine("Details of Patient");
            Console.WriteLine("Name\t\tDisease\t\tDepartment\t\tMorningPills AfternoonPills NightPills DoctorName\tHealthcareAssistants");
            foreach (var item in result2)
            {
                Console.WriteLine(item.Patients);
            }
            Console.WriteLine("Details of Doctor");
            Console.WriteLine("ID\tName\t\tExperience\tDepartment");
            foreach (var item in result2)
            {
                Console.WriteLine($"{item.Doctors}");
            }
        }
    }
}
