using Assignment.Models.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment.Models.Repository
{
    public class DepartmentRepository : DoctorPatientNurseRepository<Department>, IDepartment
    {
        public DepartmentRepository(HOSPITAL11Context context) : base(context)
        {

        }

        public bool Any(Func<Doctor, bool> predicate)
        {
            throw new NotImplementedException();
        }

        public int Count(Func<Doctor, bool> predicate)
        {
            throw new NotImplementedException();
        }

        public void Create(Doctor entity)
        {
            throw new NotImplementedException();
        }

        public void Delete(Doctor entity)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Doctor> Find(Func<Doctor, bool> predicate)
        {
            throw new NotImplementedException();
        }

        public void Update(Doctor entity)
        {
            throw new NotImplementedException();
        }

        IEnumerable<Doctor> IDoctorsPatientNurse<Doctor>.GetAll()
        {
            throw new NotImplementedException();
        }

        Doctor IDoctorsPatientNurse<Doctor>.GetById(int Id)
        {
            throw new NotImplementedException();
        }
    }
}
