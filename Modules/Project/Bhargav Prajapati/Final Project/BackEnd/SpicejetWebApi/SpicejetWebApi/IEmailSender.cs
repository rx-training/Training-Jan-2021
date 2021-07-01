using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpicejetWebApi
{
    public interface IEmailSender
    {
        void sendMessage(Message message);
    }
}
