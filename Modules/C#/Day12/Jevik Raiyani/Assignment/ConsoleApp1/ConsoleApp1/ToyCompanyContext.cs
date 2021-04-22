using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace ConsoleApp1
{
    public partial class ToyCompanyContext : DbContext
    {
        public ToyCompanyContext()
        {
        }

        public ToyCompanyContext(DbContextOptions<ToyCompanyContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Address> Addresses { get; set; }
        public virtual DbSet<Customer> Customers { get; set; }
        public virtual DbSet<CustomerWithAddress> CustomerWithAddresses { get; set; }
        public virtual DbSet<Order> Orders { get; set; }
        public virtual DbSet<Plant> Plants { get; set; }
        public virtual DbSet<Toy> Toys { get; set; }
        public virtual DbSet<TypeOfToy> TypeOfToys { get; set; }
        public virtual DbSet<Vorder> Vorders { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Data Source=JEVIK\\SQLEXPRESS;Initial Catalog=ToyCompany;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Address>(entity =>
            {
                entity.Property(e => e.AddressId).HasColumnName("AddressID");

                entity.Property(e => e.Address1).HasColumnName("Address");
            });

            modelBuilder.Entity<Customer>(entity =>
            {
                entity.Property(e => e.CustomerId).HasColumnName("CustomerID");
            });

            modelBuilder.Entity<CustomerWithAddress>(entity =>
            {
                entity.HasKey(e => e.Caid);

                entity.HasIndex(e => e.AddressesAddressId, "IX_CustomerWithAddresses_AddressesAddressID");

                entity.HasIndex(e => e.CustomersCustomerId, "IX_CustomerWithAddresses_CustomersCustomerID");

                entity.Property(e => e.Caid).HasColumnName("CAId");

                entity.Property(e => e.AddressesAddressId).HasColumnName("AddressesAddressID");

                entity.Property(e => e.CustomersCustomerId).HasColumnName("CustomersCustomerID");

                entity.HasOne(d => d.AddressesAddress)
                    .WithMany(p => p.CustomerWithAddresses)
                    .HasForeignKey(d => d.AddressesAddressId);

                entity.HasOne(d => d.CustomersCustomer)
                    .WithMany(p => p.CustomerWithAddresses)
                    .HasForeignKey(d => d.CustomersCustomerId);
            });

            modelBuilder.Entity<Order>(entity =>
            {
                entity.HasIndex(e => e.CustomerWithAddressCaid, "IX_Orders_CustomerWithAddressCAId");

                entity.HasIndex(e => e.ToysToyId, "IX_Orders_ToysToyId");

                entity.Property(e => e.CustomerWithAddressCaid).HasColumnName("CustomerWithAddressCAId");

                entity.HasOne(d => d.CustomerWithAddressCa)
                    .WithMany(p => p.Orders)
                    .HasForeignKey(d => d.CustomerWithAddressCaid);

                entity.HasOne(d => d.ToysToy)
                    .WithMany(p => p.Orders)
                    .HasForeignKey(d => d.ToysToyId);
            });

            modelBuilder.Entity<Toy>(entity =>
            {
                entity.HasIndex(e => e.TypeOfToyTypeId, "IX_Toys_TypeOfToyTypeId");

                entity.HasOne(d => d.TypeOfToyType)
                    .WithMany(p => p.Toys)
                    .HasForeignKey(d => d.TypeOfToyTypeId);
            });

            modelBuilder.Entity<TypeOfToy>(entity =>
            {
                entity.HasKey(e => e.TypeId);

                entity.HasIndex(e => e.PlantsPlantId, "IX_TypeOfToys_PlantsPlantId");

                entity.HasOne(d => d.PlantsPlant)
                    .WithMany(p => p.TypeOfToys)
                    .HasForeignKey(d => d.PlantsPlantId);
            });

            modelBuilder.Entity<Vorder>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("VOrders");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
