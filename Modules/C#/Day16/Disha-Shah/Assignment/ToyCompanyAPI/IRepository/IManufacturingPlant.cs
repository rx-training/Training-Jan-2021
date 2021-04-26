using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ToyCompanyAPI.Models;

namespace ToyCompanyAPI.IRepository
{
    public interface IManufacturingPlant : IGenericInterface<ManufacturingPlant>
    {
        public void CreateToy(int id, string toy);
        public void DeleteToy(int id, string toy);
    }
}
