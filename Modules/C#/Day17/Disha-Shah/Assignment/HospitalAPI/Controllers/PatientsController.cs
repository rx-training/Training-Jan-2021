using HospitalAPI.IRepository;
using HospitalAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HospitalAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PatientsController : ControllerBase
    {
        private readonly IPatient patients;

        public PatientsController(IPatient context)
        {
            patients = context;
        }

        // GET: api/Doctors
        [HttpGet]
        public ActionResult<IEnumerable<Patient>> GetPatients()
        {
            return Ok(patients.GetAll());
        }

        // GET: api/Doctors/5
        [HttpGet("{id}")]
        public ActionResult<Patient> GetPatient(int id)
        {
            var patient = patients.GetById(id);

            if (patient == null)
            {
                return NotFound();
            }

            return Ok(patient);
        }

        // GET: api/Doctors/5
        [HttpGet("{id}/Medicines")]
        public ActionResult<Patient> GetPatientMedicines(int id)
        {
            var patient = patients.PatientMedicineReport(id);

            if (patient == null)
            {
                return NotFound();
            }

            return Ok(patient);
        }

        // PUT: api/Doctors/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public IActionResult Put(int id, Patient patient)
        {
            if (!ModelState.IsValid)
                return BadRequest("Not a valid model");

            patients.Update(id, patient);

            return Ok();
        }

        // POST: api/Doctors
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public ActionResult<Patient> Post(Patient patient)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid data.");

            patients.Create(patient);

            return Ok();
        }

        // DELETE: api/Doctors/5
        [HttpDelete("{id}")]
        public IActionResult DeletePatient(int id)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid data.");

            patients.Delete(id);

            return Ok();
        }
    }
}
