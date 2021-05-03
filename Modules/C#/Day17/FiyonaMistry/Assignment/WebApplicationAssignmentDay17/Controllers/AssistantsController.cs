using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualStudio.Services.UserAccountMapping;
using WebApplicationAssignmentDay17.Authentication;
using WebApplicationAssignmentDay17.Models;
using WebApplicationAssignmentDay17.Models.IRepository;

namespace WebApplicationAssignmentDay17.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AssistantsController : ControllerBase
    {
        // Only Admin, Assistant and Doctor login can view data, and only Admin login can do CUD operations

        IAssistant assistant;

        public AssistantsController(IAssistant assistant)
        {
            this.assistant = assistant;
        }

        [Authorize(Roles = UserRoles.Assistant + ", " + UserRoles.Doctor + ", " + UserRoles.Admin)]
        [HttpGet]
        public IEnumerable<Assistant> GetAssistants()
        {
            return assistant.GetAll();
        }

        [Authorize(Roles = UserRoles.Assistant + ", " + UserRoles.Doctor + ", " + UserRoles.Admin)]
        [HttpGet("{id}")]
        public Assistant GetAssistant(int id)
        {
            return assistant.GetById(id);
        }

        [Authorize(Roles = UserRoles.Admin)]
        [HttpPost]
        public void PostAssistants(Assistant assis)
        {
            assistant.Create(assis);
        }

        [Authorize(Roles = UserRoles.Admin)]
        [HttpPut("{id}")]
        public void PutAssistants(int id, Assistant assis)
        {
            assistant.Update(id, assis);
        }

        [Authorize(Roles = UserRoles.Admin)]
        [HttpDelete("{id}")]
        public void DeleteAssistants(int id)
        {
            assistant.Delete(id);
        }
    }
}
