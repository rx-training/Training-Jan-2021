using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using StudentAngular.Model.IRepo;

namespace StudentAngular.Model.Repo
{
    public class HttpDemo<T> : IHttpDemo<T> where T : class
    {
        protected readonly HttpDemoContext context;
        public HttpDemo(HttpDemoContext _context)
        {
            this.context = _context;
        }
        public bool Any(Func<T, bool> predicate)
        {
            return context.Set<T>().AsNoTracking().Any(predicate);
        }

        public bool Any()
        {
            return context.Set<T>().Any();
        }

        public int Count(Func<T, bool> predicate)
        {
            return context.Set<T>().Count(predicate);
        }

        public void Create(T entity)
        {
            context.Add(entity);
            context.SaveChanges();
        }

        public void Delete(T entity)
        {
            context.Remove(entity);
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

        public void Update(T entity)
        {
            context.Entry(entity).State = EntityState.Modified;
            context.SaveChanges();
        }
    }
}
