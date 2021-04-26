using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ToyStoreApi.Models
{
    public class MockToyRepository :IToysRepository
    {
        private List<Toy> _ToyList;
        private readonly Brain_SmithContext context;
        public MockToyRepository(Brain_SmithContext context)
        {
            var toyist = new Brain_SmithContext();
            _ToyList = toyist.Toys.ToList();
          this.context = context;
        }
     
       

        public Toy Add(Toy toy)
        {
            
            Toy t1 = new Toy();
            t1.Name = toy.Name;
            t1.CategoriesCategoryId = toy.CategoriesCategoryId;
            t1.Price = toy.Price;
            context.Toys.Add(toy);
           context.SaveChanges();

            return t1;
        }

        public Toy Delete(int id)
        {
            var del = _ToyList.Find(e => e.ToyId == id);
            if (del != null)
            {
                _ToyList.Remove(del);
            }
            context.Remove(del);
            context.SaveChanges();
            return del;
        }

        public IEnumerable<Toy> GetAllToy()
        {
            return _ToyList;
        }

        public Toy GetToy(int id)
        {
            return _ToyList.FirstOrDefault(t => t.ToyId == id);
        }

        public Toy Update(Toy toychanges)
        {
            var up = _ToyList.Find(e => e.ToyId == toychanges.ToyId);
            if (up != null)
            {
                up.Name = toychanges.Name;
                up.CategoriesCategoryId = toychanges.CategoriesCategoryId;
                up.Price = toychanges.Price;
            }
            context.Update(up);
            context.SaveChanges();
            return up;
        }
    }
}
