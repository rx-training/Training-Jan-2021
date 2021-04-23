using Microsoft.EntityFrameworkCore;
using OneToMany.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace OneToMany
{
    class SchoolDbContext : DbContext
    {
        public DbSet<Grade> Grades { get; set; }
        public DbSet<Student> Students { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Data Source=LAPTOP-N1UDT3G5;Initial Catalog=Temp1;Integrated Security=True;Pooling=False");
        }
        
    }
}

