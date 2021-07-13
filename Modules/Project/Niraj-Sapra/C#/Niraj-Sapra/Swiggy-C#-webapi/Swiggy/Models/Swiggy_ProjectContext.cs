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

        public virtual DbSet<Cart> Carts { get; set; }
        public virtual DbSet<Category> Categories { get; set; }
        public virtual DbSet<City> Cities { get; set; }
        public virtual DbSet<Offer> Offers { get; set; }
        public virtual DbSet<OrderStatus> OrderStatuses { get; set; }
        public virtual DbSet<Ordertable> Ordertables { get; set; }
        public virtual DbSet<Payment> Payments { get; set; }
        public virtual DbSet<Paymenttable> Paymenttables { get; set; }
        public virtual DbSet<Product> Products { get; set; }
        public virtual DbSet<Quote> Quotes { get; set; }
        public virtual DbSet<Restaurant> Restaurants { get; set; }
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

            modelBuilder.Entity<Cart>(entity =>
            {
                entity.ToTable("Cart");

                entity.Property(e => e.ProductId).HasColumnName("productId");

                entity.Property(e => e.ProductName)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("productName");

                entity.Property(e => e.ProductPrice).HasColumnName("productPrice");

                entity.Property(e => e.ProductQuantity).HasColumnName("productQuantity");
            });

            modelBuilder.Entity<Category>(entity =>
            {
                entity.ToTable("Category");

                entity.Property(e => e.CategoryId).HasColumnName("Category_Id");

                entity.Property(e => e.CategoryName)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("Category_Name");

                entity.Property(e => e.ResId).HasColumnName("Res_Id");

                entity.Property(e => e.ResName)
                    .HasMaxLength(255)
                    .IsFixedLength(true);
            });

            modelBuilder.Entity<City>(entity =>
            {
                entity.ToTable("City");

                entity.Property(e => e.CityName)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Offer>(entity =>
            {
                entity.ToTable("Offer");

                entity.Property(e => e.OfferDiscountPrice).HasColumnType("money");

                entity.Property(e => e.OfferName)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<OrderStatus>(entity =>
            {
                entity.ToTable("OrderStatus");

                entity.Property(e => e.Orderstauts)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsFixedLength(true);
            });

            modelBuilder.Entity<Ordertable>(entity =>
            {
                entity.HasKey(e => e.Orderid)
                    .HasName("PK__Ordertab__080E3775578830CC");

                entity.ToTable("Ordertable");

                entity.Property(e => e.Orderid).HasColumnName("orderid");

                entity.Property(e => e.CustomerName)
                    .IsRequired()
                    .HasMaxLength(100);

                entity.Property(e => e.Dates)
                    .HasColumnType("datetime")
                    .HasColumnName("dates");

                entity.HasOne(d => d.Customer)
                    .WithMany(p => p.Ordertables)
                    .HasForeignKey(d => d.CustomerId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_userid");

                entity.HasOne(d => d.OrderstatsNavigation)
                    .WithMany(p => p.Ordertables)
                    .HasForeignKey(d => d.Orderstats)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_orderstatus");

                entity.HasOne(d => d.Payment)
                    .WithMany(p => p.Ordertables)
                    .HasForeignKey(d => d.Paymentid)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_paymentdats");
            });

            modelBuilder.Entity<Payment>(entity =>
            {
                entity.ToTable("Payment");

                entity.Property(e => e.PaymentName)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Paymenttable>(entity =>
            {
                entity.HasKey(e => e.Payid)
                    .HasName("PK__paymentt__082D8EEB6B7BC8BD");

                entity.ToTable("paymenttable");

                entity.Property(e => e.Payid).HasColumnName("payid");

                entity.Property(e => e.CardName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .HasColumnName("cardName");

                entity.Property(e => e.Cardcvv)
                    .IsRequired()
                    .HasMaxLength(3)
                    .HasColumnName("cardcvv");

                entity.Property(e => e.Cardnumber)
                    .IsRequired()
                    .HasMaxLength(12)
                    .HasColumnName("cardnumber");

                entity.Property(e => e.Orderid).HasColumnName("orderid");

                entity.Property(e => e.Userid).HasColumnName("userid");

                entity.HasOne(d => d.Order)
                    .WithMany(p => p.Paymenttables)
                    .HasForeignKey(d => d.Orderid)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_orderSales");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Paymenttables)
                    .HasForeignKey(d => d.Userid)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_TempSales");
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
