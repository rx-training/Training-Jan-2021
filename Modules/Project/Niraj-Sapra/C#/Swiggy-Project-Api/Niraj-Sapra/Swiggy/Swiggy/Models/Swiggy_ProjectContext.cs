using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace Swiggy.Models
{
    public partial class Swiggy_ProjectContext : DbContext
    {
        public Swiggy_ProjectContext()
        {
        }

        public Swiggy_ProjectContext(DbContextOptions<Swiggy_ProjectContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Category> Categories { get; set; }
        public virtual DbSet<City> Cities { get; set; }
        public virtual DbSet<Creditmemo> Creditmemos { get; set; }
        public virtual DbSet<Customer> Customers { get; set; }
        public virtual DbSet<Invoice> Invoices { get; set; }
        public virtual DbSet<Offer> Offers { get; set; }
        public virtual DbSet<Order> Orders { get; set; }
        public virtual DbSet<OrderStatus> OrderStatuses { get; set; }
        public virtual DbSet<Payment> Payments { get; set; }
        public virtual DbSet<Product> Products { get; set; }
        public virtual DbSet<Quote> Quotes { get; set; }
        public virtual DbSet<QuoteItem> QuoteItems { get; set; }
        public virtual DbSet<Restaurant> Restaurants { get; set; }
        public virtual DbSet<Shipment> Shipments { get; set; }
        public virtual DbSet<Test> Tests { get; set; }
        public virtual DbSet<UserSignup> UserSignups { get; set; }
        public virtual DbSet<ViewProduct> ViewProducts { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Data Source=DESKTOP-FPEESG3;Initial Catalog=Swiggy_Project;Integrated Security=True");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Category>(entity =>
            {
                entity.ToTable("Category");

                entity.Property(e => e.CategoryId).HasColumnName("Category_Id");

                entity.Property(e => e.CategoryName)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("Category_Name");
            });

            modelBuilder.Entity<City>(entity =>
            {
                entity.ToTable("City");

                entity.Property(e => e.CityName)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Creditmemo>(entity =>
            {
                entity.ToTable("Creditmemo");

                entity.Property(e => e.CreditmemoId)
                    .ValueGeneratedNever()
                    .HasColumnName("Creditmemo_Id");

                entity.Property(e => e.CustomerId).HasColumnName("Customer_id");

                entity.Property(e => e.OrderId).HasColumnName("Order_Id");

                entity.Property(e => e.TotalPrice)
                    .HasColumnType("money")
                    .HasColumnName("Total_price");

                entity.HasOne(d => d.Customer)
                    .WithMany(p => p.Creditmemos)
                    .HasForeignKey(d => d.CustomerId)
                    .HasConstraintName("fkcustomeridcraditmemo");

                entity.HasOne(d => d.Order)
                    .WithMany(p => p.Creditmemos)
                    .HasForeignKey(d => d.OrderId)
                    .HasConstraintName("fkordercreditmemo");
            });

            modelBuilder.Entity<Customer>(entity =>
            {
                entity.ToTable("Customer");

                entity.Property(e => e.CustomerId)
                    .ValueGeneratedNever()
                    .HasColumnName("Customer_Id");

                entity.Property(e => e.CustomerName)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Customer_Name");
            });

            modelBuilder.Entity<Invoice>(entity =>
            {
                entity.ToTable("Invoice");

                entity.Property(e => e.InvoiceId)
                    .ValueGeneratedNever()
                    .HasColumnName("Invoice_Id");

                entity.Property(e => e.CustomerId).HasColumnName("Customer_id");

                entity.Property(e => e.OrderId).HasColumnName("Order_Id");

                entity.Property(e => e.TotalPrice)
                    .HasColumnType("money")
                    .HasColumnName("Total_price");

                entity.HasOne(d => d.Customer)
                    .WithMany(p => p.Invoices)
                    .HasForeignKey(d => d.CustomerId)
                    .HasConstraintName("fkcustomeridinvoice");

                entity.HasOne(d => d.Order)
                    .WithMany(p => p.Invoices)
                    .HasForeignKey(d => d.OrderId)
                    .HasConstraintName("fkorderinvoiceid");
            });

            modelBuilder.Entity<Offer>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("Offer");

                entity.Property(e => e.OfferDiscountPrice).HasColumnType("money");

                entity.Property(e => e.OfferId).ValueGeneratedOnAdd();

                entity.Property(e => e.OfferName)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Order>(entity =>
            {
                entity.Property(e => e.OrderId)
                    .ValueGeneratedNever()
                    .HasColumnName("Order_Id");

                entity.Property(e => e.CurrentTimes)
                    .HasColumnType("date")
                    .HasColumnName("Current_times");

                entity.Property(e => e.CustomerId).HasColumnName("CUSTOMER_ID");

                entity.Property(e => e.OfferId).HasColumnName("Offer_Id");

                entity.HasOne(d => d.Customer)
                    .WithMany(p => p.Orders)
                    .HasForeignKey(d => d.CustomerId)
                    .HasConstraintName("fkcustomerid");
            });

            modelBuilder.Entity<OrderStatus>(entity =>
            {
                entity.ToTable("Order_Status");

                entity.Property(e => e.OrderStatusId)
                    .ValueGeneratedNever()
                    .HasColumnName("Order_Status_id");

                entity.Property(e => e.OrderStatus1)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Order_Status_");
            });

            modelBuilder.Entity<Payment>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("Payment");

                entity.Property(e => e.PaymentId).ValueGeneratedOnAdd();

                entity.Property(e => e.PaymentName)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Product>(entity =>
            {
                entity.ToTable("Product");

                entity.Property(e => e.ProductImage)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("Product_Image");

                entity.Property(e => e.ProductName)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.ProductPrice)
                    .HasColumnType("money")
                    .HasColumnName("Product_Price");
            });

            modelBuilder.Entity<Quote>(entity =>
            {
                entity.ToTable("Quote");

                entity.Property(e => e.QuoteId)
                    .ValueGeneratedNever()
                    .HasColumnName("Quote_id");

                entity.Property(e => e.QuoteDiscount)
                    .HasColumnType("money")
                    .HasColumnName("Quote_Discount");

                entity.Property(e => e.QuoteFinalTotal)
                    .HasColumnType("money")
                    .HasColumnName("Quote_FinalTotal");

                entity.Property(e => e.QuoteSubtotal)
                    .HasColumnType("money")
                    .HasColumnName("Quote_subtotal");

                entity.Property(e => e.ShippmentName)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ShippmentTax)
                    .HasColumnType("money")
                    .HasColumnName("Shippment_tax");
            });

            modelBuilder.Entity<QuoteItem>(entity =>
            {
                entity.ToTable("Quote_Item");

                entity.Property(e => e.QuoteItemId)
                    .ValueGeneratedNever()
                    .HasColumnName("Quote_Item_id");

                entity.Property(e => e.QuoteItemProduct).HasColumnName("Quote_Item_product");
            });

            modelBuilder.Entity<Restaurant>(entity =>
            {
                entity.ToTable("Restaurant");

                entity.Property(e => e.RestFoodPricetwoperson).HasColumnType("money");

                entity.Property(e => e.RestaurantCity)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.RestaurantName)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Restaurantfoodtype)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.RestorentImage)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Shipment>(entity =>
            {
                entity.ToTable("Shipment");

                entity.Property(e => e.ShipmentId)
                    .ValueGeneratedNever()
                    .HasColumnName("Shipment_Id");

                entity.Property(e => e.CustomerId).HasColumnName("Customer_id");

                entity.Property(e => e.OrderId).HasColumnName("Order_Id");

                entity.Property(e => e.ShipmentStatus)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Shipment_Status");

                entity.HasOne(d => d.Customer)
                    .WithMany(p => p.Shipments)
                    .HasForeignKey(d => d.CustomerId)
                    .HasConstraintName("fkcustomeridshipment");

                entity.HasOne(d => d.Order)
                    .WithMany(p => p.Shipments)
                    .HasForeignKey(d => d.OrderId)
                    .HasConstraintName("fkorderidshipment");
            });

            modelBuilder.Entity<Test>(entity =>
            {
                entity.ToTable("Test");

                entity.Property(e => e.TestName)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<UserSignup>(entity =>
            {
                entity.HasKey(e => e.UserId)
                    .HasName("PK_UserSignupData");

                entity.ToTable("UserSignup");

                entity.Property(e => e.UserId).HasColumnName("User_id");

                entity.Property(e => e.Emails).HasMaxLength(50);

                entity.Property(e => e.Lpassword)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.Names)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.Options)
                    .IsRequired()
                    .HasMaxLength(10);

                entity.Property(e => e.Phoneno)
                    .IsRequired()
                    .HasMaxLength(10);
            });

            modelBuilder.Entity<ViewProduct>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("VIEW_Product");

                entity.Property(e => e.ProductName)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Product_Name");

                entity.Property(e => e.ProductPrice)
                    .HasColumnType("money")
                    .HasColumnName("Product_Price");

                entity.Property(e => e.RestorentName)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("Restorent_Name");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
