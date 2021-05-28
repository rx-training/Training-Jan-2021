using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using EFPractice_Day12.Models;
using Microsoft.EntityFrameworkCore;

namespace EFPractice_Day12
{
    public class CollegeContext : DbContext
    {
        public DbSet<Student> Students { get; set; }
        public DbSet<Course> Courses { get; set; }
        public DbSet<StudentCourse> StudentCourses { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=DESKTOP-G7G6FSU\SQLEXPRESS;Database=Day12;Trusted_Connection=True;");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //modelBuilder.Entity<Student>()
            //   .Property(s => s.StudentId)
            //   .HasColumnName("Id")
            //   .HasDefaultValue(0)
            //   .IsRequired();

            // for one-to-many
            //modelBuilder.Entity<Student>()
            //    .HasOne<Course>(s => s.Course)
            //    .WithMany(g => g.Students)
            //    .HasForeignKey(s => s.StudentId);

            modelBuilder.Entity<StudentCourse>().HasKey(sc => new { sc.StudentId, sc.CourseId });
        }
    }
}
