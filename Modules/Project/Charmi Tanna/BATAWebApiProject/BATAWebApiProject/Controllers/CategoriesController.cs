using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BATAWebApiProject.Models;
using BATAWebAPI.Models.IRepository;
using BATAWebApiProject.Authentication;
using Microsoft.AspNetCore.Authorization;

namespace BATAWebApiProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {
        //private readonly BATAContext _context;

        //public CategoriesController(BATAContext context)
        //{
        //    _context = context;
        //}
        ICategory category;
        public CategoriesController(ICategory category)
        {
            this.category = category;
        }

        // GET: api/Categories

        [HttpGet]
        public IEnumerable<Models.Category> GetCategory()
        {
            return category.GetAll();
        }

        [HttpGet("{id}")]
        public ActionResult<Category> GetCategoryById(int id)
        {
            var category1 = category.GetById(id);

            if (category1 == null)
            {
                return NotFound();
            }

            return Ok(category1);
        }

        //// PUT: api/Categories/5
        //// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [Authorize(Roles = UserRoles.Admin)]
        [HttpPut("{id}")]
        public ActionResult<Category> PutCategory(int id, Category categories)
        {
            if (id != categories.CategoryId)
            {
                return BadRequest();
            }
            category.Update(id, categories);
            return categories;
        }

        // POST: api/Categories
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [Authorize(Roles = UserRoles.Admin)]
        [HttpPost]
        public ActionResult<Category> PostCategory(Category categories)
        {
            category.Create(categories);
            return categories;
        }

        //// DELETE: api/Categories/5
        [Authorize(Roles = UserRoles.Admin)]
        [HttpDelete("{id}")]
        public void DeleteCategory(int id)
        {
            var category1 = category.Find(i => i.CategoryId == id).Single();
            category.Delete(category1);
            return;
        }
    }
}
