using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using HospitalAssignment.Models;
using HospitalAssignment.Code.Interfaces;
using Microsoft.AspNetCore.Authorization;
using HospitalAssignment.Models.Authentication;

namespace HospitalAssignment.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class PatientsController : ControllerBase
    {
        private readonly IPatient patientRepo;
        private readonly Response response;

        public PatientsController(IPatient patientRepo)
        {
            this.patientRepo = patientRepo;
            this.response = new Response();
        }

        // GET: api/Patients
        [HttpGet]
        public ActionResult<Response> GetPatients()
        {
            var patients = patientRepo.Index();
            response.Status = "1";
            response.Data = patients;
            response.Message = "Patients list";
            return response;
        }

        // GET: api/Patients/5
        [HttpGet("{id}")]
        public ActionResult<Response> GetPatient(int id)
        {
            var patient = patientRepo.Find(x => x.Id == id).SingleOrDefault();

            if (patient == null)
            {
                response.Status = "0";
                response.Message = "Patient not found!";
                return response;
            }

            response.Status = "Success";
            response.Data = patient;
            response.Message = "Patient's data";
            return response;
        }

        // PUT: api/Patients/5
        [Authorize(Roles = UserRole.Admin)]
        [HttpPut("{id}")]
        public ActionResult<Response> PutPatient(int id, Patient patient)
        {
            if (id != patient.Id || !PatientExists(id))
            {
                response.Status = "0";
                response.Message = "Patient id not matched or is not found!";
                response.Data = BadRequest();
                return response;
            }

            try
            {
                var updatePatient = patientRepo.Update(patient);
                response.Status = "Success";
                response.Data = updatePatient;
                response.Message = "Patient updated successfully.";
            }
            catch (Exception e)
            {
                response.Status = "0";
                response.Message = e.Message;
                response.Data = null;
            }

            return response;
        }

        // POST: api/Patients
        [Authorize(Roles = UserRole.Admin)]
        [HttpPost]
        public ActionResult<Response> PostPatient(Patient patient)
        {
            try
            {
                var newPatient = patientRepo.Add(patient);
                response.Status = "Success";
                response.Data = newPatient;
                response.Message = "Patient updated successfully.";
            }
            catch (Exception e)
            {
                response.Status = "0";
                response.Message = e.Message;
                response.Data = null;
            }

            return response;
        }

        // DELETE: api/Patients/5
        [Authorize(Roles = UserRole.Admin)]
        [HttpDelete("{id}")]
        public ActionResult<Response> DeletePatient(int id)
        {
            if (!PatientExists(id))
            {
                response.Status = "0";
                response.Message = "Patient id not matched or is not found!";
                response.Data = BadRequest();
                return response;
            }

            try
            {
                var patient = patientRepo.Find(x => x.Id == id).SingleOrDefault();
                var deletedPatient = patientRepo.Delete(patient);
                response.Status = "Success";
                response.Data = deletedPatient;
                response.Message = "Patient deleted successfully.";
            }
            catch (Exception e)
            {
                response.Status = "0";
                response.Message = e.Message;
                response.Data = null;
            }

            return response;
        }

        // GET: api/Patients/assignedStaff
        [HttpGet("assignedStaff")]
        public ActionResult<Response> GetAllPatientsAssignedStaff()
        {
            var patients = patientRepo.GetAllPatientsStaffReport();
            response.Status = "1";
            response.Data = patients;
            response.Message = "Patients-staff list";
            return response;
        }

        // GET: api/Patients/1/assignedStaff
        [HttpGet("{id}/assignedStaff")]
        public ActionResult<Response> GetPatientAssignedStaff(int id)
        {
            if (!PatientExists(id))
            {
                response.Status = "0";
                response.Message = "Patient id not matched or is not found!";
                response.Data = BadRequest();
                return response;
            }

            var patients = patientRepo.GetPatientStaffReport(id);
            response.Status = "1";
            response.Data = patients;
            response.Message = "Patients-staff list";
            return response;
        }

        // POST: api/Patients/1/assignedStaff
        [HttpPost("{id}/assignedStaff")]
        public ActionResult<Response> SetPatientAssignedStaff(int id, List<AssignedStaff> staff)
        {
            if (!PatientExists(id))
            {
                response.Status = "0";
                response.Message = "Patient id not matched or is not found!";
                response.Data = BadRequest();
                return response;
            }

            var patients = patientRepo.SetPatientsStaff(id, staff);
            response.Status = "1";
            response.Data = patients;
            response.Message = "Patients-staff list";
            return response;
        }

        // GET: api/Patients/1/medicines
        [HttpGet("{id}/medicines")]
        public ActionResult<Response> GetPatientMedicines(int id)
        {
            if (!PatientExists(id))
            {
                response.Status = "0";
                response.Message = "Patient id not matched or is not found!";
                response.Data = BadRequest();
                return response;
            }

            var patients = patientRepo.GetPatientMedicines(id);
            response.Status = "1";
            response.Data = patients;
            response.Message = "Patients-Medicines list";
            return response;
        }

        private bool PatientExists(int id)
        {
            return patientRepo.IsExist(x => x.Id == id);
        }


    }
}
