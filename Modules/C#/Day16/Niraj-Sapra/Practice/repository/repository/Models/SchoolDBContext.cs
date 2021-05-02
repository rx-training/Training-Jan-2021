using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace repository.Models
{
    public partial class SchoolDBContext : DbContext
    {
        public SchoolDBContext()
        {
        }

        public SchoolDBContext(DbContextOptions<SchoolDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Course> Courses { get; set; }
        public virtual DbSet<Studnet> Studnets { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Data Source=DESKTOP-FPEESG3;Initial Catalog=SchoolDB;Integrated Security=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Course>(entity =>
            {
                entity.HasKey(e => e.Coursesid)
                    .HasName("PK__COURSES__0F2CE42FFF9DF245");

                entity.ToTable("COURSE");

                entity.Property(e => e.Coursesid)
                    .ValueGeneratedNever()
                    .HasColumnName("COURSESID");

                entity.Property(e => e.Coursesname)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("COURSESNAME");
            });

            modelBuilder.Entity<Studnet>(entity =>
            {
                entity.HasKey(e => e.Studentid)
                    .HasName("PK__STUDNET__495196F044FE8C36");

                entity.ToTable("STUDNET");

                entity.Property(e => e.Studentid)
                    .ValueGeneratedNever()
                    .HasColumnName("STUDENTID");

                entity.Property(e => e.Name)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("NAME");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
