using BookMyShowAPI.IRepository;
using BookMyShowAPI.Models;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookMyShowAPI.Repository
{
    public class SeatCategoryRepository : GenericRepository<SeatsCategory>, ISeatCategory
    {
        public SeatCategoryRepository(BookMyShowDBContext context) : base(context)
        {

        }

        // Add Seatcategory
        public override void Create(SeatsCategory seatsCategory)
        {
            context.SeatsCategories.Add(new SeatsCategory()
            {
                Name = seatsCategory.Name,
                Price = seatsCategory.Price
            });

            context.SaveChanges();
        }

        // Update SeatCategory
        public override void Update(int id, SeatsCategory entity)
        {
            var existingSeatCategory = context.SeatsCategories.Where(s => s.SeatsCategoryId == id)
                                                    .SingleOrDefault<SeatsCategory>();

            existingSeatCategory.Name = entity.Name;
            existingSeatCategory.Price = entity.Price;

            context.SaveChanges();

        }

        // Delete SeatCategory
        public override void Delete(int id)
        {
            var seatCategory = context.SeatsCategories
                .Where(s => s.SeatsCategoryId == id)
                .SingleOrDefault();

            context.SeatsCategories.Remove(seatCategory);
            context.SaveChanges();
        }

        // Get Seats for a particular Seat Category
        public IEnumerable GetSeatsBySeatCategoryId(int id)
        {
            var seats = context.VSeatCategorySeats
                                .Where(x => x.SeatsCategoryId == id)
                                .ToList();

            return seats;
        }
    }
}
