using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ToyCompanyAPI.IRepository;
using ToyCompanyAPI.Models;

namespace ToyCompanyAPI.Repository
{
    public class ManufacturingPlantRepository : GenericRepository<ManufacturingPlant>, IManufacturingPlant
    {
        public ManufacturingPlantRepository(ToyCompanyDBContext context) : base(context)
        {

        }

        public override void Create(ManufacturingPlant manufacturingPlant)
        {
            context.ManufacturingPlants.Add(new ManufacturingPlant()
            {
                Name = manufacturingPlant.Name,
                Address=manufacturingPlant.Address
            });

            context.SaveChanges();
        }

        public void CreateToy(int id, string toy)
        {
            var toyInfo = context.Toys.SingleOrDefault(x => x.Name == toy);

            context.ManufacturingPlantToys.Add(new ManufacturingPlantToy()
            {
                ManufacturingPlantId = id,
                ToyId = toyInfo.Id
            });

            context.SaveChanges();
        }

        public override void Update(int id, ManufacturingPlant entity)
        {
            var existingManufacturingPlant = context.ManufacturingPlants.Where(s => s.Id == id)
                                                    .SingleOrDefault<ManufacturingPlant>();

            existingManufacturingPlant.Name = entity.Name;
            existingManufacturingPlant.Address = entity.Address;

            context.SaveChanges();

        }

        public override void Delete(int id)
        {
            var manufacturingPlant = context.ManufacturingPlants
                .Where(s => s.Id == id)
                .SingleOrDefault();

            context.ManufacturingPlants.Remove(manufacturingPlant);
            context.SaveChanges();
        }

        public void DeleteToy(int id, string toy)
        {
            var toyInfo = context.Toys.SingleOrDefault(x => x.Name == toy);

            var manufacturingPlantToy = context.ManufacturingPlantToys
                .Where(s => s.ManufacturingPlantId == id && s.ToyId==toyInfo.Id)
                .SingleOrDefault();

            context.ManufacturingPlantToys.Remove(manufacturingPlantToy);
            context.SaveChanges();
        }
    }
}
