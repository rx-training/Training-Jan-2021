using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Day14.Models;
using Day14.Models.IRepository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Day14.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class ToyController : ControllerBase
    {
        private readonly Day14AssignmentContext context;
        IToy toy;
        public ToyController(IToy toy, Day14AssignmentContext _context)
        {
            context = _context;
            this.toy = toy;
        }
        public IEnumerable<Toy> GetAll()
        {
            var ToysData = context.Toys.FromSqlRaw("SELECT * FROM Toys");
            return ToysData;
        }
        [HttpPost]
        public string Create([FromBody] ToyAdd addToy)
        {
            try
            {
                context.Toys.Single(s => s.ToyName == addToy.ToyName);
                return "Toy is already exist...";
            }
            catch (Exception)
            {
                try
                {
                    context.Plants.Single(s => s.PlantName == addToy.PlantName);
                    try
                    {
                        context.TypeOfToys.Single(a => a.TypeName == addToy.TypeName);
                        context.Toys.FromSqlRaw($"EXEC spToyAdd '{addToy.ToyName}',{addToy.Price},'{addToy.PlantName}','{addToy.TypeName}'");
                        context.SaveChanges();
                        return $"Toy id {context.Toys.ToList().Last().ToyId} is created...";
                    }
                    catch (Exception)
                    {
                        return "Type is not found...";
                    }
                }
                catch (Exception)
                {
                    return $"Plant is not found";
                }
                
            }
        }
    }
}
