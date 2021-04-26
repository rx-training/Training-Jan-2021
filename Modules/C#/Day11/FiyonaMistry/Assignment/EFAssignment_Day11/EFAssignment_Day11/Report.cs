using System;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using EFAssignment_Day11.Models;

namespace EFAssignment_Day11
{
    public class Report
    {
        public void ReportSummary()
        {
            using (var context = new Day11Context())
            {
                Console.WriteLine();

                // Find a report of patient assigned to a particular doctor
                var dt = context.Doctors.ToList();
                var pt = context.Patients.ToList();
                var doc = dt.GroupJoin(pt,
                   a => a.DocId,
                   b => b.DocId,
                   (a, newGroup) => new
                   {
                       Patients = newGroup,
                       DocName = a.DocFname
                   }).ToList();
                foreach (var item in doc)
                {
                    Console.WriteLine($"Doctor Name : { item.DocName}");
                    foreach (var item2 in item.Patients)
                    {
                        Console.WriteLine($"Patient Name : {item2.PatFname}");
                    }
                }
                Console.WriteLine();


                // Find a report of medicine list for a particular patient
                Console.Write("Enter patient Id to view his/her medicine list");
                int ch = Convert.ToInt32(Console.ReadLine());
                var second = context.Prescriptions.Include(x => x.Drugs).Where(x => x.PatId == ch).ToList();
                var medicineList = context.Patients.Include(x => x.Prescriptions).Where(x => x.PatId == ch).ToList();
                foreach (var i in medicineList)
                {
                    foreach (var j in second)
                    {
                        foreach (var k in j.Drugs)
                        {
                            Console.WriteLine($"Patient's Id : {i.PatId}, Patient's Name : {i.PatFname}, Medicine Name : {k.DrugName}");
                        }
                    }
                }
                Console.WriteLine();

                // Display summary report of Doctor and patient (use Include method)
                Console.WriteLine("Summary report of Doctor and patient : ");
                var inc = context.Doctors.Include(d => d.Patients);
                foreach (var item in inc)
                {
                    foreach (var item1 in item.Patients)
                    {
                        Console.WriteLine($"Doctor's Name : {item.DocFname}, Patient's Name : {item1.PatFname}");
                    }
                }
                Console.WriteLine();
            }
        }
    }
}