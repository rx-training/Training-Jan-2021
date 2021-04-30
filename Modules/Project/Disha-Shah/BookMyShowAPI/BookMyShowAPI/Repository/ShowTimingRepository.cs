using BookMyShowAPI.IRepository;
using BookMyShowAPI.Models;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;

namespace BookMyShowAPI.Repository
{
    public class ShowTimingRepository : GenericRepository<ShowTiming>, IShowTiming
    {
        public ShowTimingRepository(BookMyShowDBContext context) : base(context)
        {

        }

        // Add showtiming
        public void CreateShowTime(string showTiming)
        {
            TimeSpan ts = DateTime.Parse(showTiming).TimeOfDay;

            context.ShowTimings.Add(new ShowTiming()
            {
                ShowTime= ts
            });

            context.SaveChanges();
        }

        // Delete showtiming
        public override void Delete(int id)
        {
            var showTiming = context.ShowTimings
                .Where(s => s.ShowTimingId == id)
                .SingleOrDefault();

            context.ShowTimings.Remove(showTiming);
            context.SaveChanges();
        }

    }
}
