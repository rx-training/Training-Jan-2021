using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using StudentAngular.Model.IRepo;

namespace StudentAngular.Model.Repo
{
    public class RepoStudent : HttpDemo<Student>, IStudent
    {
        public RepoStudent(HttpDemoContext context) : base (context)
        {

        }
    }
}
