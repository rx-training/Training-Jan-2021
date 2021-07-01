using Microsoft.AspNetCore.Mvc;
using System.Linq;
using Assignment1.UnitOfWork.Main;
using Assignment1.Models.Main;
using RxWeb.Core.AspNetCore;
using RxWeb.Core.Security.Authorization;
using Microsoft.AspNetCore.Authorization;

namespace Assignment1.Api.Controllers.MasterModule
{
    [ApiController]
    [Route("api/[controller]")]
	[AllowAnonymous]
	public class CatagoryLookupsController : BaseLookupController

    {
        public CatagoryLookupsController(IMasterUow uow):base(uow) {}

        #region Lookups
        		[HttpGet("Catagory")]
		public IQueryable<vCatagory> GetCatagory()
		{
			return Uow.Repository<vCatagory>().Queryable();
		}
            #endregion Lookups

    }
}
