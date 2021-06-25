using System.Collections.Generic;
using Microsoft.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RxWeb.Core.Security;
using RxWeb.Core.Data;
using assignment1.BoundedContext.SqlContext;
using assignment1.Models.DbEntities.Main;
using assignment1.Models.Main;
using Microsoft.AspNetCore.Authorization;

namespace assignment1.Api.Controllers.MasterModule
{
    [ApiController]
	[Route("api/[controller]")]
    [AllowAnonymous]
    public class SearchClothesController : ControllerBase
    {
        private IDbContextManager<MainSqlDbContext> DbContextManager { get; set; }
        public SearchClothesController(IDbContextManager<MainSqlDbContext> dbContextManager) {
            DbContextManager = dbContextManager;
        }

		[HttpPost]
        public async Task<IActionResult> Post([FromBody] FilterFields searchParams)
        {
            var spParameters = new SqlParameter[7];
            spParameters[0] = new SqlParameter() { ParameterName = "Lowerprice", Value = searchParams.LowerPrice };
            spParameters[1] = new SqlParameter() { ParameterName = "Higherprice", Value = searchParams.HigherPrice };
            spParameters[2] = new SqlParameter() { ParameterName = "Size", Value = searchParams.Size };
            spParameters[3] = new SqlParameter() { ParameterName = "Gender", Value = searchParams.Gender };
            spParameters[4] = new SqlParameter() { ParameterName = "Brand", Value = searchParams.Brand };
            spParameters[5] = new SqlParameter() { ParameterName = "Category", Value = searchParams.Category };
            spParameters[6] = new SqlParameter() { ParameterName = "Color", Value = searchParams.Color };
            var result = await DbContextManager.StoreProc<Cloth>("usp_FilterClothes", spParameters);
            return Ok(result);
        }
    }
}
