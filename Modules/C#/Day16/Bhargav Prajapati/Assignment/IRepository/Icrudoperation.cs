using Assignment.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment.IRepository
{
    public interface Icrudoperation
    {
        public string InsertDoctor(Doctor d);
        public string UpdateDoctor(int DoctorId,Doctor d);
        public string DeleteDoctor(int DoctorId);

    }
}
