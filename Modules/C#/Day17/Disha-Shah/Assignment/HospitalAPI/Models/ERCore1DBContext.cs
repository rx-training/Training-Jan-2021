using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace HospitalAPI.Models
{
    public partial class ERCore1DBContext : DbContext
    {
        //public ERCore1DBContext()
        //{
        //}

        public ERCore1DBContext(DbContextOptions<ERCore1DBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Department> Departments { get; set; }
        public virtual DbSet<Doctor> Doctors { get; set; }
        public virtual DbSet<Drug> Drugs { get; set; }
        public virtual DbSet<HealthCare> HealthCares { get; set; }
        public virtual DbSet<Patient> Patients { get; set; }
        public virtual DbSet<PatientsDoctor> PatientsDoctors { get; set; }
        public virtual DbSet<PatientsDrugsShift> PatientsDrugsShifts { get; set; }
        public virtual DbSet<Shift> Shifts { get; set; }
        public virtual DbSet<VDoctorPatientReport> VDoctorPatientReports { get; set; }
        public virtual DbSet<VPatientMedicineReport> VPatientMedicineReports { get; set; }

//        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
//        {
//            if (!optionsBuilder.IsConfigured)
//            {
//#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
//                optionsBuilder.UseSqlServer("Server=LAPTOP-NLRDC1FB\\SQLEXPRESS01;Database=ERCore1DB;Trusted_Connection=True;");
//            }
//        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Department>(entity =>
            {
                entity.Property(e => e.Name)
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Doctor>(entity =>
            {
                entity.Property(e => e.Address)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.FirstName)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Lastname)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.HasOne(d => d.Department)
                    .WithMany(p => p.Doctors)
                    .HasForeignKey(d => d.DepartmentId)
                    .HasConstraintName("Doctors_Departments_Id_FK");
            });

            modelBuilder.Entity<Drug>(entity =>
            {
                entity.Property(e => e.Description)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ExpiryDate).HasColumnType("date");

                entity.Property(e => e.MfgDate).HasColumnType("date");

                entity.Property(e => e.Name)
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<HealthCare>(entity =>
            {
                entity.Property(e => e.Address)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.FirstName)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Lastname)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.HasOne(d => d.Department)
                    .WithMany(p => p.HealthCares)
                    .HasForeignKey(d => d.DepartmentId)
                    .HasConstraintName("HealthCares_Departments_Id_FK");
            });

            modelBuilder.Entity<Patient>(entity =>
            {
                entity.Property(e => e.Address)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.FirstName)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.LastName)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.ProblemDesc)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.HasOne(d => d.Department)
                    .WithMany(p => p.Patients)
                    .HasForeignKey(d => d.DepartmentId)
                    .HasConstraintName("Patients_Departments_Id_FK");

                entity.HasOne(d => d.HealthCare)
                    .WithMany(p => p.Patients)
                    .HasForeignKey(d => d.HealthCareId)
                    .HasConstraintName("Patients_HealthCares_Id_FK");
            });

            modelBuilder.Entity<PatientsDoctor>(entity =>
            {
                entity.HasOne(d => d.Doctor)
                    .WithMany(p => p.PatientsDoctors)
                    .HasForeignKey(d => d.DoctorId)
                    .HasConstraintName("PatientsDoctors_Doctors_Id_FK");

                entity.HasOne(d => d.Patient)
                    .WithMany(p => p.PatientsDoctors)
                    .HasForeignKey(d => d.PatientId)
                    .HasConstraintName("PatientsDoctors_Patients_Id_FK");
            });

            modelBuilder.Entity<PatientsDrugsShift>(entity =>
            {
                entity.HasOne(d => d.Drugs)
                    .WithMany(p => p.PatientsDrugsShifts)
                    .HasForeignKey(d => d.DrugsId)
                    .HasConstraintName("PatientsDrugsShifts_Drugs_Id_FK");

                entity.HasOne(d => d.Patient)
                    .WithMany(p => p.PatientsDrugsShifts)
                    .HasForeignKey(d => d.PatientId)
                    .HasConstraintName("PatientsDrugsShifts_Patients_Id_FK");

                entity.HasOne(d => d.Shift)
                    .WithMany(p => p.PatientsDrugsShifts)
                    .HasForeignKey(d => d.ShiftId)
                    .HasConstraintName("PatientsDrugsShifts_Shifts_Id_FK");
            });

            modelBuilder.Entity<Shift>(entity =>
            {
                entity.Property(e => e.Name)
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<VDoctorPatientReport>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("vDoctorPatientReport");

                entity.Property(e => e.Address)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Department)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Doctor)
                    .HasMaxLength(41)
                    .IsUnicode(false);

                entity.Property(e => e.HealthCarePerson)
                    .HasMaxLength(41)
                    .IsUnicode(false)
                    .HasColumnName("HealthCare Person");

                entity.Property(e => e.Patient)
                    .HasMaxLength(41)
                    .IsUnicode(false);

                entity.Property(e => e.ProblemDesc)
                    .HasMaxLength(100)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<VPatientMedicineReport>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("vPatientMedicineReport");

                entity.Property(e => e.Department)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Description)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Drugs)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.ExpiryDate).HasColumnType("date");

                entity.Property(e => e.MedicineTime)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("Medicine Time");

                entity.Property(e => e.Patient)
                    .HasMaxLength(41)
                    .IsUnicode(false);

                entity.Property(e => e.ProblemDesc)
                    .HasMaxLength(100)
                    .IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
