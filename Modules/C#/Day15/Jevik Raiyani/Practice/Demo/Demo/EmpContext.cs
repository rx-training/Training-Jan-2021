using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Demo
{
    public class EmpContext : DbContext
    {
        public EmpContext()
        {
        }

        public EmpContext(DbContextOptions<EmpContext> options)
            : base(options)
        {
        }
        public DbSet<Emps> Emps { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Data Source=JEVIK\SQLEXPRESS;Initial Catalog=Emp;Integrated Security=True;");
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Emps>()
                .HasKey(s=>s.EmpId);
           
        }


    }
}
