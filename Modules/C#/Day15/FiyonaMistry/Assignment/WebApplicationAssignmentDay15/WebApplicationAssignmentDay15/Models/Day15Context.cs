using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplicationAssignmentDay15.Models
{
    public class Day15Context : DbContext
    {
        public Day15Context()
        {

        }

        public Day15Context(DbContextOptions<Day15Context> contextOptions) : base(contextOptions)
        {

        }

        public DbSet<Employees> Employee { get; set; }
        public DbSet<Assignments> Assignments { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=DESKTOP-G7G6FSU\SQLEXPRESS;Database=Day15;Trusted_Connection=True;");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

        }
    }
}
