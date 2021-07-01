using Microsoft.AspNetCore.Mvc;
using System.Linq;
using practice.UnitOfWork.Main;
using practice.Models.Main;
using RxWeb.Core.AspNetCore;
using RxWeb.Core.Security.Authorization;

namespace practice.Api.Controllers.MasterModule
{
    [ApiController]
    [Route("api/[controller]")]
	
	public class StudentLookupsController : BaseLookupController

    {
        public StudentLookupsController(IMasterUow uow):base(uow) {}

        #region Lookups
        [HttpGet("Student")]
		public IQueryable<vStudent> GetStudent()
		{
			return Uow.Repository<vStudent>().Queryable();
		}
        #endregion Lookups

    }
}
