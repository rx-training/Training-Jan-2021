using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Assignment.Models;
using Microsoft.AspNetCore.Authorization;
using Assignment.Models.IRepository;

namespace Assignment.Controllers
{
   // [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class DoctorsController : ControllerBase
    {
        IDoctor doctor;
        public DoctorsController(IDoctor doctor)
        {
            this.doctor = doctor;
        }
        //private readonly HOSPITAL11Context _context;

        //public DoctorsController(HOSPITAL11Context context)
        //{
        //    _context = context;
        //}

        // GET: api/Doctors
        [HttpGet]
        public IEnumerable<Models.Doctor> GetDoctors()
        {
            return doctor.GetAll();
        }

        // GET: api/Doctors/5
    //    [HttpGet("{id}")]
    //    public async Task<ActionResult<Doctor>> GetDoctor(int id)
    //    {
    //        var doctor = await _context.Doctors.FindAsync(id);

    //        if (doctor == null)
    //        {
    //            return NotFound();
    //        }

    //        return doctor;
    //    }

    //    // PUT: api/Doctors/5
    //    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    //    [HttpPut("{id}")]
    //    public async Task<IActionResult> PutDoctor(int id, Doctor doctor)
    //    {
    //        if (id != doctor.DoctorId)
    //        {
    //            return BadRequest();
    //        }

    //        _context.Entry(doctor).State = EntityState.Modified;

    //        try
    //        {
    //            await _context.SaveChangesAsync();
    //        }
    //        catch (DbUpdateConcurrencyException)
    //        {
    //            if (!DoctorExists(id))
    //            {
    //                return NotFound();
    //            }
    //            else
    //            {
    //                throw;
    //            }
    //        }

    //        return NoContent();
    //    }

    //    // POST: api/Doctors
    //    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754

    //    [HttpPost]
    //    [Route("insert")]
    //    public async Task<ActionResult<Doctor>> PostDoctor(Doctor doctor)
    //    {
    //        _context.Doctors.Add(doctor);
    //        try
    //        {
    //            await _context.SaveChangesAsync();
    //        }
    //        catch (DbUpdateException)
    //        {
    //            if (DoctorExists(doctor.DoctorId))
    //            {
    //                return Conflict();
    //            }
    //            else
    //            {
    //                throw;
    //            }
    //        }

    //        return CreatedAtAction("GetDoctor", new { id = doctor.DoctorId }, doctor);
    //    }

    //    // DELETE: api/Doctors/5
    //    [HttpDelete("{id}")]
    //    public async Task<IActionResult> DeleteDoctor(int id)
    //    {
    //        var doctor = await _context.Doctors.FindAsync(id);
    //        if (doctor == null)
    //        {
    //            return NotFound();
    //        }

    //        _context.Doctors.Remove(doctor);
    //        await _context.SaveChangesAsync();

    //        return NoContent();
    //    }

    //    private bool DoctorExists(int id)
    //    {
    //        return _context.Doctors.Any(e => e.DoctorId == id);
    //    }
    }
}
