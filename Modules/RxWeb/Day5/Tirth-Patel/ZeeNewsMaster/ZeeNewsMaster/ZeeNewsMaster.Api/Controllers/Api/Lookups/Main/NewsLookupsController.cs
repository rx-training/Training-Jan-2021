using Microsoft.AspNetCore.Mvc;
using System.Linq;
using ZeeNewsMaster.UnitOfWork.Main;
using ZeeNewsMaster.Models.Main;
using RxWeb.Core.AspNetCore;
using RxWeb.Core.Security.Authorization;

namespace ZeeNewsMaster.Api.Controllers.NewsContentModule
{
	[ApiController]
	[Route("api/[controller]")]

	public class NewsLookupsController : BaseLookupController

	{
		public NewsLookupsController(IMasterUow uow) : base(uow) { }

		#region Lookups
		[HttpGet("NewsContent")]
		public IQueryable<vNewsContent> GetNewsContent()
		{
			return Uow.Repository<vNewsContent>().Queryable();
		}
		[HttpGet("NewsContentByorder")]
		public IQueryable<vNewsContent> GetNewsContentOrderWise()
		{
			return Uow.Repository<vNewsContent>().Queryable().OrderBy(p => p.NewsId);
		}
		[HttpGet("NewsContentOfNewsId/{id}")]
		#endregion Lookups
		public IQueryable<vNewsContent> GetNewsContentBynewsId(int id)
		{
			return Uow.Repository<vNewsContent>().Queryable().Where(p => p.NewsId == id);
		}
	}
}
