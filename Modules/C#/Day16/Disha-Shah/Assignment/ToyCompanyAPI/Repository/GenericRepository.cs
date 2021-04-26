using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ToyCompanyAPI.IRepository;
using ToyCompanyAPI.Models;

namespace ToyCompanyAPI.Repository
{
    public abstract class GenericRepository<T> : IGenericInterface<T> where T : class
    {
        protected readonly ToyCompanyDBContext context;
        public GenericRepository(ToyCompanyDBContext _context)
        {
            context = _context;
        }

        public virtual void Create(T entity)
        {
            context.Add(entity);
            context.SaveChanges();
        }

        public virtual void Delete(int id)
        {
            context.Remove(id);
            context.SaveChanges();
        }

        public T GetById(int id)
        {
            return context.Set<T>().Find(id);
        }

        public IEnumerable<T> GetAll()
        {
            return context.Set<T>();
        }

        public virtual void Update(int id, T entity)
        {
            context.Entry(entity).State = EntityState.Modified;
            context.SaveChanges();
        }

    }
}
