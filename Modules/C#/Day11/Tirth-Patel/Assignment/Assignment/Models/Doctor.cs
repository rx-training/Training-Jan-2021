using System;
using System.Collections.Generic;
using System.Linq;
#nullable disable

namespace Assignment.Models
{
    public partial class Doctor
    {
        public int DoctorsId { get; set; }
        public string DoctorName { get; set; }
        public int? DepartmentId { get; set; }

        public virtual Department Department { get; set; }
        public void Add()
        {
            Console.WriteLine("Enter DoctorName");
            string name = Console.ReadLine();
            Console.WriteLine("Enter DoctorId");
            int id = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Enter departmentId");
            int DepId = Convert.ToInt32(Console.ReadLine());
            using (var hop = new HospitalContext())
            {
                var NewDoc = new Doctor { DoctorsId = id, DepartmentId = DepId, DoctorName = name};
                hop.Doctors.Add(NewDoc);
                hop.SaveChanges();
                Console.WriteLine("doctor Added ");
            }

        }
        public void Update()
        {
            Console.WriteLine("enter doctor Id to update his data");
            int Id = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Enter the updating Name!");
            string name = Console.ReadLine();

            using (var hosp = new HospitalContext())
            {

                var result = hosp.Doctors.SingleOrDefault(d => d.DoctorsId == Id);
                result.DoctorName = name;
                hosp.SaveChanges();
                Console.WriteLine("record Updated");
            }
        }
        public void Delete()
        {
            Console.WriteLine("enter doctor Id to Delete his data");
            int del = Convert.ToInt32(Console.ReadLine());


            using (var hosp = new HospitalContext())
            {

                var result = hosp.Doctors.SingleOrDefault(d => d.DoctorsId == del);
                hosp.Doctors.Remove(result);
                hosp.SaveChanges();
                Console.WriteLine("record Deleted");
            }
        }
    }
}
