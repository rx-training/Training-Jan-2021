using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ToyStoreApi.Models
{
    public class SQLToyRepository : IToysRepository
    {
        private readonly Brain_SmithContext context;
           public SQLToyRepository(Brain_SmithContext context)
        {
            this.context = context;
        }
        public Toy Add(Toy toy)
        {
            context.Toys.Add(toy);
            context.SaveChanges();
            return toy;
        }

        public Toy Delete(int id)
        {
            Toy toy = context.Toys.Find(id);
            if(toy != null)
            {
                context.Toys.Remove(toy);
                context.SaveChanges();
            }
            return toy;
        }

        public IEnumerable<Toy> GetAllToy()
        {
            return context.Toys;
        }

        public Toy GetToy(int id)
        {
            return context.Toys.Find(id);
        }

        public Toy Update(Toy toychanges)
        {
            var updateingtoy = context.Toys.Find( toychanges.ToyId);
            updateingtoy.Price = toychanges.Price;
            updateingtoy.Name = toychanges.Name;
            updateingtoy.CategoriesCategoryId = toychanges.CategoriesCategoryId;
            context.SaveChanges();
            return updateingtoy;
        }
    }
}
