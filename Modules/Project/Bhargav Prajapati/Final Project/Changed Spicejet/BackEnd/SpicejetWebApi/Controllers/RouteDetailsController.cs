using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SpicejetWebApi.Authentication;
using SpicejetWebApi.IRepository;
using SpicejetWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpicejetWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RouteDetailsController : ControllerBase
    {
        private readonly IRouteDetailsRepository repository;
        public RouteDetailsController(IRouteDetailsRepository repository)
        {
            this.repository = repository;
        }
        [Authorize(Roles = SpicejetUserRoles.Admin)]
        [HttpGet]
        public ActionResult GetAllRoute()
        {
            try
            {
                return Ok(repository.GetAllRoute());
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }
        [Authorize(Roles = SpicejetUserRoles.Admin)]
        [HttpGet("{RouteId}")]
        public ActionResult GetRouteById(int RouteId)
        {
            try
            {
                return Ok(repository.GetRouteDetailsById(RouteId));
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }
        [Authorize(Roles = SpicejetUserRoles.Admin)]
        [HttpPost]
        public ActionResult InsertRoute(RouteDetail route)
        {
            try
            {
                repository.InsertRoute(route);
                return Ok("Route is Inserted Successfully");
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }
        [Authorize(Roles = SpicejetUserRoles.Admin)]
        [HttpPut("{RouteId}")]
        public ActionResult UpdateRoute(int RouteId, RouteDetail route)
        {
            try
            {
                repository.UpdateRoute(route,RouteId);
                return Ok("Route is Updated Successfully");
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }
        [Authorize(Roles = SpicejetUserRoles.Admin)]
        [HttpDelete("{RouteId}")]
        public ActionResult DeleteRoute(int RouteId)
        {
            try
            {
                repository.DeleteRoute(RouteId);
                return Ok("Route is Deleted Successfully");
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }

    }
}
