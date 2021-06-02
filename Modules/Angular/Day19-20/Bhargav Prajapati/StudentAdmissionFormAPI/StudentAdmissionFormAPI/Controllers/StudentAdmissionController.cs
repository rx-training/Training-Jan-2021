using Microsoft.AspNetCore.Mvc;
using StudentAdmissionFormAPI.IRepository;
using StudentAdmissionFormAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace StudentAdmissionFormAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentAdmissionController : ControllerBase
    {
        private readonly IStudentAdmissioncs context;
        public StudentAdmissionController(IStudentAdmissioncs ctx)
        {
            context = ctx;
        }
        
        [HttpGet]
        public ActionResult Get()
        {
            try
            {
                return Ok(context.GetAllStudent());
            }
            catch (Exception)
            {
                return BadRequest("Error is Occured");
            }
        }

        [HttpPost]
        public ActionResult Post(StudentDetail student)
        {
            try
            {
                context.InsertStudent(student);
                return Ok("Data is Inserted Successfullay");
            }
            catch(Exception)
            {
                return BadRequest("Error is Occured");
            }
        }

        // PUT api/<StudentAdmissionController>/5
        [HttpPut("{id}")]
        public ActionResult Put(int id, StudentDetail student)
        {
            try
            {
                context.UpdateStudent(id, student);
                return Ok("Updated Successfully");
            }
            catch(Exception)
            {
                return BadRequest("Error is Occured");
            }

        }
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            try
            {
                context.DeleteStudent(id);

                return Ok("Deleted Successfully");
            }
            catch (Exception)
            {
                return BadRequest("Error is occured");
            }
        }
    }
}
