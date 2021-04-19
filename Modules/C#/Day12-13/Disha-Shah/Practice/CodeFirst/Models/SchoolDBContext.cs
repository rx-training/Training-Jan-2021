using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;

namespace CodeFirst.Models
{
    public class SchoolDBContext : DbContext
    {
        public SchoolDBContext()
        {
        }

        public SchoolDBContext(DbContextOptions<SchoolDBContext> options)
            : base(options)
        {
        }

        // Convention1 (One to Many) & Convention2 (One to Many) & Convention3 (One to Many)
        public DbSet<Student> Students { get; set; }
        public DbSet<Course> Courses { get; set; }
        public DbSet<StudentAddress> StudentAddresses { get; set; }
        public DbSet<Teacher> Teachers { get; set; }
        public DbSet<Grade> Grades { get; set; }
        public DbSet<TeacherAddress> TeacherAddresses { get; set; }
        public DbSet<StudentCourse> StudentCourses { get; set; }
        public DbSet<Worker> Workers { get; set; }

        // Convention4 (One to Many)
        //public DbSet<Student> Students { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=LAPTOP-NLRDC1FB\SQLEXPRESS01;Database=SchoolDB;Trusted_Connection=True;");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            //Configure default schema
            //modelBuilder.HasDefaultSchema("School");

            //Map entity to table
            modelBuilder.Entity<Worker>().ToTable("WorkersTbl");

            //Write Fluent API configurations here

            //Property Configurations
            modelBuilder.Entity<Student>()
                    .Property(s => s.Name)
                    .HasColumnName("StudName")
                    .HasDefaultValue("")
                    .IsRequired();

            // One To Many
            modelBuilder.Entity<Student>()
                    .HasOne<Grade>(s => s.Grade)
                    .WithMany(g => g.Students)
                    .HasForeignKey(s => s.CurrentGradeId)
                    .HasConstraintName("Students_Grades_FK")
                    .OnDelete(DeleteBehavior.Cascade);

            // One to One
            modelBuilder.Entity<Teacher>()
                    .HasOne<TeacherAddress>(s => s.Address)
                    .WithOne(ad => ad.Teacher)
                    .HasForeignKey<TeacherAddress>(ad => ad.AddressOfTeacherId);

            // Many to Many 

            // Composite Primary key
            modelBuilder.Entity<StudentCourse>()
                    .HasKey(sc => new { sc.StudentId, sc.CourseId });

            modelBuilder.Entity<StudentCourse>()
                    .HasOne<Student>(sc => sc.Student)
                    .WithMany(s => s.StudentCourses)
                    .HasConstraintName("StudentCourse_Students_FK")
                    .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<StudentCourse>()
                    .HasOne<Course>(sc => sc.Course)
                    .WithMany(s => s.StudentCourses)
                    .HasConstraintName("StudentCourse_Courses_FK")
                    .OnDelete(DeleteBehavior.Cascade);
                   
        }
    }
}
