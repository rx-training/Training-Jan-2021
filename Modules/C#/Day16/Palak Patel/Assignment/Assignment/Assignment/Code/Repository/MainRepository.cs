using Assignment.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment.Code.Repository
{
    public class MainRepository<T> : IMainRepository<T> where T : class

    { 
        protected readonly ToyDBContext context;
        
        public MainRepository(ToyDBContext _context)
        {
            context = _context;
        }
        public T Add(T entity)
        {
            context.Set<T>().Add(entity);
            context.SaveChanges();
            return entity;
        }

        public T Delete(T entity)
        {
            context.Set<T>().Add(entity);
            context.SaveChanges();
            return entity;
        }

        public IEnumerable<T> Find(Func<T, bool> predicate)
        {
            return context.Set<T>().Where(predicate);
        }

        public IEnumerable<T> Index()
        {
            return context.Set<T>();
        }

        public bool IsExist(Func<T, bool> predicate)
        {
            return context.Set<T>().Any(predicate);
        }

        public T Update(T entity)
        {
            context.Entry(entity).State = EntityState.Modified;
            context.SaveChanges();
            return entity;
        }
    }
}
