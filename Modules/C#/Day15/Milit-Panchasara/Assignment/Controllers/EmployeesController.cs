using Assignment1.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment1.Controllers
{
    [Route("emps")]
    [ApiController]
    public class EmployeesController : ControllerBase
    {
        private readonly CSDay15Context context;

        public EmployeesController(CSDay15Context context)
        {
            this.context = context;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Employee>> Get()
        {
            return context.Employees.ToList();
        }

        [HttpGet("{id}")]
        public ActionResult<Employee?> Show(int id)
        {
            return context.Employees.SingleOrDefault(x => x.Id == id);
        }

        [HttpPost]
        public ActionResult<Employee?> Add(Employee request)
        {
            var emp = new Employee();
            emp.AddressLine1 = request.AddressLine1;
            emp.AddressLine2 = request.AddressLine2;
            emp.AddressLine3 = request.AddressLine3;
            emp.Assignments = request.Assignments;
            emp.CitizenshipId = request.CitizenshipId;
            emp.CitizenshipLegislationCode = request.CitizenshipLegislationCode;
            emp.CitizenshipStatus = request.CitizenshipStatus;
            emp.CitizenshipToDate = request.CitizenshipToDate;
            emp.City = request.City;
            emp.CorrespondenceLanguage = request.CorrespondenceLanguage;
            emp.Country = request.Country;
            emp.CreationDate = request.CreationDate;
            emp.DateOfBirth = request.DateOfBirth;
            emp.DisplayName = request.DisplayName;
            emp.EffectiveStartDate = request.EffectiveStartDate;
            emp.FirstName = request.FirstName;
            emp.Gender = request.Gender;
            emp.HomePhoneAreaCode = request.HomePhoneAreaCode;
            emp.HireDate = request.HireDate;
            emp.HomePhoneCountryCode = request.HomePhoneCountryCode;
            emp.HomePhoneExtension = request.HomePhoneExtension;
            emp.HomePhoneLegislationCode = request.HomePhoneLegislationCode;
            emp.HomePhoneNumber = request.HomePhoneNumber;
            emp.Honors = request.Honors;
            emp.LastName = request.LastName;
            emp.LastUpdateDate = null;
            emp.LegalEntityId = request.LegalEntityId;
            emp.LicenseNumber = request.LicenseNumber;
            emp.MaritalStatus = request.MaritalStatus;
            emp.MiddleName = request.MiddleName;
            emp.NameSuffix = request.NameSuffix;
            emp.NationalId = request.NationalId;
            emp.NationalIdCountry = request.NationalIdCountry;

            context.Employees.Add(emp);
            context.SaveChanges();

            return emp;
        }

        [HttpPut("{id}")]
        public ActionResult<Employee?> Update(int id, Employee request)
        {
            var emp = context.Employees.SingleOrDefault(x => x.Id == id);
            if (emp == null)
            {
                return null;
            }
            emp.AddressLine1 = request.AddressLine1;
            emp.AddressLine2 = request.AddressLine2;
            emp.AddressLine3 = request.AddressLine3;
            emp.Assignments = request.Assignments;
            emp.CitizenshipId = request.CitizenshipId;
            emp.CitizenshipLegislationCode = request.CitizenshipLegislationCode;
            emp.CitizenshipStatus = request.CitizenshipStatus;
            emp.CitizenshipToDate = request.CitizenshipToDate;
            emp.City = request.City;
            emp.CorrespondenceLanguage = request.CorrespondenceLanguage;
            emp.Country = request.Country;
            emp.CreationDate = request.CreationDate;
            emp.DateOfBirth = request.DateOfBirth;
            emp.DisplayName = request.DisplayName;
            emp.EffectiveStartDate = request.EffectiveStartDate;
            emp.FirstName = request.FirstName;
            emp.Gender = request.Gender;
            emp.HomePhoneAreaCode = request.HomePhoneAreaCode;
            emp.HireDate = request.HireDate;
            emp.HomePhoneCountryCode = request.HomePhoneCountryCode;
            emp.HomePhoneExtension = request.HomePhoneExtension;
            emp.HomePhoneLegislationCode = request.HomePhoneLegislationCode;
            emp.HomePhoneNumber = request.HomePhoneNumber;
            emp.Honors = request.Honors;
            emp.LastName = request.LastName;
            emp.LastUpdateDate = DateTime.Now;
            emp.LegalEntityId = request.LegalEntityId;
            emp.LicenseNumber = request.LicenseNumber;
            emp.MaritalStatus = request.MaritalStatus;
            emp.MiddleName = request.MiddleName;
            emp.NameSuffix = request.NameSuffix;
            emp.NationalId = request.NationalId;
            emp.NationalIdCountry = request.NationalIdCountry;

            context.SaveChanges();

            return emp;
        }
    }
}
