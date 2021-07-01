using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RxWeb.Core;
using Day2Assignment.UnitOfWork.Main;
using Day2Assignment.Models.Main;
using System.Linq;
using Day2Assignment.BoundedContext.Main;
using Day2Assignment.Models.DbEntities.Main;
using System.Collections;
using Microsoft.Extensions.Options;
using MimeKit;
using MailKit.Net.Smtp;

namespace Day2Assignment.Domain.MasterModule
{
    public class MovieDomain : IMovieDomain
    {
        private IEmailUow emailUow;

        public MovieDomain(IMasterUow uow, IEmailUow emailUow)
        {
            this.Uow = uow;
            this.emailUow = emailUow;
        }

        public Task<object> GetAsync(Movie parameters)
        {
            var movieList = (object)Uow.Repository<Movie>().AllInclude(p => p.MovieGenres);
            return Task.FromResult(movieList);
        }

        public Task<object> GetBy(Movie parameters)
        {
            var movieList = (object)this.Uow.Repository<Movie>().SingleOrDefault(m => m.MovieId == parameters.MovieId);
            return Task.FromResult(movieList);
        }

        public HashSet<string> AddValidation(MovieDTO entity)
        {
            return ValidationMessages;
        }

        public async Task AddAsync(MovieDTO entity)
        {
            var certification = (Certification1)this.Uow.Repository<Certification1>().SingleOrDefault(m => m.Certification == entity.Certification);

            Movie movieEntity = new Movie();
            movieEntity.About = entity.About;
            movieEntity.BackgroundImage = entity.BackgroundImage;
            movieEntity.Cast = entity.Cast;
            movieEntity.CastImages = entity.CastImages;
            movieEntity.CertificationId = certification.CertificationId;
            movieEntity.DateOfRelease = entity.DateOfRelease;
            movieEntity.Image = entity.Image;
            movieEntity.IsPremiere = entity.IsPremiere;
            movieEntity.IsRecommended = entity.IsRecommended;
            movieEntity.Name = entity.Name;
            movieEntity.Time = entity.Time;

            await Uow.RegisterNewAsync(movieEntity);
            await Uow.CommitAsync();

            var movieId = movieEntity.MovieId;

            foreach (var item in entity.Genres)
            {
                var gen = this.Uow.Repository<Genre1>().SingleOrDefault(m => m.Genre == item);

                MovieGenre1 movieGenreEntity = new MovieGenre1();
                movieGenreEntity.MovieId = movieId;
                movieGenreEntity.GenreId = gen.GenreId;

                await Uow.RegisterNewAsync(movieGenreEntity);
                await Uow.CommitAsync();
            }

            MailRequest request = new MailRequest();

            request.ToEmail = "dpshah269@gmail.com";
            request.Subject = $"Movie added successfully!";
            request.Body = $"<h1>BookMyShow</h1><h2>Movie Added Successfully!</h2><h3>Movie Id: {movieId}</h3><h3>Name: {movieEntity.Name}</h3>";

            try
            {
                emailUow.SendEmail(request);
            }
            catch (Exception ex)
            {
                throw;
            }

        }

        public HashSet<string> UpdateValidation(MovieDTO entity)
        {
            return ValidationMessages;
        }

        public async Task UpdateAsync(MovieDTO entity)
        {
            var certification = (Certification1)this.Uow.Repository<Certification1>().SingleOrDefault(m => m.Certification == entity.Certification);
            var existingMovie = this.Uow.Repository<Movie>().SingleOrDefault(m => m.MovieId == entity.MovieId);

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

            await Uow.RegisterDirtyAsync(existingMovie);
            await Uow.CommitAsync();

            var existingGenres = this.Uow.Repository<MovieGenre1>().FindBy(m => m.MovieId == entity.MovieId);

            foreach (var item in existingGenres)
            {
                await Uow.RegisterDeletedAsync(item);
                await Uow.CommitAsync();
            }

            foreach (var item in entity.Genres)
            {
                var gen = this.Uow.Repository<Genre1>().SingleOrDefault(m => m.Genre == item);

                MovieGenre1 movieGenreEntity = new MovieGenre1();
                movieGenreEntity.MovieId = entity.MovieId;
                movieGenreEntity.GenreId = gen.GenreId;

                await Uow.RegisterNewAsync(movieGenreEntity);
                await Uow.CommitAsync();
            }
        }

        public Movie PatchEntity(int id)
        {
            throw new NotImplementedException();
        }

        public HashSet<string> DeleteValidation(Movie parameters)
        {
            return ValidationMessages;
        }

        public Task DeleteAsync(Movie parameters)
        {
            Movie movie = Uow.Repository<Movie>().SingleOrDefault(p => p.MovieId == parameters.MovieId);
            Uow.RegisterDeletedAsync(movie);
            return Uow.CommitAsync();
        }

        public IMasterUow Uow { get; set; }

        private HashSet<string> ValidationMessages { get; set; } = new HashSet<string>();
    }

    public interface IMovieDomain : ICoreDomain<MovieDTO, Movie> {
    }
}
