using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace StudentAdmissionFormAPI.Models
{
    public partial class StudentAdmissionFormDBContext : DbContext
    {

        public StudentAdmissionFormDBContext(DbContextOptions<StudentAdmissionFormDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<EmergencyContact> EmergencyContacts { get; set; }
        public virtual DbSet<ReferenceDetail> ReferenceDetails { get; set; }
        public virtual DbSet<Student> Students { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<EmergencyContact>(entity =>
            {
                entity.HasKey(e => e.EmergencyId)
                    .HasName("PK__Emergenc__BC93FA8293661DD0");

                entity.Property(e => e.EmergencyId).HasColumnName("emergencyId");

                entity.Property(e => e.Contact).HasColumnName("contact");

                entity.Property(e => e.Relation)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("relation");

                entity.Property(e => e.StudentId).HasColumnName("studentId");

                entity.HasOne(d => d.Student)
                    .WithMany(p => p.EmergencyContacts)
                    .HasForeignKey(d => d.StudentId)
                    .HasConstraintName("fkEmergencyContacts_StudentId");
            });

            modelBuilder.Entity<ReferenceDetail>(entity =>
            {
                entity.HasKey(e => e.ReferenceId)
                    .HasName("PK__Referenc__7B826DDEC0878D36");

                entity.Property(e => e.ReferenceId).HasColumnName("referenceId");

                entity.Property(e => e.Address)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("address");

                entity.Property(e => e.Contact).HasColumnName("contact");

                entity.Property(e => e.ReferenceThrough)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("referenceThrough");

                entity.Property(e => e.StudentId).HasColumnName("studentId");

                entity.HasOne(d => d.Student)
                    .WithMany(p => p.ReferenceDetails)
                    .HasForeignKey(d => d.StudentId)
                    .HasConstraintName("fkReferenceDetails_StudentId");
            });

            modelBuilder.Entity<Student>(entity =>
            {
                entity.Property(e => e.StudentId).HasColumnName("studentId");

                entity.Property(e => e.Address)
                    .IsRequired()
                    .HasMaxLength(300)
                    .IsUnicode(false)
                    .HasColumnName("address");

                entity.Property(e => e.Dob)
                    .HasColumnType("date")
                    .HasColumnName("dob");

                entity.Property(e => e.FatherDesignation)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("fatherDesignation");

                entity.Property(e => e.FatherEmail)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("fatherEmail");

                entity.Property(e => e.FatherName)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("fatherName");

                entity.Property(e => e.FatherPhone).HasColumnName("fatherPhone");

                entity.Property(e => e.FatherProfession)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("fatherProfession");

                entity.Property(e => e.FatherQualification)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("fatherQualification");

                entity.Property(e => e.Language)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("language");

                entity.Property(e => e.MotherDesignation)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("motherDesignation");

                entity.Property(e => e.MotherEmail)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("motherEmail");

                entity.Property(e => e.MotherName)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("motherName");

                entity.Property(e => e.MotherPhone).HasColumnName("motherPhone");

                entity.Property(e => e.MotherProfession)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("motherProfession");

                entity.Property(e => e.MotherQualification)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("motherQualification");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("name");

                entity.Property(e => e.PlaceOfBirth)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("placeOfBirth");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
