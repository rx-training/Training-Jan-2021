using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ToyCompanyAPI.IRepository;
using ToyCompanyAPI.Models;

namespace ToyCompanyAPI.Repository
{
    public class ToyCategoryRepository : GenericRepository<ToyCategory>, IToyCategory
    {
        public ToyCategoryRepository(ToyCompanyDBContext context) : base(context)
        {

        }

        public override void Create(ToyCategory toyCategory)
        {
            context.ToyCategories.Add(new ToyCategory()
            {
                Name=toyCategory.Name
            });

            context.SaveChanges();
        }

        public override void Update(int id, ToyCategory entity)
        {
            var existingCategory = context.ToyCategories.Where(s => s.Id == id)
                                                    .SingleOrDefault<ToyCategory>();

            existingCategory.Name = entity.Name;

            context.SaveChanges();

        }

        public override void Delete(int id)
        {
            var toyCategory = context.ToyCategories
                .Where(s => s.Id == id)
                .SingleOrDefault();

            context.ToyCategories.Remove(toyCategory);
            context.SaveChanges();
        }
    }
}
