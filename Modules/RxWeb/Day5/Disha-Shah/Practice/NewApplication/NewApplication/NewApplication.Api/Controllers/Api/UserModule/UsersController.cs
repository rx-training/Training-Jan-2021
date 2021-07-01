using Microsoft.AspNetCore.Mvc;
using System.Linq;
using NewApplication.Domain.UserModule;
using NewApplication.Models.Main;
using RxWeb.Core.AspNetCore;
using RxWeb.Core.Security.Authorization;
using Microsoft.AspNetCore.Authorization;

namespace NewApplication.Api.Controllers.UserModule
{
    [ApiController]
    [Route("api/[controller]")]
    [AllowAnonymous]
    public class UsersController : BaseDomainController<User, User>

    {
        public UsersController(IUserDomain domain):base(domain) {}

    }
}
