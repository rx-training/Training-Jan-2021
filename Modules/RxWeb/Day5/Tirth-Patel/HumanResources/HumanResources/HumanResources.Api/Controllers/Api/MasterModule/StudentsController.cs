using Microsoft.AspNetCore.Mvc;
using System.Linq;
using HumanResources.UnitOfWork.Main;
using HumanResources.Models.Main;
using RxWeb.Core.AspNetCore;
using RxWeb.Core.Security.Authorization;

namespace HumanResources.Api.Controllers.MasterModule
{
    [ApiController]
    [Route("api/[controller]")]
	    [Access(1)]
	public class StudentsController : BaseController<Student,vStudent,Student>

    {
        public StudentsController(IMasterUow uow):base(uow) {}

    }
}
