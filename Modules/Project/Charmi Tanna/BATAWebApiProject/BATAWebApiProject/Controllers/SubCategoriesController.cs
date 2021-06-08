using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BATAWebApiProject.Models;
using BATAWebAPI.Models.IRepository;
using Microsoft.AspNetCore.Authorization;
using BATAWebApiProject.Authentication;

namespace BATAWebApiProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SubCategoriesController : ControllerBase
    {
        //private readonly BATAContext _context;

        //public SubCategoriesController(BATAContext context)
        //{
        //    _context = context;
        //}

        ISubCategory subcategory;
        public SubCategoriesController(ISubCategory subcategory)
        {
            this.subcategory = subcategory;
        }

        // GET: api/SubCategories
        [HttpGet]
        public IEnumerable<Models.SubCategory> GetSubCategory()
        {
            return subcategory.GetAll();
        }
        // GET: api/SubCategories/5
        //[HttpGet("{id}")]
        //public ActionResult<SubCategory> GetSubCategoryById(int id)
        //{
        //    var subcategor1 = SubCategory.Get;

        //    if (su1 == null)
        //    {
        //        return NotFound();
        //    }

        //    return Ok(sale1);
        //}

        //// PUT: api/SubCategoriess/5
        //// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [Authorize(Roles = UserRoles.Admin)]
        [HttpPut("{id}")]
        public ActionResult<SubCategory> PutSubCategory(int id, SubCategory subcategories)
        {
            if (id != subcategories.SubCategoryId)
            {
                return BadRequest();
            }
            subcategory.Update(id, subcategories);
            return subcategories;
        }

        // POST: api/SubCategories
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [Authorize(Roles = UserRoles.Admin)]
        [HttpPost]
        public ActionResult<SubCategory> PostSubCategory(SubCategory subcategories)
        {
            subcategory.Create(subcategories);
            return subcategories;
        }

        //// DELETE: api/SubCategory/5
        [Authorize(Roles = UserRoles.Admin)]
        [HttpDelete("{id}")]
        public void DeleteSubCategory(int id)
        {
            var subcategory1 = subcategory.Find(i => i.SubCategoryId == id).Single();
            subcategory.Delete(subcategory1);
            return;
        }
    }
}
