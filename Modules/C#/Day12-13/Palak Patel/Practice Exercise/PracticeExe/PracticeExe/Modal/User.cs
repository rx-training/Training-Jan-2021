using System;
using System.Collections.Generic;
using System.Text;
using System.ComponentModel.DataAnnotations;

namespace PracticeExe.Modal
{
    class User
    {
        [Key]
        public string UserName { get; set; }
        public string DisplayName { get; set; }
    }
}
