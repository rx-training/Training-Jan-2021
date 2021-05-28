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
    }
}
