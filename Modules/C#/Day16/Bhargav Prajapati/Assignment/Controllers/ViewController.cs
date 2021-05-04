using Assignment.Authentication;
using Assignment.IRepository;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment.Controllers
{
    [Authorize(Roles = UserRoles.User)]
    [Route("api/[controller]")]
    [ApiController]
    public class ViewController : ControllerBase
    {
        private readonly IViewinfo info;
        public ViewController(IViewinfo infodata)
        {
            info = infodata;
        }

        [HttpGet ("GetAllDoctor")]
        public ActionResult GetDoctor()
        {
            try
            {
                return Ok(info.GetAllDoctor());
                throw new Exception("Error is Occur");
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet("GetDoctorById/{DoctorName}")]
        public ActionResult GetDoctorById(string DoctorName)
        {
            try
            {
                return Ok(info.DoctorById(DoctorName));
                throw new Exception("Error is occurd");
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }


        [HttpGet ("DrugDetails/{PatientName}")]
        public ActionResult Getdrug(string PatientName)
        {
            try
            { 
            return Ok(info.detailsofdrug(PatientName));
                throw new Exception("Erorr is occured");
            }
            catch(Exception e)
            {
               return BadRequest(e.Message);
            }
        }
        [HttpGet ("PatientAssigbyDoctor/{DoctorName}")]
        public ActionResult GetByDoctorName(string DoctorName)
        {
            try             {
                return Ok(info.findPatientByDoctor(DoctorName));
                throw new Exception("Error Occur");
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet ("RepoertofPatient/{PatientName}")]
        public ActionResult GetReport(string PatientName)
        {
            try
            {
                return Ok(info.ReportPatient(PatientName));
                throw new Exception("Error Occured");
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}
