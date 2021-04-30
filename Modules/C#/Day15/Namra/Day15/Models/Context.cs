using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;

namespace Day15.Models
{
    public class Context : DbContext
    {
        public DbSet<Assignment> Assignments { get; set; }
        public DbSet<Employee> Employees { get; set; }
        public Context(DbContextOptions<Context> options) : base(options)
        {
        
        }
        public Context()
        {

        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=.\SQLEXPRESS01;Database=Day15WebAPI;Trusted_Connection=True;");
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Assignment>()
                .HasKey(s => s.AssignmentId);
            modelBuilder.Entity<Employee>()
                .HasKey(s => s.EmployeeId);

            modelBuilder.Entity<Employee>()
                .HasMany<Assignment>(s => s.Assignments)
                .WithOne(s => s.Employee);

            modelBuilder.Entity<Assignment>()
                .HasOne<Employee>(d => d.Employee)
                .WithMany(s => s.Assignments)
                .HasForeignKey(s => s.EmployeeId);

            modelBuilder.Entity<Assignment>()
                .HasOne<Employee>(d => d.Employee)
                .WithMany(s => s.Assignments)
                .HasForeignKey(s => s.ManagerId);
        }
    }
}
