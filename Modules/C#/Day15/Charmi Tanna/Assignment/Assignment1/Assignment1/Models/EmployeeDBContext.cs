using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment1.Models
{
    public class EmployeeDBContext : DbContext
    {
        
        public EmployeeDBContext(DbContextOptions<EmployeeDBContext> dbContextOptions) : base(dbContextOptions)
        {
            
        }
        
        public DbSet<Employees> Employees { get; set; }
        public DbSet<Assignments> Assignments { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Data Source=LAPTOP-N1UDT3G5;Initial Catalog=EmployeeAssignment;Integrated Security=True;Pooling=False");
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            
        }
    }
}
