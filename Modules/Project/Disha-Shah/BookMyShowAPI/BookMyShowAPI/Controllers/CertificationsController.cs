using BookMyShowAPI.IRepository;
using BookMyShowAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookMyShowAPI.Controllers
{
    [Route("api/BookMyShow/[controller]")]
    [ApiController]
    public class CertificationsController : ControllerBase
    {
        private readonly ICertification certifications;

        public CertificationsController(ICertification context)
        {
            certifications = context;
        }

        // GET: api/BookMyShow/Certifications
        [Authorize]
        [HttpGet]
        public ActionResult<IEnumerable<Certification>> GetCertifications()
        {
            return Ok(certifications.GetAll());
        }

        // GET: api/BookMyShow/Certifications/5
        [Authorize]
        [HttpGet("{id}")]
        public ActionResult<Certification> GetCertification(int id)
        {
            var certification = certifications.GetById(id);

            if (certification == null)
            {
                return NotFound();
            }

            return Ok(certification);
        }

    }
}
