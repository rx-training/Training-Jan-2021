using HosptialWebApi.Authentication;
using HosptialWebApi.IRepository;
using HosptialWebApi.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HosptialWebApi.Controllers
{
  [Authorize]
    
    [ApiController]
    public class DoctorsController : ControllerBase
    {
        

        
        IDoctors DoctorsRepository;
        public DoctorsController(IDoctors DoctorsRepository)
        {
            this.DoctorsRepository = DoctorsRepository;
        }
        // GET: api/Doctors
       
        [HttpGet]
        public IEnumerable<Doctor> GetDoctors()
        {
            return  DoctorsRepository.GetAll();
        }

        // GET: api/Doctors/5
        
        [HttpGet("{id}")]

        public Doctor GetById(int id)
        {
            return DoctorsRepository.GetById(id);
        }
        

        // PUT: api/Doctors/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
       [Authorize(Roles = UserRoles.Admin)]
        [HttpPut]
        public Doctor update(Doctor doctor)
        {
            DoctorsRepository.Update(doctor);
            return doctor;
        }

        // POST: api/Doctors
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [Authorize(Roles = UserRoles.Admin)]
        [HttpPost]
        public Doctor add(Doctor doctor)
        {
            DoctorsRepository.Create(doctor);
            return doctor;
        }

        //// DELETE: api/Doctors/5
        [Authorize(Roles = UserRoles.Admin)]
        [HttpDelete]
        public IEnumerable<Doctor> Delete(Doctor doctor)
        {
            DoctorsRepository.Delete(doctor);
            return DoctorsRepository.GetAll();
        }
        //get doctor id wise patient report

        [HttpGet("{id}/report")]
        public List<vGetReport> Get(int id)
        {
            return DoctorsRepository.GetReport(id);

        }
    }
}
