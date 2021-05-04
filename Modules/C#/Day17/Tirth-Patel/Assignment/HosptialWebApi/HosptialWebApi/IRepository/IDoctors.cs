using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HosptialWebApi.IRepository;
using HosptialWebApi.Model;


namespace HosptialWebApi.IRepository
{
    public interface IDoctors: GenericInterface<Doctor>
    {
        public List<vGetReport> GetReport(int id);
    }
}
