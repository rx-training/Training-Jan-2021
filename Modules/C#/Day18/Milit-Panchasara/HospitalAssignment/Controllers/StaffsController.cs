using HospitalAssignment.Code.Interfaces;
using HospitalAssignment.Models;
using HospitalAssignment.Models.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HospitalAssignment.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class StaffController : ControllerBase
    {
        private List<string> jobType = new List<string>() { "Doctor", "Assistant"};
        private readonly IStaff staffRepo;
        private readonly Response response;

        public StaffController(IStaff staffRepo)
        {
            this.staffRepo = staffRepo;
            this.response = new Response();
        }

        // GET: api/Staff
        [HttpGet]
        public ActionResult<Response> GetStaff()
        {
            var staff = staffRepo.Index();
            response.Status = "1";
            response.Data = staff;
            response.Message = "Staff list";
            return response;
        }

        // GET: api/Staff/doctors
        [HttpGet("doctors")]
        public ActionResult<Response> GetDoctors()
        {
            var staff = staffRepo.DoctorIndex();
            response.Status = "1";
            response.Data = staff;
            response.Message = "Doctors list";
            return response;
        }

        // GET: api/Staff/doctors
        [HttpGet("assistants")]
        public ActionResult<Response> GetAssistants()
        {
            var staff = staffRepo.AssistantIndex();
            response.Status = "1";
            response.Data = staff;
            response.Message = "Assistants list";
            return response;
        }

        // GET: api/Staff/5
        [HttpGet("{id}")]
        public ActionResult<Response> GetStaff(int id)
        {
            var staff = staffRepo.Find(x => x.Id == id).SingleOrDefault();

            if (staff == null)
            {
                response.Status = "0";
                response.Message = "Doctor/Assistant not found!";
                return response;
            }

            response.Status = "Success";
            response.Data = staff;
            response.Message = "Doctor/Assistant's data";
            return response;
        }

        // PUT: api/Staffs/5
        [Authorize(Roles = UserRole.Admin)]
        [HttpPut("{id}")]
        public ActionResult<Response> PutStaff(int id, staff staff)
        {
            if (id != staff.Id || !StaffExists(id))
            {
                response.Status = "0";
                response.Message = "Staff id not matched or is not found!";
                response.Data = BadRequest();
                return response;
            }
            if (!this.jobType.Contains(staff.JobType))
            {
                response.Status = "0";
                response.Message = "Invalid JobType";
                response.Data = null;
                return response;
            }

            try
            {
                var updateStaff = staffRepo.Update(staff);
                response.Status = "Success";
                response.Data = updateStaff;
                response.Message = "Staff person details updated successfully.";
            }
            catch (Exception e)
            {
                response.Status = "0";
                response.Message = e.Message;
                response.Data = null;
            }

            return response;
        }

        // POST: api/Staffs
        [Authorize(Roles = UserRole.Admin)]
        [HttpPost]
        public ActionResult<Response> PostStaff(staff staff)
        {
            if(!this.jobType.Contains(staff.JobType))
            {
                response.Status = "0";
                response.Message = "Invalid JobType";
                response.Data = null;
                return response;
            }
            try
            {
                var newStaff = staffRepo.Add(staff);
                response.Status = "Success";
                response.Data = newStaff;
                response.Message = "Staff updated successfully.";
            }
            catch (Exception e)
            {
                response.Status = "0";
                response.Message = e.Message;
                response.Data = null;
            }

            return response;
        }

        // DELETE: api/Staffs/5
        [Authorize(Roles = UserRole.Admin)]
        [HttpDelete("{id}")]
        public ActionResult<Response> DeleteStaff(int id)
        {
            if (!StaffExists(id))
            {
                response.Status = "0";
                response.Message = "Staff id not matched or is not found!";
                response.Data = BadRequest();
                return response;
            }

            try
            {
                var staff = staffRepo.Find(x => x.Id == id).SingleOrDefault();
                var deletedStaff = staffRepo.Delete(staff);
                response.Status = "Success";
                response.Data = deletedStaff;
                response.Message = "Staff deleted successfully.";
            }
            catch (Exception e)
            {
                response.Status = "0";
                response.Message = e.Message;
                response.Data = null;
            }

            return response;
        }

        // GET: api/staff/1/patients
        [HttpGet("{id}/patients")]
        public ActionResult<Response> GetStaffPatientsData(int id)
        {
            if (!StaffExists(id))
            {
                response.Status = "0";
                response.Message = "Staff id not matched or is not found!";
                response.Data = BadRequest();
                return response;
            }

            var patients = staffRepo.GetStaffPatientsData(id);
            response.Status = "1";
            response.Data = patients;
            response.Message = "Patients list";
            return response;
        }

        private bool StaffExists(int id)
        {
            return staffRepo.IsExist(x => x.Id == id);
        }
    }
}
