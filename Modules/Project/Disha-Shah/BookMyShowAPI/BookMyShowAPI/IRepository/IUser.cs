using BookMyShowAPI.Authentication;
using BookMyShowAPI.Models;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookMyShowAPI.IRepository
{
    public interface IUser : IGenericInterface<ApplicationUser>
    {
        Task<IdentityResult> RegisterUser(RegisterModel model);
        Task<string> LoginUser(string userName);
        public void CreateUser(RegisterModel model);
        public User FindName(string name);
        public User FindContact(string contact);
        Task<Response> ConfirmEmailAsync(string userId, string token);
        Task<bool> IsEmailConfirmedAsync(string userName);
        public IEnumerable GetAllUsers();
    }
}
