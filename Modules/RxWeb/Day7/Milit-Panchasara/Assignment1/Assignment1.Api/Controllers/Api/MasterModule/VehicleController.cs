using Microsoft.AspNetCore.Mvc;
using System.Linq;
using Assignment1.Domain.MasterModule;
using Assignment1.Models.Main;
using RxWeb.Core.AspNetCore;
using RxWeb.Core.Security.Authorization;
using Microsoft.AspNetCore.Authorization;

namespace Assignment1.Api.Controllers.MasterModule
{
    [ApiController]
    [Route("api/driver/{driverId}/[controller]")]
    [AllowAnonymous]
	
	public class VehicleController : BaseDomainController<Vehicle,Vehicle>

    {
        public VehicleController(IVehicleDomain domain):base(domain) {}

    }
}
