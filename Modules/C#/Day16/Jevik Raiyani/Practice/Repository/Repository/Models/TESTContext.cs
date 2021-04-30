using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace Repository.Models
{
    public partial class TESTContext : DbContext
    {
        public TESTContext()
        {
        }

        public TESTContext(DbContextOptions<TESTContext> options)
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
//#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Data Source=JEVIK\\SQLEXPRESS;Initial Catalog=TEST;Integrated Security=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Borrow>(entity =>
            {
                entity.HasKey(e => e.Loanno)
                    .HasName("PK__Borrow__D98B4513C6AF1BA3");

                entity.ToTable("Borrow");

                entity.Property(e => e.Loanno)
                    .HasMaxLength(5)
                    .IsUnicode(false)
                    .HasColumnName("LOANNO");

                entity.Property(e => e.Bname)
                    .HasMaxLength(18)
                    .IsUnicode(false)
                    .HasColumnName("BNAME");

                entity.Property(e => e.Cname)
                    .HasMaxLength(19)
                    .IsUnicode(false)
                    .HasColumnName("CNAME");

                entity.HasOne(d => d.BnameNavigation)
                    .WithMany(p => p.Borrows)
                    .HasForeignKey(d => d.Bname)
                    .HasConstraintName("FK__Borrow__BNAME__3B75D760");

                entity.HasOne(d => d.CnameNavigation)
                    .WithMany(p => p.Borrows)
                    .HasForeignKey(d => d.Cname)
                    .HasConstraintName("FK__Borrow__CNAME__3A81B327");
            });

            modelBuilder.Entity<Branch>(entity =>
            {
                entity.HasKey(e => e.Bname)
                    .HasName("PK__Branch__C670A8F9A7B20BE5");

                entity.ToTable("Branch");

                entity.Property(e => e.Bname)
                    .HasMaxLength(18)
                    .IsUnicode(false)
                    .HasColumnName("BNAME");

                entity.Property(e => e.City)
                    .HasMaxLength(18)
                    .IsUnicode(false)
                    .HasColumnName("CITY");
            });

            modelBuilder.Entity<Customer>(entity =>
            {
                entity.HasKey(e => e.Cname)
                    .HasName("PK__Customer__C38B56B9E985FB8C");

                entity.ToTable("Customer");

                entity.Property(e => e.Cname)
                    .HasMaxLength(19)
                    .IsUnicode(false)
                    .HasColumnName("CNAME");

                entity.Property(e => e.City)
                    .HasMaxLength(18)
                    .IsUnicode(false)
                    .HasColumnName("CITY");
            });

            modelBuilder.Entity<Deposit>(entity =>
            {
                entity.HasKey(e => e.Actno)
                    .HasName("PK__Deposit__CA96F958F11634BD");

                entity.ToTable("Deposit");

                entity.Property(e => e.Actno)
                    .HasMaxLength(5)
                    .IsUnicode(false)
                    .HasColumnName("ACTNO");

                entity.Property(e => e.Adate)
                    .HasColumnType("date")
                    .HasColumnName("ADATE");

                entity.Property(e => e.Amount).HasColumnName("AMOUNT");

                entity.Property(e => e.Bname)
                    .HasMaxLength(18)
                    .IsUnicode(false)
                    .HasColumnName("BNAME");

                entity.Property(e => e.Cname)
                    .HasMaxLength(19)
                    .IsUnicode(false)
                    .HasColumnName("CNAME");

                entity.HasOne(d => d.BnameNavigation)
                    .WithMany(p => p.Deposits)
                    .HasForeignKey(d => d.Bname)
                    .HasConstraintName("FK__Deposit__BNAME__3F466844");

                entity.HasOne(d => d.CnameNavigation)
                    .WithMany(p => p.Deposits)
                    .HasForeignKey(d => d.Cname)
                    .HasConstraintName("FK__Deposit__CNAME__3E52440B");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
