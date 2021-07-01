using Microsoft.AspNetCore.Mvc;
using System.Linq;
using practice.Domain.MasterModule;
using practice.Models.Main;
using RxWeb.Core.AspNetCore;
using RxWeb.Core.Security.Authorization;
using RxWeb.Core;
using Microsoft.AspNetCore.Authorization;

namespace practice.Api.Controllers.MasterModule
{
    [ApiController]
    [Route("api/[controller]")]
	[AllowAnonymous]
	public class StudentsController : BaseDomainController<Student, Student>

    {
        public StudentsController(IStudentDomain domain):base(domain) {}

    }
}
