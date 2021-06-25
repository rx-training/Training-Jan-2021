using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NaukriProject.Authentication
{
    public class Response
    {
        // for returning the response value after user registration and user login

        public string Status { get; set; }
        public string Message { get; set; }
        public object Data { get; set; }

    }
}
