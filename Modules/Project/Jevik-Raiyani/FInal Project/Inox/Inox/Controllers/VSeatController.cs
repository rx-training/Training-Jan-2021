using Inox.Models;
using Inox.Models.IRepository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Inox.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VSeatController : ControllerBase
    {
        IvSeat _ivSeat;

        public VSeatController(IvSeat ivSeat)
        {
            this._ivSeat = ivSeat;
        }

        [HttpGet]
        public IEnumerable<VSeat> GetVSeats()
        {
            return _ivSeat.GetAll();
        }

        //[HttpGet("{id}")]
        //public ActionResult<VSeat> GetVseat(int id)
        //{
        //    var vSeat = _ivSeat.GetById(id);

        //    if (vSeat == null)
        //    {
        //        return NotFound();
        //    }

        //    return vSeat;
        //}

        //[HttpPut("{id}")]
        //public ActionResult<UserBookingHistory> PutUserBookingHistories(int id, UserBookingHistory userBookingHistory)
        //{

        //    try
        //    {
        //        _userBookingHistory.Update(userBookingHistory);
        //    }
        //    catch (Exception e)
        //    {
        //        Console.WriteLine(e);
        //    }
        //    return GetUserBookingHistories(id);

        //}

        //[HttpPost]
        //public ActionResult<UserBookingHistory> PostCinema(UserBookingHistory userBookingHistory)
        //{

        //    try
        //    {
        //        _userBookingHistory.Create(userBookingHistory);
        //    }
        //    catch (DbUpdateException)
        //    {
        //        if (_userBookingHistory.Any(e => e.UserGmail == userBookingHistory.UserGmail))
        //        {
        //            return Conflict();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }

        //    return CreatedAtAction("GetUserBookingHistories", new { id = userBookingHistory.UserGmail }, userBookingHistory);
        //}

        //[HttpDelete("{id}")]
        //public IActionResult DeleteUserBookingHistories(int id)
        //{
        //    var userBookingHistory = _userBookingHistory.GetById(id);
        //    if (userBookingHistory == null)
        //    {
        //        return NotFound();
        //    }

        //    _userBookingHistory.Delete(userBookingHistory);

        //    return NoContent();
        //}


    }
}
