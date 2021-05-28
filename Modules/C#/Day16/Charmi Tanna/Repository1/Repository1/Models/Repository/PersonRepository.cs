using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WEBAPI.Models.IRepository;

namespace WEBAPI.Models.Repository
{
    public class PersonRepository : GenericRepository<Person>, IPerson
    {
        public PersonRepository(TestDBContext context):base(context)
        {

        }
    }
}
