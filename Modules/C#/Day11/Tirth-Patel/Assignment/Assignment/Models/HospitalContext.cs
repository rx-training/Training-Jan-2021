﻿using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace Assignment.Models
{
    public partial class HospitalContext : DbContext
    {
        public HospitalContext()
        {
        }

        public HospitalContext(DbContextOptions<HospitalContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Department> Departments { get; set; }
        public virtual DbSet<Doctor> Doctors { get; set; }
        public virtual DbSet<Drug> Drugs { get; set; }
        public virtual DbSet<HealthWorker> HealthWorkers { get; set; }
        public virtual DbSet<Patient> Patients { get; set; }
        public virtual DbSet<Prescription> Prescriptions { get; set; }
        public virtual DbSet<Report> Reports { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=.\\SQLExpress;Database=Hospital;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Department>(entity =>
            {
                entity.Property(e => e.DepartmentId)
                    .ValueGeneratedNever()
                    .HasColumnName("DepartmentID");

                entity.Property(e => e.DepartmentName)
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Doctor>(entity =>
            {
                entity.HasKey(e => e.DoctorsId);

                entity.Property(e => e.DoctorsId)
                    .ValueGeneratedNever()
                    .HasColumnName("DoctorsID");

                entity.Property(e => e.DepartmentId).HasColumnName("DepartmentID");

                entity.Property(e => e.DoctorName)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.HasOne(d => d.Department)
                    .WithMany(p => p.Doctors)
                    .HasForeignKey(d => d.DepartmentId)
                    .HasConstraintName("FK_Doctors_Departments");
            });

            modelBuilder.Entity<Drug>(entity =>
            {
                entity.Property(e => e.DrugId)
                    .ValueGeneratedNever()
                    .HasColumnName("DrugID");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<HealthWorker>(entity =>
            {
                entity.Property(e => e.HealthWorkerId)
                    .ValueGeneratedNever()
                    .HasColumnName("HealthWorkerID");

                entity.Property(e => e.DepartmentId).HasColumnName("DepartmentID");

                entity.Property(e => e.Name)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.HasOne(d => d.Department)
                    .WithMany(p => p.HealthWorkers)
                    .HasForeignKey(d => d.DepartmentId)
                    .HasConstraintName("FK_HealthWorkers_Departments");
            });

            modelBuilder.Entity<Patient>(entity =>
            {
                entity.Property(e => e.PatientId)
                    .ValueGeneratedNever()
                    .HasColumnName("PatientID");

                entity.Property(e => e.PatientName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Prescription>(entity =>
            {
                entity.HasKey(e => new { e.PatientId, e.DrugId });

                entity.Property(e => e.PatientId).HasColumnName("PatientID");

                entity.Property(e => e.DrugId).HasColumnName("DrugID");

                entity.Property(e => e.HealthcareWorkerId).HasColumnName("HealthcareWorkerID");

                entity.Property(e => e.Shift)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.HasOne(d => d.Drug)
                    .WithMany(p => p.Prescriptions)
                    .HasForeignKey(d => d.DrugId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Prescriptions_Drugs");

                entity.HasOne(d => d.Patient)
                    .WithMany(p => p.Prescriptions)
                    .HasForeignKey(d => d.PatientId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Prescriptions_Patients");
            });

            modelBuilder.Entity<Report>(entity =>
            {
                entity.HasNoKey();

                entity.Property(e => e.DoctorId).HasColumnName("DoctorID");

                entity.Property(e => e.PatientId).HasColumnName("PatientID");

                entity.Property(e => e.PrecscriptionId).HasColumnName("PrecscriptionID");

                entity.HasOne(d => d.Doctor)
                    .WithMany()
                    .HasForeignKey(d => d.DoctorId)
                    .HasConstraintName("FK_Reports_Doctors");

                entity.HasOne(d => d.Patient)
                    .WithMany()
                    .HasForeignKey(d => d.PatientId)
                    .HasConstraintName("FK_Reports_Patients");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
