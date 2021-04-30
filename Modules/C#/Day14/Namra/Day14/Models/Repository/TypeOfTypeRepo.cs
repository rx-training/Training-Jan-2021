using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Day14.Models.IRepository;

namespace Day14.Models.Repository
{
    public class TypeOfTypeRepo : Company<TypeOfToy>, ITypeOfToy
    {
        public TypeOfTypeRepo(Day14AssignmentContext context) : base(context)
        {
                
        }
    }
}
