using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace ToyCompanyAPI.Models
{
    public partial class ToyCompanyDBContext : DbContext
    {
        //public ToyCompanyDBContext()
        //{
        //}

        public ToyCompanyDBContext(DbContextOptions<ToyCompanyDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Customer> Customers { get; set; }
        public virtual DbSet<ManufacturingPlant> ManufacturingPlants { get; set; }
        public virtual DbSet<ManufacturingPlantToy> ManufacturingPlantToys { get; set; }
        public virtual DbSet<Order> Orders { get; set; }
        public virtual DbSet<OrderDetail> OrderDetails { get; set; }
        public virtual DbSet<ShipTo> ShipTos { get; set; }
        public virtual DbSet<Toy> Toys { get; set; }
        public virtual DbSet<ToyCategory> ToyCategories { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=LAPTOP-NLRDC1FB\\SQLEXPRESS01;Database=ToyCompanyDB;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<ManufacturingPlantToy>(entity =>
            {
                entity.HasKey(e => new { e.ManufacturingPlantId, e.ToyId });

                entity.HasIndex(e => e.ToyId, "IX_ManufacturingPlantToys_ToyId");

                entity.HasOne(d => d.ManufacturingPlant)
                    .WithMany(p => p.ManufacturingPlantToys)
                    .HasForeignKey(d => d.ManufacturingPlantId);

                entity.HasOne(d => d.Toy)
                    .WithMany(p => p.ManufacturingPlantToys)
                    .HasForeignKey(d => d.ToyId);
            });

            modelBuilder.Entity<Order>(entity =>
            {
                entity.HasIndex(e => e.CustomerId, "IX_Orders_CustomerId");

                entity.HasOne(d => d.Customer)
                    .WithMany(p => p.Orders)
                    .HasForeignKey(d => d.CustomerId);
            });

            modelBuilder.Entity<OrderDetail>(entity =>
            {
                entity.HasKey(e => new { e.OrderId, e.ToyId, e.ShipToId });

                entity.HasIndex(e => e.ShipToId, "IX_OrderDetails_ShipToId");

                entity.HasIndex(e => e.ToyId, "IX_OrderDetails_ToyId");

                entity.Property(e => e.ToBePaid).HasColumnType("decimal(18, 2)");

                entity.Property(e => e.Total).HasColumnType("decimal(18, 2)");

                entity.HasOne(d => d.Order)
                    .WithMany(p => p.OrderDetails)
                    .HasForeignKey(d => d.OrderId);

                entity.HasOne(d => d.ShipTo)
                    .WithMany(p => p.OrderDetails)
                    .HasForeignKey(d => d.ShipToId)
                    .OnDelete(DeleteBehavior.ClientSetNull);

                entity.HasOne(d => d.Toy)
                    .WithMany(p => p.OrderDetails)
                    .HasForeignKey(d => d.ToyId);
            });

            modelBuilder.Entity<ShipTo>(entity =>
            {
                entity.HasIndex(e => e.CustomerId, "IX_ShipTos_CustomerId");

                entity.HasOne(d => d.Customer)
                    .WithMany(p => p.ShipTos)
                    .HasForeignKey(d => d.CustomerId);
            });

            modelBuilder.Entity<Toy>(entity =>
            {
                entity.HasIndex(e => e.ToyCategoryId, "IX_Toys_ToyCategoryId");

                entity.Property(e => e.Price).HasColumnType("decimal(18, 2)");

                entity.HasOne(d => d.ToyCategory)
                    .WithMany(p => p.Toys)
                    .HasForeignKey(d => d.ToyCategoryId);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
