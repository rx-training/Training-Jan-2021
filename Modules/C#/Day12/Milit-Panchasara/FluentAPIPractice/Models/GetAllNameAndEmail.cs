using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace FluentAPIPractice.Models
{
    [Keyless]
    class GetAllNameAndEmail
    {
        public string Name { get; set; }
        public string Email { get; set; }
    }
}
