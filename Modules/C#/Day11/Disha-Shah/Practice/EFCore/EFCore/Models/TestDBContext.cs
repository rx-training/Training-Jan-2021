using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace EFCore.Models
{
    public partial class TestDBContext : DbContext
    {
        public TestDBContext()
        {
        }

        public TestDBContext(DbContextOptions<TestDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Borrow> Borrows { get; set; }
        public virtual DbSet<Branch> Branches { get; set; }
        public virtual DbSet<Customer> Customers { get; set; }
        public virtual DbSet<Deposit> Deposits { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=LAPTOP-NLRDC1FB\\SQLEXPRESS01;Database=TestDB;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Borrow>(entity =>
            {
                entity.HasKey(e => e.LoanNo)
                    .HasName("Deposits_LoanNo_PK");

                entity.Property(e => e.LoanNo)
                    .HasMaxLength(5)
                    .IsUnicode(false);

                entity.Property(e => e.Bname)
                    .HasMaxLength(18)
                    .IsUnicode(false)
                    .HasColumnName("BName");

                entity.Property(e => e.Cname)
                    .HasMaxLength(19)
                    .IsUnicode(false)
                    .HasColumnName("CName");

                entity.HasOne(d => d.BnameNavigation)
                    .WithMany(p => p.Borrows)
                    .HasForeignKey(d => d.Bname)
                    .HasConstraintName("Borrows_Branches_BName_FK");

                entity.HasOne(d => d.CnameNavigation)
                    .WithMany(p => p.Borrows)
                    .HasForeignKey(d => d.Cname)
                    .HasConstraintName("Borrows_Customers_CName_FK");
            });

            modelBuilder.Entity<Branch>(entity =>
            {
                entity.HasKey(e => e.Bname)
                    .HasName("Branches_BName_PK");

                entity.Property(e => e.Bname)
                    .HasMaxLength(18)
                    .IsUnicode(false)
                    .HasColumnName("BName");

                entity.Property(e => e.City)
                    .HasMaxLength(18)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Customer>(entity =>
            {
                entity.HasKey(e => e.Cname)
                    .HasName("Customers_CName_PK");

                entity.Property(e => e.Cname)
                    .HasMaxLength(19)
                    .IsUnicode(false)
                    .HasColumnName("CName");

                entity.Property(e => e.City)
                    .HasMaxLength(18)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Deposit>(entity =>
            {
                entity.HasKey(e => e.ActNo)
                    .HasName("Deposits_ActNo_PK");

                entity.Property(e => e.ActNo)
                    .HasMaxLength(5)
                    .IsUnicode(false);

                entity.Property(e => e.Adate)
                    .HasColumnType("date")
                    .HasColumnName("ADate");

                entity.Property(e => e.Bname)
                    .HasMaxLength(18)
                    .IsUnicode(false)
                    .HasColumnName("BName");

                entity.Property(e => e.Cname)
                    .HasMaxLength(19)
                    .IsUnicode(false)
                    .HasColumnName("CName");

                entity.HasOne(d => d.BnameNavigation)
                    .WithMany(p => p.Deposits)
                    .HasForeignKey(d => d.Bname)
                    .HasConstraintName("Deposits_Branches_BName_FK");

                entity.HasOne(d => d.CnameNavigation)
                    .WithMany(p => p.Deposits)
                    .HasForeignKey(d => d.Cname)
                    .HasConstraintName("Deposits_Customers_CName_FK");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
