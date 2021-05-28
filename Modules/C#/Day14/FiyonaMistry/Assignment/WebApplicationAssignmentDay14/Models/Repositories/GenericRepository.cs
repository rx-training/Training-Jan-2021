using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplicationAssignmentDay14.Models.IRepositories;

namespace WebApplicationAssignmentDay14.Models.Repositories
{
    public abstract class GenericRepository<T> : GenericInterface<T> where T : class
    {
        protected readonly ToyManufacturingContext context;

        public GenericRepository(ToyManufacturingContext _context)
        {
            context = _context;
        }
         
        public bool Any(Func<T, bool> predicate)
        {
            return context.Set<T>().Any(predicate);
        }

        public void Create(T entity)
        {
            context.Add(entity);
            context.SaveChanges();
        }

        public void Delete(int id)
        {
            var del = context.Set<T>().Find(id);
            context.Remove(del);
            context.SaveChanges();
        }

        public IEnumerable<T> Find(Func<T, bool> predicate)
        {
            return context.Set<T>().Where(predicate);
        }

        public IEnumerable<T> GetAll()
        {
            return context.Set<T>();
        }

        public T GetById(int id)
        {
            return context.Set<T>().Find(id);
        }

        public void Update(int id, T entity)
        {
            context.Entry(entity).State = EntityState.Modified;
            context.SaveChanges();
        }
    }
}
