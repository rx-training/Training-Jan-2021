using Assignment.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Assignment
{
    class Doctor
    {
        public bool insert(Staff doctor)
        {
            try
            {
                HospitalContext connection = new HospitalContext();
                connection.Staff.Add(doctor);
                connection.SaveChanges();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }

        public bool delete(int id)
        {
            try
            {
                HospitalContext connection = new HospitalContext();
                Staff doctor = connection.Staff.SingleOrDefault(x => x.Id == id && x.JobType == "Doctor");
                if (doctor == null)
                {
                    return false;
                }
                connection.Staff.Remove(doctor);
                connection.SaveChanges();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }
    }
}
