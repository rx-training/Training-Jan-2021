using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Zee_News_WebApi.Models;
using Zee_News_WebApi.IRepository;
using Zee_News_WebApi.Repository;
using Microsoft.AspNetCore.Authorization;
using Zee_News_WebApi.Authentication;

namespace Zee_News_WebApi.Controllers
{
    [Authorize(Roles = UserRoles.Admin)]
    [Route("api/[controller]")]
    [ApiController]
    public class ActivitiesController : ControllerBase
    {
        IActivities ActivitiesRepo;

        public ActivitiesController(IActivities ActivitiesRepo)
        {
            this.ActivitiesRepo = ActivitiesRepo;
        }

        // GET: api/Activities
        [HttpGet]
        public IEnumerable<Activity> GetActivities()
        {
            return ActivitiesRepo.GetAll();
        }

        // GET: api/Activities/5
        [HttpGet("{id}")]
        public Activity GetActivity(int id)
        {
            return ActivitiesRepo.GetById(id);
        }

        // PUT: api/Activities/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
       public IEnumerable<Activity> Update(Activity act)
        {
            ActivitiesRepo.Update(act);
            yield return ActivitiesRepo.GetById(act.ActivityId);
        }

        // POST: api/Activities
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
      public IEnumerable<Activity> Add(Activity Act)
        {
            ActivitiesRepo.Create(Act);
            return ActivitiesRepo.GetAll();
        }

        // DELETE: api/Activities/5
        [HttpDelete("{id}")]
       public IEnumerable<Activity> Deletewithid(int id)
        {
            ActivitiesRepo.DeleteWithId(id);
            return ActivitiesRepo.GetAll();
        }

        
    }
}
