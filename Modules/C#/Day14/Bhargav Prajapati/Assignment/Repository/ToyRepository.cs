using Assignment.IRepository;
using Assignment.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment.Repository
{
    public class ToyRepository:IToys
    {
        private readonly ToysComponyDBContext toys;
        public ToyRepository(ToysComponyDBContext t)
        {
            toys = t;
        }

        public void DeleteToys(int id)
        {
            var data = toys.Toys.SingleOrDefault(s => s.ToyId == id);
            toys.Remove(data);
           toys.SaveChanges();
        }

        public IEnumerable<Toy> GetAllToys()
        {
            var data = toys.Toys;

            return data;
        }

        public List<Toy> GetToysById(int id)
        {
            var data = toys.Toys.Where(s => s.ToyId == id).ToList();
            return data;
        }

        public void InsertToys(Toy ts)
        {
            toys.Toys.Add(ts);
            toys.SaveChanges();
        }

        public void UpdateToys(int id, Toy tt)
        {
            var data = toys.Toys.SingleOrDefault(s => s.ToyId == id);
            data.ToyName = tt.ToyName;
            data.ToyPrice = tt.ToyPrice;
            data.PlantsPlantId = tt.PlantsPlantId;

            toys.SaveChanges();
            

        }
    }
}
