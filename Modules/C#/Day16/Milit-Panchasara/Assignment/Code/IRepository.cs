using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment.Code
{
    public interface IRepository<TEntity> where TEntity : class
    {
        TEntity Add(TEntity entity);
        IEnumerable<TEntity> Index();
        TEntity Update(TEntity entity);
        TEntity Delete(TEntity entity);
        IEnumerable<TEntity> Find(Func<TEntity, bool> predicate);
        bool IsExist(Func<TEntity, bool> predicate);
    }
}
