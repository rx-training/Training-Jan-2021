using BookMyShowAPI.Authentication;
using BookMyShowAPI.Models;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookMyShowAPI.IRepository
{
    public interface IAdmin
    {
        Task<IdentityResult> RegisterAdmin(RegisterModel model);
        Task<string> LoginAdmin(string userName);
        public void CreateAdmin(RegisterModel model);
        public Admin FindName(string name);
    }
}
