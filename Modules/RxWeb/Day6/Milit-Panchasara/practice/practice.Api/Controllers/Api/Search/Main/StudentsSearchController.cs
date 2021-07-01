using System.Collections.Generic;
using Microsoft.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RxWeb.Core.Security;
using RxWeb.Core.Data;
using practice.Models.ViewModels;
using practice.BoundedContext.SqlContext;
using Microsoft.AspNetCore.Authorization;
using practice.Models.Main;

namespace practice.Api.Controllers.MasterModule
{
    [ApiController]
	[Route("api/[controller]")]
    [AllowAnonymous]
    public class SearchStudentsController : ControllerBase
    {
        private IDbContextManager<MainSqlDbContext> DbContextManager { get; set; }
        public SearchStudentsController(IDbContextManager<MainSqlDbContext> dbContextManager) {
            DbContextManager = dbContextManager;
        }

		[HttpPost]
        public async Task<IActionResult> Post([FromBody]Dictionary<string,string> searchParams)
        {
            var spParameters = new SqlParameter[1];
            spParameters[0] = new SqlParameter() { ParameterName = "Query", Value = searchParams["query"] };
            var result = await DbContextManager.StoreProc<vStudentRecord>("[dbo].spSearchUsers", spParameters);
            return Ok(result);
        }
    }
}
