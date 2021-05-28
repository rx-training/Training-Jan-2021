using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment.Code
{
    interface IMainRepository<T> where T:class
    {
        T Add(T entity);
        IEnumerable<T> Index();
        T Update(T entity);
        T Delete(T entity);
        IEnumerable<T> Find(Func<T, bool> predicate);
        bool IsExist(Func<T, bool> predicate);
    }
}
