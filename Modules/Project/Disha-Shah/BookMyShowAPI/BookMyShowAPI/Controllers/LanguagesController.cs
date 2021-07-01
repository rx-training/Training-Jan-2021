using BookMyShowAPI.Authentication;
using BookMyShowAPI.IRepository;
using BookMyShowAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookMyShowAPI.Controllers
{
    [Route("api/BookMyShow/[controller]")]
    [ApiController]
    public class LanguagesController : ControllerBase
    {
        private readonly ILanguage languages;

        public LanguagesController(ILanguage context)
        {
            languages = context;
        }

        // GET: api/BookMyShow/Languages
        [HttpGet]
        public ActionResult<IEnumerable<Language>> GetLanguages()
        {
            return Ok(languages.GetAllLanguages());
        }

        // GET: api/BookMyShow/Languages/5
        [HttpGet("{id}")]
        public ActionResult<Language> GetLanguage(int id)
        {
            var language = languages.GetById(id);

            if (language == null)
            {
                return NotFound();
            }

            return Ok(language);
        }

        // PUT: api/BookMyShow/Languages/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        [Authorize(Roles = UserRoles.Admin)]
        public IActionResult PutLanguage(int id, Language language)
        {
            if (!ModelState.IsValid)
                return BadRequest("Not a valid model");

            languages.Update(id, language);

            return Ok();
        }

        // POST: api/BookMyShow/Languages
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        [Authorize(Roles = UserRoles.Admin)]
        public ActionResult<Language> PostLanguage(Language language)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid data.");

            languages.Create(language);

            return Ok();
        }

        // DELETE: api/BookMyShow/Languages/5
        [HttpDelete("{id}")]
        [Authorize(Roles = UserRoles.Admin)]
        public IActionResult DeleteLanguage(int id)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid data.");

            languages.Delete(id);

            return Ok();
        }
    }
}
