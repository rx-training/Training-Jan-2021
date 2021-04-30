using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Day17Assignment.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Day17Assignment.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class DrugsController : ControllerBase
    {
        private readonly Day17AssignmentContext context;
        public DrugsController(Day17AssignmentContext _Context)
        {
            this.context = _Context;
        }
        [HttpGet]
        public IEnumerable<Models.Drug> Get()
        {
            return context.Drugs;            
        }

    }
}
