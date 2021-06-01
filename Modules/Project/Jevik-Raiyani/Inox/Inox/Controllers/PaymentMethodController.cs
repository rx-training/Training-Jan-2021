using Inox.Models;
using Inox.Models.IRepository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Inox.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaymentMethodController : ControllerBase
    { 
            IPaymentMethod _paymentMethod;

        public PaymentMethodController(IPaymentMethod paymentMethod)
    {
        this._paymentMethod = paymentMethod;
    }

    [HttpGet]
    public IEnumerable<PaymentMethod> GetPaymentMethods()
    {
        return _paymentMethod.GetAll();
    }

    [HttpGet("{id}")]
    public ActionResult<PaymentMethod> GetPaymentMethods(int id)
    {
        var paymentMethod = _paymentMethod.GetById(id);

        if (paymentMethod == null)
        {
            return NotFound();
        }

        return paymentMethod;
    }

    [HttpPut("{id}")]
    public ActionResult<PaymentMethod> PutCinema(int id, PaymentMethod paymentMethod)
    {

        try
        {
            _paymentMethod.Update(paymentMethod);
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
        }
        return GetPaymentMethods(id);

    }

    [HttpPost]
    public ActionResult<PaymentMethod> PostPaymentMethod(PaymentMethod paymentMethod)
    {

        try
        {
            _paymentMethod.Create(paymentMethod);
        }
        catch (DbUpdateException)
        {
            if (_paymentMethod.Any(e => e.PaymentId == paymentMethod.PaymentId))
            {
                return Conflict();
            }
            else
            {
                throw;
            }
        }

        return CreatedAtAction("GetPaymentMethod", new { id = paymentMethod.PaymentId }, paymentMethod);
    }

    [HttpDelete("{id}")]
    public IActionResult DeletePaymentMethod(int id)
    {
        var paymentMethod = _paymentMethod.GetById(id);
        if (paymentMethod == null)
        {
            return NotFound();
        }

        _paymentMethod.Delete(paymentMethod);

        return NoContent();
    }


}
}
