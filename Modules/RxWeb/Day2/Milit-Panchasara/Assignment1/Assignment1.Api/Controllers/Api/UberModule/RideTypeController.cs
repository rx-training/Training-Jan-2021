using Microsoft.AspNetCore.Mvc;
using System.Linq;
using Assignment1.UnitOfWork.Main;
using Assignment1.Models.Main;
using RxWeb.Core.AspNetCore;
using RxWeb.Core.Security.Authorization;
using Microsoft.AspNetCore.Authorization;

namespace Assignment1.Api.Controllers.UberModule
{
    [ApiController]
    [Route("api/[controller]")]
    [AllowAnonymous]
    public class RideTypeController : BaseController<RideType,RideType,RideType>

    {
        public RideTypeController(IUberUow uow):base(uow) {}

    }
}
