using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace StudentAdmissionAPI.Models
{
    public partial class StudentAdmisssionContext : DbContext
    {
        public StudentAdmisssionContext()
        {
        }

        public StudentAdmisssionContext(DbContextOptions<StudentAdmisssionContext> options)
            : base(options)
        {
        }

        public virtual DbSet<StudentAdmissionTable> StudentAdmissionTables { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Data Source=LAPTOP-N1UDT3G5;Initial Catalog=StudentAdmisssion;Integrated Security=True");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "Latin1_General_CI_AS");

            modelBuilder.Entity<StudentAdmissionTable>(entity =>
            {
                entity.HasKey(e => e.Sid);

                entity.ToTable("StudentAdmissionTable");

                entity.Property(e => e.Sid)
                    .ValueGeneratedNever()
                    .HasColumnName("SID");

                entity.Property(e => e.City)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Country)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Dob)
                    .HasColumnType("date")
                    .HasColumnName("DOB");

                entity.Property(e => e.Fdesignation)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("FDesignation");

                entity.Property(e => e.FeducationQualification)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("FEducationQualification");

                entity.Property(e => e.Femail)
                    .HasMaxLength(50)
                    .HasColumnName("FEmail");

                entity.Property(e => e.FfirstName)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("FFirstName");

                entity.Property(e => e.FirstLanguage)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.FlastName)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("FLastName");

                entity.Property(e => e.FmiddleName)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("FMiddleName");

                entity.Property(e => e.Fphone)
                    .HasColumnType("numeric(18, 0)")
                    .HasColumnName("FPhone");

                entity.Property(e => e.Fprofession)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("FProfession");

                entity.Property(e => e.Mdesignation)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("MDesignation");

                entity.Property(e => e.MeducationQualification)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("MEducationQualification");

                entity.Property(e => e.Memail)
                    .HasMaxLength(50)
                    .HasColumnName("MEmail");

                entity.Property(e => e.MfirstName)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("MFirstName");

                entity.Property(e => e.MlastName)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("MLastName");

                entity.Property(e => e.MmiddleName)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("MMiddleName");

                entity.Property(e => e.Mphone)
                    .HasColumnType("numeric(18, 0)")
                    .HasColumnName("MPhone");

                entity.Property(e => e.Mprofession)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("MProfession");

                entity.Property(e => e.Number).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.Pin).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.PlaceOfBirth)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.RefernceDetail).HasMaxLength(50);

                entity.Property(e => e.Relation)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.SfirstName)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("SFirstName");

                entity.Property(e => e.SlastName)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("SLastName");

                entity.Property(e => e.SmiddleName)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("SMiddleName");

                entity.Property(e => e.State)
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
