using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace Assignment.Models
{
    public partial class HOSPITAL11Context : DbContext
    {
        //public HOSPITAL11Context()
        //{
        //}

        public HOSPITAL11Context(DbContextOptions<HOSPITAL11Context> options)
            : base(options)
        {
        }

        public virtual DbSet<Department> Departments { get; set; }
        public virtual DbSet<Doctor> Doctors { get; set; }
        public virtual DbSet<DoctorPatientView> DoctorPatientViews { get; set; }
        public virtual DbSet<MedicineView> MedicineViews { get; set; }
        public virtual DbSet<MedicinesAssigned> MedicinesAssigneds { get; set; }
        public virtual DbSet<Nurse> Nurses { get; set; }
        public virtual DbSet<Patient> Patients { get; set; }

//        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
//        {
//            if (!optionsBuilder.IsConfigured)
//            {
//#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
//                optionsBuilder.UseSqlServer("Data Source=LAPTOP-N1UDT3G5;Initial Catalog=HOSPITAL11;Integrated Security=True");
//            }
//        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "Latin1_General_CI_AS");

            modelBuilder.Entity<Department>(entity =>
            {
                entity.ToTable("Department");

                entity.Property(e => e.DepartmentId)
                    .ValueGeneratedNever()
                    .HasColumnName("DepartmentID");

                entity.Property(e => e.DepartmentName)
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Doctor>(entity =>
            {
                entity.ToTable("Doctor");

                entity.Property(e => e.DoctorId)
                    .ValueGeneratedNever()
                    .HasColumnName("DoctorID");

                entity.Property(e => e.DepartmentId).HasColumnName("DepartmentID");

                entity.Property(e => e.FirstName)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.LastName)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.HasOne(d => d.Department)
                    .WithMany(p => p.Doctors)
                    .HasForeignKey(d => d.DepartmentId)
                    .HasConstraintName("FK_Doctor_DepartmentID");
            });

            modelBuilder.Entity<DoctorPatientView>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("DoctorPatientView");

                entity.Property(e => e.DepartmentId).HasColumnName("DepartmentID");

                entity.Property(e => e.DoctorFirstName)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("Doctor First Name");

                entity.Property(e => e.DoctorId).HasColumnName("DoctorID");

                entity.Property(e => e.DoctorLastName)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("Doctor Last Name");

                entity.Property(e => e.PatientFirstName)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("Patient First Name");

                entity.Property(e => e.PatientId).HasColumnName("PatientID");

                entity.Property(e => e.PatientLastName)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("Patient Last Name");
            });

            modelBuilder.Entity<MedicineView>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("MedicineView");

                entity.Property(e => e.AfternoonMedicineId).HasColumnName("AfternoonMedicineID");

                entity.Property(e => e.AfternoonMedicineName)
                    .HasMaxLength(40)
                    .IsUnicode(false);

                entity.Property(e => e.FirstName)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.LastName)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.MorningMedicineId).HasColumnName("MorningMedicineID");

                entity.Property(e => e.MorningMedicineName)
                    .HasMaxLength(40)
                    .IsUnicode(false);

                entity.Property(e => e.NightMedicineId).HasColumnName("NightMedicineID");

                entity.Property(e => e.NightMedicineName)
                    .HasMaxLength(40)
                    .IsUnicode(false);

                entity.Property(e => e.PatientId).HasColumnName("PatientID");
            });

            modelBuilder.Entity<MedicinesAssigned>(entity =>
            {
                entity.ToTable("MedicinesAssigned");

                entity.Property(e => e.Id)
                    .ValueGeneratedNever()
                    .HasColumnName("ID");

                entity.Property(e => e.AfternoonMedicineId).HasColumnName("AfternoonMedicineID");

                entity.Property(e => e.AfternoonMedicineName)
                    .HasMaxLength(40)
                    .IsUnicode(false);

                entity.Property(e => e.MorningMedicineId).HasColumnName("MorningMedicineID");

                entity.Property(e => e.MorningMedicineName)
                    .HasMaxLength(40)
                    .IsUnicode(false);

                entity.Property(e => e.NightMedicineId).HasColumnName("NightMedicineID");

                entity.Property(e => e.NightMedicineName)
                    .HasMaxLength(40)
                    .IsUnicode(false);

                entity.Property(e => e.PatientId).HasColumnName("PatientID");

                entity.HasOne(d => d.Patient)
                    .WithMany(p => p.MedicinesAssigneds)
                    .HasForeignKey(d => d.PatientId)
                    .HasConstraintName("FK_Medicines_Assigned_PatientID");
            });

            modelBuilder.Entity<Nurse>(entity =>
            {
                entity.ToTable("Nurse");

                entity.Property(e => e.NurseId)
                    .ValueGeneratedNever()
                    .HasColumnName("NurseID");

                entity.Property(e => e.DepartmentId).HasColumnName("DepartmentID");

                entity.Property(e => e.FirstName)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.LastName)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.HasOne(d => d.Department)
                    .WithMany(p => p.Nurses)
                    .HasForeignKey(d => d.DepartmentId)
                    .HasConstraintName("FK_Nurse_DepartmentID");
            });

            modelBuilder.Entity<Patient>(entity =>
            {
                entity.ToTable("Patient");

                entity.Property(e => e.PatientId)
                    .ValueGeneratedNever()
                    .HasColumnName("PatientID");

                entity.Property(e => e.Address)
                    .HasMaxLength(40)
                    .IsUnicode(false);

                entity.Property(e => e.DepartmentId).HasColumnName("DepartmentID");

                entity.Property(e => e.DoctorId).HasColumnName("DoctorID");

                entity.Property(e => e.FirstName)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.LastName)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.NurseId).HasColumnName("NurseID");

                entity.HasOne(d => d.Department)
                    .WithMany(p => p.Patients)
                    .HasForeignKey(d => d.DepartmentId)
                    .HasConstraintName("FK_Patient_PatientID");

                entity.HasOne(d => d.Doctor)
                    .WithMany(p => p.Patients)
                    .HasForeignKey(d => d.DoctorId)
                    .HasConstraintName("FK_Doctor_DoctorID");

                entity.HasOne(d => d.Nurse)
                    .WithMany(p => p.Patients)
                    .HasForeignKey(d => d.NurseId)
                    .HasConstraintName("PK_Assigned_NurseID");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
