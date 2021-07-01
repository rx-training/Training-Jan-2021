using BATAWebApiProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BATAWebAPI.Models.IRepository
{
    public interface IProduct : IBATA<Product>
    {
        public IEnumerable<ViewMan> GetDataView();
        public IEnumerable<ViewWoman> GetDataViewWoman();
        public IEnumerable<ViewKid> GetDataViewKid();
        public IEnumerable<ViewWomen999> GetDataViewWomen999();
        public IEnumerable<ViewMen999> GetDataViewMen999();
        public IEnumerable<ViewKids999> GetDataViewKid999();
    }
}
