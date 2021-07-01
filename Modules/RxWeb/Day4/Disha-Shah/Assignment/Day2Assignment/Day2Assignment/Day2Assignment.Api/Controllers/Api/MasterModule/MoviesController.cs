using Microsoft.AspNetCore.Mvc;
using System.Linq;
using Day2Assignment.Domain.MasterModule;
using Day2Assignment.Models.Main;
using RxWeb.Core.AspNetCore;
using RxWeb.Core.Security.Authorization;
using Microsoft.AspNetCore.Authorization;
using Day2Assignment.Models.DbEntities.Main;

namespace Day2Assignment.Api.Controllers.MasterModule
{
    [ApiController]
    [Route("api/[controller]")]
    [Access(1)]
    public class MoviesController : BaseDomainController<MovieDTO, Movie>

    {
        public MoviesController(IMovieDomain domain):base(domain) {}

    }
}
