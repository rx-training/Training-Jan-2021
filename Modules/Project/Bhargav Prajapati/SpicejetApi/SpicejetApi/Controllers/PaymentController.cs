using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SpicejetApi.Authentication;
using SpicejetApi.Models;
using SpicejetApi.Models.IRepositoryHotel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace SpicejetApi.Controllers
{
    [Route("Payment/[controller]")]
    [ApiController]
    public class PaymentController : ControllerBase
    {
        private readonly IPaymentRepository repository;
        public PaymentController(IPaymentRepository repository)
        {
            this.repository = repository;
        }
        // Get All Payment
        [Authorize (Roles =UserRoles.Admin)]
        [HttpGet]
        public ActionResult GetAllPaymentRecord()
        {
            try
            {
                return Ok(repository.GetAll());
            }
            catch (Exception)
            {
                return BadRequest("Error is Occured");
            }
        }
        [Authorize(Roles = UserRoles.User)]
        // GET Payment By Id
        [HttpGet("{id}")]
        public ActionResult GetPayment(int id)
        {
            try
            {
                return Ok(repository.GetById(id));
            }
            catch (Exception)
            {
                return BadRequest("Error is Occured");
            }
        }
        [Authorize(Roles = UserRoles.Admin)]
        // InsertPayment
        [HttpPost]
        public ActionResult Post(Payment payment)
        {
            try
            {
                repository.Insert(payment);
                return Ok("Insert Data successfully");
            }
            catch (Exception)
            {
                return BadRequest("Error is Occured");
            }
        }

        // Update the Payment Recored
        [Authorize(Roles = UserRoles.Admin)]
        [HttpPut]
        public ActionResult Put(Payment payment)
        {
            try
            {
                repository.Update(payment);
                return Ok("Data is successfully Upudated");
            }
            catch (Exception)
            {
                return BadRequest("Error is Occured");
            }
        }

        // Delete Payment Record
        [Authorize(Roles = UserRoles.Admin)]
        [HttpDelete]
        public ActionResult Delete(Payment payment)
        {
            try
            {
                repository.Delete(payment);
                return Ok("Data is successfully Deleted");
            }
            catch (Exception)
            {
                return BadRequest("Error is occured");
            }
        }
    }
}
