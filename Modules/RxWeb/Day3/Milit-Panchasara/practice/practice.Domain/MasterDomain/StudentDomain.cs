using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RxWeb.Core;
using practice.UnitOfWork.Main;
using practice.Models.Main;

namespace practice.Domain.MasterModule
{
    public class StudentDomain : IStudentDomain
    {
        public StudentDomain(IMasterUow uow) {
            this.Uow = uow;
        }

        public Task<object> GetAsync(Student parameters)
        {
            var list = (object)Uow.Repository<Student>().AllInclude();
            return Task.FromResult(list);
        }

        public Task<object> GetBy(Student parameters)
        {
            var list = (object)Uow.Repository<Student>().SingleOrDefault(x => x.StudentId == parameters.StudentId);
            return Task.FromResult(list);
        }
        

        public HashSet<string> AddValidation(Student entity)
        {
            return ValidationMessages;
        }

        public async Task AddAsync(Student entity)
        {
            await Uow.RegisterNewAsync(entity);
            await Uow.CommitAsync();
        }

        public HashSet<string> UpdateValidation(Student entity)
        {
            return ValidationMessages;
        }

        public async Task UpdateAsync(Student entity)
        {
            await Uow.RegisterDirtyAsync(entity);
            await Uow.CommitAsync();
        }

		//public Student PatchEntity(int id)
  //      {
  //          throw new NotImplementedException();
  //      }

        public HashSet<string> DeleteValidation(Student parameters)
        {
            return ValidationMessages;
        }

        public Task DeleteAsync(Student parameters)
        {
            var user = Uow.Repository<Student>().FirstOrDefault(p => p.StudentId == parameters.StudentId);
            Uow.RegisterDeletedAsync(user);
            return Uow.CommitAsync();
        }

        public IMasterUow Uow { get; set; }

        private HashSet<string> ValidationMessages { get; set; } = new HashSet<string>();
    }

    public interface IStudentDomain : ICoreDomain<Student, Student> { }
}
