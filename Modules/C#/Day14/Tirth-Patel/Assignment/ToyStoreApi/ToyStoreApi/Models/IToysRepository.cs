using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ToyStoreApi.Models
{
    public interface IToysRepository
    {
        Toy GetToy(int id);
        IEnumerable<Toy> GetAllToy();
        Toy Add(Toy toy);
        Toy Update(Toy toychanges);
        Toy Delete(int id);
    }
}
