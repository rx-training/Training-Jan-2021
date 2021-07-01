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
    public class UserController : ControllerBase
    {
        IUsers _users;

        public UserController(IUsers users)
        {
            this._users = users;
        }

        [HttpGet]
        public IEnumerable<User> GetUsers()
        {
            return _users.GetAll();
        }

        [HttpGet("{id}")]
        public ActionResult<User> GetUsers(int id)
        {
            var user = _users.GetById(id);

            if (user == null)
            {
                return NotFound();
            }

            return user;
        }

        [HttpPut("{id}")]
        public ActionResult<User> PutUsers(int id, User user)
        {

            try
            {
                _users.Update(user);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
            return GetUsers(id);

        }

        [HttpPost]
        public ActionResult<User> PostUsers(User user)
        {

            try
            {
                _users.Create(user);
            }
            catch (DbUpdateException)
            {
                if (_users.Any(e => e.UserGmail == user.UserGmail))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("UserGmail", new { id = user.UserGmail }, user);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteGmail(int id)
        {
            var user = _users.GetById(id);
            if (user == null)
            {
                return NotFound();
            }

            _users.Delete(user);

            return NoContent();
        }


    }
}
