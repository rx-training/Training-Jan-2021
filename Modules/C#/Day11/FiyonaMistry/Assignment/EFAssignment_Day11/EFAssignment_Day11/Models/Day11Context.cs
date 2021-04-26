using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace EFAssignment_Day11.Models
{
    public partial class Day11Context : DbContext
    {
        public Day11Context()
        {
        }

        public Day11Context(DbContextOptions<Day11Context> options)
            : base(options)
        {
        }

        public virtual DbSet<Assistant> Assistants { get; set; }
        public virtual DbSet<Department> Departments { get; set; }
        public virtual DbSet<Doctor> Doctors { get; set; }
        public virtual DbSet<DoctorsDepartment> DoctorsDepartments { get; set; }
        public virtual DbSet<Drug> Drugs { get; set; }
        public virtual DbSet<MedicineList> MedicineLists { get; set; }
        public virtual DbSet<Patient> Patients { get; set; }
        public virtual DbSet<PatientsDoctor> PatientsDoctors { get; set; }
        public virtual DbSet<Prescription> Prescriptions { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=DESKTOP-G7G6FSU\\SQLEXPRESS;Database=Day11;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Assistant>(entity =>
            {
                entity.HasKey(e => e.AssisId);

                entity.Property(e => e.AssisId)
                    .ValueGeneratedNever()
                    .HasColumnName("assisID");

                entity.Property(e => e.AssisAddress)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("assisAddress");

                entity.Property(e => e.AssisFname)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("assisFname");

                entity.Property(e => e.AssisLname)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("assisLname");

                entity.Property(e => e.AssisPhoneNumber).HasColumnName("assisPhoneNumber");

                entity.Property(e => e.AssisQualification)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("assisQualification");

                entity.Property(e => e.DocId).HasColumnName("docID");

                entity.HasOne(d => d.Doc)
                    .WithMany(p => p.Assistants)
                    .HasForeignKey(d => d.DocId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Assistants_Doctors");
            });

            modelBuilder.Entity<Department>(entity =>
            {
                entity.HasKey(e => e.DeptId);

                entity.Property(e => e.DeptId)
                    .ValueGeneratedNever()
                    .HasColumnName("deptID");

                entity.Property(e => e.DeptName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("deptName");
            });

            modelBuilder.Entity<Doctor>(entity =>
            {
                entity.HasKey(e => e.DocId);

                entity.Property(e => e.DocId)
                    .ValueGeneratedNever()
                    .HasColumnName("docID");

                entity.Property(e => e.DeptId).HasColumnName("deptID");

                entity.Property(e => e.DocAddress)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("docAddress");

                entity.Property(e => e.DocFname)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("docFname");

                entity.Property(e => e.DocLname)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("docLname");

                entity.Property(e => e.DocPhoneNumber).HasColumnName("docPhoneNumber");

                entity.Property(e => e.DocQualification)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("docQualification");

                entity.Property(e => e.DocSpecialist)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("docSpecialist");

                entity.HasOne(d => d.Dept)
                    .WithMany(p => p.Doctors)
                    .HasForeignKey(d => d.DeptId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Doctors_Departments");
            });

            modelBuilder.Entity<DoctorsDepartment>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("DoctorsDepartment");

                entity.Property(e => e.DeptName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("deptName");

                entity.Property(e => e.DocFname)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("docFname");
            });

            modelBuilder.Entity<Drug>(entity =>
            {
                entity.Property(e => e.DrugId)
                    .ValueGeneratedNever()
                    .HasColumnName("drugID");

                entity.Property(e => e.AfternoonDose).HasColumnName("afternoonDose");

                entity.Property(e => e.DrugName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("drugName");

                entity.Property(e => e.MorningDose).HasColumnName("morningDose");

                entity.Property(e => e.NightDose).HasColumnName("nightDose");

                entity.Property(e => e.PreId).HasColumnName("preID");

                entity.HasOne(d => d.Pre)
                    .WithMany(p => p.Drugs)
                    .HasForeignKey(d => d.PreId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Drugs_Prescriptions");
            });

            modelBuilder.Entity<MedicineList>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("MedicineList");

                entity.Property(e => e.DrugName)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("drugName");

                entity.Property(e => e.PatFname)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("patFname");
            });

            modelBuilder.Entity<Patient>(entity =>
            {
                entity.HasKey(e => e.PatId);

                entity.Property(e => e.PatId)
                    .ValueGeneratedNever()
                    .HasColumnName("patID");

                entity.Property(e => e.AssisId).HasColumnName("assisID");

                entity.Property(e => e.DocId).HasColumnName("docID");

                entity.Property(e => e.PatAddress)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("patAddress");

                entity.Property(e => e.PatDob)
                    .HasColumnType("date")
                    .HasColumnName("patDOB");

                entity.Property(e => e.PatFname)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("patFname");

                entity.Property(e => e.PatLname)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("patLname");

                entity.Property(e => e.PatPhoneNumber).HasColumnName("patPhoneNumber");

                entity.HasOne(d => d.Assis)
                    .WithMany(p => p.Patients)
                    .HasForeignKey(d => d.AssisId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Patients_Assistants");

                entity.HasOne(d => d.Doc)
                    .WithMany(p => p.Patients)
                    .HasForeignKey(d => d.DocId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Patients_Doctors");
            });

            modelBuilder.Entity<PatientsDoctor>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("PatientsDoctor");

                entity.Property(e => e.DocFname)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("docFname");

                entity.Property(e => e.PatFname)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("patFname");
            });

            modelBuilder.Entity<Prescription>(entity =>
            {
                entity.HasKey(e => e.PreId);

                entity.Property(e => e.PreId)
                    .ValueGeneratedNever()
                    .HasColumnName("preID");

                entity.Property(e => e.DocId).HasColumnName("docID");

                entity.Property(e => e.PatId).HasColumnName("patID");

                entity.Property(e => e.PreDate)
                    .HasColumnType("datetime")
                    .HasColumnName("preDate");

                entity.HasOne(d => d.Doc)
                    .WithMany(p => p.Prescriptions)
                    .HasForeignKey(d => d.DocId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Prescriptions_Doctors");

                entity.HasOne(d => d.Pat)
                    .WithMany(p => p.Prescriptions)
                    .HasForeignKey(d => d.PatId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Prescriptions_Patients");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
