using Microsoft.AspNetCore.Mvc;
using System.Linq;
using HumanResources.UnitOfWork.Main;
using HumanResources.Models.Main;
using RxWeb.Core.AspNetCore;
using RxWeb.Core.Security.Authorization;
using Microsoft.AspNetCore.Authorization;

namespace HumanResources.Api.Controllers.MasterModule
{
    [ApiController]
    [Route("api/[controller]")]
    [AllowAnonymous]
    public class CoursesController : BaseController<Cours,Cours,Cours>

    {
        public CoursesController(IMasterUow uow):base(uow) {}

    }
}
