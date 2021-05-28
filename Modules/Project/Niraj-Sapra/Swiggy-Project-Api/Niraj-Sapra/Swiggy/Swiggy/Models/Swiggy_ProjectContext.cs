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
        public virtual DbSet<Creditmemo> Creditmemos { get; set; }
        public virtual DbSet<Customer> Customers { get; set; }
        public virtual DbSet<Invoice> Invoices { get; set; }
        public virtual DbSet<Offer> Offers { get; set; }
        public virtual DbSet<OfferStatus> OfferStatuses { get; set; }
        public virtual DbSet<Order> Orders { get; set; }
        public virtual DbSet<OrderStatus> OrderStatuses { get; set; }
        public virtual DbSet<Payment> Payments { get; set; }
        public virtual DbSet<PaymentType> PaymentTypes { get; set; }
        public virtual DbSet<Product> Products { get; set; }
        public virtual DbSet<Quote> Quotes { get; set; }
        public virtual DbSet<QuoteItem> QuoteItems { get; set; }
        public virtual DbSet<Restorent> Restorents { get; set; }
        public virtual DbSet<Shipment> Shipments { get; set; }
        public virtual DbSet<ViewProduct> ViewProducts { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Data Source=DESKTOP-FPEESG3;Initial Catalog=Swiggy_Project;Integrated Security=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Category>(entity =>
            {
                entity.ToTable("Category");

                entity.Property(e => e.CategoryId)
                    .ValueGeneratedNever()
                    .HasColumnName("Category_Id");

                entity.Property(e => e.CategoryName)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Category_Name");

                entity.Property(e => e.ResIdcategory).HasColumnName("Res_IDCATEGORY");

                entity.HasOne(d => d.ResIdcategoryNavigation)
                    .WithMany(p => p.Categories)
                    .HasForeignKey(d => d.ResIdcategory)
                    .HasConstraintName("fkrescategory");
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

                entity.Property(e => e.CustomerEmail)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("Customer_Email");

                entity.Property(e => e.CustomerName)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Customer_Name");

                entity.Property(e => e.CustomerPhoneno)
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .HasColumnName("Customer_Phoneno");
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
                entity.ToTable("Offer");

                entity.Property(e => e.OfferId)
                    .ValueGeneratedNever()
                    .HasColumnName("Offer_Id");

                entity.Property(e => e.OfferDiscountPrice)
                    .HasColumnType("money")
                    .HasColumnName("Offer_Discount_Price");

                entity.Property(e => e.OfferStatusId).HasColumnName("Offer_Status_id");

                entity.HasOne(d => d.OfferStatus)
                    .WithMany(p => p.Offers)
                    .HasForeignKey(d => d.OfferStatusId)
                    .HasConstraintName("fkoffers");
            });

            modelBuilder.Entity<OfferStatus>(entity =>
            {
                entity.ToTable("Offer_Status");

                entity.Property(e => e.OfferStatusId)
                    .ValueGeneratedNever()
                    .HasColumnName("Offer_Status_id");

                entity.Property(e => e.OfferStatus1)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Offer_Status_");
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

                entity.HasOne(d => d.Offer)
                    .WithMany(p => p.Orders)
                    .HasForeignKey(d => d.OfferId)
                    .HasConstraintName("FKofferid");
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
                entity.ToTable("Payment");

                entity.Property(e => e.PaymentId)
                    .ValueGeneratedNever()
                    .HasColumnName("Payment_Id");

                entity.Property(e => e.CurrentTimes)
                    .HasColumnType("datetime")
                    .HasColumnName("Current_times");

                entity.Property(e => e.CustomerId).HasColumnName("CUSTOMER_ID");

                entity.Property(e => e.OrderId).HasColumnName("Order_ID");

                entity.Property(e => e.PayTotlePrice)
                    .HasColumnType("money")
                    .HasColumnName("PAY_TOTLE_PRICE");

                entity.HasOne(d => d.Customer)
                    .WithMany(p => p.Payments)
                    .HasForeignKey(d => d.CustomerId)
                    .HasConstraintName("fkPAYCUSTOMERID");

                entity.HasOne(d => d.Order)
                    .WithMany(p => p.Payments)
                    .HasForeignKey(d => d.OrderId)
                    .HasConstraintName("fkorderid");

                entity.HasOne(d => d.PaymenttypeNavigation)
                    .WithMany(p => p.Payments)
                    .HasForeignKey(d => d.Paymenttype)
                    .HasConstraintName("fkpaymenttype");
            });

            modelBuilder.Entity<PaymentType>(entity =>
            {
                entity.ToTable("Payment_type");

                entity.Property(e => e.PaymentTypeId)
                    .ValueGeneratedNever()
                    .HasColumnName("Payment_type_id");

                entity.Property(e => e.PaymentName)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Payment_Name");
            });

            modelBuilder.Entity<Product>(entity =>
            {
                entity.ToTable("Product");

                entity.Property(e => e.ProductId)
                    .ValueGeneratedNever()
                    .HasColumnName("Product_Id");

                entity.Property(e => e.ProductImage)
                    .HasMaxLength(200)
                    .IsUnicode(false)
                    .HasColumnName("Product_Image");

                entity.Property(e => e.ProductName)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Product_Name");

                entity.Property(e => e.ProductPrice)
                    .HasColumnType("money")
                    .HasColumnName("Product_Price");

                entity.Property(e => e.RestorentId).HasColumnName("Restorent_ID");

                entity.HasOne(d => d.Restorent)
                    .WithMany(p => p.Products)
                    .HasForeignKey(d => d.RestorentId)
                    .HasConstraintName("fkresid");
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

                entity.HasOne(d => d.QuoteItemProductNavigation)
                    .WithMany(p => p.QuoteItems)
                    .HasForeignKey(d => d.QuoteItemProduct)
                    .HasConstraintName("fkquoteItempro");
            });

            modelBuilder.Entity<Restorent>(entity =>
            {
                entity.ToTable("Restorent");

                entity.Property(e => e.RestorentId)
                    .ValueGeneratedNever()
                    .HasColumnName("Restorent_Id");

                entity.Property(e => e.RestFoodPricetwoperson)
                    .HasColumnType("money")
                    .HasColumnName("Rest_FoodPRICETWOPERSON");

                entity.Property(e => e.RestorentCity)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Restorent_City");

                entity.Property(e => e.RestorentImage)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("Restorent_IMAGE");

                entity.Property(e => e.RestorentName)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("Restorent_Name");
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
