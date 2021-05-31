using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace Student.Models
{
    public partial class angularContext : DbContext
    {
        public angularContext()
        {
        }

        public angularContext(DbContextOptions<angularContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Student> Students { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
//#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Data Source=DESKTOP-B3UT0RK\\SQLEXPRESS;Initial Catalog=angular;Integrated Security=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Student>(entity =>
            {
                entity.HasKey(e => e.Id);

                entity.Property(e => e.AddressCity).HasMaxLength(50);

                entity.Property(e => e.AddressCountry).HasMaxLength(50);

                entity.Property(e => e.AddressPin).HasMaxLength(50);

                entity.Property(e => e.AddressState).HasMaxLength(50);

                entity.Property(e => e.Dob)
                    .HasColumnType("date")
                    .HasColumnName("DOB");

                entity.Property(e => e.EemergencyRelation).HasMaxLength(50);

                entity.Property(e => e.EemergencyRelation1).HasMaxLength(50);

                entity.Property(e => e.EmergencyNumber).HasMaxLength(50);

                entity.Property(e => e.EmergencyNumber1).HasMaxLength(50);

                entity.Property(e => e.EmergencyNumber2).HasMaxLength(50);

                entity.Property(e => e.EmergencyRelation2).HasMaxLength(50);

                entity.Property(e => e.FatherDesignation).HasMaxLength(50);

                entity.Property(e => e.FatherEducationQualification).HasMaxLength(50);

                entity.Property(e => e.FatherEmail).HasMaxLength(50);

                entity.Property(e => e.FatherFirstname).HasMaxLength(50);

                entity.Property(e => e.FatherLastname).HasMaxLength(50);

                entity.Property(e => e.FatherMiddlename).HasMaxLength(50);

                entity.Property(e => e.FatherPhone).HasMaxLength(50);

                entity.Property(e => e.FatherProfession).HasMaxLength(50);

                entity.Property(e => e.FirstLanguage).HasMaxLength(50);

                entity.Property(e => e.FirstName).HasMaxLength(50);

                entity.Property(e => e.Id).ValueGeneratedOnAdd();

                entity.Property(e => e.LastName).HasMaxLength(50);

                entity.Property(e => e.MiddleName).HasMaxLength(50);

                entity.Property(e => e.MotherDesigation).HasMaxLength(50);

                entity.Property(e => e.MotherEducationQualification).HasMaxLength(50);

                entity.Property(e => e.MotherEmail).HasMaxLength(50);

                entity.Property(e => e.MotherFirstname).HasMaxLength(50);

                entity.Property(e => e.MotherLastname).HasMaxLength(50);

                entity.Property(e => e.MotherMiddlename).HasMaxLength(50);

                entity.Property(e => e.MotherPhone).HasMaxLength(50);

                entity.Property(e => e.MotherProfession).HasMaxLength(50);

                entity.Property(e => e.PlaceOfBirth).HasMaxLength(50);

                entity.Property(e => e.Rcity)
                    .HasMaxLength(50)
                    .HasColumnName("RCity");

                entity.Property(e => e.Rcountry)
                    .HasMaxLength(50)
                    .HasColumnName("RCountry");

                entity.Property(e => e.ReferenceDetail).HasMaxLength(50);

                entity.Property(e => e.ReferenceThrough).HasMaxLength(50);

                entity.Property(e => e.Rpin)
                    .HasMaxLength(50)
                    .HasColumnName("RPin");

                entity.Property(e => e.Rstate)
                    .HasMaxLength(50)
                    .HasColumnName("RState");

                entity.Property(e => e.RtelNo)
                    .HasMaxLength(50)
                    .HasColumnName("RTelNo");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
