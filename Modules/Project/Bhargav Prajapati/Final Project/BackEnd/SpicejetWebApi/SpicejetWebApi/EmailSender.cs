using MimeKit;
using MailKit.Net.Smtp;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpicejetWebApi
{
    public class EmailSender : IEmailSender
    {
        private readonly EmailClass email;
        public EmailSender(EmailClass email)
        {
            this.email = email;
        }
        public void sendMessage(Message message)
        {
            var emailmessage = CreateEmailMessage(message);

            Send(emailmessage);
        }
        private MimeMessage CreateEmailMessage(Message message)
        {
            var emailmessage = new MimeMessage();
            emailmessage.From.Add(new MailboxAddress(email.From));
            emailmessage.To.AddRange(message.To);
            emailmessage.Subject = message.Subject;
            emailmessage.Body = new TextPart(MimeKit.Text.TextFormat.Html)
            {
                Text = string.Format("<div>{0}</div>", message.Content)
            };
            return emailmessage;
        }
        private void Send(MimeMessage message)
        {
            using (var client = new SmtpClient())
            {
                try
                {
                    client.Connect(email.SmtpServer, email.Port, true);
                    client.AuthenticationMechanisms.Remove("XOAUTH2");
                    client.Authenticate(email.UserName, email.Password);
                    client.Send(message);
                }
                catch
                {
                    throw;
                }
                finally
                {
                    client.Disconnect(true);
                    client.Dispose();
                }
            }
        }
    }
}
