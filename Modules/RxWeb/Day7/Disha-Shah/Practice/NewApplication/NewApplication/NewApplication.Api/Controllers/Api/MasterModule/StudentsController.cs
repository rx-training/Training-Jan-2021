using Microsoft.AspNetCore.Mvc;
using System.Linq;
using NewApplication.Domain.MasterModule;
using NewApplication.Models.Main;
using RxWeb.Core.AspNetCore;
using RxWeb.Core.Security.Authorization;
using Microsoft.AspNetCore.Authorization;

namespace NewApplication.Api.Controllers.MasterModule
{
    [ApiController]
    [Route("api/courses/{CourseId}/[controller]")]
    [AllowAnonymous]
    public class StudentsController : BaseDomainController<Student, Student>

    {
        public StudentsController(IStudentDomain domain):base(domain) {}

    }
}
