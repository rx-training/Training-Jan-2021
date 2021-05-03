using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment.Models
{
    public class empAssignmentContext : DbContext
    {
        public empAssignmentContext(DbContextOptions<empAssignmentContext> options) : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionBuilder)
        {
            optionBuilder.UseSqlServer(@"Data Source=DESKTOP-6QD72V0;Initial Catalog=Day15Employees;Integrated Security=True");
        }
        public DbSet<employees> employees { get; set; }
        public DbSet<emp_assignment> empAssignment { get; set; }
        public DbSet<EmpAssigned> empAssigned { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<EmpAssigned>().HasKey(a => new { a.AssignmentId, a.EmployeeId });
        }
    }
}
