using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplicationAssignmentDay17.Models.IRepository;

namespace WebApplicationAssignmentDay17.Models.Repository
{
    public abstract class GenericRepository<T> : GenericInterface<T> where T : class
    {
        protected readonly Day11Context context;

        public GenericRepository(Day11Context _context) 
        {
            context = _context;
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
