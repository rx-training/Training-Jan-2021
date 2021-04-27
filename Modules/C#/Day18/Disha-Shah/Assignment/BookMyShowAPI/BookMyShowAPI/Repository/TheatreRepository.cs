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
            var screen = context.Screens
                                .Where(x => x.TheatreId == id)
                                .Select(x => new Screen
                                {
                                    ScreenId = x.ScreenId,
                                    TheatreId = x.TheatreId,
                                    Theatre = new Theatre
                                    {
                                        TheatreId = x.Theatre.TheatreId,
                                        Name = x.Theatre.Name,
                                        Address = x.Theatre.Address,
                                        CityId = x.Theatre.CityId,
                                        City = new City
                                        {
                                            CityId = x.Theatre.City.CityId,
                                            Name = x.Theatre.City.Name
                                        }
                                    }
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
    }
}
