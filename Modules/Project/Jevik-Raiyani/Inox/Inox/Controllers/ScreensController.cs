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
    public class ScreensController : ControllerBase
    {
        IScreens _screens;

        public ScreensController(IScreens screens)
        {
            this._screens = screens;
        }

        [HttpGet]
        public IEnumerable<Screen> GetScreens()
        {
            return _screens.GetAll();
        }

        [HttpGet("{id}")]
        public ActionResult<Screen> GetScreens(int id)
        {
            var screen = _screens.GetById(id);

            if (screen == null)
            {
                return NotFound();
            }

            return screen;
        }

        [HttpPut("{id}")]
        public ActionResult<Screen> PutScreens(int id, Screen screen)
        {

            try
            {
                _screens.Update(screen);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
            return GetScreens(id);

        }

        [HttpPost]
        public ActionResult<Screen> PostScreens(Screen screen)
        {

            try
            {
                _screens.Create(screen);
            }
            catch (DbUpdateException)
            {
                if (_screens.Any(e => e.ScreenId == screen.ScreenId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetScreens", new { id = screen.ScreenId }, screen);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteScreens(int id)
        {
            var screen = _screens.GetById(id);
            if (screen == null)
            {
                return NotFound();
            }

            _screens.Delete(screen);

            return NoContent();
        }


    }
}
