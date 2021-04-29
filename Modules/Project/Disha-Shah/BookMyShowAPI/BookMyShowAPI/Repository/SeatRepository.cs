using BookMyShowAPI.IRepository;
using BookMyShowAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookMyShowAPI.Repository
{
    public class SeatRepository : GenericRepository<Seat>, ISeat
    {
        public SeatRepository(BookMyShowDBContext context) : base(context)
        {

        }

        // Add seat
        public override void Create(Seat seat)
        {
            var seatCategory = context.SeatsCategories.SingleOrDefault(x => x.Name == seat.SeatsCategory.Name);

            context.Seats.Add(new Seat()
            {
                RowNo=seat.RowNo,
                SeatNo=seat.SeatNo,
                IsBooked=seat.IsBooked,
                SeatsCategoryId=seatCategory.SeatsCategoryId
            });

            context.SaveChanges();
        }

        // Update seat
        public override void Update(int id, Seat entity)
        {
            var seatCategory = context.SeatsCategories.SingleOrDefault(x => x.Name == entity.SeatsCategory.Name);

            var existingSeat = context.Seats.Where(s => s.SeatsId == id)
                                                    .SingleOrDefault<Seat>();

            existingSeat.RowNo = entity.RowNo;
            existingSeat.SeatNo = entity.SeatNo;
            existingSeat.IsBooked = entity.IsBooked;
            existingSeat.SeatsCategoryId = seatCategory.SeatsCategoryId;

            context.SaveChanges();

        }

        // Delete seat
        public override void Delete(int id)
        {
            var seat = context.Seats
                .Where(s => s.SeatsId == id)
                .SingleOrDefault();

            context.Seats.Remove(seat);
            context.SaveChanges();
        }

    }
}
