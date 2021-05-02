using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UberAPI.Models.Auth;

namespace UberAPI.Code.Interfaces
{
    public interface IUserRepo : IGenericRepo<AppUser>
    {
        Task<IdentityResult> CreateUser(Register request, string role);
        Task<string> GetToken(AppUser user);
        Task<string> LoginUser(string id);
        Task<string> SendEmail(string id);
        Task<bool> confirmToken(string userId, string token);
        bool VerifyContactNumber(string userId);
    }
}
