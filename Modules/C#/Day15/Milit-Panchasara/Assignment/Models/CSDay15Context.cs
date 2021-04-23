using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment1.Models
{
    public class CSDay15Context : DbContext
    {
        public CSDay15Context(DbContextOptions<CSDay15Context> options): base(options)
        { }
        public DbSet<Employee> Employees { get; set; }
        public DbSet<Assignment> Assignments { get; set; }
        public DbSet<AssignedWork> AssignedWorks { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<AssignedWork>()
                        .HasKey(k => new { k.EmployeeId, k.AssignmentId });
        }
    }
}
