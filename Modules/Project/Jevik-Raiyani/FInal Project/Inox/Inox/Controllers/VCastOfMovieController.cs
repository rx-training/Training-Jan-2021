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
    public class VCastOfMovieController : ControllerBase
    {
        IVCastOfMovies _vcastOfMovies;

        public VCastOfMovieController(IVCastOfMovies castOfMovies)
        {
            this._vcastOfMovies = castOfMovies;
        }

        [HttpGet]
        public IEnumerable<VCastofmovie> GetVCastofmovies()
        {
            return _vcastOfMovies.GetAll();
        }

        [HttpGet("{id}")]
        public ActionResult<VCastofmovie> GetVCastofmovies(int id)
        {
            var vCastofmovie = _vcastOfMovies.GetById(id);

            if (vCastofmovie == null)
            {
                return NotFound();
            }

            return vCastofmovie;
        }

        [HttpPut("{id}")]
        public ActionResult<VCastofmovie> PutVCastofmovies(int id, VCastofmovie vCastofmovie)
        {

            try
            {
                _vcastOfMovies.Update(vCastofmovie);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
            return GetVCastofmovies(id);

        }

        [HttpPost]
        public ActionResult<VCastofmovie> PostVCastofmovies(VCastofmovie vCastofmovie)
        {

            try
            {
                _vcastOfMovies.Create(vCastofmovie);
            }
            catch (DbUpdateException)
            {
                if (_vcastOfMovies.Any(e => e.MovieName == vCastofmovie.MovieName))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetVCastofmovies", new { id = vCastofmovie.MovieName }, vCastofmovie);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteVCastofmovies(int id)
        {
            var vCastofmovie = _vcastOfMovies.GetById(id);
            if (vCastofmovie == null)
            {
                return NotFound();
            }

            _vcastOfMovies.Delete(vCastofmovie);

            return NoContent();
        }


    }
}

