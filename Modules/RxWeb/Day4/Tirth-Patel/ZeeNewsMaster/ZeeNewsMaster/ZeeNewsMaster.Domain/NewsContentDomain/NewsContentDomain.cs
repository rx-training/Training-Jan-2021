using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RxWeb.Core;
using ZeeNewsMaster.UnitOfWork.Main;
using ZeeNewsMaster.Models.Main;
using System.Net.Mail;
using System.Linq;
using System.Net;

namespace ZeeNewsMaster.Domain.NewContentModule
{
    public class NewsContentDomain : INewsContentDomain
    {
        public NewsContentDomain(IMasterUow uow)
        {
            this.Uow = uow;

        }

        public Task<object> GetAsync(NewsContent parameters)
        {
            var list = (object)Uow.Repository<NewsContent>().AllInclude();
            sendEmailViaWebApi();
            return Task.FromResult(list);
        }

        public Task<object> GetBy(NewsContent id)
        {
            var News = (object)Uow.Repository<NewsContent>().SingleOrDefault(p => p.ContentId == id.ContentId);
            return Task.FromResult(News);
        }


        public HashSet<string> AddValidation(NewsContent entity)
        {
            return ValidationMessages;
        }

        public async Task AddAsync(NewsContent entity)
        {
            var News = (object)Uow.Repository<NewsContent>().SingleOrDefault(p => p.ContentId == entity.ContentId);
            if (News == null)
            {
                await Uow.RegisterNewAsync(entity);
                await Uow.CommitAsync();
            }

        }
        private void sendEmailViaWebApi()
        {
            //string subject = "Email Subject";
            //string body = "Email body";
            //string FromMail = "tirth123456789patel@gmail.com";


            //string emailTo = "tirthp418@gmail.com";
            //MailMessage mail = new MailMessage();
            //SmtpClient SmtpServer = new SmtpClient("SmtpServer.gmail.com");
            //mail.From = new MailAddress(FromMail);
            //mail.To.Add(emailTo);
            //mail.Subject = subject;
            //mail.Body = body;
            //SmtpServer.Port = 587;
            //SmtpServer.UseDefaultCredentials = true;
            //SmtpServer.EnableSsl = true;
            //SmtpServer.Credentials = new NetworkCredential("tirth123456789patel@gmail.com", "nicebabyu");
            //SmtpServer.Send(mail);
            var client = new SmtpClient("smtp.gmail.com", 587)
          
            {
                
                Credentials = new NetworkCredential("tirth123456789patel@gmail.com", "nicebabyu"),
              
                EnableSsl = true
            };
            client.Send("tirth123456789patel@gmail.com", "tirth123456789patel@gmail.com", "test", "testbody");
            Console.WriteLine("Sent");
            Console.ReadLine();

           
        }
        public HashSet<string> UpdateValidation(NewsContent entity)
        {
            return ValidationMessages;
        }

        public async Task UpdateAsync(NewsContent entity)
        {
            var News = (object)Uow.Repository<NewsContent>().SingleOrDefault(p => p.ContentId == entity.ContentId);
            if (News != null)
            {
                await Uow.RegisterDirtyAsync(entity);
                await Uow.CommitAsync();
            }
        }

        public NewsContent PatchEntity(int id)
        {
            throw new NotImplementedException();
        }

        public HashSet<string> DeleteValidation(NewsContent parameters)
        {
            return ValidationMessages;
        }

        public Task DeleteAsync(int id)
        {
            var News = (object)Uow.Repository<NewsContent>().SingleOrDefault(p => p.ContentId == id);
            Uow.RegisterDeletedAsync(News);
            return Uow.CommitAsync();
        }

       

        public Task DeleteAsync(NewsContent parameters)
        {
            var News = (object)Uow.Repository<NewsContent>().SingleOrDefault(p => p.ContentId == parameters.ContentId);
            Uow.RegisterDeletedAsync(News);
            return Uow.CommitAsync();
        }

        public IMasterUow Uow { get; set; }

        private HashSet<string> ValidationMessages { get; set; } = new HashSet<string>();
    }

    public interface INewsContentDomain : ICoreDomain<NewsContent, NewsContent> { }
}
