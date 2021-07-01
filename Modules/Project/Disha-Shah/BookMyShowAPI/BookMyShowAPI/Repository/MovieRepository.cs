﻿using BookMyShowAPI.IRepository;
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
            var movies = context.Movies.Where(x=> x.IsActive == true);

            var m1 = from x in movies
                     select new Movie
                     {
                         About = x.About,
                         Certification = x.Certification,
                         CertificationId = x.CertificationId,
                         DateOfRelease = x.DateOfRelease,
                         Image = x.Image,
                         IsPremiere = x.IsPremiere,
                         IsRecommended = x.IsRecommended,
                         MovieId = x.MovieId,
                         Name = x.Name,
                         Time = x.Time,
                         BackgroundImage = x.BackgroundImage,
                         Cast = x.Cast,
                         CastImages= x.CastImages,
                         MovieGenres = context.MovieGenres.Where(m => m.MovieId == x.MovieId).ToArray(),
                         MovieFilmCategories = context.MovieFilmCategories.Where(m => m.MovieId == x.MovieId).ToArray(),
                         MovieLanguages = context.MovieLanguages.Where(m => m.MovieId == x.MovieId).ToArray(),
                         ScreensMovies = context.ScreensMovies.Where(m => m.MovieId == x.MovieId).ToArray()
                     };


            return m1;

            //var movies = context.VMovies.ToList();

            //return movies;
        }

        // Get information of a particular movie
        public IEnumerable GetMovieById(int id)
        {
            var movies = context.Movies
                                .Where(x=>x.MovieId == id && x.IsActive == true);

            var m1 = from x in movies
                     select new Movie
                     {
                         About = x.About,
                         Certification = x.Certification,
                         CertificationId = x.CertificationId,
                         DateOfRelease = x.DateOfRelease,
                         Image = x.Image,
                         IsPremiere = x.IsPremiere,
                         IsRecommended = x.IsRecommended,
                         MovieId = x.MovieId,
                         Name = x.Name,
                         Time = x.Time,
                         BackgroundImage = x.BackgroundImage,
                         Cast = x.Cast,
                         CastImages = x.CastImages,
                         MovieGenres = context.MovieGenres.Where(m => m.MovieId == x.MovieId).ToArray(),
                         MovieFilmCategories = context.MovieFilmCategories.Where(m => m.MovieId == x.MovieId).ToArray(),
                         MovieLanguages = context.MovieLanguages.Where(m => m.MovieId == x.MovieId).ToArray(),
                         ScreensMovies = context.ScreensMovies.Where(m => m.MovieId == x.MovieId).ToArray()
                     };

            return m1;

            //var movie = context.VMovies
            //                    .Where(x=>x.MovieId==id)
            //                    .ToList();

            //return movie;
        }

        // Add Movie
        public void CreateMovie(MovieDTO movie)
        {
            var certification = context.Certifications.SingleOrDefault(x => x.Certification1 == movie.Certification);

            //var newMovie = new Movie
            //{
            //    Name = movie.Name,
            //    About = movie.About,
            //    Image = movie.Image,
            //    DateOfRelease = movie.DateOfRelease,
            //    Time = movie.Time,
            //    IsRecommended = movie.IsRecommended,
            //    IsPremiere = movie.IsPremiere,
            //    CertificationId = certification.CertificationId
            //};

            context.Movies.Add(new Movie()
            {
                Name = movie.Name,
                About = movie.About,
                Image = movie.Image,
                DateOfRelease = movie.DateOfRelease,
                Time = movie.Time,
                IsRecommended = movie.IsRecommended,
                IsPremiere = movie.IsPremiere,
                CertificationId = certification.CertificationId,
                BackgroundImage = movie.BackgroundImage,
                Cast = movie.Cast,
                CastImages = movie.CastImages,
                IsActive = true
            });

            context.SaveChanges();

            var movies = context.Movies.ToList();
            var totalMovies = movies.Count();
            var movieId = movies[totalMovies - 2].MovieId;

            foreach (var item in movie.Genres)
            {
                var gen = context.Genres.SingleOrDefault(x => x.Genre1 == item);

                context.MovieGenres.Add(new MovieGenre()
                {
                    MovieId = movieId + 1,
                    GenreId = gen.GenreId
                });

                context.SaveChanges();
            }

            foreach (var item in movie.Languages)
            {
                var lang = context.Languages.SingleOrDefault(x => x.Language1 == item);

                context.MovieLanguages.Add(new MovieLanguage()
                {
                    MovieId = movieId + 1,
                    LanguageId = lang.LanguageId
                });

                context.SaveChanges();
            }

            foreach (var item in movie.FilmCategories)
            {
                var film = context.FilmCategories.SingleOrDefault(x => x.FilmCategory1 == item);

                context.MovieFilmCategories.Add(new MovieFilmCategory()
                {
                    MovieId = movieId + 1,
                    FilmCategoryId = film.FilmCategoryId
                });

                context.SaveChanges();
            }

        }

        // Update Movie
        public void Update(MovieDTO entity)
        {
            var certification = context.Certifications.SingleOrDefault(x => x.Certification1 == entity.Certification);

            var existingMovie = context.Movies.Where(s => s.MovieId == entity.MovieId)
                                                    .SingleOrDefault<Movie>();

            existingMovie.Name = entity.Name;
            existingMovie.About = entity.About;
            existingMovie.Image = entity.Image;
            existingMovie.DateOfRelease = entity.DateOfRelease;
            existingMovie.Time = entity.Time;
            existingMovie.IsRecommended = entity.IsRecommended;
            existingMovie.IsPremiere = entity.IsPremiere;
            existingMovie.CertificationId = certification.CertificationId;
            existingMovie.BackgroundImage = entity.BackgroundImage;
            existingMovie.Cast = entity.Cast;
            existingMovie.CastImages = entity.CastImages;
            existingMovie.IsActive = true;

            context.SaveChanges();

            var existingGenres = context.MovieGenres.Where(x => x.MovieId == entity.MovieId).ToList();

            context.MovieGenres.RemoveRange(existingGenres);
            context.SaveChanges();

            foreach (var item in entity.Genres)
            {
                var gen = context.Genres.SingleOrDefault(x => x.Genre1 == item);

                context.MovieGenres.Add(new MovieGenre()
                {
                    MovieId = entity.MovieId,
                    GenreId = gen.GenreId
                });

                context.SaveChanges();
            }

            var existingLang = context.MovieLanguages.Where(x => x.MovieId == entity.MovieId).ToList();

            context.MovieLanguages.RemoveRange(existingLang);
            context.SaveChanges();

            foreach (var item in entity.Languages)
            {
                var gen = context.Languages.SingleOrDefault(x => x.Language1 == item);

                context.MovieLanguages.Add(new MovieLanguage()
                {
                    MovieId = entity.MovieId,
                    LanguageId = gen.LanguageId
                });

                context.SaveChanges();
            }

            var existingFilm = context.MovieFilmCategories.Where(x => x.MovieId == entity.MovieId).ToList();

            context.MovieFilmCategories.RemoveRange(existingFilm);
            context.SaveChanges();

            foreach (var item in entity.FilmCategories)
            {
                var gen = context.FilmCategories.SingleOrDefault(x => x.FilmCategory1 == item);

                context.MovieFilmCategories.Add(new MovieFilmCategory()
                {
                    MovieId = entity.MovieId,
                    FilmCategoryId = gen.FilmCategoryId
                });

                context.SaveChanges();
            }

        }

        // Delete Movie
        public override void Delete(int id)
        {
            var movie = context.Movies
                .Where(s => s.MovieId == id)
                .SingleOrDefault();

            //context.Movies.Remove(movie);
            movie.IsActive = false;
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
                                    ShowTimingId=x.ShowTimingId,
                                    EndDate = x.EndDate
                                })
                                .Distinct();

            return theatres;
        }

        public IEnumerable GetShowTimingsByTheatre(int id, string language, string filmCategory, int theatreId)
        {
            var movie = context.Movies.SingleOrDefault(x => x.MovieId == id);

            var showTimings = context.TheatresMovies
                                .Where(x => x.Movie == movie.Name && x.Language == language && x.FilmCategory == filmCategory && x.TheatreId == theatreId)
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
                                    EndDate = x.EndDate
                                })
                                .Distinct();

            return showTimings;
        }

        // Get Seatcategory and seats for a particular movie and theatre
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

        // Get Seats information based on seat category for a particular movie and theatre
        public IEnumerable GetSeatsBySeatCategories(int id, string language, string filmCategory, int theatreId, string showTime, string seatsCategory)
        {
            var movie = context.Movies.SingleOrDefault(x => x.MovieId == id);

            TimeSpan ts = DateTime.Parse(showTime).TimeOfDay;

            var seats = context.TheatresMovies
                                .Where(x => x.Movie == movie.Name && x.Language == language && x.FilmCategory == filmCategory && x.TheatreId == theatreId && x.ShowTime == ts && x.SeatCategory==seatsCategory)
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
                                    SeatCategory = x.SeatCategory,
                                    SeatsCategoryId = x.SeatsCategoryId,
                                    Price = x.Price,
                                    SeatNo = x.SeatNo,
                                    SeatsId = x.SeatsId,
                                    ScreenId = x.ScreenId,
                                    IsBooked = x.IsBooked
                                })
                                .Distinct();

            return seats;
        }

        public IEnumerable GetMoviesByGenreLanguage(string genre, string language)
        {
            var movie = context.VMovies
                                .Where(x => x.Language == language && x.Genre == genre)
                                .ToList();

            return movie;
        }
    }
}
