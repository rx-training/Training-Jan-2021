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
    public class RowController : ControllerBase
    {
        IRows _rows;

        public RowController(IRows rows)
        {
            this._rows = rows;
        }

        [HttpGet]
        public IEnumerable<Row> GetRows()
        {
            return _rows.GetAll();
        }

        [HttpGet("{id}")]
        public ActionResult<Row> GetRows(int id)
        {
            var row = _rows.GetById(id);

            if (row == null)
            {
                return NotFound();
            }

            return row;
        }

        [HttpPut("{id}")]
        public ActionResult<Row> PutRow(int id, Row row)
        {

            try
            {
                _rows.Update(row);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
            return GetRows(id);

        }

        [HttpPost]
        public ActionResult<Row> PostCinema(Row row)
        {

            try
            {
                _rows.Create(row);
            }
            catch (DbUpdateException)
            {
                if (_rows.Any(e => e.RowId == row.RowId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetRow", new { id = row.RowId }, row);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteRow(int id)
        {
            var row = _rows.GetById(id);
            if (row == null)
            {
                return NotFound();
            }

            _rows.Delete(row);

            return NoContent();
        }


    }
}
