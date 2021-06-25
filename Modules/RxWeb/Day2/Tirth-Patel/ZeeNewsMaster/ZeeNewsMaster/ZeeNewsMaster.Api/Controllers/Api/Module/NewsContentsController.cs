using Microsoft.AspNetCore.Mvc;
using System.Linq;
using ZeeNewsMaster.UnitOfWork.Main;
using ZeeNewsMaster.Models.Main;
using RxWeb.Core.AspNetCore;
using RxWeb.Core.Security.Authorization;

namespace ZeeNewsMaster.Api.Controllers.Module
{
    [ApiController]
    [Route("api/[controller]")]
	
	public class NewsContentsController : BaseController<NewsContent,NewsContent,NewsContent>

    {
        public NewsContentsController(IMasterUow uow):base(uow) {}

    }
}
