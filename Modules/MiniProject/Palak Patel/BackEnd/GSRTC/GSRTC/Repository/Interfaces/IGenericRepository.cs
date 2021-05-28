using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GSRTC.Repository.Interfaces
{
    interface IGenericRepository<T> where T:class
    {
        T Add(T entity);
        IEnumerable<T> Index();
        T Update(T entity);
        T Delete(T entity);
        IEnumerable<T> Find(Func<T, bool> predicate);
        bool isExist(Func<T, bool> predicate);
    }
}
