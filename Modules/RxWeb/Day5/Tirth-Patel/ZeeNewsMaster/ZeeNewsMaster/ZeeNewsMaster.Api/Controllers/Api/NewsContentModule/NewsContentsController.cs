using Microsoft.AspNetCore.Mvc;
using ZeeNewsMaster.Models.Main;
using RxWeb.Core.AspNetCore;
using ZeeNewsMaster.Domain.NewContentModule;

namespace ZeeNewsMaster.Api.Controllers.NewsContentModule
{
    [ApiController]
    [Route("api/[controller]")]
	
	public class NewsContentsController : BaseDomainController<NewsContent,NewsContent>

    {
        public NewsContentsController(INewsContentDomain domain):base(domain) {}

    }
}
