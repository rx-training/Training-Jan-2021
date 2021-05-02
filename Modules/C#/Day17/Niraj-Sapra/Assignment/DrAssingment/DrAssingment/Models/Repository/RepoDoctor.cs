using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DrAssingment.Models.IRepository;
namespace DrAssingment.Models.Repository
{
    public class RepoDoctor : GenericRepository<Doctor>, IDoctor
    {
    public RepoDoctor(HospotalContext context) : base(context)
    {

    }
}
}
