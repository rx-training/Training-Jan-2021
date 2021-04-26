using System;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using EFAssignment_Day11.Models;

namespace EFAssignment_Day11
{
    public class Display
    {
        public void DisplayDoctors()
        {
            using (var context = new Day11Context())
            {
                // Displays data from tables
                var doc = context.Doctors.OrderBy(d => d.DocId);
                Console.WriteLine("Doctor Id\tName\t\tPhone Number\tQualification\tAddress\t\tSpecialist in\tDepartment Id");
                foreach (var item in doc)
                {
                    Console.WriteLine($"\t{item.DocId}\t{item.DocFname + " " + item.DocLname}\t{item.DocPhoneNumber}\t{item.DocQualification}\t\t{item.DocAddress}\t{item.DocSpecialist}\t\t{item.DeptId}");
                }
            }
        }
    }
}
