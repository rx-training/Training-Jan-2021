using Microsoft.EntityFrameworkCore;
using SpicejetApi.Models.IRepositorySpicejet;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpicejetApi.Models.RepositorySpicejet
{
    public class SpicjetGenericClass<T> : SpicejetGeneric<T> where T : class
    {
        private readonly SPICEJETContext context;

        public SpicjetGenericClass(SPICEJETContext ctx)
        {
            context = ctx;
        }

        public void Delete(T Entity)
        {
            context.Remove(Entity);
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

        public void Insert(T Entity)
        {
            context.Add(Entity);
            context.SaveChanges();
        }

        public void Update(T Entity)
        {
            context.Entry(Entity).State = EntityState.Modified;
            context.SaveChanges();
        }
    }
}
