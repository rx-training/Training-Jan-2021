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
    public class BorrowController : ControllerBase
    {
        IBorrow borrow;
        public BorrowController(IBorrow borrow)
        {
            this.borrow = borrow;
        }

        [HttpGet]
        public IEnumerable<Models.Borrow> GetBorrows()
        {
            return borrow.GetAll();
        }
    }
}
