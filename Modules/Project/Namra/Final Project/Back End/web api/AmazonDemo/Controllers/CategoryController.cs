using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AmazonDemo.Models;
using AmazonDemo.Models.IRepository;
using Microsoft.AspNetCore.Mvc;

namespace AmazonDemo.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class CategoryController : Controller
    {
        private readonly ICategory category;
        private readonly AmazonContext context;

        public CategoryController(ICategory category, AmazonContext context)
        {
            this.category = category;
            this.context = context;
        }

        [HttpGet]
        public IEnumerable<Category> GetAll()
        {
            return category.GetAll();
        }

        [HttpGet("{CategoryName}")]
        public IEnumerable<Category> GetByName(string CategoryName)
        {
            return category.Find(s => s.CategoryName.ToLower().Contains(CategoryName.ToLower()));
        }

        [HttpGet("{Id}")]
        public Category GetById(int Id)
        {
            return category.GetById(Id);
        }

        [HttpPost]
        public int Create([FromBody] Category newCateGory)
        {
            if (category.Any(s => s.CategoryName== newCateGory.CategoryName))
            {
                return 0;
            }
            else
            {
                category.Create(newCateGory);
                return context.Categories.ToList().Last().CategoryId;
            }
        }
        [HttpPut]
        public bool Update([FromBody] Category updateCategory)
        {
            if (category.Any(S => S.CategoryName == updateCategory.CategoryName))
            {
                if (updateCategory.CategoryId == category.Find(s => s.CategoryName== updateCategory.CategoryName).First().CategoryId)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
            else
            {
                category.Update(updateCategory);
                return true;
            }
        }

        [HttpDelete("{Id}")]
        public bool Delete(int Id)
        {
            if (category.Any(s => s.CategoryId==Id))
            {
                category.Delete(category.Find(s => s.CategoryId == Id).First());
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}
