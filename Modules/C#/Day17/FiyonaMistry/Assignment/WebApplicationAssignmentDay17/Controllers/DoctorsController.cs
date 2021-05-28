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
    //[Authorize(Roles = UserRoles.Admin + ", " + UserRoles.Doctor)]
    [Route("api/[controller]")]
    [ApiController]
    public class DoctorsController : ControllerBase
    {
        // Only Doctor and Admin login can view data, and only Admin login can do CUD operations

        IDoctor doctor;

        public DoctorsController(IDoctor doctor)
        {
            this.doctor = doctor;
        }

        [Authorize(Roles = UserRoles.Doctor + ", " + UserRoles.Admin)]
        [HttpGet]
        public IEnumerable<Doctor> GetDoctors()
        {
            return doctor.GetAll();
        }

        [Authorize(Roles = UserRoles.Doctor + ", " + UserRoles.Admin)]
        [HttpGet("assigned-patients/{id}")]
        public IEnumerable<Doctor> GetDoctor(int id)
        {
            return doctor.GetByDocId(id);
        }

        [Authorize(Roles = UserRoles.Doctor + ", " + UserRoles.Admin)]
        [HttpGet("{id}")]
        public Doctor GetDoctors(int id)
        {
            return doctor.GetById(id);
        }

        [Authorize(Roles = UserRoles.Admin)]
        [HttpPost]
        public void PostDoctors(Doctor doc)
        {
            doctor.Create(doc);
        }

        [Authorize(Roles = UserRoles.Admin)]
        [HttpPut("{id}")]
        public void PutDoctors(int id, Doctor doc)
        {
            doctor.Update(id, doc);
        }

        [Authorize(Roles = UserRoles.Admin)]
        [HttpDelete("{id}")]
        public void DeleteDoctors(int id)
        {
            doctor.Delete(id);
        }
    }
}
