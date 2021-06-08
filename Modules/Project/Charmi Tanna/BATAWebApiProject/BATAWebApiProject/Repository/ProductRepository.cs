using BATAWebAPI.Models.IRepository;
using BATAWebApiProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BATAWebAPI.Models.Repository
{
    public class ProductRepository : BATARepository<Product>, IProduct
    {
        public ProductRepository(BATAContext context) : base(context)
        {

        }
        public IEnumerable<ViewMan> GetDataView()
        {
            return context.ViewMen;
        }
        public IEnumerable<ViewWoman> GetDataViewWoman()
        {
            return context.ViewWomen;
        }
        public IEnumerable<ViewKid> GetDataViewKid()
        {
            return context.ViewKids;
        }
        public IEnumerable<ViewWomen999> GetDataViewWomen999()
        {
            return context.ViewWomen999s;
        }
        public IEnumerable<ViewMen999> GetDataViewMen999()
        {
            return context.ViewMen999s;
        }
        public IEnumerable<ViewKids999> GetDataViewKid999()
        {
            return context.ViewKids999s;
        }
    }
}
