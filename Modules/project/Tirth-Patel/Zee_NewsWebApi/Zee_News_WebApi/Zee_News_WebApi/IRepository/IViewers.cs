using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Zee_News_WebApi.Models;

namespace Zee_News_WebApi.IRepository
{
    public interface IViewers : GenericInterface<Viewers1>
    {
        public Viewers1 FindByName(string name);
      //  public Viewers1 UpdateByName(string name);
        public Viewers1 DeleteByName(string name);
    }
    }
