using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UberAPI.Code.Interfaces;
using UberAPI.Models;

namespace UberAPI.Code.RepositoryDB
{
    public class DriverRepo : GenericRepo<Driver>, IDriverRepo
    {
        public DriverRepo(UberContext context) : base(context)
        {
        }
    }
}
