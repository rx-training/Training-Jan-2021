using System;
using AmazonDemo.Authenticate;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace AmazonDemo.Models
{
    public  class AmazonContext : IdentityDbContext<ApplicationUserAmazon>
    {
        
      
        public AmazonContext(DbContextOptions<AmazonContext> options)
            : base(options)
        {
        }
        public virtual DbSet<Admin> Admins { get; set; }
        public virtual DbSet<Brand> Brands { get; set; }
        public virtual DbSet<BrandCategoryProduct> BrandCategoryProducts { get; set; }
        public virtual DbSet<Cart> Carts { get; set; }
        public virtual DbSet<Category> Categories { get; set; }
        public virtual DbSet<City> Cities { get; set; }
        public virtual DbSet<Country> Countries { get; set; }
        public virtual DbSet<Order> Orders { get; set; }
        public virtual DbSet<PlacedOrder> PlacedOrders { get; set; }
        public virtual DbSet<PlacedProductDetail> PlacedProductDetails { get; set; }
        public virtual DbSet<Product> Products { get; set; }
        public virtual DbSet<ProductDescription> ProductDescriptions { get; set; }
        public virtual DbSet<ProductOrderedDetail> ProductOrderedDetails { get; set; }
        public virtual DbSet<Seller> Sellers { get; set; }
        public virtual DbSet<SellerAddress> SellerAddresses { get; set; }
        public virtual DbSet<SellerDeliverable> SellerDeliverables { get; set; }
        public virtual DbSet<SellerProduct> SellerProducts { get; set; }
        public virtual DbSet<SellerProductCity> SellerProductCities { get; set; }
        public virtual DbSet<State> States { get; set; }
        public virtual DbSet<User> Users { get; set; }
        public virtual DbSet<UserAddress> UserAddresses { get; set; }

        

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            
            modelBuilder.Entity<Admin>(entity =>
            {
                entity.ToTable("Admin");

                entity.Property(e => e.AdminAddress)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.AdminAuthority)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasDefaultValueSql("('Nothing')");

                entity.Property(e => e.AdminContactNumber)
                    .IsRequired()
                    .HasMaxLength(13)
                    .IsUnicode(false);

                entity.Property(e => e.AdminDate)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.AdminEmail)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.AdminFullName)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.AdminLoginId)
                    .IsRequired()
                    .HasMaxLength(15)
                    .IsUnicode(false);

                entity.Property(e => e.AdminPassword)
                    .IsRequired()
                    .HasMaxLength(15)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Brand>(entity =>
            {
                entity.Property(e => e.BrandName)
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<BrandCategoryProduct>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("brandCategoryProduct");

                entity.Property(e => e.BrandName)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.CategoryId).HasColumnName("CategoryID");

                entity.Property(e => e.CategoryName)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ProductDate).HasColumnType("datetime");

                entity.Property(e => e.ProductName)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Cart>(entity =>
            {
                entity.HasOne(d => d.Product)
                    .WithMany(p => p.Carts)
                    .HasForeignKey(d => d.ProductId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fkProductsCart");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Carts)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fkCartUserId");
            });

            modelBuilder.Entity<Category>(entity =>
            {
                entity.Property(e => e.CategoryId).HasColumnName("CategoryID");

                entity.Property(e => e.CategoryName)
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<City>(entity =>
            {

                entity.Property(e => e.CityName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.HasOne(d => d.State)
                    .WithMany(p => p.Cities)
                    .HasForeignKey(d => d.StateId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fkCitiesState");
            });

            modelBuilder.Entity<Country>(entity =>
            {
                entity.Property(e => e.CountryId).ValueGeneratedNever();

                entity.Property(e => e.CountryName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Order>(entity =>
            {
                entity.Property(e => e.OrderedDate)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.Quantity).HasDefaultValueSql("((1))");

                entity.Property(e => e.Bill).HasDefaultValueSql("((0))");

                entity.HasOne(d => d.Product)
                    .WithMany(p => p.Orders)
                    .HasForeignKey(d => d.ProductId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fkOrderProductId");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Orders)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fkOrderUserId");
            });

            modelBuilder.Entity<PlacedOrder>(entity =>
            {
                entity.ToTable("PlacedOrder");

                entity.Property(e => e.PlacedOrderId).HasColumnName("PlacedOrderID");

                entity.Property(e => e.PlacedDate)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.PlacedStatus)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasDefaultValueSql("('Delivered')");

                entity.Property(e => e.ProductId).HasColumnName("ProductID");

                entity.Property(e => e.Quantity).HasDefaultValueSql("((1))");

                entity.Property(e => e.Bill).HasDefaultValueSql("((0))");

                entity.HasOne(d => d.Product)
                    .WithMany(p => p.PlacedOrders)
                    .HasForeignKey(d => d.ProductId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fkPlacedProduct");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.PlacedOrders)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fkplacedUser");
            });

            modelBuilder.Entity<PlacedProductDetail>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("placedProductDetail");

                entity.Property(e => e.FullName)
                    .IsRequired()
                    .HasMaxLength(150)
                    .IsUnicode(false)
                    .HasColumnName("Full Name");

                entity.Property(e => e.OrderedDate)
                    .HasColumnType("datetime")
                    .HasColumnName("ordered date");

                entity.Property(e => e.PlacedDate)
                    .HasColumnType("datetime")
                    .HasColumnName("placed date");

                entity.Property(e => e.ProductName)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.ProductPrice).HasColumnType("money");

                entity.Property(e => e.SellerCompanyName)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.SellerContactNo)
                    .IsRequired()
                    .HasMaxLength(13)
                    .IsUnicode(false);

                entity.Property(e => e.SellerEmail)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Product>(entity =>
            {
                entity.Property(e => e.ImgPath).IsUnicode(false);

                entity.Property(e => e.ProductDate)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.ProductName)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.ProductPrice).HasColumnType("money");

                entity.HasOne(d => d.Brand)
                    .WithMany(p => p.Products)
                    .HasForeignKey(d => d.BrandId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fkProductBrand");

                entity.HasOne(d => d.Category)
                    .WithMany(p => p.Products)
                    .HasForeignKey(d => d.CategoryId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fkproductCategory");
            });

            modelBuilder.Entity<ProductDescription>(entity =>
            {
                entity.ToTable("ProductDescription");

                entity.Property(e => e.DescriptionDate)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.ProductDescription1)
                    .IsRequired()
                    .HasColumnName("ProductDescription");

                entity.HasOne(d => d.Product)
                    .WithMany(p => p.ProductDescriptions)
                    .HasForeignKey(d => d.ProductId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fkDescriptionProductId");
            });

            modelBuilder.Entity<ProductOrderedDetail>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("productOrderedDetail");

                entity.Property(e => e.OrderedDate).HasColumnType("datetime");

                entity.Property(e => e.ProductName)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.SellerId).HasColumnName("SellerID");
            });

            modelBuilder.Entity<Seller>(entity =>
            {
                entity.Property(e => e.SellerId).HasColumnName("SellerID");

                entity.Property(e => e.SellerCompanyName)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.SellerContactNo)
                    .IsRequired()
                    .HasMaxLength(13)
                    .IsUnicode(false);

                entity.Property(e => e.SellerDate)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.SellerEmail)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.SellerName)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<SellerAddress>(entity =>
            {
                entity.ToTable("SellerAddress");

                entity.Property(e => e.SellerAddress1)
                    .IsUnicode(false)
                    .HasColumnName("SellerAddress");

                entity.Property(e => e.SellerCityId).HasColumnName("SellerCityID");

                entity.HasOne(d => d.SellerCity)
                    .WithMany(p => p.SellerAddresses)
                    .HasForeignKey(d => d.SellerCityId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("SellerAddressCity");

                entity.HasOne(d => d.Seller)
                    .WithMany(p => p.SellerAddresses)
                    .HasForeignKey(d => d.SellerId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fkSellerAddressSellerId");
            });

            modelBuilder.Entity<SellerDeliverable>(entity =>
            {
                entity.ToTable("SellerDeliverable");

                entity.Property(e => e.DeliverableDate)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.HasOne(d => d.City)
                    .WithMany(p => p.SellerDeliverables)
                    .HasForeignKey(d => d.CityId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fkSellerDeliverableCity");

                entity.HasOne(d => d.Seller)
                    .WithMany(p => p.SellerDeliverables)
                    .HasForeignKey(d => d.SellerId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fkSellerDeliverableSellerId");
            });

            modelBuilder.Entity<SellerProduct>(entity =>
            {
                entity.Property(e => e.SellerProductDate)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.HasOne(d => d.Product)
                    .WithMany(p => p.SellerProducts)
                    .HasForeignKey(d => d.ProductId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fkSellerProductProductID");

                entity.HasOne(d => d.Seller)
                    .WithMany(p => p.SellerProducts)
                    .HasForeignKey(d => d.SellerId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fkSellerProductSellerId");
            });

            modelBuilder.Entity<SellerProductCity>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("sellerProductCity");

                entity.Property(e => e.CityName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ProductName)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.SellerName)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<State>(entity =>
            {
                entity.Property(e => e.StateName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.HasOne(d => d.Country)
                    .WithMany(p => p.States)
                    .HasForeignKey(d => d.CountryId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fkStatesCountry");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.Property(e => e.UserBirthDate).HasColumnType("date");

                entity.Property(e => e.UserContactNo)
                    .IsRequired()
                    .HasMaxLength(13)
                    .IsUnicode(false);

                entity.Property(e => e.UserDate)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.UserEmail)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.UserFirstName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.UserLastName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.UserLogIn)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.UserMiddleName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.UserPassword)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<UserAddress>(entity =>
            {
                entity.ToTable("UserAddress");

                entity.Property(e => e.AddressType)
                    .IsRequired()
                    .HasMaxLength(6)
                    .IsUnicode(false)
                    .HasDefaultValueSql("('Home')");

                entity.Property(e => e.UserAddressDetail)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.UserAddressFullName)
                    .IsRequired()
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.UserAdressContact)
                    .IsRequired()
                    .HasMaxLength(13)
                    .IsUnicode(false);

                entity.HasOne(d => d.UserCity)
                    .WithMany(p => p.UserAddresses)
                    .HasForeignKey(d => d.UserCityId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fkUserAddressCityId");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.UserAddresses)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fkUserAddressUserId");
            });

        }

    }
}
