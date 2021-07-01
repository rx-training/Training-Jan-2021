using Inox.Authentication;
using Inox.Models;
using Inox.Models.IRepository;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks; 

namespace Inox.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class TicketController : ControllerBase
    {
        ITickets _tickets;

        public TicketController(ITickets tickets)
        {
            this._tickets = tickets;
        }

        //[Authorize]
        [HttpGet]
        public IEnumerable<Ticket> GetTickets()
        {
            return _tickets.GetAll();
        }

        [HttpGet("{id}")]
        public ActionResult<Ticket> GetTickets(int id)
        {
            var ticket = _tickets.GetById(id);

            if (ticket == null)
            {
                return NotFound();
            }

            return ticket;
        }

        [HttpPut("{id}")]
        public ActionResult<Ticket> PutTickets(int id, Ticket ticket)
        {

            try
            {
                _tickets.Update(ticket);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
            return GetTickets(id);

        }


       // [Authorize]
       // [Authorize(Roles = UserRoles.Admin)]
        [HttpPost]
        public ActionResult<Ticket> PostCinema(Ticket ticket)
        {

            try
            {
                _tickets.Create(ticket);
            }
            catch (DbUpdateException)
            {
                if (_tickets.Any(e => e.TicketId == ticket.TicketId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetTickets", new { id = ticket.TicketId }, ticket);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteTickets(int id)
        {
            var ticket = _tickets.GetById(id);
            if (ticket == null)
            {
                return NotFound();
            }

            _tickets.Delete(ticket);

            return NoContent();
        }


    }
}
