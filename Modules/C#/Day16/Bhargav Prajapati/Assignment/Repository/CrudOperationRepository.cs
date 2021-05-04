using Assignment.IRepository;
using Assignment.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment.Repository
{
    public class CrudOperationRepository : Icrudoperation
    {
        private readonly HospitaldatabaseContext context;

        public CrudOperationRepository(HospitaldatabaseContext ctx)
        {
            context = ctx;
        }

        public string DeleteDoctor(int Id)
        {
           
            var data = context.Doctors.SingleOrDefault(s=>s.DoctorId==Id);
            if (data != null )
            {
               
                context.Doctors.Remove(data);
                context.SaveChanges();
                return "Data is succssfully deleted";
            }
            else
            {
                return "Please check your Detalis";
            }

        }

        public string InsertDoctor(Doctor d)
        {
            context.Doctors.Add(d);
            context.SaveChanges();
            return "Data is Successfully added";
        }

        public string UpdateDoctor(int DoctorId, Doctor d)
        {
            var data = context.Doctors.SingleOrDefault(s=>s.DoctorId==DoctorId);

            if (data == null)
            {
                return "Please Check your details";
            }
            else
            {
                data.DoctorName = d.DoctorName;
                data.Salary = d.Salary;
                data.Experience = d.Experience;
                context.SaveChanges();
                return "Data is successfully updeted";
            }
        }
    }
}
