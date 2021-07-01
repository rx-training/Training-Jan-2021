using System;
using System.Collections.Generic;

#nullable disable

namespace Zee_News_WebApi.Models
{
    public partial class UsersHistory
    {
        public string UserId { get; set; }
        public string Name { get; set; }
        public decimal? MobileNo { get; set; }
        public string City { get; set; }
    }
}
