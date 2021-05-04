using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using HosptialWebApi.Model;
using Microsoft.AspNetCore.Authorization;
using HosptialWebApi.Authentication;
using HosptialWebApi.IRepository;

namespace HosptialWebApi.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class PatientsController : ControllerBase
    {
      
        IPatients PatientRepo;
        public PatientsController(IPatients patients)
        {
            this.PatientRepo = patients;
        }
        // GET: api/patients

        [HttpGet]
        public IEnumerable<Patient> GetPatients()
        {
            return PatientRepo.GetAll();
        }
        // GET: api/Patients
        
        //patient id wise medicine list
       
        [HttpGet("{patientid}/Medicines")]
        public  List<vGetMedicines> GetMedicines(int patientid)
        {
            return PatientRepo.GetMedicines(patientid);
            
        }

        // GET: api/Patients/5
        [HttpGet("{id}")]
        public  Patient GetPatient(int id)
        {
            return PatientRepo.GetById(id);
        }

        // PUT: api/Patients/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [Authorize(Roles = UserRoles.Admin)]
        [HttpPut]
        
        public IEnumerable<Patient> PutPatient( Patient patient)
        {
            PatientRepo.Update(patient);
            yield return PatientRepo.GetById(patient.PatientId);
        }

        // POST: api/Patients
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [Authorize(Roles = UserRoles.Admin)]
        [HttpPost]
        public Patient Add(Patient patient)
        {
            PatientRepo.Create(patient);
            return patient;
        }
     

        // DELETE: api/Patients/5
        [Authorize(Roles = UserRoles.Admin)]
        [HttpDelete("{id}")]
        public IEnumerable<Patient> Delete(Patient patient)
        {
            PatientRepo.Delete(patient);
            return PatientRepo.GetAll();
        }
        
    }
}
