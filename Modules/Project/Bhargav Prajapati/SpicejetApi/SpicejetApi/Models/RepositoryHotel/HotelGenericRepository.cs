using Microsoft.EntityFrameworkCore;
using SpicejetApi.Models.IRepositoryHotel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpicejetApi.Models.RepositoryHotel
{
    public class HotelGenericRepository<T>: IGenericHotelRepository<T> where T : class
    {
        private readonly SPICEJETContext context;

        public HotelGenericRepository(SPICEJETContext context)
        {
            this.context = context;
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
