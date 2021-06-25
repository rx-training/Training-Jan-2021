using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NaukriProject.Models.IRepository
{
    public interface GenericInterface<T> where T : class
    {
        void Create(T entity);
        T Update(int id, T entity);
        T Delete(int id);
        T GetById(int id);
        IEnumerable<T> GetAll();
        bool Any(Func<T, bool> predicate);
    }
}
