using Inox.Models;
using Inox.Models.IRepository;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Inox.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VHistoryController : ControllerBase
    {
        IvHistory _ivHistory;

        public VHistoryController(IvHistory ivHistory)
        {
            this._ivHistory = ivHistory;
        }

        [Authorize]
        [HttpGet]
        public IEnumerable<VHistory> GetVHistories()
        {
            return _ivHistory.GetAll();
        }
    }
}
