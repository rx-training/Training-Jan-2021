using Microsoft.AspNetCore.Mvc;
using System.Linq;
using NewApplication.UnitOfWork.Main;
using NewApplication.Models.Main;
using RxWeb.Core.AspNetCore;
using RxWeb.Core.Security.Authorization;
using Microsoft.AspNetCore.Authorization;

namespace NewApplication.Api.Controllers.MasterModule
{
    [ApiController]
    [Route("api/[controller]")]
    [AllowAnonymous]
    public class CoursesController : BaseController<Cours,Cours,Cours>

    {
        public CoursesController(IMasterUow uow):base(uow) {}

    }
}
