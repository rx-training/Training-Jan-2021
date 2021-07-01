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
    public class CertificationsController : BaseController<Certification1,Certification1,Certification1>

    {
        public CertificationsController(IMasterUow uow):base(uow) {}

    }
}
