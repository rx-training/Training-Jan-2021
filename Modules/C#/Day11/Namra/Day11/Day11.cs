using System;
using System.Collections.Generic;
using System.Linq;
using Day10.Models;
using Microsoft.EntityFrameworkCore;

namespace Day10
{
    class DoctorOperation
    {
        Day1EntityHospitalContext hs = new Day1EntityHospitalContext();

       

        public void save()
        {
            hs.SaveChanges();
        }

        public void patientData(int patientID)
        {
            int count = 0;
            foreach (var item in hs.Transcripts)
            {
                if(item.PatientId == patientID)
                {
                    count++;
                    Console.WriteLine($"Transcation : {item.TranscriptId}, Doctor : {item.DoctorId}, Bill : {item.Bill}, Medicines : {item.Drugs}");
                }
            }
        }

        public void findPatient( int DoctorId)
        {
            var data = hs.Transcripts.Include(s => s.Patient);
            Console.WriteLine($"Patients for doctor '{DoctorId}' is/are : ");
            int count = 0; 
            foreach (var item in data)
            {
                if (item.DoctorId == DoctorId)
                {
                    count++;
                    Console.WriteLine($"{item.Patient.PatientName}");
                }
            }
            if(count == 0)
            {
                Console.WriteLine("There are no records for this doctor");
            }
        }

