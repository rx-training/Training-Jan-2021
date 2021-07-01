using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RxWeb.Core;
using practice.UnitOfWork.Main;
using practice.Models.Main;
using MimeKit;
using MimeKit.Text;
using MailKit.Security;
using MailKit.Net.Smtp;
using Microsoft.Extensions.Configuration;

namespace practice.Domain.MasterModule
{
    public class StudentDomain : IStudentDomain
    {
        public StudentDomain(IMasterUow uow, IConfiguration configuration) {
            this.Uow = uow;
            this.configuration = configuration;
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
            MimeMessage message = new MimeMessage();

            // sender email conf.
            MailboxAddress from = new MailboxAddress("Day4Practice",
            configuration["MailSettings:Mail"]);
            message.From.Add(from);

            // reciever(user) email conf.
            MailboxAddress to = new MailboxAddress("User",
            entity.EmailId);
            message.To.Add(to);

            message.Subject = "Registration notification";

            BodyBuilder bodyBuilder = new BodyBuilder();
            bodyBuilder.HtmlBody = "<h1>Greetings!</h1>";
            bodyBuilder.HtmlBody += "<p> You have been registered successfully.</p>";

            message.Body = bodyBuilder.ToMessageBody();

            // smtp client cofig.
            SmtpClient client = new SmtpClient();
            client.Connect(configuration["MailSettings:Host"], Convert.ToInt32(configuration["MailSettings:Port"]), true);
            client.Authenticate(configuration["MailSettings:UserName"], configuration["MailSettings:Password"]);

            // sending mail
            client.Send(message);
            client.Disconnect(true);
            client.Dispose();
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

        private readonly IConfiguration configuration;

        private HashSet<string> ValidationMessages { get; set; } = new HashSet<string>();
    }

    public interface IStudentDomain : ICoreDomain<Student, Student> { }
}
