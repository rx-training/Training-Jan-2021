using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace Assignment-webapi.Model
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
        public virtual DbSet<UserInfo> UserInfos { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=DESKTOP-UI4SJM6\\SQLEXPRESS;Database=EmpAssignment;Trusted_Connection=True;");
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

            modelBuilder.Entity<UserInfo>(entity =>
            {
                entity.HasKey(e => e.UserId)
                    .HasName("PK__UserInfo__1788CC4CF4EDC29F");

                entity.ToTable("UserInfo");

                entity.Property(e => e.CreatedDate)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.FirstName)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.LastName)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.UserName)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
