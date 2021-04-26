using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ToyCompanyAPI.Models;

namespace ToyCompanyAPI.IRepository
{
    public interface IToy : IGenericInterface<Toy>
    {
        public void CreateToy(int id, Toy toy);
        public void UpdateToy(int id, int toyCategoryId, Toy entity);
    }
}
