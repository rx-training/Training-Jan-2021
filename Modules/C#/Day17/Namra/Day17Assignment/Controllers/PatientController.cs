using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Day17Assignment.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Day17Assignment.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PatientController : ControllerBase
    {
        private readonly Day17AssignmentContext context;

        public PatientController(Day17AssignmentContext _context)
        {
            this.context = _context;
        }
        // To get all transcript of patient
        [HttpGet("Transcripts/{PatientId}")]
        public IEnumerable Get(int PatientId)
        {
            var cs =context.Transcripts.Where(s => s.PatientId == PatientId).Include(s => s.Patient).Select(s=> new { 
                s.TranscriptId,
                s.PatientId,
                s.Patient.PatientName,
                s.Doctors,
                s.Assistants,
                s.Drugs,
                s.Bill,
                s.TranscriptDate
            });
            return cs;
        }
        // To get all transcript of patient and doctor id
        [HttpGet("Transcripts/{PatientId}/{DoctorId}")]
        public IEnumerable GetDoctorPatientData(int PatientId,int DoctorId)
        {
            var cs = context.Transcripts.Where(s => s.PatientId == PatientId && s.Doctors.Contains($"{DoctorId}")).Include(s => s.Patient).Select(s => new {
                s.TranscriptId,
                s.PatientId,
                s.Doctors,
                s.Assistants,
                s.Drugs,
                s.Bill,
                s.TranscriptDate
            });
            return cs;
        }
    }
}
