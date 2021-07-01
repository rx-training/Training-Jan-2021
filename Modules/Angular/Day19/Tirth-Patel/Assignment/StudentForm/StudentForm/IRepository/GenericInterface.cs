using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StudentForm.IRepository
{
    public interface GenericInterface<T> where T:class
    {
        IEnumerable<T> GetAll();
        IEnumerable<T> Find(Func<T, bool> predicate);
        T GetById(int id);
        void Create(T entity);
        void Update(T entity);
        void Delete(T entity);
        void DeleteWithId(int id);
        int Count(Func<T, bool> predicate);
        bool Any(Func<T, bool> predicate);
        bool Any();
    }
}
