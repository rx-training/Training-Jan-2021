using Microsoft.AspNetCore.Mvc;
using System.Linq;
using practice.UnitOfWork.Main;
using practice.Models.Main;
using RxWeb.Core.AspNetCore;
using RxWeb.Core.Security.Authorization;
using Microsoft.AspNetCore.Authorization;

namespace practice.Api.Controllers.MasterModule
{
    [ApiController]
    [Route("api/[controller]")]
    [AllowAnonymous]

    public class CoursesController : BaseController<Course,Course,Course>

    {
        public CoursesController(IMasterUow uow):base(uow) {}

    }
}
