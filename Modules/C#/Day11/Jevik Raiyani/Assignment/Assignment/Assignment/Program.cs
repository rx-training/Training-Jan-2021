using System;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using Assignment.Models;


namespace Assignment
{
    class Program
    {
        static void Main(string[] args)
        {
            HospitalCsharpContext demo = new HospitalCsharpContext();

            //Add doctorr
            //Doctor newDoc = new Doctor() { Id = 1, Name = "vidhur", DepartmentId = 1 };
            //demo.Doctors.Add(newDoc);
            //demo.SaveChanges();


            //Update doctor
            //var doco = demo.Doctors.Single(p => p.Name == "vidhur");
            //doco.Name = "Change1";
            //demo.SaveChanges();

            //delete doc
            //var del = demo.Doctors.Single(p => p.Name == "Change1");
            //demo.Doctors.Remove(del);
            //demo.SaveChanges();

            //var p = demo.Treatments.Include(p => p.Doctor);
            //foreach (var item in p)
            //{
            //    Console.WriteLine(item.Patient);
            //}

            // id = 1 's medicine
            //var medi = demo.Treatments.Include(p => p.Drug).Where(p=>p.PatientId==1);
            //foreach (var item in medi)
            //{
            //    Console.WriteLine(item.Drug.Name + " " + item.DrugTime);
            //}

            // patient Name    handled by doctor Name
            //var summ = demo.Treatments.Include(p => p.Patient).Include(p => p.Doctor);
            //foreach (var item in summ)
            //{
            //    Console.WriteLine(item.Patient.Name + " " + item.Doctor.Name);
            //}


        }
    }
}
