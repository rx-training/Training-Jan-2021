using System;
using System.Linq;
using Assignment.Models;
using Microsoft.EntityFrameworkCore;
namespace Assignment
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("press 1 To Add Doctor");
            Console.WriteLine("press 2 To Update Doctor");
            Console.WriteLine("press 3 To Delete Doctor");
            Console.WriteLine("press 4 To see report of patient ");
            Console.WriteLine("press 5 To Get Report of medicine list for a particular patient");
            Console.WriteLine("press 6 Display summary report of Doctor and patient");
            int ch = Convert.ToInt32(Console.ReadLine());

            switch (ch) {

                case 1:
                    {
                        //Insert a Doctor
                        Doctor d1 = new Doctor();
                        d1.Add();
                        break;
                    }
                case 2:
                    {
                        //update doctor
                        Doctor d1 = new Doctor();
                        d1.Update();
                        break;
                    }
                case 3:
                    {
                        //delete a Doctor

                        Doctor d1 = new Doctor();
                        d1.Delete();
                        break;
                    }
                case 4:
                    {
                        //Find a report of patient assigned to a particular doctor
                        Console.WriteLine("enter DopctorID to see patients name under that Doc");
                        int Docid = Convert.ToInt32(Console.ReadLine());
                        using (var hosp = new HospitalContext())
                        {

                            var report = hosp.Reports.Where(d => d.DoctorId == Docid);
                            foreach (var item in report)
                            {
                                var hops = new HospitalContext();
                                var pat = hops.Patients.Single(id => id.PatientId == item.PatientId);
                                Console.WriteLine($"Patient info under Doctor id:{Docid}\n");
                                Console.WriteLine($"{pat.PatientId} {pat.PatientName} ");
                            }




                        }
                        break;
                    }
                case 5:
                    {
                        //Find a report of medicine list for a particular patient
                        Console.WriteLine("Enter patient ID to find his medicines list");
                        int Patid = Convert.ToInt32(Console.ReadLine());
                        using (var hosp = new HospitalContext())
                        {
                            var pres = hosp.Prescriptions.Where(d => d.PatientId == Patid);
                            var drugs = pres.Select(d => d.DrugId);
                            foreach (var item in drugs)
                            {
                                var newhost = new HospitalContext();
                                var med = newhost.Drugs.Where(d => d.DrugId == item);
                                foreach (var s in med)
                                {
                                    Console.WriteLine($"Drug ID:{s.DrugId} Drug-Name {s.Name}");
                                }
                            }
                        }
                        break;
                    }
                case 6:
                    {
                        //Display summary report of Doctor and patient(use Include method)

                        using (var hosp = new HospitalContext())
                        {
                            var report = hosp.Reports.Include(s => s.Doctor).Include(p => p.Patient)
                                 .ToList();
                            foreach (var item in report)
                            {
                                Console.WriteLine($"{item.DoctorId}:{item.Doctor.DoctorName} IS treating {item.Patient.PatientName} ");
                            }
                        }
                        break;
                    }
                default: break;
            }













            }

           



           
            

           
           
           
        }
    }


