using Microsoft.AspNetCore.Mvc;
using System.Linq;
using ZeeNewsMaster.UnitOfWork.Main;
using ZeeNewsMaster.Models.Main;
using RxWeb.Core.AspNetCore;
using RxWeb.Core.Security.Authorization;

namespace ZeeNewsMaster.Api.Controllers.MasterModule
{
    [ApiController]
    [Route("api/[controller]")]
	
	public class NewsHeadersController : BaseController<NewsHeader,NewsHeader,NewsHeader>

    {
        public NewsHeadersController(IMasterUow uow):base(uow) {}

    }
}
