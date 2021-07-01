using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RxWeb.Core;
using Assignment1.UnitOfWork.Main;
using Assignment1.Models.Main;

namespace Assignment1.Domain.MasterModule
{
    public class VehicleDomain : IVehicleDomain
    {
        public VehicleDomain(IMasterUow uow) {
            this.Uow = uow;
        }

        public Task<object> GetAsync(Vehicle parameters)
        {
            var data = (object)Uow.Repository<Vehicle>().FindBy(x => x.DriverId == parameters.DriverId);
            return Task.FromResult(data);
        }

        public Task<object> GetBy(Vehicle parameters)
        {
            var data = (object)Uow.Repository<Vehicle>().FindBy(x => x.DriverId == parameters.DriverId && x.Id == parameters.Id);
            return Task.FromResult(data);
        }
        

        public HashSet<string> AddValidation(Vehicle entity)
        {
            return ValidationMessages;
        }

        public async Task AddAsync(Vehicle entity)
        {
            await Uow.RegisterNewAsync(entity);
            await Uow.CommitAsync();
        }

        public HashSet<string> UpdateValidation(Vehicle entity)
        {
            return ValidationMessages;
        }

        public async Task UpdateAsync(Vehicle entity)
        {
            //await Uow.RegisterDirtyAsync(entity);
            //await Uow.CommitAsync();
        }

		public Vehicle PatchEntity(int id)
        {
            throw new NotImplementedException();
        }

        public HashSet<string> DeleteValidation(Vehicle parameters)
        {
            return ValidationMessages;
        }

        public Task DeleteAsync(Vehicle parameters)
        {
            var data = Uow.Repository<Vehicle>().FindBy(x => x.DriverId == parameters.DriverId && x.Id == parameters.Id);
            Uow.RegisterDeletedAsync<Vehicle>(data);
            Uow.CommitAsync();
            return Task.FromResult(data);
        }

        public IMasterUow Uow { get; set; }

        private HashSet<string> ValidationMessages { get; set; } = new HashSet<string>();
    }

    public interface IVehicleDomain : ICoreDomain<Vehicle, Vehicle> { }
}
