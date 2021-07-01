using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace StudentForm.Models
{
    public partial class StudentFormContext : DbContext
    {
        public StudentFormContext()
        {
        }

        public StudentFormContext(DbContextOptions<StudentFormContext> options)
            : base(options)
        {
        }

        public virtual DbSet<EmergencyContactList> EmergencyContactLists { get; set; }
        public virtual DbSet<Student> Students { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
  
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<EmergencyContactList>(entity =>
            {
                entity.HasKey(e => e.SrNo);

                entity.HasIndex(e => new { e.StudentId, e.ENumber }, "IX_Contact_Id")
                    .IsUnique();

                entity.Property(e => e.SrNo)
                    .ValueGeneratedNever()
                    .HasColumnName("Sr.No");

                entity.Property(e => e.ENumber)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .HasColumnName("E_Number");

                entity.Property(e => e.ERelation)
                    .IsUnicode(false)
                    .HasColumnName("E_Relation");

                entity.HasOne(d => d.Student)
                    .WithMany(p => p.EmergencyContactLists)
                    .HasForeignKey(d => d.StudentId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_EmergencyContactLists_Students");
            });

            modelBuilder.Entity<Student>(entity =>
            {
                entity.Property(e => e.StudentId).ValueGeneratedNever();

                entity.Property(e => e.City)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("city");

                entity.Property(e => e.CountryPin)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Dob)
                    .HasColumnType("date")
                    .HasColumnName("DOB");

                entity.Property(e => e.FDesignation)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("F_Designation");

                entity.Property(e => e.FEduQualification)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("F_EduQualification");

                entity.Property(e => e.FEmail)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("F_Email");

                entity.Property(e => e.FPhone)
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .HasColumnName("F_Phone");

                entity.Property(e => e.FProfession)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("F_Profession");

                entity.Property(e => e.FatherName).IsUnicode(false);

                entity.Property(e => e.FirstLanguage)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.MDesignation)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("M_Designation");

                entity.Property(e => e.MEduQualification)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("M_EduQualification");

                entity.Property(e => e.MEmail)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("M_Email");

                entity.Property(e => e.MPhone)
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .HasColumnName("M_Phone");

                entity.Property(e => e.MProfession)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("M_Profession");

                entity.Property(e => e.MotherName).IsUnicode(false);

                entity.Property(e => e.PlaceOfBirth)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.RAddressWithTel)
                    .IsUnicode(false)
                    .HasColumnName("R_AddressWithTel");

                entity.Property(e => e.ReferenceThrough)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.State)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.StudentName).IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
