using Microsoft.AspNetCore.Mvc;
using System.Linq;
using HumanResources.UnitOfWork.Main;
using HumanResources.Models.Main;
using RxWeb.Core.AspNetCore;
using RxWeb.Core.Security.Authorization;

namespace HumanResources.Api.Controllers.UserModule
{
    [ApiController]
    [Route("api/[controller]")]
	
	public class CountryLookupsController : BaseLookupController

    {
        public CountryLookupsController(IMasterUow uow):base(uow) {}

        #region Lookups
        		[HttpGet("CountryLookups")]
		public IQueryable<vCourseLookup> GetCountryLookups()
		{
			return Uow.Repository<vCourseLookup>().Queryable();
		}
            #endregion Lookups

    }
}
