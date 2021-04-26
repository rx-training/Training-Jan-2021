using Day11Assignment.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System;
using System.Collections.Generic;

namespace Day11Assignment
{
    class PatientInfo
    {
        public void PatientMedicineReport(string oldFname)
        {
            using (var context = new ERCore1DBContext())
            {

                var report = context.VPatientMedicineReports
                                    .Where(x => x.Patient == oldFname)
                                    .ToList();


                foreach (var item in report)
                {
                    Console.WriteLine($"Patient: {item.Patient}\nContact: {item.Contact}\nAge: {item.Age}\nProblem: {item.ProblemDesc}\nDepartment: {item.Department}\nMedicine: {item.Drugs}\nMedicine Description:{item.Description}\nExpiry date: {item.ExpiryDate}\nPrice: {item.Price}\nMedicineTime: {item.MedicineTime}");
                    Console.WriteLine();
                }
            }
        }

        public void PatientDoctorSummary()
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
