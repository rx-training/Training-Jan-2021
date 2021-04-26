using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace FluentAPIPractice.Models
{
    class School : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Data Source=DESKTOP-J0O4MON\\SQLEXPRESS;Database=School;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False");
        }

        public DbSet<Student> Students { get; set; }
        public DbSet<StudentDetail> StudentDetails { get; set; }
        public DbSet<Course> Courses { get; set; }
        public DbSet<Grades> Grades { get; set; }
        public DbSet<GetAllNameAndEmail> getAllNameAndEmails { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // specific column properties
            modelBuilder.Entity<Student>()
                        .Property(x => x.Id)
                        .HasColumnName("StudentId")
                        .HasDefaultValue("0")
                        .IsRequired();

            // index constrain with unique-index
            modelBuilder.Entity<Student>()
                        .HasIndex(x => x.Email) // column of key
                        .IsUnique() // for unique key
                        .HasDatabaseName("Index_Email_Students"); // custom name in DB

            // one-to-one relationship
            modelBuilder.Entity<StudentDetail>()
                        .HasOne<Student>(x => x.Student)
                        .WithOne(x => x.StudentDetails)
                        .HasForeignKey<StudentDetail>(x => x.StudentId);

            //composite key
            modelBuilder.Entity<StudentCourse>().HasKey(sc => new { sc.SId, sc.CId });

            //one-to-many rel. with custom key column name
            modelBuilder.Entity<StudentCourse>()
                .HasOne<Student>(sc => sc.Student)
                .WithMany(s => s.StudentCourses)
                .HasForeignKey(sc => sc.SId);

            //one-to-many rel. with custom key column name
            modelBuilder.Entity<StudentCourse>()
                .HasOne<Course>(sc => sc.Course)
                .WithMany(s => s.StudentCourses)
                .HasForeignKey(sc => sc.CId);

            modelBuilder.Entity<Grades>()
                        .HasNoKey();
        }
    }
}
