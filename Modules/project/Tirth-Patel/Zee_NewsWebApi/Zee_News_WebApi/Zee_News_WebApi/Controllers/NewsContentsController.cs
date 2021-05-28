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
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class NewsContentsController : ControllerBase
    {
        INewsContent ContentRepo;
        public NewsContentsController(INewsContent NewsContentRepo)
        {
            this.ContentRepo = NewsContentRepo;
        }

        // GET: api/NewsContents
        [HttpGet]
        public IEnumerable<NewsContent> GetNewsData()
        { 
            return ContentRepo.GetAll();
        }

        // GET: api/NewsContents/5
        
        [HttpGet("{id}")]
        public NewsContent GetbyId(int id)
        {
            return ContentRepo.GetById(id);
        }

        // PUT: api/NewsContents/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [Authorize(Roles = UserRoles.Admin)]
        [HttpPut("{id}")]
        public NewsContent Update(NewsContent news)
        {
            ContentRepo.Update(news);
            return news;
        }

        // POST: api/NewsContents
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [Authorize(Roles = UserRoles.Admin)]
        [HttpPost]
        public NewsContent add(NewsContent news)
        {
            ContentRepo.Create(news);
            return news;
        }

        // DELETE: api/NewsContents
        [Authorize(Roles = UserRoles.Admin)]
        [HttpDelete]
        public IEnumerable<NewsContent> Delete(NewsContent news)
        {
            ContentRepo.Delete(news);
            return ContentRepo.GetAll();
        }

    }
}
