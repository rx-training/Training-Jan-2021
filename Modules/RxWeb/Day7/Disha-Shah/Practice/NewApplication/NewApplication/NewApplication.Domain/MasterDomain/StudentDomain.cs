using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RxWeb.Core;
using NewApplication.UnitOfWork.Main;
using NewApplication.Models.Main;

namespace NewApplication.Domain.MasterModule
{
    public class StudentDomain : IStudentDomain
    {
        public StudentDomain(IMasterUow uow) {
            this.Uow = uow;
        }

        public Task<object> GetAsync(Student parameters)
        {
            var studentsList = (object)Uow.Repository<Student>().FindBy(p => p.CourseId == parameters.CourseId);
            return Task.FromResult(studentsList);
        }

        public Task<object> GetBy(Student parameters)
        {
            var studentsList = (object)Uow.Repository<Student>().FindBy(p => p.CourseId == parameters.CourseId && p.StudentId== parameters.StudentId);
            return Task.FromResult(studentsList);
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

		public Student PatchEntity(int id)
        {
            throw new NotImplementedException();
        }

        public HashSet<string> DeleteValidation(Student parameters)
        {
            return ValidationMessages;
        }

        public Task DeleteAsync(Student parameters)
        {
            throw new NotImplementedException();
        }

        public IMasterUow Uow { get; set; }

        private HashSet<string> ValidationMessages { get; set; } = new HashSet<string>();
    }

    public interface IStudentDomain : ICoreDomain<Student, Student> { }
}
