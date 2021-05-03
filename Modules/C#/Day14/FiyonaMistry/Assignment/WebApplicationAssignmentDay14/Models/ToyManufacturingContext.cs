using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace WebApplicationAssignmentDay14.Models
{
    public partial class ToyManufacturingContext : DbContext
    {
        public ToyManufacturingContext()
        {
        }

        public ToyManufacturingContext(DbContextOptions<ToyManufacturingContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Address> Addresses { get; set; }
        public virtual DbSet<Customer> Customers { get; set; }
        public virtual DbSet<ManufacturingPlant> ManufacturingPlants { get; set; }
        public virtual DbSet<Order> Orders { get; set; }
        public virtual DbSet<OrderToy> OrderToys { get; set; }
        public virtual DbSet<Toy> Toys { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=DESKTOP-G7G6FSU\\SQLEXPRESS;Database=ToyManufacturing;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Address>(entity =>
            {
                entity.HasKey(e => e.AdId);

                entity.HasIndex(e => e.CustId, "IX_Addresses_CustId");

                entity.Property(e => e.Address1).HasColumnName("Address");

                entity.HasOne(d => d.Cust)
                    .WithMany(p => p.Addresses)
                    .HasForeignKey(d => d.CustId);
            });

            modelBuilder.Entity<Customer>(entity =>
            {
                entity.HasKey(e => e.CustId);

                entity.Property(e => e.Dob).HasColumnName("DOB");

                entity.Property(e => e.Gender)
                    .IsRequired()
                    .HasMaxLength(1);
            });

            modelBuilder.Entity<ManufacturingPlant>(entity =>
            {
                entity.HasKey(e => e.PlantId);
            });

            modelBuilder.Entity<Order>(entity =>
            {
                entity.HasIndex(e => e.AddressesAdId, "IX_Orders_AddressesAdId");

                entity.HasIndex(e => e.CustomersCustId, "IX_Orders_CustomersCustId");

                entity.HasOne(d => d.AddressesAd)
                    .WithMany(p => p.Orders)
                    .HasForeignKey(d => d.AddressesAdId);

                entity.HasOne(d => d.CustomersCust)
                    .WithMany(p => p.Orders)
                    .HasForeignKey(d => d.CustomersCustId);
            });

            modelBuilder.Entity<OrderToy>(entity =>
            {
                entity.HasKey(e => new { e.ToyId, e.OrderId });

                entity.HasIndex(e => e.OrdersOrderId, "IX_OrderToys_OrdersOrderId");

                entity.HasIndex(e => e.ToysToyId, "IX_OrderToys_ToysToyId");

                entity.HasOne(d => d.OrdersOrder)
                    .WithMany(p => p.OrderToys)
                    .HasForeignKey(d => d.OrdersOrderId);

                entity.HasOne(d => d.ToysToy)
                    .WithMany(p => p.OrderToys)
                    .HasForeignKey(d => d.ToysToyId);
            });

            modelBuilder.Entity<Toy>(entity =>
            {
                entity.HasIndex(e => e.PlantId, "IX_Toys_PlantId");

                entity.HasOne(d => d.Plant)
                    .WithMany(p => p.Toys)
                    .HasForeignKey(d => d.PlantId);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
