using repository.Models.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace repository.Models.Repository
{
    public class studentRepostory : GenericRepository<Studnet>, IStudent
    {
        public studentRepostory(SchoolDBContext context) : base(context)
        {

        }
    }
}
