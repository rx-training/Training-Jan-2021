using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DrAssingment.Models;
using DrAssingment.Models.IRepository;
using DrAssingment.Models.Repository;

namespace DrAssingment.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DoctorsController : ControllerBase
    {

        private readonly HospotalContext context;
        IDoctor doctorrepository;

        public DoctorsController(IDoctor doctorrepository, HospotalContext _context)
        {
            this.context = _context;
            this.doctorrepository = doctorrepository;
        }
        
        [HttpGet]
       public IEnumerable<Models.Doctor> DrListMethod()
        {
            return doctorrepository.GetAll();
        }

        [HttpPost]
        public string creates([FromBody] Doctor addDoctor)
        {
            
                Doctor checkDoctor = context.Doctors.FirstOrDefault(s => s.Doctorname == addDoctor.Doctorname);
                if (checkDoctor != null)
                    //new Exception("Doctor is already exists...");
                    return "Doctor is already exists...";
                else
                {
                    doctorrepository.Create(addDoctor);
                    Doctor addedDoctor = context.Doctors.ToList().Last();
                    return $"Doctor {addedDoctor.Doctorname} is added successfully and your id is {addedDoctor.Doctorid}";
                }
           
        }
        [HttpDelete("{deleteid}")]
        public string delete(int deleteid)
        {
            try
            {
                var doctorDelete=context.Doctors.Single(s => s.Doctorid == deleteid);
                doctorrepository.Delete(doctorDelete);
                return "Doctor is remove successfully";
            }
            catch (Exception)
            {
                return $"Doctor is not found...";
            }
        }
        /* // POST: api/Person
         [HttpPost]
             public void Create(Models.Doctor entity)
             {
             doctorrepository. .Add(entity);
                 context.SaveChanges();
             }*/


        /*// GET: api/Person/5
        [HttpGet("{id}", Name = "Get")]
        public Doctor Get(int id)
        {
            doctorList = DrListMethod();
            var doctorob = doctorList.Find(p => p.Doctorid == id);
            return doctorob;
        }*/


        /*public void Delete(Models.Doctor Doctor)
        {
            doctorrepository.Remove(Doctor);
            doctorrepository.SaveChanges();
        }*/




    }
}
