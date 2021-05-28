using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplicationAssignmentDay14.Models.IRepositories
{
    public interface GenericInterface<T> where T : class
    {
        IEnumerable<T> GetAll();
        IEnumerable<T> Find(Func<T, bool> predicate);
        T GetById(int id);
        void Create(T entity);
        void Update(int id, T entity);
        void Delete(int id);
        bool Any(Func<T, bool> predicate);
    }
}
