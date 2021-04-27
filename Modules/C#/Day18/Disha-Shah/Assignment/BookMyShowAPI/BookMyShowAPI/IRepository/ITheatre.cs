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
        public IEnumerable GetScreensById(int id);
        public void CreateScreenById(int id);
        public void DeleteScreenById(int id);
    }
}
