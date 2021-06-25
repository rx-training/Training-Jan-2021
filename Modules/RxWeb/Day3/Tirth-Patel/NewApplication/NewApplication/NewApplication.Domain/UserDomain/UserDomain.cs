using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RxWeb.Core;
using NewApplication.UnitOfWork.Main;
using NewApplication.Models.Main;
using RxWeb.Core.Security.Cryptography;

namespace NewApplication.Domain.UserModule
{
    public class UserDomain : IUserDomain
    {
        private IPasswordHash PasswordHash { get; set; }
        public UserDomain(ILoginUow uow, IPasswordHash passwordHash)
        {
            this.Uow = uow;
            this.PasswordHash = passwordHash;
        }
        public UserDomain(ILoginUow uow) {
            this.Uow = uow;
        }

        
       
        public HashSet<User> AddValidation(User entity)
        {
            return ValidationMessages;
        }
        public async Task AddAsync(User entity)
        {
            PasswordResult result = PasswordHash.Encrypt(entity.UserPassword);
            entity.Password = result.Signature;
            entity.Salt = result.Salt;
            await Uow.RegisterNewAsync(entity);
            await Uow.CommitAsync();
        }
        public HashSet<User> UpdateValidation(User entity)
        {
            return ValidationMessages;
        }
        public async Task UpdateAsync(User entity)
        {
            PasswordResult result = PasswordHash.Encrypt(entity.UserPassword);
            entity.Password = result.Signature;
            entity.Salt = result.Salt;
            await Uow.RegisterDirtyAsync(entity);
            await Uow.CommitAsync();
        }
        public HashSet<User> DeleteValidation(User parameters)
        {
            return ValidationMessages;
        }
        public Task DeleteAsync(User parameters)
        {
            User user =Uow.Repository<User>().FirstOrDefault(p => p.UserId == parameters.UserId);
            Uow.RegisterDeletedAsync(user);
            return Uow.CommitAsync();
        }

        Task<object> ICoreDomain<User, User>.GetAsync(User parameters)
        {
            var userList = (object)Uow.Repository<User>().AllInclude(p => p.UserRoles);
            return Task.FromResult(userList);
        }

        Task<object> ICoreDomain<User, User>.GetBy(User parameters)
        {
            var userList = (object)this.Uow.Repository<User>().SingleOrDefault(m => m.UserId == parameters.UserId);
            return Task.FromResult(userList);
        }

        HashSet<string> ICoreDomain<User, User>.AddValidation(User entity)
        {
            throw new NotImplementedException();
        }

        HashSet<string> ICoreDomain<User, User>.UpdateValidation(User entity)
        {
            throw new NotImplementedException();
        }

        HashSet<string> ICoreDomain<User, User>.DeleteValidation(User parameters)
        {
            throw new NotImplementedException();
        }

        public ILoginUow Uow { get; set; }
        private HashSet<User> ValidationMessages { get; set; } = new HashSet<User>();
    }
    public interface IUserDomain : ICoreDomain<User,User> { }
}
