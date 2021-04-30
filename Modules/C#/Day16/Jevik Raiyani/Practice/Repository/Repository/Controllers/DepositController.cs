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
    public class DepositController : ControllerBase
    {
        IDeposit deposit;
        public DepositController(IDeposit deposit)
        {
            this.deposit = deposit;
        }

        [HttpGet]
        public IEnumerable<Models.Deposit> GetDeposits()
        {
            return deposit.GetAll();
        }
    }
}
