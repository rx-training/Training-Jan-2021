using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpicejetApi.Models.IRepositorySpicejet
{
    public interface ICheckInDetailsRepository
    {
        IEnumerable<CheckinDetail> viewcheckinDetails(string PNRNumber);
        IEnumerable<CheckinDetail> GetAllcheckinDetails();
    }
}
