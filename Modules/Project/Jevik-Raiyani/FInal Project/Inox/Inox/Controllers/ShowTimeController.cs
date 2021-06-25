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
    public class ShowTimeController : ControllerBase
    {
        IShowTime _showTime;

        public ShowTimeController(IShowTime showTime)
        {
            this._showTime = showTime;
        }

        [HttpGet]
        public IEnumerable<ShowTime> GetShowTimes()
        {
            return _showTime.GetAll();
        }

        [HttpGet("{id}")]
        public ActionResult<ShowTime> GetShowTimes(int id)
        {
            var showTime = _showTime.GetById(id);

            if (showTime == null)
            {
                return NotFound();
            }

            return showTime;
        }

        [HttpPut("{id}")]
        public ActionResult<ShowTime> PutShowTime(int id, ShowTime showTime)
        {

            try
            {
                _showTime.Update(showTime);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
            return GetShowTimes(id);

        }

        [HttpPost]
        public ActionResult<ShowTime> PostShowTimes(ShowTime showTime)
        {

            try
            {
                _showTime.Create(showTime);
            }
            catch (DbUpdateException)
            {
                if (_showTime.Any(e => e.ShowTimeId == showTime.ShowTimeId))
                {
                    return Conflict();
                }
                else
                {
                    return Conflict();
                }
            }

            return CreatedAtAction("GetShowTimes", new { id = showTime.ShowTimeId }, showTime);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteShowTimes(int id)
        {
            var showTime = _showTime.GetById(id);
            if (showTime == null)
            {
                return NotFound();
            }
            try
            {
                _showTime.Delete(showTime);
            }
            catch (Exception e)
            {
                return Conflict(e);
            }
           
            return NoContent();
        }


    }
}
