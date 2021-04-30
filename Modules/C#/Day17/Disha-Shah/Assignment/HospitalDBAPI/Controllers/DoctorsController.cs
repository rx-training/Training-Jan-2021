using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using HospitalDBAPI.Models;
using HospitalDBAPI.IRepository;
using Microsoft.AspNetCore.Authorization;
using HospitalDBAPI.Authentication;

namespace HospitalDBAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DoctorsController : ControllerBase
    {
        private readonly IDoctor doctors;

        public DoctorsController(IDoctor context)
        {
            doctors = context;
        }

        // GET: api/Doctors
        [HttpGet]
        [Authorize]
        public ActionResult<IEnumerable<Doctor>> GetDoctors()
        {
            return Ok(doctors.GetAll());
        }

        // GET: api/Doctors/5
        [HttpGet("{id}")]
        [Authorize]
        public ActionResult<Doctor> GetDoctor(int id)
        {
            var doctor = doctors.GetById(id);

            if (doctor == null)
            {
                return NotFound();
            }

            return Ok(doctor);
        }

        // GET: api/Doctors/5
        [HttpGet("{id}/Patients")]
        [Authorize]
        public ActionResult<Doctor> GetDoctorPatient(int id)
        {
            var patient = doctors.PatientDoctorReport(id);

            if (patient == null)
            {
                return NotFound();
            }

            return Ok(patient);
        }

        // PUT: api/Doctors/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        [Authorize(Roles = UserRoles.Admin)]
        public IActionResult PutDoctor(int id, Doctor doctor)
        {
            if (!ModelState.IsValid)
                return BadRequest("Not a valid model");

            doctors.Update(id, doctor);

            return Ok();
        }

        // POST: api/Doctors
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        [Authorize(Roles = UserRoles.Admin)]
        public ActionResult<Doctor> PostDoctor(Doctor doctor)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid data.");

            doctors.Create(doctor);

            return Ok();
        }

        // DELETE: api/Doctors/5
        [HttpDelete("{id}")]
        [Authorize(Roles = UserRoles.Admin)]
        public IActionResult DeleteDoctor(int id)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid data.");

            doctors.Delete(id);

            return Ok();
        }
    }
}
