using Microsoft.EntityFrameworkCore;
using Practice_Exercise.Modals;
using System;
using System.Collections.Generic;
using System.Text;

namespace Practice_Exercise
{
    class SchoolContext:DbContext
    {


        public DbSet<Student> Students { get; set; }
        public DbSet<Grade> Grades { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Data Source=DESKTOP-P3KPE28\MSSQLSERVER02;Initial Catalog=SchoolDB;Integrated Security=True");
            
        
        }
        
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // One TO Many RelationShip
            modelBuilder.Entity<Student>()
               .HasOne<Grade>(g => g.Grade)
               .WithMany(s=>s.Students)
               .HasForeignKey(s=>s.Gradeofid);

            //One To One RelationShip
            modelBuilder.Entity<Student>()
                .HasOne(a => a.Address)
                .WithOne(a => a.Student)
                .HasForeignKey<Address>(a => a.AddressOfId);

            //Many TO Many Relationship

            modelBuilder.Entity<CourseStudent>().HasKey(sc => new {sc.CourseId,sc.StudentId });

            modelBuilder.Entity<CourseStudent>()
            .HasOne<Student>(sc => sc.Student)
            .WithMany(sc=>sc.CourseStudents)
            .HasForeignKey(sc=>sc.StudentId);

            modelBuilder.Entity<CourseStudent>()
                .HasOne<course>(sc => sc.Course)
                .WithMany(sc => sc.CourseStudents)
                .HasForeignKey(sc => sc.CourseId);
            
        }
    }
}
