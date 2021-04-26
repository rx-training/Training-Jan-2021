using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Repository.Models.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Repository.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BranchController : ControllerBase
    {
        IBranch branch;

        public BranchController(IBranch branch)
        {
            this.branch = branch;
        }
        [HttpGet]
        public IEnumerable<Models.Branch> GetBranches()
        {
            return branch.GetAll();
        }
    }
}
