using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace Day14.Models
{
    public partial class Day14AssignmentContext : DbContext
    {
        public Day14AssignmentContext()
        {
        }

        public Day14AssignmentContext(DbContextOptions<Day14AssignmentContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Customer> Customers { get; set; }
        public virtual DbSet<Offer> Offers { get; set; }
        public virtual DbSet<Order> Orders { get; set; }
        public virtual DbSet<Plant> Plants { get; set; }
        public virtual DbSet<Toy> Toys { get; set; }
        public virtual DbSet<TypeOfToy> TypeOfToys { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Server=.\\SQLEXPRESS01;Database=Day12Assignment;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Offer>(entity =>
            {
                entity.HasKey(e => e.OfferValue);

                entity.Property(e => e.OfferValue).HasColumnName("offerValue");

                entity.Property(e => e.Value).HasColumnName("value");
            });

            modelBuilder.Entity<Order>(entity =>
            {
                entity.HasIndex(e => e.CustomerId, "IX_Orders_CustomerId");

                entity.HasIndex(e => e.OfferValue, "IX_Orders_offerValue");

                entity.Property(e => e.OfferValue).HasColumnName("offerValue");

                entity.HasOne(d => d.Customer)
                    .WithMany(p => p.Orders)
                    .HasForeignKey(d => d.CustomerId);

                entity.HasOne(d => d.OfferValueNavigation)
                    .WithMany(p => p.Orders)
                    .HasForeignKey(d => d.OfferValue);
            });

            modelBuilder.Entity<Toy>(entity =>
            {
                entity.HasIndex(e => e.PlantId, "IX_Toys_PlantId");

                entity.HasIndex(e => e.TypeId, "IX_Toys_TypeId");

                entity.HasOne(d => d.Plant)
                    .WithMany(p => p.Toys)
                    .HasForeignKey(d => d.PlantId);

                entity.HasOne(d => d.Type)
                    .WithMany(p => p.Toys)
                    .HasForeignKey(d => d.TypeId);
            });

            modelBuilder.Entity<TypeOfToy>(entity =>
            {
                entity.HasKey(e => e.TypeId);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
