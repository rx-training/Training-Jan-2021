using BookMyShowAPI.IRepository;
using BookMyShowAPI.Models;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookMyShowAPI.Repository
{
    public class MovieRepository : GenericRepository<Movie>, IMovie
    {
        public MovieRepository(BookMyShowDBContext context) : base(context)
        {

        }

        // Get all the information of all movies
        public IEnumerable GetAllMovies()
        {
            var movie = context.VMovies.ToList();

            return movie;
        }

        // Get information of a particular movie
        public IEnumerable GetMovieById(int id)
        {
            var movie = context.VMovies
                                .Where(x=>x.MovieId==id)
                                .ToList();

            return movie;
        }

        // Add Movie
        public override void Create(Movie movie)
        {
            var certification = context.Certifications.SingleOrDefault(x => x.Certification1 == movie.Certification.Certification1);

            context.Movies.Add(new Movie()
            {
                Name = movie.Name,
                About=movie.About,
                Image=movie.Image,
                DateOfRelease=movie.DateOfRelease,
                Time=movie.Time,
                IsRecommended=movie.IsRecommended,
                IsPremiere=movie.IsPremiere,
                CertificationId=certification.CertificationId
            });

            context.SaveChanges();
        }

        // Update Movie
        public override void Update(int id, Movie entity)
        {
            var certification = context.Certifications.SingleOrDefault(x => x.Certification1 == entity.Certification.Certification1);

            var existingMovie = context.Movies.Where(s => s.MovieId == id)
                                                    .SingleOrDefault<Movie>();

            existingMovie.Name = entity.Name;
            existingMovie.About = entity.About;
            existingMovie.Image = entity.Image;
            existingMovie.DateOfRelease = entity.DateOfRelease;
            existingMovie.Time = entity.Time;
            existingMovie.IsRecommended = entity.IsRecommended;
            existingMovie.IsPremiere = entity.IsPremiere;
            existingMovie.CertificationId = certification.CertificationId;

            context.SaveChanges();

        }

        // Delete Movie
        public override void Delete(int id)
        {
            var movie = context.Movies
                .Where(s => s.MovieId == id)
                .SingleOrDefault();

            context.Movies.Remove(movie);
            context.SaveChanges();
        }

        // Get movies by language
        public IEnumerable GetMoviesByLangugage(string language)
        {
            var movie = context.VMovies
                                .Where(x=>x.Language==language)
                                .ToList();

            return movie;
        }

        //Add Languages, Movie is to be played in
        public void CreateMovieLanguages(int id, string language)
        {
            var lang = context.Languages.SingleOrDefault(x => x.Language1 == language);

            context.MovieLanguages.Add(new MovieLanguage()
            {
                MovieId=id,
                LanguageId=lang.LanguageId
            });

            context.SaveChanges();
        }

        //Delete Language, Movie was to be played in
        public void DeleteMovieLanguages(int id, string language)
        {
            var lang = context.Languages.SingleOrDefault(x => x.Language1 == language);

            var movieLanguage = context.MovieLanguages
                .Where(s => s.MovieId == id && s.LanguageId==lang.LanguageId)
                .SingleOrDefault();

            context.MovieLanguages.Remove(movieLanguage);
            context.SaveChanges();
        }

        // Get movies by genre
        public IEnumerable GetMoviesByGenre(string genre)
        {
            var movie = context.VMovies
                                .Where(x => x.Genre == genre)
                                .ToList();

            return movie;
        }

        //Add Genres, Movie contains
        public void CreateMovieGenres(int id, string genre)
        {
            var gen = context.Genres.SingleOrDefault(x => x.Genre1 == genre);

            context.MovieGenres.Add(new MovieGenre()
            {
                MovieId = id,
                GenreId = gen.GenreId
            });

            context.SaveChanges();
        }

        //Delete Genre, Movie contained
        public void DeleteMovieGenres(int id, string genre)
        {
            var gen = context.Genres.SingleOrDefault(x => x.Genre1 == genre);

            var movieGenre = context.MovieGenres
                .Where(s => s.MovieId == id && s.GenreId==gen.GenreId)
                .SingleOrDefault();

            context.MovieGenres.Remove(movieGenre);
            context.SaveChanges();
        }

        // Get movies by filmCategory
        public IEnumerable GetMoviesByFilmCategory(string filmCategory)
        {
            var movie = context.VMovies
                                .Where(x => x.FilmCategory == filmCategory)
                                .ToList();

            return movie;
        }

        //Add FilmCategory, Movie is to be played in
        public void CreateMovieFilmCategories(int id, string filmCategory)
        {
            var filmCtgy = context.FilmCategories.SingleOrDefault(x => x.FilmCategory1 == filmCategory);

            context.MovieFilmCategories.Add(new MovieFilmCategory()
            {
                MovieId = id,
                FilmCategoryId=filmCtgy.FilmCategoryId
            });

            context.SaveChanges();
        }

        //Delete FilmCategory, Movie was to be played in
        public void DeleteMovieFilmCategories(int id, string filmCategory)
        {
            var filmCtgy = context.FilmCategories.SingleOrDefault(x => x.FilmCategory1 == filmCategory);

            var movieFilmCategory = context.MovieFilmCategories
                .Where(s => s.MovieId == id && s.FilmCategoryId==filmCtgy.FilmCategoryId)
                .SingleOrDefault();

            context.MovieFilmCategories.Remove(movieFilmCategory);
            context.SaveChanges();
        }

        // Get all Languages for a particular movie
        public IEnumerable GetLanguagesByMovie(int id)
        {
            var languages = context.VMovies
                                    .Where(x => x.MovieId == id)
                                    .Select(x => new VMovie
                                    {
                                        MovieId = id,
                                        Name = x.Name,
                                        Image = x.Image,
                                        DateOfRelease=x.DateOfRelease,
                                        About = x.About,
                                        Certification=x.Certification,
                                        CertificationId=x.CertificationId,
                                        Time=x.Time,
                                        IsPremiere=x.IsPremiere,
                                        IsRecommended=x.IsRecommended,
                                        Language = x.Language,
                                        LanguageId = x.LanguageId
                                    })
                                    .Distinct();

            return languages;
        }

        // Get all filmCategories for a particular language
        public IEnumerable GetFilmCategoriesByLanguage(int id, string language)
        {
            var filmCategories = context.VMovies
                                        .Where(x => x.MovieId == id && x.Language == language)
                                        .Select(x => new VMovie
                                        {
                                            MovieId = id,
                                            Name = x.Name,
                                            Image = x.Image,
                                            DateOfRelease = x.DateOfRelease,
                                            About = x.About,
                                            Certification = x.Certification,
                                            CertificationId = x.CertificationId,
                                            Time = x.Time,
                                            IsPremiere = x.IsPremiere,
                                            IsRecommended = x.IsRecommended,
                                            Language = x.Language,
                                            LanguageId = x.LanguageId,
                                            FilmCategory = x.FilmCategory,
                                            FilmCategoryId = x.FilmCategoryId
                                        })
                                        .Distinct();

            return filmCategories;
        }

        // Get all theatres for a particular film category
        public IEnumerable GetTheatresByFilmCategory(int id, string language, string filmCategory)
        {
            var movie = context.Movies.SingleOrDefault(x => x.MovieId == id);

            var theatres = context.TheatresMovies
                                .Where(x => x.Movie == movie.Name && x.Language == language && x.FilmCategory == filmCategory)
                                .Select(x => new TheatresMovie
                                {
                                    Movie = x.Movie,
                                    About = x.About,
                                    DateOfRelease = x.DateOfRelease,
                                    Image = x.Image,
                                    IsPremiere = x.IsPremiere,
                                    IsRecommended = x.IsRecommended,
                                    Time = x.Time,
                                    Certification = x.Certification,
                                    CertificationId = x.CertificationId,
                                    Language = x.Language,
                                    LanguageId = x.LanguageId,
                                    FilmCategory = x.FilmCategory,
                                    FilmCategoryId = x.FilmCategoryId,
                                    TheatreId = x.TheatreId,
                                    Theatre = x.Theatre,
                                    Address = x.Address,
                                    City = x.City,
                                    CityId = x.CityId,
                                    ShowTime=x.ShowTime,
                                    ShowTimingId=x.ShowTimingId
                                })
                                .Distinct();

            return theatres;
        }

        public IEnumerable GetSeatCategoriesByTheatreShowTimings(int id, string language, string filmCategory, int theatreId, string showTime)
        {
            var movie = context.Movies.SingleOrDefault(x => x.MovieId == id);

            TimeSpan ts = DateTime.Parse(showTime).TimeOfDay;

            var seats = context.TheatresMovies
                                .Where(x => x.Movie == movie.Name && x.Language == language && x.FilmCategory == filmCategory && x.TheatreId==theatreId && x.ShowTime==ts)
                                .Select(x => new TheatresMovie
                                {
                                    Movie = x.Movie,
                                    About = x.About,
                                    DateOfRelease = x.DateOfRelease,
                                    Image = x.Image,
                                    IsPremiere = x.IsPremiere,
                                    IsRecommended = x.IsRecommended,
                                    Time = x.Time,
                                    Certification = x.Certification,
                                    CertificationId = x.CertificationId,
                                    Language = x.Language,
                                    LanguageId = x.LanguageId,
                                    FilmCategory = x.FilmCategory,
                                    FilmCategoryId = x.FilmCategoryId,
                                    TheatreId = x.TheatreId,
                                    Theatre = x.Theatre,
                                    Address = x.Address,
                                    City = x.City,
                                    CityId = x.CityId,
                                    ShowTime = x.ShowTime,
                                    ShowTimingId = x.ShowTimingId,
                                    SeatCategory=x.SeatCategory,
                                    SeatsCategoryId=x.SeatsCategoryId,
                                    Price=x.Price,
                                    SeatNo=x.SeatNo,
                                    SeatsId=x.SeatsId,
                                    ScreenId=x.ScreenId,
                                    IsBooked=x.IsBooked
                                })
                                .Distinct();

            return seats;
        }
    }
}
