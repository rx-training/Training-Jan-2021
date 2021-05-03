using System;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using WebApplicationPracticeDay17.Authentication;

#nullable disable

namespace WebApplicationPracticeDay17.Models
{
    public partial class carsalesContext : IdentityDbContext<ApplicationUser>
    {
        public carsalesContext(DbContextOptions<carsalesContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Car> Cars { get; set; }
        public virtual DbSet<Customer> Customers { get; set; }
        public virtual DbSet<Dealership> Dealerships { get; set; }
        public virtual DbSet<Inventory> Inventories { get; set; }
        public virtual DbSet<ReportsTo> ReportsTos { get; set; }
        public virtual DbSet<Sale> Sales { get; set; }
        public virtual DbSet<SalesPerson> SalesPersons { get; set; }
        public virtual DbSet<TransactionIndex9805664507834fe2Aabd131d1864ebfc> TransactionIndex9805664507834fe2Aabd131d1864ebfcs { get; set; }
        public virtual DbSet<WorksAt> WorksAts { get; set; }

//        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
//        {
//            if (!optionsBuilder.IsConfigured)
//            {
//#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
//                optionsBuilder.UseSqlServer("Server=DESKTOP-G7G6FSU\\SQLEXPRESS;Database=carsales;Trusted_Connection=True;");
//            }
//        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Car>(entity =>
            {
                entity.HasKey(e => e.Vin);

                entity.HasIndex(e => e.CarId, "IX_Cars")
                    .IsUnique();

                entity.Property(e => e.Vin)
                    .ValueGeneratedNever()
                    .HasColumnName("VIN");

                entity.Property(e => e.CarId).HasColumnName("CarID");

                entity.Property(e => e.Make)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.Model)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.Year).HasColumnType("numeric(4, 0)");
            });

            modelBuilder.Entity<Customer>(entity =>
            {
                entity.Property(e => e.CustomerId)
                    .ValueGeneratedNever()
                    .HasColumnName("CustomerID");

                entity.Property(e => e.Address)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.City)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.State)
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Dealership>(entity =>
            {
                entity.Property(e => e.DealershipId)
                    .ValueGeneratedNever()
                    .HasColumnName("DealershipID");

                entity.Property(e => e.Address)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.City)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.State)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Inventory>(entity =>
            {
                entity.ToTable("Inventory");

                entity.Property(e => e.InventoryId)
                    .ValueGeneratedNever()
                    .HasColumnName("InventoryID");

                entity.Property(e => e.DealershipId).HasColumnName("DealershipID");

                entity.Property(e => e.Vin).HasColumnName("VIN");

                entity.HasOne(d => d.Dealership)
                    .WithMany(p => p.Inventories)
                    .HasForeignKey(d => d.DealershipId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Inventory_Dealerships");

                entity.HasOne(d => d.VinNavigation)
                    .WithMany(p => p.Inventories)
                    .HasForeignKey(d => d.Vin)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Inventory_Cars");
            });

            modelBuilder.Entity<ReportsTo>(entity =>
            {
                entity.ToTable("ReportsTo");

                entity.Property(e => e.ReportsToId)
                    .ValueGeneratedNever()
                    .HasColumnName("ReportsToID");

                entity.Property(e => e.ManagingSalesPersonId).HasColumnName("ManagingSalesPersonID");

                entity.Property(e => e.SalesPersonId).HasColumnName("SalesPersonID");

                entity.HasOne(d => d.ManagingSalesPerson)
                    .WithMany(p => p.ReportsToManagingSalesPeople)
                    .HasForeignKey(d => d.ManagingSalesPersonId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ManagingSalesPersonID");

                entity.HasOne(d => d.SalesPerson)
                    .WithMany(p => p.ReportsToSalesPeople)
                    .HasForeignKey(d => d.SalesPersonId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_SalesPersonID");
            });

            modelBuilder.Entity<Sale>(entity =>
            {
                entity.Property(e => e.SaleId)
                    .ValueGeneratedNever()
                    .HasColumnName("SaleID");

                entity.Property(e => e.CustomerId).HasColumnName("CustomerID");

                entity.Property(e => e.DealershipId).HasColumnName("DealershipID");

                entity.Property(e => e.SaleDate).HasColumnType("date");

                entity.Property(e => e.SalesPersonId).HasColumnName("SalesPersonID");

                entity.Property(e => e.Vin).HasColumnName("VIN");

                entity.HasOne(d => d.Customer)
                    .WithMany(p => p.Sales)
                    .HasForeignKey(d => d.CustomerId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Sales_Customers");

                entity.HasOne(d => d.Dealership)
                    .WithMany(p => p.Sales)
                    .HasForeignKey(d => d.DealershipId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Sales_Dealerships");

                entity.HasOne(d => d.SalesPerson)
                    .WithMany(p => p.Sales)
                    .HasForeignKey(d => d.SalesPersonId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Sales_SalesPersons");

                entity.HasOne(d => d.VinNavigation)
                    .WithMany(p => p.Sales)
                    .HasForeignKey(d => d.Vin)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Sales_Cars");
            });

            modelBuilder.Entity<SalesPerson>(entity =>
            {
                entity.Property(e => e.SalesPersonId)
                    .ValueGeneratedNever()
                    .HasColumnName("SalesPersonID");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<TransactionIndex9805664507834fe2Aabd131d1864ebfc>(entity =>
            {
                entity.ToTable("_TransactionIndex_98056645-0783-4fe2-aabd-131d1864ebfc");

                entity.Property(e => e.Id).ValueGeneratedNever();
            });

            modelBuilder.Entity<WorksAt>(entity =>
            {
                entity.ToTable("WorksAt");

                entity.Property(e => e.WorksAtId)
                    .ValueGeneratedNever()
                    .HasColumnName("WorksAtID");

                entity.Property(e => e.DealershipId).HasColumnName("DealershipID");

                entity.Property(e => e.SalesPersonId).HasColumnName("SalesPersonID");

                entity.HasOne(d => d.Dealership)
                    .WithMany(p => p.WorksAts)
                    .HasForeignKey(d => d.DealershipId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_WorksAt_Dealerships");

                entity.HasOne(d => d.SalesPerson)
                    .WithMany(p => p.WorksAts)
                    .HasForeignKey(d => d.SalesPersonId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_WorksAt_SalesPersons");
            });

           // OnModelCreatingPartial(modelBuilder);
        }

       // partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
