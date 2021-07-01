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
    public class DirectorCastController : ControllerBase
    {
        IDirectorCast _directorCast;

        public DirectorCastController(IDirectorCast directorCast)
        {
            this._directorCast = directorCast;
        }

        [HttpGet]
        public IEnumerable<DirectorCast> GetDirectorCasts()
        {
            return _directorCast.GetAll();
        }

        [HttpGet("{id}")]
        public ActionResult<DirectorCast> GetDirectorCasts(int id)
        {
            var directorCast = _directorCast.GetById(id);

            if (directorCast == null)
            {
                return NotFound();
            }

            return directorCast;
        }

        [HttpPut("{id}")]
        public ActionResult<DirectorCast> PutDirectorCasts(int id, DirectorCast directorCast)
        {

            try
            {
                _directorCast.Update(directorCast);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
            return GetDirectorCasts(id);

        }

        [HttpPost]
        public ActionResult<DirectorCast> PostDirectorCasts(DirectorCast directorCast)
        {

            try
            {
                _directorCast.Create(directorCast);
            }
            catch (DbUpdateException)
            {
                if (_directorCast.Any(e => e.NameId == directorCast.NameId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetDirectorCasts", new { id = directorCast.NameId }, directorCast);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteDirectorCasts(int id)
        {
            var directorCast = _directorCast.GetById(id);
            if (directorCast == null)
            {
                return NotFound();
            }

            _directorCast.Delete(directorCast);

            return NoContent();
        }


    }
}
