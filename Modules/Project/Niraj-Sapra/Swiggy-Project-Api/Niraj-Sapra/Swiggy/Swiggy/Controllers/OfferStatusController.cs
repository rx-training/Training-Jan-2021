﻿using Microsoft.AspNetCore.Mvc;
using Swiggy.Models;
using Swiggy.Models.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Swiggy.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OfferStatusController : ControllerBase
    {
        private readonly Swiggy_ProjectContext context;
        IOfferStatus Category;
        public OfferStatusController(IOfferStatus custo, Swiggy_ProjectContext _context)
        {
            this.Category = custo;
            this.context = _context;
        }

        [HttpGet]
        public IEnumerable<Models.OfferStatus> AddNewDataMethod()
        {
            return Category.GetAll();
        }

/*
        [HttpPost]
        public string creates([FromBody] Category obEntity)
        {

            Category check = context.Categories.FirstOrDefault(s => s.CategoryName == obEntity.CategoryName);
            if (check != null)
                //new Exception("Create is already exists...");
                return "Customer is already exists...";
            else
            {
                Category.Create(obEntity);
                Category ObjEntity = context.Categories.ToList().Last();
                return $"Category {ObjEntity.CategoryName} is added successfully and your id is {ObjEntity}";
            }
        }
*/

        // DELETE: api/Cosutomer/5
        [HttpDelete("{id}")]
        public string Deletes([FromBody] int id)
        {
            try
            {
                var dataDelete = context.OfferStatuses.Single(s => s.OfferStatusId == id);
                Category.Delete(dataDelete);
                return "Offer Status is remove successfully";
            }
            catch (Exception)
            {
                return $"Offer Status is not found...";
            }
        }
    }
}
