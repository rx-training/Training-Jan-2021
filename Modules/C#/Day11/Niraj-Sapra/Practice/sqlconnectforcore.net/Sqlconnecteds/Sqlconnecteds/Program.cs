using System;
using Sqlconnecteds.Model;
using System.Linq;
namespace Sqlconnecteds
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            Program pr = new Program();
                       Console.WriteLine("\nInsert new Doctor data enter 1\n Update doctordata chooese 2\n Delete doctor data choose 3\n get report  patient assigned to a particular doctor enter 4 \n medicine list for a particular patient 5 \n Display summary report of Doctor and patient (use Include method) 6");
            int num = Convert.ToInt32(Console.ReadLine());
            switch (num)
            {
                case 1:
                    Console.WriteLine("\nEnter new Doctor Name");
                    string name = Console.ReadLine();
                    pr.insertdoctor(name);
                    break;
                case 2:
                    Console.WriteLine("\nUpdate Doctor Table");
                    Console.WriteLine("\nenter this doctor name is which update ");
                    string names = Console.ReadLine();
                    Console.WriteLine("\nenter new update Doctor Name");
                    string newname = Console.ReadLine();
                    pr.updatedoctor(names ,newname);
                    break;
                case 3:
                    Console.WriteLine("\nDelete Doctor Name");
                    Console.WriteLine("\nenter this doctor name is which delete ");
                    string namedel = Console.ReadLine();
                    pr.deletedoctor(namedel);
                    break;
                case 4:
                    Console.WriteLine("\n ");
                    Console.WriteLine("\nenter doctor name and get all pataint number.");
                    string drname = Console.ReadLine();
                    pr.reportperticulerdoctor(drname);
                    break;
                case 5:
                    Console.WriteLine("\n ");
                    Console.WriteLine("\nenter this pataint name get all medision list. ");
                    string paname = Console.ReadLine();
                    pr.reportperticulerpatienttomedision(paname);
                    break;
                default :
                    Console.WriteLine("\n Enter only this nummber is allow write in comment");
                    break;
            }
        }
        public void insertdoctor(string name)
        {
           HospotalContext hp = new HospotalContext();
            Doctor db = new Doctor() { Doctorname = name };
            hp.Doctors.Add(db);
            Console.WriteLine("\n {0} This record is inset Suceesfully in  Doctor table", db.Doctorname);
            hp.SaveChanges();
        }
        public void updatedoctor(string name, string newname)
        {
            HospotalContext hp = new HospotalContext();
            Doctor db = new Doctor();
            var result = hp.Doctors.Single(s => s.Doctorname== name);
            result.Doctorname = newname;
            Console.WriteLine("\n {0} This record is Updated by {1} Suceesfully in  Doctor table", name,newname);
            hp.SaveChanges();
        }

        public void deletedoctor(string name)
        {
            HospotalContext hp = new HospotalContext();
            Doctor db = new Doctor();
            var result = hp.Doctors.Single(s => s.Doctorname == name);
            hp.Doctors.Remove(result);
            Console.WriteLine("\n {0} This record is Delete Suceesfully in  Doctor table", name);
            hp.SaveChanges();
        }

        //Find a report of patient assigned to a particular doctor.
        public void reportperticulerdoctor(string doctorname)
        {
            HospotalContext hp = new HospotalContext();
            Doctor db = new Doctor();
            var result = hp.Doctors.Single(s => s.Doctorname == doctorname);
            Patient pt = new Patient();
            var finaldata = hp.Patients.Single(p => p.Doctorids == result.Doctorid);
            Console.WriteLine("Patient Name is "+finaldata.Patientsname+" and doctor name is "+result.Doctorname);
            hp.SaveChanges();
        }

        //Find a report of patient assigned to a particular doctor.
        public void reportperticulerpatienttomedision(string patientname)
        {
            HospotalContext hp = new HospotalContext();
            Patient pt = new Patient();
            Console.WriteLine(patientname);
            //var finaldata = hp.Patients.Single(p => p.Patientsname == patientname);
            var maindata = hp.Patients.Where(pt =>pt.Patientsname == patientname);
            Medicine md = new Medicine();
            foreach (var item in maindata)
            {
                Console.WriteLine(item.Mediciens);
                var result = hp.Medicines.Single(s => s.Medicineid == item.Mediciens);
                Console.WriteLine(result.Medicinename);
            }

          /*  Medicine md = new Medicine();
            var result = hp.Medicines.Single(s => s.Medicineid == finaldata.Mediciens);
            Console.WriteLine("Patient Name is " + finaldata.Patientsname + " and doctor name is " + result.Medicinename);
            hp.SaveChanges();*/
        }
    }
}

