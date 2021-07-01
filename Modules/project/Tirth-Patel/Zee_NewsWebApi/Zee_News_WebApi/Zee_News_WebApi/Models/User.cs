using System;
using System.Collections.Generic;

#nullable disable

namespace Zee_News_WebApi.Models
{
    public partial class User
    {
        public string UserId { get; set; }
        public string Password { get; set; }
        

        //user has 2 roles
   
        public virtual Admin Admin { get; set; }
        public virtual Viewers1 Viewers1 { get; set; }
    }
}
