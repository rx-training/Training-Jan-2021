using Assignment.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment.IRepository
{
    public interface IToys
    {
        IEnumerable<Toy> GetAllToys();
        List<Toy> GetToysById(int id);
        void InsertToys(Toy toy);
        void UpdateToys(int id, Toy cus);
        void DeleteToys(int id);
    }
}
