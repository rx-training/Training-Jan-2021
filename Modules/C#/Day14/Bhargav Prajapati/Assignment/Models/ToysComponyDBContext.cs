using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace Assignment.Models
{
    public partial class ToysComponyDBContext : DbContext
    {
        public ToysComponyDBContext()
        {
        }

        public ToysComponyDBContext(DbContextOptions<ToysComponyDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Address> Addresses { get; set; }
        public virtual DbSet<Customer> Customers { get; set; }
        public virtual DbSet<Plant> Plants { get; set; }
        public virtual DbSet<Toy> Toys { get; set; }
        public virtual DbSet<ToysPerson> ToysPeople { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=DESKTOP-P3KPE28\\MSSQLSERVER02;Database=ToysComponyDB;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Address>(entity =>
            {
                entity.HasIndex(e => e.CustomerId, "IX_Addresses_CustomerId");

                entity.Property(e => e.Street).HasColumnName("street");

                entity.HasOne(d => d.Customer)
                    .WithMany(p => p.Addresses)
                    .HasForeignKey(d => d.CustomerId);
            });

            modelBuilder.Entity<Toy>(entity =>
            {
                entity.HasIndex(e => e.PlantsPlantId, "IX_Toys_PlantsPlantId");

                entity.HasOne(d => d.PlantsPlant)
                    .WithMany(p => p.Toys)
                    .HasForeignKey(d => d.PlantsPlantId);
            });

            modelBuilder.Entity<ToysPerson>(entity =>
            {
                entity.HasKey(e => new { e.CustomerId, e.ToyId });

                entity.HasIndex(e => e.ToyId, "IX_ToysPeople_ToyId");

                entity.HasOne(d => d.Customer)
                    .WithMany(p => p.ToysPeople)
                    .HasForeignKey(d => d.CustomerId);

                entity.HasOne(d => d.Toy)
                    .WithMany(p => p.ToysPeople)
                    .HasForeignKey(d => d.ToyId);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
