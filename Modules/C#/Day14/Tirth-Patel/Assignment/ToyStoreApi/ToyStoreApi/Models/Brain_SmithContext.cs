using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace ToyStoreApi.Models
{
    public partial class Brain_SmithContext : DbContext
    {
        public Brain_SmithContext()
        {
        }

        public Brain_SmithContext(DbContextOptions<Brain_SmithContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Category> Categories { get; set; }
        public virtual DbSet<Customer> Customers { get; set; }
        public virtual DbSet<Order> Orders { get; set; }
        public virtual DbSet<OrderedItem> OrderedItems { get; set; }
        public virtual DbSet<Plant> Plants { get; set; }
        public virtual DbSet<ShipAddress> ShipAddresses { get; set; }
        public virtual DbSet<Toy> Toys { get; set; }
        public DbSet<vToysCategoy> toysCategories { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=.\\SQLExpress;Database=Brain_Smith;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Category>(entity =>
            {
                entity.Property(e => e.CategoryId).HasColumnName("CategoryID");

                entity.Property(e => e.CName).HasColumnName("C_Name");

                entity.Property(e => e.ManufacturingPlantId).HasColumnName("ManufacturingPlantID");
            });

            modelBuilder.Entity<Customer>(entity =>
            {
                entity.HasKey(e => e.Cid);

                entity.Property(e => e.Cid).HasColumnName("CId");
            });

            modelBuilder.Entity<Order>(entity =>
            {
                entity.HasIndex(e => e.CustomersCid, "IX_Orders_CustomersCId");

                entity.Property(e => e.OrderId).HasColumnName("OrderID");

                entity.Property(e => e.Cid).HasColumnName("CId");

                entity.Property(e => e.CustomersCid).HasColumnName("CustomersCId");

                entity.HasOne(d => d.CustomersC)
                    .WithMany(p => p.Orders)
                    .HasForeignKey(d => d.CustomersCid);
            });

            modelBuilder.Entity<OrderedItem>(entity =>
            {
                entity.HasIndex(e => e.OrdersOrderId, "IX_OrderedItems_OrdersOrderID");

                entity.HasIndex(e => e.ToysId, "IX_OrderedItems_ToysID");

                entity.Property(e => e.OrderId).HasColumnName("OrderID");

                entity.Property(e => e.OrdersOrderId).HasColumnName("OrdersOrderID");

                entity.Property(e => e.ToysId).HasColumnName("ToysID");

                entity.HasOne(d => d.OrdersOrder)
                    .WithMany(p => p.OrderedItems)
                    .HasForeignKey(d => d.OrdersOrderId);

                entity.HasOne(d => d.Toys)
                    .WithMany(p => p.OrderedItems)
                    .HasForeignKey(d => d.ToysId);
            });

            modelBuilder.Entity<Plant>(entity =>
            {
                entity.HasKey(e => e.ManufacuringPlantId);

                entity.Property(e => e.ManufacuringPlantId).HasColumnName("ManufacuringPlantID");
            });

            modelBuilder.Entity<ShipAddress>(entity =>
            {
                entity.HasKey(e => e.ShipId);

                entity.HasIndex(e => e.CustomerId, "IX_ShipAddresses_CustomerID");

                entity.Property(e => e.ShipId).HasColumnName("ShipID");

                entity.Property(e => e.CustomerId).HasColumnName("CustomerID");

                entity.HasOne(d => d.Customer)
                    .WithMany(p => p.ShipAddresses)
                    .HasForeignKey(d => d.CustomerId);
            });

            modelBuilder.Entity<Toy>(entity =>
            {
                entity.HasIndex(e => e.CategoriesCategoryId, "IX_Toys_CategoriesCategoryID");

                entity.Property(e => e.ToyId).HasColumnName("ToyID");

                entity.Property(e => e.CategoriesCategoryId).HasColumnName("CategoriesCategoryID");

                entity.HasOne(d => d.CategoriesCategory)
                    .WithMany(p => p.Toys)
                    .HasForeignKey(d => d.CategoriesCategoryId);
            });
            modelBuilder.Entity<vToysCategoy>().HasNoKey();
            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
