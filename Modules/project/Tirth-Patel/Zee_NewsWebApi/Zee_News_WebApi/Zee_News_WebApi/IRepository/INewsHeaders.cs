using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Zee_News_WebApi.Models;

namespace Zee_News_WebApi.IRepository
{
    public interface INewsHeader : GenericInterface<NewsHeader>
    {
        public List<VGetCateogryWisenews> GetCategoryWiseNews(int id);
    }
}
