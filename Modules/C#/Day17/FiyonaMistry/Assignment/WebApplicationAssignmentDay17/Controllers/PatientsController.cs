using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplicationAssignmentDay17.Authentication;
using WebApplicationAssignmentDay17.Models;
using WebApplicationAssignmentDay17.Models.IRepository;

namespace WebApplicationAssignmentDay17.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PatientsController : ControllerBase
    {
        // Any login can view data, and only Admin login can do CUD operations

        IPatient patient;

        public PatientsController(IPatient patient)
        {
            this.patient = patient;
        }

        [AllowAnonymous]
        [HttpGet]
        public IEnumerable<Patient> GetPatients()
        {
            return patient.GetAll();
        }

        [AllowAnonymous]
        [HttpGet("medicine-list")]
        public IEnumerable<MedicineList> GetPatient()
        {
            return patient.GetPatients();
        }

        [AllowAnonymous]
        [HttpGet("{id}")]
        public Patient GetPatient(int id)
        {
            return patient.GetById(id);
        }

        [Authorize(Roles = UserRoles.Admin)]
        [HttpPost]
        public void PostPatients(Patient pat)
        {
            patient.Create(pat);
        }

        [Authorize(Roles = UserRoles.Admin)]
        [HttpPut("{id}")]
        public void PutPatients(int id, Patient pat)
        {
            patient.Update(id, pat);
        }

        [Authorize(Roles = UserRoles.Admin)]
        [HttpDelete("{id}")]
        public void DeletePatients(int id)
        {
            patient.Delete(id);
        }
    }
}
