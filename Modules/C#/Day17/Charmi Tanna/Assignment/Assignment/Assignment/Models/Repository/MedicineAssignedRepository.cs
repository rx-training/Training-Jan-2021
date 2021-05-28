using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Assignment.Models.IRepository;

namespace Assignment.Models.Repository
{
    public class MedicineAssignedRepository : DoctorPatientNurseRepository<MedicinesAssigned>, IMedicineAssigned
    {
        public MedicineAssignedRepository(HOSPITAL11Context context) : base(context)
        {

        }

    }
}
