using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace Day17Assignment.Models
{
    public class Day17AssignmentContext : DbContext
    {

        public Day17AssignmentContext(DbContextOptions<Day17AssignmentContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Admin> Admins { get; set; }
        public virtual DbSet<Assistant> Assistants { get; set; }
        public virtual DbSet<Department> Departments { get; set; }
        public virtual DbSet<Doctor> Doctors { get; set; }
        public virtual DbSet<Drug> Drugs { get; set; }
        public virtual DbSet<Patient> Patients { get; set; }
        public virtual DbSet<Transcript> Transcripts { get; set; }
        public virtual DbSet<TranscriptAssistant> TranscriptAssistants { get; set; }
        public virtual DbSet<TranscriptDoctor> TranscriptDoctors { get; set; }
        public virtual DbSet<TranscriptDrug> TranscriptDrugs { get; set; }

        public virtual DbSet<PatientDrugsTranscript> PatientDrugsTranscripts { get; set; }



        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<PatientDrugsTranscript>(e =>
            {
                e.HasNoKey();
            }
            );
            modelBuilder.Entity<Admin>(entity =>
            {
                entity.Property(e => e.AdminId).HasColumnName("AdminID");

                entity.Property(e => e.AdminEmail)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.CreateDate)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.FirstName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.LastName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.UserName)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Assistant>(entity =>
            {
                entity.Property(e => e.AssistantContact)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.AssistantEmail)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.AssistantName)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Department>(entity =>
            {
                entity.Property(e => e.DepartmentName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Doctor>(entity =>
            {
                entity.Property(e => e.Contact)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.DisplayName)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.DoctorName)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Specialist)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.HasOne(d => d.Department)
                    .WithMany(p => p.Doctors)
                    .HasForeignKey(d => d.DepartmentId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fkDoctorDepartment");
            });

            modelBuilder.Entity<Drug>(entity =>
            {
                entity.Property(e => e.DrugContent)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.DrugName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Patient>(entity =>
            {
                entity.Property(e => e.PatientAddress)
                    .IsRequired()
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.PatientContact)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.PatientCreateDate)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.PatientEmail)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.PatientName)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Transcript>(entity =>
            {
                entity.ToTable("Transcript");

                entity.Property(e => e.Assistants)
                    .IsRequired()
                    .HasMaxLength(100);

                entity.Property(e => e.Doctors)
                    .IsRequired()
                    .HasMaxLength(100);

                entity.Property(e => e.Drugs)
                    .IsRequired()
                    .HasMaxLength(255);

                entity.Property(e => e.TranscriptDate)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.HasOne(d => d.Patient)
                    .WithMany(p => p.Transcripts)
                    .HasForeignKey(d => d.PatientId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fkTransiptPatient");
            });

            modelBuilder.Entity<TranscriptAssistant>(entity =>
            {
                entity.HasKey(e => e.AssistantId)
                    .HasName("fkTranscriptAssistant");

                entity.Property(e => e.AssistantId).ValueGeneratedNever();

                entity.HasOne(d => d.Assistant)
                    .WithOne(p => p.TranscriptAssistant)
                    .HasForeignKey<TranscriptAssistant>(d => d.AssistantId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Transcrip__Assis__3C69FB99");
            });

            modelBuilder.Entity<TranscriptDoctor>(entity =>
            {
                entity.HasKey(e => e.DoctorId)
                    .HasName("fkTranscriptDoctor");

                entity.Property(e => e.DoctorId).ValueGeneratedNever();

                entity.HasOne(d => d.Doctor)
                    .WithOne(p => p.TranscriptDoctor)
                    .HasForeignKey<TranscriptDoctor>(d => d.DoctorId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Transcrip__Docto__398D8EEE");
            });

            modelBuilder.Entity<TranscriptDrug>(entity =>
            {
                entity.HasKey(e => e.DrugId)
                    .HasName("fkTranscriptDrug");

                entity.Property(e => e.DrugId).ValueGeneratedNever();

                entity.Property(e => e.Quantity).HasDefaultValueSql("((1))");

                entity.HasOne(d => d.Drug)
                    .WithOne(p => p.TranscriptDrug)
                    .HasForeignKey<TranscriptDrug>(d => d.DrugId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Transcrip__DrugI__49C3F6B7");
            });
        }
    }
}
