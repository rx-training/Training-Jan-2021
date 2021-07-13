using Microsoft.AspNetCore.Mvc;
using Swiggy.Models;
using Swiggy.Models.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Swiggy.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RestaurantController : ControllerBase
    {

        private readonly Swiggy_ProjectContext context;
        IRestaurant Restaurant;
        public RestaurantController(IRestaurant custo, Swiggy_ProjectContext _context)
        {
            this.Restaurant = custo;
            this.context = _context;
        }
        [HttpGet]
        public IEnumerable<Restaurant> GetRestorents()
        {
            return Restaurant.GetAll();
        }

        [HttpPost]
        public string creates([FromBody] Restaurant addUser)
        {

            Restaurant checkuser = context.Restaurants.FirstOrDefault(s => s.RestaurantName == addUser.RestaurantName && s.RestaurantCity == addUser.RestaurantCity);
            if (checkuser != null)
                
                return "User is already exists...";
            else
            {
                Restaurant.Create(addUser);
                Restaurant addedUser = context.Restaurants.ToList().Last();
                return $"Restaurant {addedUser.RestaurantName} is added successfully and your id is {addedUser.RestaurantCity}";
            }
        }

        [HttpGet("{id}")]
        public ActionResult<Restaurant> GetRestorents(int id)
        {
            var restorent = Restaurant.GetById(id);

            if (restorent == null)
            {
                return NotFound();
            }
            return restorent;
        }
        [HttpDelete("{id}")]
        public IActionResult DeleteUserSignup(int id)
        {
            var restaurant = Restaurant.GetById(id);
            if (restaurant == null)
            {
                return NotFound();
            }

            Restaurant.Delete(restaurant);

            return NoContent();
        }

        //Put

        [HttpPut("{id}")]
        public ActionResult<Restaurant> PutRestorent(int id, Restaurant restaurant)
        {
            try
            {
                Restaurant.Update(restaurant);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
            return GetRestorents(id);

        }
    }
}
