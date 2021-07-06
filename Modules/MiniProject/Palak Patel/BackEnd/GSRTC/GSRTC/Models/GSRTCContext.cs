using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GSRTC.Models
{
    public class GSRTCContext : DbContext
    {
        public GSRTCContext(DbContextOptions<GSRTCContext> options):base(options){ }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Data Source=DESKTOP-6QD72V0;Initial Catalog=GSRTC;Integrated Security=True");
        }

        public DbSet<Agent> Agents { get; set; }
        public DbSet<Bus> Buses { get; set; }
        public DbSet<CommuterPass> CommuterPasses { get; set; }
        public DbSet<Division> Divisions { get; set; }
        public DbSet<Enquiry> Enquiries { get; set; }
        public DbSet<Route> Routes { get; set; }
        public DbSet<TicketBooking> Bookings { get; set; }
        public DbSet<Wallet> Wallets { get; set; }
    }
}
