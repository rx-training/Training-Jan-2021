using Assingmet1.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
namespace Assingmet1
{
    class Info
    {
        public void insertDoctor()
        {
            HospitaldatabaseContext hp = new HospitaldatabaseContext();
            Console.WriteLine("Enter Doctor Id");
            int id = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Enter Doctor Name");
            string dname = Console.ReadLine();
            Console.WriteLine("Enter salary");
            int sal = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Enter Eprience");
            int exp = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Enter Department");
            string dep = Console.ReadLine();

            var depid = hp.Departments.Single(s=>s.DepartmentName==dep);

            List<Doctor> doc = new List<Doctor>()
            {
                new Doctor(){DoctorName=dname,Experience=exp,DoctorId=id,Salary=sal,DepartmentId=depid.DepartmentId}

            };
            foreach (var item in doc )
            {
                hp.Add(item);

            }
            hp.SaveChanges();
            Console.WriteLine("Register New Doctor");

        }

        public void UpdateDoctor()
        {

            HospitaldatabaseContext hp = new HospitaldatabaseContext();
            Console.WriteLine("Enter Doctor You Want To Update");
            string dname = Console.ReadLine();
            var updoc = hp.Doctors.Single(s=>s.DoctorName==dname);
            Console.WriteLine("Enter new Doctor name");
            updoc.DoctorName = Console.ReadLine();
            Console.WriteLine("Enter new Doctor salary");
            updoc.Salary = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Enter New Experience");
            updoc.Salary = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Enter new Department");
            var dep = Console.ReadLine();

            var department = hp.Departments.Single(s=>s.DepartmentName==dep);

            updoc.DepartmentId = department.DepartmentId;

            hp.SaveChanges();
            Console.WriteLine("Successfully Updated");

        }
        public void DeleteDoctor()
        {
            HospitaldatabaseContext hp = new HospitaldatabaseContext();
            Console.WriteLine("Enter Doctor Name You Want To Delete");
            string doctor = Console.ReadLine();
            var deleteddata = hp.Doctors.Single(s=>s.DoctorName==doctor);
            hp.Remove(deleteddata);
            hp.SaveChanges();
            Console.WriteLine("Successfully Deleted");
        }

        public void patientDetails()
        {
            HospitaldatabaseContext hp = new HospitaldatabaseContext();
            Console.WriteLine("Enter Doctor Name :-");
            string docName = Console.ReadLine();

            var patientdata = hp.PatientDetails.Include(s=>s.Doctor).Where(s=>s.Doctor.DoctorName==docName);

            foreach (var item in patientdata)
            {
                Console.WriteLine($"Assind Doctor Name :- {item.Doctor.DoctorName}");
                Console.WriteLine($"PatientId :- {item.PatientId}");
                Console.WriteLine($"PatientName :- {item.PatientName}");
                Console.WriteLine($"Patient Condition :- {item.Patentcondition}");
                Console.WriteLine($"Dieses Name :- {item.DiseaseName}");
                
            }


        }

        public void listofDrug()
        {
            HospitaldatabaseContext hp = new HospitaldatabaseContext();
            
            Console.WriteLine("Enter patient name To Find the Drug");
            string name = Console.ReadLine();
            var druglist = hp.PatientDrugTables.Include(s => s.Patient).Include(s => s.Drug).Where(s=>s.Patient.PatientName==name);
            Console.WriteLine("============List Of drug =======================");
            foreach (var item in druglist)
            {
                
                Console.WriteLine($"Drug List :- {item.Drug.DrugName} ");
            }

        }
        public void reportofpatient()
        {
             HospitaldatabaseContext hp = new HospitaldatabaseContext();
            var data = hp.PatientDetails.Include(p => p.Doctor);
            foreach (var item in data)
            {
                Console.WriteLine("================Report=====================");
                Console.WriteLine($"Patient Id :- {item.PatientId}");
                Console.WriteLine($"Patinent name :- {item.PatientName}");
                Console.WriteLine($"Patient Condition :- {item.Patentcondition}");
                Console.WriteLine("Dieses Name :- "+item.DiseaseName);
                Console.WriteLine($"Doctor Name :- {item.Doctor.DoctorName}");
                Console.WriteLine($"Docor Exprience :- {item.Doctor.Experience}");
               // Console.WriteLine($"Department :- {item.Doctor.Department.DepartmentName}");

            }

        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            Info i1 = new Info();
            int i = 10;
            while(i==10)
                { 
            Console.WriteLine("Press 1 Insert the Doctor");
            Console.WriteLine("Press 2 Update Doctor");
            Console.WriteLine("Press 3 Delete Doctor");
            Console.WriteLine("Press 4 Find a report of patient assigned to a particular doctor");
            Console.WriteLine("Press 5 Find a report of medicine list for a particular patient");
            Console.WriteLine("Press 6 Display summary report of Doctor and patient");
            int ch = Convert.ToInt32(Console.ReadLine());

            switch (ch)
            {
                case 1:
                    i1.insertDoctor();
                    break;
                case 2:
                    i1.UpdateDoctor();
                    break;
                case 3:
                    i1.DeleteDoctor();
                    break;
                case 4:
                    i1.patientDetails();
                    break;
                case 5:
                    i1.listofDrug();
                    break;
                case 6:
                    i1.reportofpatient();
                    break;

                    

            }
                Console.WriteLine("Press 10 For Continue..................");
                i = Convert.ToInt32(Console.ReadLine());
            }
        }
    }
}
