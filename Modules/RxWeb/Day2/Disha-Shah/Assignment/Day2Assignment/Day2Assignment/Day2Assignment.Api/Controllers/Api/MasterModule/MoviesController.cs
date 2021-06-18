using Microsoft.AspNetCore.Mvc;
using System.Linq;
using Day2Assignment.UnitOfWork.Main;
using Day2Assignment.Models.Main;
using RxWeb.Core.AspNetCore;
using RxWeb.Core.Security.Authorization;

namespace Day2Assignment.Api.Controllers.MasterModule
{
    [ApiController]
    [Route("api/[controller]")]
    [Access(1)]
    public class MoviesController : BaseController<Movie,vMovy,Movie>

    {
        public MoviesController(IMasterUow uow):base(uow) {}

    }
}
