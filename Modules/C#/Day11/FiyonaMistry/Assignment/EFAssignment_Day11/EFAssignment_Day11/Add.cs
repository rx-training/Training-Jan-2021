using System;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using EFAssignment_Day11.Models;
using System.Collections.Generic;

namespace EFAssignment_Day11
{
    public class Add
    {
        public void AddDoctor()
        {
            // Display current data
            Display dis = new Display();
            dis.DisplayDoctors();

            int id, phoneNumber, deptID;
            string fname, lname, qualification, address, specialist;
            
            // Enter new data from user
            Console.Write("Enter ID : ");
            id = Convert.ToInt32(Console.ReadLine());
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
                //Add data in Table
                var add = new Doctor() { DocId = id, DocFname = fname, DocLname = lname, DocPhoneNumber = phoneNumber, DocQualification = qualification, DocAddress = address, DocSpecialist = specialist, DeptId = deptID };
                context.Add(add);
                context.SaveChanges();
            }

            // Display data after adding 
            Console.WriteLine("Data added successfully, have a look....");
            dis.DisplayDoctors();
            Console.WriteLine();
        }
    }
}