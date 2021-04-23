using System;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using EFAssignment_Day11.Models;

namespace EFAssignment_Day11
{
    public class Update
    {
        public void UpdateDoctor()
        {
            // Display current data
            Display dis = new Display();
            dis.DisplayDoctors();

            int id, phoneNumber, deptID;
            string fname, lname, qualification, address, specialist;

            Console.Write("Enter ID to be updated : ");
            id = Convert.ToInt32(Console.ReadLine());

            // Enter new data from user for updating
            Console.WriteLine("Please enter updated data : ");
            Console.Write("Enter First Name : ");
            fname = Console.ReadLine();
            Console.Write("Enter Last Name : ");
            lname = Console.ReadLine();
            Console.Write("Enter Phone Number : ");
            phoneNumber = Convert.ToInt32(Console.ReadLine());
            Console.Write("Enter Qualification : ");
            qualification = Console.ReadLine();
            Console.Write("Enter Address : ");
            address = Console.ReadLine();
            Console.Write("Enter Specialist in : ");
            specialist = Console.ReadLine();
            Console.Write("Enter Department ID : ");
            deptID = Convert.ToInt32(Console.ReadLine());

            using (var context = new Day11Context())
            {
                // Update data in table
                var update = context.Doctors.Single(d => d.DocId == id);
                update.DocFname = fname;
                update.DocLname = lname;
                update.DocPhoneNumber = phoneNumber;
                update.DocQualification = qualification;
                update.DocAddress = address;
                update.DocSpecialist = specialist;
                update.DeptId = deptID;
                context.SaveChanges();
            }

            // Display data after updating
            Console.WriteLine("Data updated successfully, have a look....");
            dis.DisplayDoctors();
            Console.WriteLine();
        }
    }
}