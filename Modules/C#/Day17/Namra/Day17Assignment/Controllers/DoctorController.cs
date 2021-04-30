using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Day17Assignment.Models;
using Day17Assignment.Models.IRepo;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Day17RoleBased.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DoctorController : ControllerBase
    {
        private readonly Day17AssignmentContext context;
        IDoctor doctor;

        public DoctorController(IDoctor _doctor, Day17AssignmentContext context)
        {
            doctor = _doctor;
            this.context = context;
        }
        [HttpGet]
        public IEnumerable<Doctor> GetAll()
        {
            return doctor.GetAll();
        }
        [Authorize]
        [HttpPost]
        public string Add([FromBody] Doctor AddDoctor)
        {
            try
            {
                context.Doctors.Single(s => s.DoctorName == AddDoctor.DoctorName && s.Contact == AddDoctor.Contact);
                return $"Doctor is already exists...";
            }
            catch (Exception)
            {
                doctor.Create(AddDoctor);
                Doctor AddedDoctor = context.Doctors.ToList().Last();
                return $"Welcome to the hospital {AddedDoctor.DisplayName}, Your id is {AddedDoctor.DoctorId}\nPlease remember it for infuture operations...";
            }
        }



        [Authorize]
        [HttpPut]
        public string Update([FromBody] Doctor updateDoctor)
        {
            try
            {
                doctor.Update(updateDoctor);
                return $"Doctor is updated successfully...";
            }
            catch (Exception)
            {
                return $"Doctor isn't updated...";
            }
        }

        [Authorize]
        [HttpDelete("{id}")]
        public string Delete(int id)
        {
            try
            {
                Doctor deleteDoctor = context.Doctors.Single(s => s.DoctorId == id);
                doctor.Delete(deleteDoctor);
                return $"Doctor is deleted successfully...";
            }
            catch (Exception)
            {
                return $"Doctor isn't deleted...";
            }
        }

        // TO get particular transcript medicines
        [Authorize]
        [HttpGet("Patient/{TranscriptId}")]
        public IEnumerable<PatientDrugsTranscript> GetDrugs(int TranscriptId)
        {
            return context.PatientDrugsTranscripts.FromSqlRaw($"select * from vPatientDrugs({TranscriptId}) ");

        }

        
    }
}
