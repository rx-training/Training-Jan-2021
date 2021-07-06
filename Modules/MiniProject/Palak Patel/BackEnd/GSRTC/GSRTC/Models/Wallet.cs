using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace GSRTC.Models
{
    public class Wallet
    {
        [Key]
        public string WalletID { get; set; }
        public string Name { get; set; }
        public int MobileNo { get; set; }
        public string Email { get; set; }
        public DateTime DOB { get; set; }
    }
}
