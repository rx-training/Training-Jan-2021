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
    public class NewsHeadersController : ControllerBase
    {
        INewsHeader   NewsHeadersRepository;
        public NewsHeadersController(INewsHeader NewsHeadersRepository)
        {
            this.NewsHeadersRepository = NewsHeadersRepository;
        }
        //get all Newsheaders

        // GET: api/NewsHeaders
        [HttpGet]
        public IEnumerable<NewsHeader> Getdata()
        {
            return NewsHeadersRepository.GetAll();
        }

        //GET:api/NewsHeaders/Category/{NewsId}
        [HttpGet("Category/{id}")]
        //get categoryWise news with its content with newsheaderID
        public List<VGetCateogryWisenews> CategoryWiseNews(int id)
        {
          return  NewsHeadersRepository.GetCategoryWiseNews(id);
            
        }
        //newsheaderId wise news
        // GET: api/NewsHeaders/5
        [HttpGet("{id}")]
        public NewsHeader Getbyid(int id)
        {
            return NewsHeadersRepository.GetById(id);
        }

        // PUT: api/NewsHeaders/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        //only Admin has right to update ,delete and craete an newscontent

        [Authorize(Roles = UserRoles.Admin)]
        [HttpPut("{id}")]
        public NewsHeader update(NewsHeader News)
        {
            NewsHeadersRepository.Update(News);
            return News;
        }

        // POST: api/NewsHeaders
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [Authorize(Roles = UserRoles.Admin)]
        [HttpPost]
        public IEnumerable<NewsHeader> Create(NewsHeader News)
        {
            NewsHeadersRepository.Create(News);
            return NewsHeadersRepository.GetAll();
        }
        // DELETE: api/NewsHeaders/5
        [Authorize(Roles = UserRoles.Admin)]
        [HttpDelete("{id}")]
        public IEnumerable<NewsHeader> Delete(int id)
        {
            NewsHeadersRepository.DeleteWithId(id);
            return NewsHeadersRepository.GetAll();
        }

       
    }
}
