using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Zee_News_WebApi.IRepository;
using Zee_News_WebApi.Models;

namespace Zee_News_WebApi.Repository
{
    public class NewsContentRepository : GenericRepository<NewsContent>, INewsContent
    {
        public NewsContentRepository(ZeeNewsContext context) : base(context)
        { }
        public List<NewsContent> getByNewsId(int id)
        {
            List<NewsContent> NewsContentList = new List<NewsContent>();
            var news = context.NewsContents.ToList();
            foreach (var item in news)
            {
                if(item.NewsId == id)
                {
                    NewsContentList.Add(item);
                }
            }
            return NewsContentList;
        }
    }
}
