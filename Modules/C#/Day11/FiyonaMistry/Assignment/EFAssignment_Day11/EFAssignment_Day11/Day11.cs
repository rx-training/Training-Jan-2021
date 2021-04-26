using System;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using EFAssignment_Day11.Models;

namespace EFAssignment_Day11
{
    class Day11
    {
        static void Main(string[] args)
        {
                bool endApp = false;

                while (!endApp)
                {
                    int ch;

                    Console.WriteLine("Press 1 to Add");
                    Console.WriteLine("Press 2 to Update");
                    Console.WriteLine("Press 3 to Delete");
                    Console.WriteLine("Press 4 for Report summary");
                    Console.WriteLine("Press 5 to Display data");
                    Console.WriteLine("Press 6 to Exit");
                    Console.Write("Enter your choice : ");
                    ch = Convert.ToInt32(Console.ReadLine());

                    switch (ch)
                    {
                        case 1:
                            var add = new Add();  
                            add.AddDoctor();   // Add method called
                        break;
                        case 2:
                            var update = new Update();
                            update.UpdateDoctor();   // Update method called
                        break;
                        case 3:
                            var del = new Delete();
                            del.DeleteDoctor();   // Delete method called
                        break;
                        case 4:
                            var rep = new Report();
                            rep.ReportSummary();   // Report Summary method called
                        break;
                        case 5:
                            var dis = new Display();
                            dis.DisplayDoctors();
                        break;
                        case 6:
                            endApp = true;
                            break;
                        default:
                            break;
                    }
                }

        }
    }
}
