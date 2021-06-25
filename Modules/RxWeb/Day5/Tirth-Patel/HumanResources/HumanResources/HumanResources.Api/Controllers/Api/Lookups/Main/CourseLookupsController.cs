using Microsoft.AspNetCore.Mvc;
using System.Linq;
using HumanResources.UnitOfWork.Main;
using HumanResources.Models.Main;
using RxWeb.Core.AspNetCore;
using RxWeb.Core.Security.Authorization;

namespace HumanResources.Api.Controllers.StudentModule
{
    [ApiController]
    [Route("api/[controller]")]
	
	public class CourseLookupsController : BaseLookupController

    {
        public CourseLookupsController(IMasterUow uow):base(uow) {}

        #region Lookups
        		[HttpGet("CourseLookups")]
		public IQueryable<vCourseLookup> GetCourseLookups()
		{
			return Uow.Repository<vCourseLookup>().Queryable();
		}
            #endregion Lookups

    }
}
