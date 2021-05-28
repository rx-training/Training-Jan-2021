using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplicationAssignmentDay17.Models.IRepository;

namespace WebApplicationAssignmentDay17.Models.Repository
{
    public class AssistantRepo : GenericRepository<Assistant>, IAssistant
    {
        public AssistantRepo(Day11Context context) : base(context)
        {

        }
    }
}
