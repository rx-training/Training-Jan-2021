using HospitalAssignment.Code.Interfaces;
using HospitalAssignment.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HospitalAssignment.Code.DBRepository
{
    public class MedicineRepo : GenericRepo<Medicine>, IMedicine
    {
        public MedicineRepo(HospitalContext _context): base(_context)
        {
        }
    }
}
