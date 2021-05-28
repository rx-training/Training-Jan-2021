﻿using BookMyShowAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookMyShowAPI.IRepository
{
    public interface IMailService
    {
        Task SendEmailAsync(MailRequest mailRequest);
    }
}
