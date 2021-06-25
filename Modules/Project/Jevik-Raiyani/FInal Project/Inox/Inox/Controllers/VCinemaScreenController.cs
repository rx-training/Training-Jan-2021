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
    public class VCinemaScreenController : ControllerBase
    {
        IVCinemaScreens _vCinemaScreens;

        public VCinemaScreenController(IVCinemaScreens vCinemaScreens)
        {
            this._vCinemaScreens = vCinemaScreens;
        }

        [HttpGet]
        public IEnumerable<VCinemaScreen> GetVCinemaScreens()
        {
            return _vCinemaScreens.GetAll();
        }

        [HttpGet("{id}")]
        public ActionResult<VCinemaScreen> GetVCinemaScreens(int id)
        {
            var vCinemaScreen = _vCinemaScreens.GetById(id);

            if (vCinemaScreen == null)
            {
                return NotFound();
            }

            return vCinemaScreen;
        }

        [HttpPut("{id}")]
        public ActionResult<VCinemaScreen> PutVCinemaScreens(int id, VCinemaScreen vCinemaScreen)
        {

            try
            {
                _vCinemaScreens.Update(vCinemaScreen);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
            return GetVCinemaScreens(id);

        }

        [HttpPost]
        public ActionResult<VCinemaScreen> PostVCinemaScreens(VCinemaScreen vCinemaScreen)
        {

            try
            {
                _vCinemaScreens.Create(vCinemaScreen);
            }
            catch (DbUpdateException)
            {
                if (_vCinemaScreens.Any(e => e.ShowTimeId == vCinemaScreen.ShowTimeId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetVCinemaScreens", new { id = vCinemaScreen.ShowTimeId }, vCinemaScreen);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteVCinemaScreens(int id)
        {
            var vCinemaScreen = _vCinemaScreens.GetById(id);
            if (vCinemaScreen == null)
            {
                return NotFound();
            }

            _vCinemaScreens.Delete(vCinemaScreen);

            return NoContent();
        }


    }
}
