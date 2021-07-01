using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Zee_News_WebApi.Models;
using Zee_News_WebApi.IRepository;

namespace Zee_News_WebApi.Repository
{
    public class ViewersRepository:GenericRepository<Viewers1> ,IViewers
    {
        public ViewersRepository(ZeeNewsContext context):base(context)
        {
            
            
        }
        //as viewer has email id as key 
        //we need to find a way to get user by name and Perform CRUD operations

        public Viewers1 FindByName(string name)
        {
            Viewers1 viewer = context.Viewers1s.SingleOrDefault(s=>s.Name == name) ;
            return viewer;

        }
        //public Viewers1 UpdateByName(string name)
        //{
        //    var update = context.Viewers1s.SingleOrDefault(n => n.Name == name) ;
        //    context.Update(update);
        //    context.SaveChanges();
        //    return update;
        //}
        public Viewers1 DeleteByName(string name)
        {
            var Delete = context.Viewers1s.SingleOrDefault(n => n.Name == name) ;
            context.Remove(Delete);
            context.SaveChanges();
            return Delete;
        }
    }
}
