using Microsoft.EntityFrameworkCore;
using NaukriProject.Authentication;
using NaukriProject.Models.IRepository;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace NaukriProject.Models.Repository
{
    public abstract class GenericRepository<T> : GenericInterface<T> where T : class
    {
        protected readonly NaukriDbContext context;

        public GenericRepository(NaukriDbContext context)
        {
            this.context = context;
        }

        public bool Any(Func<T, bool> predicate)
        {
            return context.Set<T>().AsNoTracking().Any(predicate);
        }

        public void Create(T entity)
        {
            context.Add(entity);
            context.SaveChanges();
        }

        public T Delete(int id)
        {
            var del = context.Set<T>().Find(id);
            context.Remove(del);
            context.SaveChanges();
            return del;
        }

        public IEnumerable<T> GetAll()
        {
            return context.Set<T>().AsNoTracking();
        }

        public T GetById(int id)
        {
            return context.Set<T>().Find(id);
        }

        public T Update(int id, T entity)
        {
            context.Entry(entity).State = EntityState.Modified;
            var x = context.SaveChanges();
            return entity;
        }
    }
}
