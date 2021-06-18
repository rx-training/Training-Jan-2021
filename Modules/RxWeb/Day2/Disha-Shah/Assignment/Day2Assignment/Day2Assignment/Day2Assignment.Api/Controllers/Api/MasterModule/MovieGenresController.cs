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
    public class MovieGenresController : BaseController<MovieGenre1,MovieGenre1,MovieGenre1>

    {
        public MovieGenresController(IMasterUow uow):base(uow) {}

    }
}
