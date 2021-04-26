using System;
using System.Linq;
using Assignment1.Models;
using Microsoft.EntityFrameworkCore;

namespace Assignment1
{
    class GetDoctors
    {
        HOSPITAL11Context h = new HOSPITAL11Context();
        public void InsertDoctor(int id, int DID, string FName, string LName)
        {
            Doctor d = new Doctor() { DoctorId = id, DepartmentId = DID, FirstName = FName, LastName = LName };
            h.Add(d);
            h.SaveChanges();
        }
        public void UpdateDoctor(int did, int doctid, int dept, string FName, string LName)
        {
            var result = h.Doctors.Single(d => d.DoctorId == did);
            result.DoctorId = doctid;
            result.DepartmentId = dept;
            result.LastName = LName;
            result.FirstName = FName;
            h.Update(result);
            h.SaveChanges();
        }
        public void DeleteDoctor(int did)
        {
            var result = h.Doctors.Single(d => d.DoctorId == did);
            h.Remove(result);
            h.SaveChanges();
        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            HOSPITAL11Context h = new HOSPITAL11Context();
            Console.WriteLine("Enter choice between 1 to 6: 1:Insert,2:Update,3:Delete,4:Find a report of patient assigned to a particular doctor 5:Find a report of medicine list for a particular patient 6:Display summary report of Doctor and patient (use Include method");
            int choice = Convert.ToInt32(Console.ReadLine());
            GetDoctors d = new GetDoctors();
            switch (choice)
            {
                //Insert a Doctor
                case 1:
                    Console.WriteLine("Enter details:");
                    Console.WriteLine("Enter Doctor ID:");
                    int id = Convert.ToInt32(Console.ReadLine());
                    Console.WriteLine("Enter Department ID of Doctor:");
                    int did = Convert.ToInt32(Console.ReadLine());
                    Console.WriteLine("Enter First Name of Doctor:");
                    string fname = Console.ReadLine();
                    Console.WriteLine("Enter Last Name of Doctor:");
                    string lname = Console.ReadLine();
                    d.InsertDoctor(id, did, fname, lname);
                    break;
                //Update a Doctor
                case 2:
                    Console.WriteLine("Enter Doctor id which you want to update");
                    int DeptID1 = Convert.ToInt32(Console.ReadLine());
                    Console.WriteLine("Enter Details to update");
                    Console.WriteLine("Enter DoctorID of Doctor:");
                    int doctID = Convert.ToInt32(Console.ReadLine());
                    Console.WriteLine("Enter Department ID of Doctor:");
                    int dept = Convert.ToInt32(Console.ReadLine());
                    Console.WriteLine("Enter First Name of Doctor:");
                    string FName = Console.ReadLine();
                    Console.WriteLine("Enter Last Name of Doctor:");
                    string LName = Console.ReadLine();
                    d.UpdateDoctor(DeptID1, doctID, dept, FName, LName);
                    break;
                //Delete a Doctor
                case 3:
                    Console.WriteLine("Enter Doctor id which you want to delete:");
                    int DeptId = Convert.ToInt32(Console.ReadLine());
                    d.DeleteDoctor(DeptId);
                    break;
                
                //4. Find a report of patient assigned to a particular doctor
                case 4:
                    var r1 = h.DoctorPatientViews;
                    foreach (var i in r1)
                    {
                        Console.WriteLine(i.DepartmentId + " " + i.DoctorId + " " + i.DoctorFirstName + " " + i.DoctorLastName + " " + i.PatientId + " " + i.PatientLastName);
                    }
                    break;
                //5. Find a report of medicine list for a particular patient
                case 5:
                    var r = h.MedicineViews;
                    foreach (var i in r)
                    {
                        Console.WriteLine(i.PatientId + " " + " " + i.FirstName + " " + i.LastName + " " + i.MorningMedicineId + " " + i.MorningMedicineName + " " + i.AfternoonMedicineId + " " + i.AfternoonMedicineName + " " + i.NightMedicineId + " " + i.NightMedicineName);
                    }
                    break;
                
                //6. Display summary report of Doctor and patient (use Include method)
                case 6:
                    var res1 = h.Patients.Include(d => d.Doctor);
                    foreach (var i in res1)
                    {
                        Console.WriteLine(i.Doctor.DoctorId+" "+i.Doctor.FirstName+" "+i.Doctor.LastName+" "+i.PatientId+" "+i.FirstName+" "+i.LastName+" "+i.Address);
                    }
                    break;
            }
        }
    }
}
