﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Zee_News_WebApi.Models;

namespace Zee_News_WebApi.IRepository
{
    public interface INewsContent : GenericInterface<NewsContent>
    {
        List<NewsContent> getByNewsId(int id);
    }
}
