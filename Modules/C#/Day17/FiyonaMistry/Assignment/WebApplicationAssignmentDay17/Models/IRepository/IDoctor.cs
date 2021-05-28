using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplicationAssignmentDay17.Models.IRepository
{
    public interface IDoctor : GenericInterface<Doctor>
    {
        IEnumerable<Doctor> GetByDocId(int id);
    }
}
