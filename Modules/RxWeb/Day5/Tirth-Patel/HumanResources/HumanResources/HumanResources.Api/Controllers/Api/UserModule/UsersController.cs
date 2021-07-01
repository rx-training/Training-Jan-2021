using Microsoft.AspNetCore.Mvc;
using System.Linq;
using HumanResources.Domain.UserModule;
using HumanResources.Models.Main;
using RxWeb.Core.AspNetCore;
using RxWeb.Core.Security.Authorization;
using RxWeb.Core;

namespace HumanResources.Api.Controllers.UserModule
{
    [ApiController]
    [Route("api/[controller]")]
	
	public class UsersController : BaseDomainController<User,User>

    {
        public UsersController(IUserDomain domain):base(domain) {}

    }
}
