using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace Sqlconnecteds.Model
{
    public partial class HospotalContext : DbContext
    {
        public HospotalContext()
        {
        }

        public HospotalContext(DbContextOptions<HospotalContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Doctor> Doctors { get; set; }
        public virtual DbSet<HealthcareAss> HealthcareAsses { get; set; }
        public virtual DbSet<Medicine> Medicines { get; set; }
        public virtual DbSet<Patient> Patients { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=DESKTOP-FPEESG3;Initial Catalog=Hospotal;Integrated Security=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Doctor>(entity =>
            {
                entity.ToTable("Doctor");

                entity.Property(e => e.Doctorid).HasColumnName("doctorid");

                entity.Property(e => e.Doctorname)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("doctorname");
            });

            modelBuilder.Entity<HealthcareAss>(entity =>
            {
                entity.ToTable("HealthcareAss");

                entity.Property(e => e.HealthcareAssname)
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Medicine>(entity =>
            {
                entity.ToTable("Medicine");

                entity.Property(e => e.Medicinename)
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Patient>(entity =>
            {
                entity.HasKey(e => e.Patientsid)
                    .HasName("PK__Patients__E7AAB854FC88BD12");

                entity.Property(e => e.Patientsname)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.HasOne(d => d.DoctoridsNavigation)
                    .WithMany(p => p.Patients)
                    .HasForeignKey(d => d.Doctorids)
                    .HasConstraintName("fkdoctorid");

                entity.HasOne(d => d.HelthcaresNavigation)
                    .WithMany(p => p.Patients)
                    .HasForeignKey(d => d.Helthcares)
                    .HasConstraintName("fkhealthcareAssid");

                entity.HasOne(d => d.MediciensNavigation)
                    .WithMany(p => p.Patients)
                    .HasForeignKey(d => d.Mediciens)
                    .HasConstraintName("fkmedicineid");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
