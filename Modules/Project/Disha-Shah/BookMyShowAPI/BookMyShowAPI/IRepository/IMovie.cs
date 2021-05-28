using BookMyShowAPI.Models;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookMyShowAPI.IRepository
{
    public interface IMovie : IGenericInterface<Movie>
    {
        public IEnumerable GetAllMovies();
        public IEnumerable GetMovieById(int id);

        public IEnumerable GetMoviesByLangugage(string language);
        public void CreateMovieLanguages(int id, string language);
        public void DeleteMovieLanguages(int id, string language);

        public IEnumerable GetMoviesByGenre(string genre);
        public void CreateMovieGenres(int id, string genre);
        public void DeleteMovieGenres(int id, string genre);

        public IEnumerable GetMoviesByFilmCategory(string filmCategory);
        public void CreateMovieFilmCategories(int id, string filmCategory);
        public void DeleteMovieFilmCategories(int id, string filmCategory);

        public IEnumerable GetLanguagesByMovie(int id);
        public IEnumerable GetFilmCategoriesByLanguage(int id, string language);
        public IEnumerable GetTheatresByFilmCategory(int id, string language, string filmCategory);
        public IEnumerable GetSeatCategoriesByTheatreShowTimings(int id, string language, string filmCategory, int theatreId, string showTime);
        public IEnumerable GetSeatsBySeatCategories(int id, string language, string filmCategory, int theatreId, string showTime, string seatsCategory);
    }
}
