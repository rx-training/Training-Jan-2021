using BookMyShowAPI.IRepository;
using BookMyShowAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookMyShowAPI.Repository
{
    public class FilmCategoryRepository : GenericRepository<FilmCategory>, IFilmCategory
    {
        public FilmCategoryRepository(BookMyShowDBContext context) : base(context)
        {

        }

        // Add FilmCategory
        public override void Create(FilmCategory filmCategory)
        {
            context.FilmCategories.Add(new FilmCategory()
            {
                FilmCategory1=filmCategory.FilmCategory1
            });

            context.SaveChanges();
        }

        // Update FilmCategory
        public override void Update(int id, FilmCategory entity)
        {
            var existingFilmCategory = context.FilmCategories.Where(s => s.FilmCategoryId == id)
                                                    .SingleOrDefault<FilmCategory>();

            existingFilmCategory.FilmCategory1 = entity.FilmCategory1;

            context.SaveChanges();

        }

        // Delete FilmCategory
        public override void Delete(int id)
        {
            var filmCategory = context.FilmCategories
                .Where(s => s.FilmCategoryId == id)
                .SingleOrDefault();

            context.FilmCategories.Remove(filmCategory);
            context.SaveChanges();
        }

    }
}
