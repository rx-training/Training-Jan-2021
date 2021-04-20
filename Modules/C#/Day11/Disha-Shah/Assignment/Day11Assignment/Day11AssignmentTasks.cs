using System;

namespace Day11Assignment
{
    class Day11AssignmentTasks
    {
        static void Main(string[] args)
        {
            DoctorInfo doctor = new DoctorInfo();
            PatientInfo patient = new PatientInfo();

            bool moreChoice = true;
            while (moreChoice)
            {
                Console.WriteLine("Select operation you want to perform:");
                Console.WriteLine("1: Insert a Doctor");
                Console.WriteLine("2. Update a Doctor");
                Console.WriteLine("3. Delete a Doctor");
                Console.WriteLine("4. Get Report of Patients for a particular Doctor");
                Console.WriteLine("5. Get Report of Medicines List for a particular Patient");
                Console.WriteLine("6. Summary Report of Doctor and Patients");
                Console.WriteLine("Enter your operation");

                int op = Convert.ToInt32(Console.ReadLine());
                switch (op)
                {
                    case 1:
                        // Enter Doctor Information
                        Console.WriteLine("Enter Doctor Firstname: ");
                        string fname = Console.ReadLine();
                        Console.WriteLine("Enter Lastname:");
                        string lname = Console.ReadLine();
                        Console.WriteLine("Enter Address:");
                        string address = Console.ReadLine();
                        Console.WriteLine("Enter Contact No.:");
                        int contact = Convert.ToInt32(Console.ReadLine());
                        Console.WriteLine("Enter Age:");
                        int age = Convert.ToInt32(Console.ReadLine());
                        Console.WriteLine("Enter Department name:");
                        string dept = Console.ReadLine();

                        doctor.InsertDoctor(fname, lname, address, contact, age, dept);

                        Console.WriteLine("Data Added Successfully");
                        break;
                    case 2:
                        // Enter old name of doctor
                        Console.WriteLine("Enter Firstname of Doctor whose information is to be modified:");
                        string oldFname = Console.ReadLine();
                        Console.WriteLine("Enter lastname of Doctor whose information is to be modified:");
                        string oldLname = Console.ReadLine();

                        // Enter new information of doctor
                        Console.WriteLine("Enter Doctor Firstname: ");
                        string newFname = Console.ReadLine();
                        Console.WriteLine("Enter Lastname:");
                        string newLname = Console.ReadLine();
                        Console.WriteLine("Enter Address:");
                        string newAddress = Console.ReadLine();
                        Console.WriteLine("Enter Contact No.:");
                        int newContact = Convert.ToInt32(Console.ReadLine());
                        Console.WriteLine("Enter Age:");
                        int newAge = Convert.ToInt32(Console.ReadLine());
                        Console.WriteLine("Enter Department name:");
                        string newDept = Console.ReadLine();

                        doctor.UpdateDoctor(oldFname, oldLname, newFname, newLname, newAddress, newContact, newAge, newDept);

                        Console.WriteLine("Data Updated Successfully");
                        break;
                    case 3:
                        // Enter name of doctor
                        Console.WriteLine("Enter Firstname of Doctor whose information is to be deleted:");
                        string oldFName = Console.ReadLine();
                        Console.WriteLine("Enter lastname of Doctor whose information is to be deleted:");
                        string oldLName = Console.ReadLine();

                        doctor.DeleteDoctor(oldFName, oldLName);

                        Console.WriteLine("Data deleted successfully");
                        break;
                    case 4:
                        // Patients list under a particular doctor
                        Console.WriteLine("Enter Name of Doctor whose information is to be searched:");
                        string FName = Console.ReadLine();

                        Console.WriteLine($"Information of Patients under {FName}:");
                        Console.WriteLine();
                        doctor.PatientDoctorReport(FName);
                        break;
                    case 5:
                        // medicines list for a particular patient
                        Console.WriteLine("Enter Name of Patient whose information is to be searched:");
                        string name = Console.ReadLine();

                        Console.WriteLine($"Medicines Information of {name}:");
                        Console.WriteLine();
                        patient.PatientMedicineReport(name);
                        break;
                    case 6:
                        // Patients information containing medicines list, doctors and personal information
                        Console.WriteLine("Patients Details:");
                        Console.WriteLine();
                        patient.PatientDoctorSummary();
                        break;
                    default:
                        Console.WriteLine("Please choose correct option");
                        break;
                }

                Console.WriteLine("Want to perform more operations? (Y/N)");
                char choice = Convert.ToChar(Console.ReadLine());
                if(choice == 'Y' || choice == 'y')
                {
                    moreChoice = true;
                }
                else
                {
                    moreChoice = false;
                }

            }

        }
    }
}
