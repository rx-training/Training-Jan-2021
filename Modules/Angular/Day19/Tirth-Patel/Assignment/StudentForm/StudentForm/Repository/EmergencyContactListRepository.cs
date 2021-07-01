using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using StudentForm.Models;
using StudentForm.IRepository;
namespace StudentForm.Repository
{
    public class EmergencyContactListRepository:GenericRepository<EmergencyContactList>,IEmergencyContactList
    {
        public EmergencyContactListRepository(StudentFormContext context):base(context)
        {

        }
    }
}
