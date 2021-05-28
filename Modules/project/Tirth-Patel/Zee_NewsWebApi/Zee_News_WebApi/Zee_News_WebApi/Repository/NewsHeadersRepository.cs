using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Zee_News_WebApi.Models;
using Zee_News_WebApi.IRepository;
using Microsoft.EntityFrameworkCore;

namespace Zee_News_WebApi.Repository
{
    public class NewsHeadersRepository : GenericRepository<NewsHeader>, INewsHeader
    {
        public NewsHeadersRepository(ZeeNewsContext context) : base(context)
        { }
        // This function implemented delettion operation with coreesponding dataset IDs
        public void DeleteWithId(int id)
        {
            var del = context.NewsHeaders.Find(id);
            context.Remove(del);
            context.SaveChanges();
        }
        public List<VGetCateogryWisenews> GetCategoryWiseNews(int id)
        {
            var news = context.VGetCateogryWisenews.FromSqlRaw($"SELECT * FROM vGetCateogryWisenews where NewsId={id}").ToList();
           return news;
        }
    }
}
