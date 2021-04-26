using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace Assignment.Models
{
    public partial class EmpAssignmentContext : DbContext
    {
        public EmpAssignmentContext()
        {
        }

        public EmpAssignmentContext(DbContextOptions<EmpAssignmentContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Assignment> Assignments { get; set; }
        public virtual DbSet<Employee> Employees { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {

                optionsBuilder.UseSqlServer("Server=DESKTOP-UI4SJM6\\SQLExpress;Database=EmpAssignment;Trusted_Connection=True;");
            }
        }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Assignment>(entity =>
            {
                entity.HasKey(e => e.AssignementId)
                    .HasName("PK__Assignme__6278FABED5ABA858");

                entity.Property(e => e.AssignementId)
                    .ValueGeneratedNever()
                    .HasColumnName("AssignementID");

                entity.Property(e => e.ActionCode)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.AssignmentName)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.AssignmentSatus)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.EmpId).HasColumnName("EmpID");

                entity.Property(e => e.Lastdate).HasColumnType("date");

                entity.HasOne(d => d.Emp)
                    .WithMany(p => p.Assignments)
                    .HasForeignKey(d => d.EmpId)
                    .HasConstraintName("FK_Assignments_Employees");
            });

            modelBuilder.Entity<Employee>(entity =>
            {
                entity.HasKey(e => e.EmpId)
                    .HasName("PK__Employee__AF2DBB992FC51948");

                entity.Property(e => e.EmpId).ValueGeneratedNever();

                entity.Property(e => e.Dob).HasColumnType("date");

                entity.Property(e => e.FirstName)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Gender)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.HireDate).HasColumnType("date");

                entity.Property(e => e.LastName)
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
