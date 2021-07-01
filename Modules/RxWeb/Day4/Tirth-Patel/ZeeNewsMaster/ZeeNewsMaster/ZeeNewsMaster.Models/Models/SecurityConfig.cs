using System.Collections.Generic;

namespace ZeeNewsMaster.Models
{
    public class SecurityConfig
    {
        public string[] AllowedHosts { get; set; }

        public string[] AllowedIps { get; set; }
    }
}

