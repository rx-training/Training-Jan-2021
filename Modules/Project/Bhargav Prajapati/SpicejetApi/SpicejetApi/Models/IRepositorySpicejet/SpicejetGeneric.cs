using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpicejetApi.Models.IRepositorySpicejet
{
    public interface SpicejetGeneric<T> where T:class
    {
        IEnumerable<T> GetAll();
        T GetById(int id);
        void Insert(T Entity);
        void Update(T Entity);
        void Delete(T Entity);
    }
}
