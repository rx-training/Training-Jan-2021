using StudentAdmissionFormAPI.Models;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StudentAdmissionFormAPI.IRepository
{
    public interface IStudent : IGenericInterface<Student>
    {
        public IEnumerable GetAllStudents();
        public IEnumerable GetAllEmergencyContacts(int studentId);
        public IEnumerable GetAllReferenceDetails(int studentId);
        public void UpdateEmergencyContact(int studentId, IEnumerable entity);
        public void UpdateReferenceDetails(int studentId, ReferenceDetail entity);
        public void UpdateStudent(Student student);
    }
}
