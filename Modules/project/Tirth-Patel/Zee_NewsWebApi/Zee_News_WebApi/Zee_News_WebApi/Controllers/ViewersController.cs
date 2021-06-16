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
   
    [Route("api/[controller]")]
    [ApiController]
    public class ViewersController : ControllerBase
    {
       
        IViewers ViewersRepo;
        public ViewersController(IViewers ViewersRepo)
        {
            this.ViewersRepo = ViewersRepo;

        }

        // GET: api/Viewers
        [HttpGet]
       public IEnumerable<Viewers1> GetViewers()
        {
            return ViewersRepo.GetAll();
        }

        // GET: api/Viewers/Tirth
        [HttpGet("{Name}")]
       public Viewers1 GetbyName(string Name)
        {
            return ViewersRepo.FindByName(Name);
        }

        // PUT: api/Viewers/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut]
        public Viewers1 Update(Viewers1  Update)
        {
           ViewersRepo.Update(Update);
            return Update;

        }

        // POST: api/Viewers
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
       public Viewers1 Add(Viewers1 Newviewer)
        {
           
            ViewersRepo.Create(Newviewer);
            return Newviewer;


        }

        // DELETE: api/Viewers/5
        [HttpDelete("{Name}")]
        public Viewers1 Delete(string name)
        {
            return ViewersRepo.DeleteByName(name);
        }
    }
}
