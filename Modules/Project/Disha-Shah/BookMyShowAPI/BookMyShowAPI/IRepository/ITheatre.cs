using BookMyShowAPI.Models;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookMyShowAPI.IRepository
{
    public interface ITheatre : IGenericInterface<Theatre>
    {
        public IEnumerable GetTheatreById(int id);
        public IEnumerable GetScreensById(int id);
        public void CreateScreenById(int id);
        public void DeleteScreenById(int id);

        public IEnumerable GetSeatCategoryByScreenId(int id);
        public void CreateSeatCategoryByScreenId(int id, string seatCategory);
        public void DeleteSeatCategoryByScreenId(int id, string seatCategory);

        public IEnumerable GetMovieByScreenId(int id);
        public void CreateMovieByScreenId(int id, string movie);
        public void DeleteMovieByScreenId(int id, string movie);

        public IEnumerable GetShowTimingsByScreenId(int id);
        public void CreateShowTimingByScreenId(int id, string showTiming);
        public void DeleteShowTimingByScreenId(int id, string showTiming);

        public IEnumerable GetSeatsBySeatCategoryId(int id);
        public IEnumerable GetMoviesByTheatreId(int id);
        public IEnumerable GetShowTimingsByMovieId(int id);
    }
}
