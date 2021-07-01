using BookMyShowAPI.IRepository;
using BookMyShowAPI.Models;
using System;
using System.Collections;
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

        public IEnumerable GetAllFilmCategories()
        {
            var filmCategories = context.FilmCategories;

            var g1 = from x in filmCategories
                     select new FilmCategory
                     {
                         FilmCategory1 = x.FilmCategory1,
                         FilmCategoryId = x.FilmCategoryId,
                         MovieFilmCategories = context.MovieFilmCategories.Where(m => m.FilmCategoryId == x.FilmCategoryId).ToArray()
                     };

            return g1;
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
