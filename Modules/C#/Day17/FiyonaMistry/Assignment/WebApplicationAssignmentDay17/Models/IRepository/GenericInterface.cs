using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplicationAssignmentDay17.Models.IRepository
{
    public interface GenericInterface<T> where T : class
    {
        void Create(T entity);
        void Update(int id, T entity);
        void Delete(int id);
        T GetById(int id);
        IEnumerable<T> GetAll();
    }
}