        public string addDoctor(string FName, string MName, string LName, string Contact, string EmailId, int department)
        {
            try
            {
                Doctor dt = hs.Doctors.SingleOrDefault(s => s.FirstName == FName && s.MiddleName == MName && s.LastName == LName);

                if (dt.FirstName == null)
                {
                    return "";
                }
                else
                {
                    return $"Doctor is already there in the Database...";
                }
            }
            catch (Exception)
            {
                Doctor dtAdd = new Doctor() { FirstName = FName, MiddleName = MName, LastName = LName, ContactNumber = Contact, Email = EmailId, DepartmentId = department };
                hs.Doctors.Add(dtAdd);
                save();
                return $"Doctor is added successfully...";
            }
        }
        public string UpdateDoctor(string findName, int number)
        {
            try
            {
                string[] names = findName.Split(' ');
                if (names.Length != 3)
                {
                    return $"Enter valid Name";     
                }
                Doctor dt = hs.Doctors.SingleOrDefault(s => s.FirstName.ToLower() == names[0].Trim(' ') && s.MiddleName.ToLower() == names[1].Trim(' ') && s.LastName.ToLower() == names[2].Trim(' '));
                if(dt.FirstName == null)
                {
                    return "";
                }
                else
                {
                    string success = "";
                    switch (number)
                    {
                        case 1:

                            Console.WriteLine($"please enter First Name to update it :");
                            string st = Console.ReadLine();
                            dt.FirstName = st;
                            success = $"First Name is changed successfully...";
                            break;
                        case 2:

                            Console.WriteLine($"please enter Middle Name to update it :");
                            string Middle = Console.ReadLine();
                            dt.MiddleName = Middle;
                            success = $"Middle Name is changed successfully...";
                            break;
                        case 3:
                            Console.WriteLine($"please enter Last Name to update it :");
                            string Last = Console.ReadLine();
                            dt.LastName = Last;
                            success = $"Last Name is changed successfully...";
                            break;
                        case 4:

                            Console.WriteLine($"please enter contact number to update it :");
                            string contact = Console.ReadLine();
                            dt.ContactNumber = contact;
                            success = $"Contact number is changed successfully...";
                            break;
                        case 5:

                            Console.WriteLine($"please enter Email to update it :");
                            string mail = Console.ReadLine();
                            dt.Email = mail;
                            success = $"Email is changed successfully...";
                            break;
                        case 6:
                            Console.WriteLine($"please enter first Name to update it :");
                            int dpt = Convert.ToInt32(Console.ReadLine());
                            dt.DepartmentId = dpt;
                            success = $"Department is changed successfully...";
                            break;
                        default:
                            Console.WriteLine($"please enter a valid number..");
                            break;
                    }
                    save();
                    return success;
                }

            }
            catch (Exception e)
            {
                return $"Doctor is not found...";
            }
        }
        public string deleteDoctor(string Name)
        {
            try
            {
                string[] names = Name.Split(' ');
                if (names.Length != 3)
                {
                    return $"Enter valid Name";
                }
                Doctor dt = hs.Doctors.SingleOrDefault(s => s.FirstName == names[0] && s.MiddleName == names[1] && s.LastName== names[2]);

                if (dt.FirstName != null)
                {
                    hs.Doctors.Remove(dt);
                    save();
                    return $"Doctor {Name} is deleted successfully...";
                }
                else
                {
                    throw new Exception($"Doctor is not found...");
                }

            }
            catch (Exception e)
            {
                return e.Message;
            }
        }
        public void displayDocPat(int patientId , int id)
        {
            var data = hs.Transcripts.Include(s => s.Patient).Include(s => s.Doctor);

            foreach (var item in data)
            {
                if(item.PatientId == patientId && item.DoctorId == id)
                {
                    Console.WriteLine($"patient Name : {item.Patient.PatientName}, Doctor : {item.Doctor.FirstName} {item.Doctor.LastName} Transaction : {item.TranscriptId}, Drugs : {item.Drugs}, Bill : {item.Bill}, {item.Patient.PatientName}");
                }
            }
        }
    }
    class Day11
    {
        public static int count(int prices, int days)
        {
            return prices * days;
        }
        static void Main(string[] args)
        {


            DoctorOperation doctor = new DoctorOperation();
            int choice = 0;
            while (choice != 7)
            {
                Console.WriteLine("Enter your choice to perform specific operation");
                Console.WriteLine("1. To add doctor");
                Console.WriteLine("2. To update doctor");
                Console.WriteLine("3. To delete doctor");
                Console.WriteLine("4. To get doctor and patient history");
                Console.WriteLine("5. To get patient drug list");
                Console.WriteLine("6. To get patient under doctor");
                Console.WriteLine("7. To exit..");
                int i = Convert.ToInt32(Console.ReadLine());
                switch (i)
                {
                    case 1:
                        Console.WriteLine("Enter FirstName :");
                        string FName = Console.ReadLine();

                        Console.WriteLine("Enter MiddleName :");
                        string MName = Console.ReadLine();

                        Console.WriteLine("Enter LastName :");
                        string LName = Console.ReadLine();

                        Console.WriteLine("Enter PhoneNumber :");
                        string Phone = Console.ReadLine();

                        Console.WriteLine("Enter Email :");
                        string Email = Console.ReadLine();

                        Console.WriteLine("Enter Department Id :");
                        int Department = Convert.ToInt32(Console.ReadLine());

                        string result = doctor.addDoctor(FName, MName, LName, Phone, Email, Department);
                        Console.WriteLine(result);
                        break;
                    case 2:
                        Console.WriteLine("Enter doctor name:");
                        string id1 = Console.ReadLine();

                        Console.WriteLine($"What would like to update");
                        Console.WriteLine($"1.First Name \n2.Middle Name \n3.Last Name\n4.Contact number\n5.Email id\n6.Department");
                        int perform = Convert.ToInt32(Console.ReadLine());
                        string rs = doctor.UpdateDoctor(id1, perform);
                        Console.WriteLine(rs);
                        break;
                    case 3:
                        Console.WriteLine("Enter doctor name to delete");
                        string name = Console.ReadLine();
                        string rsDelete = doctor.deleteDoctor(name);
                        Console.WriteLine(rsDelete);
                        break;

                    case 4:
                        Console.WriteLine($"Enter Patient id and doctor id respectively");
                        int patient = Convert.ToInt32(Console.ReadLine());
                        int doctorId = Convert.ToInt32(Console.ReadLine());
                        doctor.displayDocPat(patient, doctorId);
                        break;
                    case 5:
                        Console.WriteLine($"Enter Patient id :");
                        int id2 = Convert.ToInt32(Console.ReadLine());
                        doctor.patientData(id2);
                        break;
                    case 6:
                        Console.WriteLine("Enter a doctor id:");
                        int id3 = Convert.ToInt32(Console.ReadLine());
                        doctor.findPatient(id3);
                        break;
                    case 7:
                        choice = 7;
                        Console.WriteLine("You Exited successfully..");
                        break;
                    default:
                        Console.WriteLine("Enter a valid choice");
                        break;
                }
            }
        }
    }
}
