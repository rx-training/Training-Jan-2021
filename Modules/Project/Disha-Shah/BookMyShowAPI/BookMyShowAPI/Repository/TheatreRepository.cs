using BookMyShowAPI.IRepository;
using BookMyShowAPI.Models;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookMyShowAPI.Repository
{
    public class TheatreRepository : GenericRepository<Theatre>, ITheatre
    {
        public TheatreRepository(BookMyShowDBContext context) : base(context)
        {

        }

        // Add Theatre
        public override void Create(Theatre theatre)
        {
            var city = context.Cities.SingleOrDefault(x => x.Name == theatre.City.Name);

            context.Theatres.Add(new Theatre()
            {
                Name = theatre.Name,
                Address = theatre.Address,
                CityId = city.CityId
            });

            context.SaveChanges();
        }

        // Update Theatre
        public override void Update(int id, Theatre entity)
        {
            var city = context.Cities.SingleOrDefault(x => x.Name == entity.City.Name);

            var existingTheatre = context.Theatres.Where(s => s.TheatreId == id)
                                                    .SingleOrDefault<Theatre>();

            existingTheatre.Name = entity.Name;
            existingTheatre.Address = entity.Address;
            existingTheatre.CityId = city.CityId;

            context.SaveChanges();

        }

        // Delete Theatre
        public override void Delete(int id)
        {
            var theatre = context.Theatres
                .Where(s => s.TheatreId == id)
                .SingleOrDefault();

            context.Theatres.Remove(theatre);
            context.SaveChanges();
        }

        // Get Screens in a particular Theatre
        public IEnumerable GetScreensById(int id)
        {
            var screen = context.VTheatresScreensSeats
                                .Where(x => x.TheatreId == id)
                                .Select(x => new VTheatresScreensSeat
                                {
                                    TheatreId = x.TheatreId,
                                    Theatre = x.Theatre,
                                    Address = x.Address,
                                    City = x.City,
                                    CityId = x.CityId,
                                    ScreenId = x.ScreenId
                                });

            return screen;
        }

        // Add Screen in a particular Theatre
        public void CreateScreenById(int id)
        {
            context.Screens.Add(new Screen()
            {
                TheatreId=id
            });

            context.SaveChanges();
        }

        // Delete Screen in a particular theatre
        public void DeleteScreenById(int id)
        {
            var screen = context.Screens
                .Where(s => s.ScreenId == id)
                .SingleOrDefault();

            context.Screens.Remove(screen);
            context.SaveChanges();
        }

        // Get SeatCategories in a Particular Screen of a Theatre
        public IEnumerable GetSeatCategoryByScreenId(int id)
        {
            var seatCategory = context.VTheatresScreensSeats
                                        .Where(x => x.ScreenId == id)
                                        .Select(x => new VTheatresScreensSeat
                                        {
                                            TheatreId = x.TheatreId,
                                            Theatre = x.Theatre,
                                            Address = x.Address,
                                            City = x.City,
                                            CityId = x.CityId,
                                            ScreenId = x.ScreenId,
                                            SeatCategory = x.SeatCategory,
                                            SeatsCategoryId = x.SeatsCategoryId,
                                            Price = x.Price
                                        });

            return seatCategory;
        }

        // Add SeatCategories in a Particular Screen of a Theatre
        public void CreateSeatCategoryByScreenId(int id, string seatCategory)
        {
            var seatCtgy = context.SeatsCategories.SingleOrDefault(x => x.Name == seatCategory);

            context.ScreenSeatsCategories.Add(new ScreenSeatsCategory()
            {
                ScreenId=id,
                SeatsCategoryId= seatCtgy.SeatsCategoryId
            });

            context.SaveChanges();
        }

        // Delete SeatCategories in a Particular Screen of a Theatre
        public void DeleteSeatCategoryByScreenId(int id, string seatCategory)
        {
            var seatCtgy = context.SeatsCategories.SingleOrDefault(x => x.Name == seatCategory);

            var screenSeatCategory = context.ScreenSeatsCategories
                .Where(s => s.ScreenId == id && s.SeatsCategoryId==seatCtgy.SeatsCategoryId)
                .SingleOrDefault();

            context.ScreenSeatsCategories.Remove(screenSeatCategory);
            context.SaveChanges();
        }

        // Get Seats for a particular Seat Category
        public IEnumerable GetSeatsBySeatCategoryId(int id)
        {
            var seats = context.VTheatresScreensSeats
                                        .Where(x => x.SeatsCategoryId == id)
                                        .Select(x => new VTheatresScreensSeat
                                        {
                                            TheatreId = x.TheatreId,
                                            Theatre = x.Theatre,
                                            Address = x.Address,
                                            City = x.City,
                                            CityId = x.CityId,
                                            ScreenId = x.ScreenId,
                                            SeatCategory = x.SeatCategory,
                                            SeatsCategoryId = x.SeatsCategoryId,
                                            Price = x.Price,
                                            SeatsId=x.SeatsId,
                                            SeatNo=x.SeatNo,
                                            IsBooked=x.IsBooked
                                        });

            return seats;
        }

        // Get movie playing in a screen
        public IEnumerable GetMovieByScreenId(int id)
        {
            var screenMovie = context.ScreensMovies
                            .SingleOrDefault(x => x.ScreenId == id);

            var movie = context.VMovies
                                .Where(x => x.MovieId == screenMovie.MovieId);

            return movie;
        }

        // Assign movie playing in a screen
        public void CreateMovieByScreenId(int id, string movie)
        {
            var movies = context.Movies.SingleOrDefault(x => x.Name == movie);

            context.ScreensMovies.Add(new ScreensMovie()
            {
                ScreenId = id,
                MovieId=movies.MovieId
            });

            context.SaveChanges();
        }

        // Delete movie playing in a screen
        public void DeleteMovieByScreenId(int id, string movie)
        {
            var movies = context.Movies.SingleOrDefault(x => x.Name == movie);

            var screenMovie = context.ScreensMovies
                .Where(s => s.ScreenId == id && s.MovieId == movies.MovieId)
                .SingleOrDefault();

            context.ScreensMovies.Remove(screenMovie);
            context.SaveChanges();
        }

        // Get ShowTimings by Screen
        public IEnumerable GetShowTimingsByScreenId(int id)
        {
            var showTimings = context.ScreenShowTimings
                                .Where(x => x.ScreenId == id)
                                .Select(x=>new ScreenShowTiming
                                {
                                    ScreenId = x.ScreenId,
                                    ShowTimingId=x.ShowTimingId,
                                    ShowTiming = new ShowTiming
                                    {
                                        ShowTimingId=x.ShowTimingId,
                                        ShowTime= x.ShowTiming.ShowTime
                                    }
                                });

            return showTimings;
        }

        // Add ShowTimings for a Screen
        public void CreateShowTimingByScreenId(int id, string showTiming)
        {
            TimeSpan ts = DateTime.Parse(showTiming).TimeOfDay;

            var showTime = context.ShowTimings
                                .SingleOrDefault(x => x.ShowTime == ts);

            context.ScreenShowTimings.Add(new ScreenShowTiming()
            {
                ScreenId = id,
                ShowTimingId = showTime.ShowTimingId
            });

            context.SaveChanges();
        }

        // Delete ShowTimings for a Screen
        public void DeleteShowTimingByScreenId(int id, string showTiming)
        {
            TimeSpan ts = DateTime.Parse(showTiming).TimeOfDay;

            var showTime = context.ShowTimings
                                .SingleOrDefault(x => x.ShowTime == ts);

            var screenShowTiming = context.ScreenShowTimings
                .Where(s => s.ScreenId == id && s.ShowTimingId == showTime.ShowTimingId)
                .SingleOrDefault();

            context.ScreenShowTimings.Remove(screenShowTiming);
            context.SaveChanges();
        }

        // Get movies for a particular theatre
        public IEnumerable GetMoviesByTheatreId(int id)
        {
            var movies = context.TheatresMovies
                            .Where(x => x.TheatreId == id)
                            .Select(x => new TheatresMovie
                            {
                                TheatreId = x.TheatreId,
                                Theatre = x.Theatre,
                                Address = x.Address,
                                CityId = x.CityId,
                                City = x.City,
                                Movie = x.Movie,
                                About = x.About,
                                Certification = x.Certification,
                                CertificationId = x.CertificationId,
                                DateOfRelease = x.DateOfRelease,
                                FilmCategory = x.FilmCategory,
                                FilmCategoryId = x.FilmCategoryId,
                                Genre = x.Genre,
                                GenreId = x.GenreId,
                                Image = x.Image,
                                IsPremiere = x.IsPremiere,
                                IsRecommended = x.IsRecommended,
                                Language = x.Language,
                                LanguageId = x.LanguageId,
                                Time = x.Time
                            })
                            .Distinct();

            return movies;
        }

        // Get showtimings for a particular theatre in a movie
        public IEnumerable GetShowTimingsByMovieId(int id)
        {
            var showTimings = context.TheatresMovies
                            .Where(x => x.TheatreId == id)
                            .Select(x => new TheatresMovie
                            {
                                TheatreId = x.TheatreId,
                                Theatre = x.Theatre,
                                Address = x.Address,
                                CityId = x.CityId,
                                City = x.City,
                                Movie = x.Movie,
                                About = x.About,
                                Certification = x.Certification,
                                CertificationId = x.CertificationId,
                                DateOfRelease = x.DateOfRelease,
                                FilmCategory = x.FilmCategory,
                                FilmCategoryId = x.FilmCategoryId,
                                Genre = x.Genre,
                                GenreId = x.GenreId,
                                Image = x.Image,
                                IsPremiere = x.IsPremiere,
                                IsRecommended = x.IsRecommended,
                                Language = x.Language,
                                LanguageId = x.LanguageId,
                                Time = x.Time,
                                ShowTime=x.ShowTime,
                                ShowTimingId = x.ShowTimingId
                            })
                            .Distinct();

            return showTimings;
        }
    }
}
