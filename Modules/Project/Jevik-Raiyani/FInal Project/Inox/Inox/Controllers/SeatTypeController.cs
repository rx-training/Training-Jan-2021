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
    public class SeatTypeController : ControllerBase
    {
        ISeatType _seatType;

        public SeatTypeController(ISeatType seatType)
        {
            this._seatType = seatType;
        }

        [HttpGet]
        public IEnumerable<SeatType> GetSeatTypes()
        {
            return _seatType.GetAll();
        }

        [HttpGet("{id}")]
        public ActionResult<SeatType> GetSeatTypes(int id)
        {
            var seatType = _seatType.GetById(id);

            if (seatType == null)
            {
                return NotFound();
            }

            return seatType;
        }

        [HttpPut("{id}")]
        public ActionResult<SeatType> PutSeatTypes(int id, SeatType seatType)
        {

            try
            {
                _seatType.Update(seatType);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
            return GetSeatTypes(id);

        }

        [HttpPost]
        public ActionResult<SeatType> PostSeatTypes(SeatType seatType)
        {

            try
            {
                _seatType.Create(seatType);
            }
            catch (DbUpdateException)
            {
                if (_seatType.Any(e => e.SeatTypeId == seatType.SeatTypeId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetSeatTypes", new { id = seatType.SeatTypeId }, seatType);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteSeatTypes(int id)
        {
            var seatType = _seatType.GetById(id);
            if (seatType == null)
            {
                return NotFound();
            }

            _seatType.Delete(seatType);

            return NoContent();
        }


    }
}
