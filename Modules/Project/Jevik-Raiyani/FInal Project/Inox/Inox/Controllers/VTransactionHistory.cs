using Inox.Models;
using Inox.Models.IRepository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Inox.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VTransactionHistory : ControllerBase
    {
           IVTransactionHistory _vTransactionHistory;

        public VTransactionHistory(IVTransactionHistory vTransactionHistory)
        {
            this._vTransactionHistory = vTransactionHistory;
        }

        [HttpGet]
        //public IEnumerable<VTransactionHistory> GetVTransactionHistories()
        //{
        //    return  _vTransactionHistory.GetAll();
        //}

        //[HttpGet("{id}")]
        //public ActionResult<Cinema> GetVTransactionHistories(int id)
        //{
        //    var vTransactionHistory = _vTransactionHistory.GetById(id);

        //    if (vTransactionHistory == null)
        //    {
        //        return NotFound();
        //    }

        //    return vTransactionHistory;
        //}

        //[HttpPut("{id}")]
        //public ActionResult<VTransactionHistory> PutVTransactionHistories(int id,VTransactionHistory vTransactionHistory)
        //{
        
        //    try
        //    {
        //        _vTransactionHistory.Update(vTransactionHistory);
        //    }
        //    catch (Exception e)
        //    {
        //       Console.WriteLine(e);
        //    }
        //    return GetVTransactionHistories(id);
  
        //}

        //[HttpPost]
        //public ActionResult<VTransactionHistory> PostVTransactionHistories(VTransactionHistory vTransactionHistory)
        //{
           
        //    try
        //    {
        //      //  _vTransactionHistory.Create(vTransactionHistory);
        //    }
        //    catch (DbUpdateException)
        //    {
        //        if (_vTransactionHistory.Any(e => e.TicketId == vTransactionHistory.TicketId))
        //        {
        //            return Conflict();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }

        //    return CreatedAtAction("GetVTransactionHistories", new { id = vTransactionHistory.ticketid }, vTransactionHistory);
        //}

        [HttpDelete("{id}")]
        public IActionResult DeleteVTransactionHistories(int id)
        {
            var vTransactionHistory = _vTransactionHistory.GetById(id);
            if (vTransactionHistory == null)
            {
                return NotFound();
            }

            _vTransactionHistory.Delete(vTransactionHistory);

            return NoContent();
        }

       
    }
}
