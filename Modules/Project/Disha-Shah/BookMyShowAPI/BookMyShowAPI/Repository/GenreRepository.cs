using BookMyShowAPI.IRepository;
using BookMyShowAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookMyShowAPI.Repository
{
    public class GenreRepository : GenericRepository<Genre>, IGenre
    {
        public GenreRepository(BookMyShowDBContext context) : base(context)
        {

        }

        // Add Genre
        public override void Create(Genre genre)
        {
            context.Genres.Add(new Genre()
            {
                Genre1=genre.Genre1
            });

            context.SaveChanges();
        }

        // Update Genre
        public override void Update(int id, Genre entity)
        {
            var existingGenre = context.Genres.Where(s => s.GenreId == id)
                                                    .SingleOrDefault<Genre>();

            existingGenre.Genre1 = entity.Genre1;

            context.SaveChanges();

        }

        // Delete Genre
        public override void Delete(int id)
        {
            var genre = context.Genres
                .Where(s => s.GenreId == id)
                .SingleOrDefault();

            context.Genres.Remove(genre);
            context.SaveChanges();
        }

    }
}
