using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ToyCompanyAPI.IRepository;
using ToyCompanyAPI.Models;

namespace ToyCompanyAPI.Repository
{
    public class ToyRepository : GenericRepository<Toy>, IToy
    {
        public ToyRepository(ToyCompanyDBContext context) : base(context)
        {

        }

        public void CreateToy(int id, Toy toy)
        {
            context.Toys.Add(new Toy()
            {
                Name = toy.Name,
                Description = toy.Description,
                Price = toy.Price,
                Qty = toy.Qty,
                ToyCategoryId=id
            });

            context.SaveChanges();
        }

        public void UpdateToy(int id, int toyCategoryId, Toy entity)
        {
            var existingToy = context.Toys.Where(s => s.Id == id)
                                                    .SingleOrDefault<Toy>();

            existingToy.Name = entity.Name;
            existingToy.Description = entity.Description;
            existingToy.Price = entity.Price;
            existingToy.Qty = entity.Qty;
            existingToy.ToyCategoryId = toyCategoryId;

            context.SaveChanges();

        }

        public override void Delete(int id)
        {
            var toy = context.Toys
                .Where(s => s.Id == id)
                .SingleOrDefault();

            context.Toys.Remove(toy);
            context.SaveChanges();
        }

    }
}
