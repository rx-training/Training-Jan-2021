using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment.Models
{
    public class EmployeeAssignmentContext :DbContext
    {
        public EmployeeAssignmentContext(DbContextOptions<EmployeeAssignmentContext> options) : base(options)
        {

        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=DESKTOP-P3KPE28\MSSQLSERVER02;Database=EmployeeDb;Trusted_Connection=True;");
        }

        public DbSet<Employees> Employees { get; set; }
        public DbSet<Assignments> Assignments { get; set; }
    }
}
