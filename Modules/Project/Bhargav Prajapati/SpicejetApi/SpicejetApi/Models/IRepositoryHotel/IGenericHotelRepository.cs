using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpicejetApi.Models.IRepositoryHotel
{
    public interface IGenericHotelRepository<T> where T :class
    {
        IEnumerable<T> GetAll();
        T GetById(int id);
        void Insert(T Entity);
        void Update(T Entity);
        void Delete(T Entity);
    }
}
