using System.Collections.Generic;

using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RxWeb.Core.Security;
using RxWeb.Core.Data;
using Microsoft.Data.SqlClient;
using ZeeNewsMaster.Models.ViewModels;
using ZeeNewsMaster.BoundedContext.SqlContext;
namespace ZeeNewsMaster.Api.Controllers.NewsContentModule
{
    [ApiController]
	[Route("api/[controller]")]
    public class SearchSearchByNewsIdController : ControllerBase
    {
        private IDbContextManager<MainSqlDbContext> DbContextManager { get; set; }
        public SearchSearchByNewsIdController(IDbContextManager<MainSqlDbContext> dbContextManager) {
            DbContextManager = dbContextManager;
        }

		[HttpPost]
        public async Task<IActionResult> Post([FromBody]Dictionary<string,int> searchParams)
        {
            var spParameters = new SqlParameter[1];
            spParameters[0] = new SqlParameter() { ParameterName = "newsId", Value = searchParams["newsId"]};

            var result = await DbContextManager.StoreProc<StoreProcResult>("spSearchNewsOnNewsId", spParameters);
            return Ok(result.ToList());
        }
    }
}
