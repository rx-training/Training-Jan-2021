using Microsoft.AspNetCore.Mvc;
using System.Linq;
using Assignment1.UnitOfWork.Main;
using Assignment1.Models.Main;
using RxWeb.Core.AspNetCore;
using RxWeb.Core.Security.Authorization;

namespace Assignment1.Api.Controllers.MasterModule
{
    [ApiController]
    [Route("api/[controller]")]
	
	public class DriverController : BaseController<Driver,Driver,Driver>

    {
        public DriverController(IMasterUow uow):base(uow) {}

    }
}
