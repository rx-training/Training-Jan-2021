using Microsoft.AspNetCore.Mvc;
using System.Linq;
using Day2Assignment.UnitOfWork.Main;
using Day2Assignment.Models.Main;
using RxWeb.Core.AspNetCore;
using RxWeb.Core.Security.Authorization;
using Microsoft.AspNetCore.Authorization;

namespace Day2Assignment.Api.Controllers.MasterModule
{
    [ApiController]
    [Route("api/[controller]")]
    [AllowAnonymous]
    public class GenresController : BaseController<Genre1,Genre1,Genre1>

    {
        public GenresController(IMasterUow uow):base(uow) {}

    }
}
