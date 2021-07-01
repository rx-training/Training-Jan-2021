using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace SpicejetWebApi.Models
{
    public partial class ANGULARSPICEJETContext : DbContext
    {
        public ANGULARSPICEJETContext()
        {
        }

        public ANGULARSPICEJETContext(DbContextOptions<ANGULARSPICEJETContext> options)
            : base(options)
        {
        }

        public virtual DbSet<AdminDetail> AdminDetails { get; set; }
        public virtual DbSet<AirplaneDetail> AirplaneDetails { get; set; }
        public virtual DbSet<BookingFlight> BookingFlights { get; set; }
        public virtual DbSet<CostDetail> CostDetails { get; set; }
        public virtual DbSet<Demo> Demos { get; set; }
        public virtual DbSet<FlightSearch> FlightSearches { get; set; }
        public virtual DbSet<HotelContectInfo> HotelContectInfos { get; set; }
        public virtual DbSet<HotelCostInfo> HotelCostInfos { get; set; }
        public virtual DbSet<HotelInfo> HotelInfos { get; set; }
        public virtual DbSet<HotelUserDetail> HotelUserDetails { get; set; }
        public virtual DbSet<TravelTrip> TravelTrips { get; set; }
        public virtual DbSet<VBookingHotel> VBookingHotels { get; set; }
        public virtual DbSet<VHotelDatum> VHotelData { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=DESKTOP-P3KPE28\\MSSQLSERVER02;Database=ANGULAR SPICEJET;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<AdminDetail>(entity =>
            {
                entity.HasKey(e => e.AdminCode);

                entity.Property(e => e.AdminCode)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.AdminEmail)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.AdminFirstName)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.AdminLastName)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.AdminMiddleName)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.AdminPassword)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.AdmintId).ValueGeneratedOnAdd();
            });

            modelBuilder.Entity<AirplaneDetail>(entity =>
            {
                entity.HasKey(e => e.AirPlaneId);

                entity.Property(e => e.AirPlaneName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Make).HasColumnType("date");

                entity.Property(e => e.Model)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<BookingFlight>(entity =>
            {
                entity.HasKey(e => e.Pnrnumber);

                entity.ToTable("BookingFlight");

                entity.Property(e => e.Pnrnumber)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("PNRNumber");

                entity.Property(e => e.BookingId).ValueGeneratedOnAdd();

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

                entity.Property(e => e.UserMiddleName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.HasOne(d => d.AirPlane)
                    .WithMany(p => p.BookingFlights)
                    .HasForeignKey(d => d.AirPlaneId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_BookingFlight_AirplaneDetails");

                entity.HasOne(d => d.Cost)
                    .WithMany(p => p.BookingFlights)
                    .HasForeignKey(d => d.CostId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_BookingFlight_CostDetails");

                entity.HasOne(d => d.Travel)
                    .WithMany(p => p.BookingFlights)
                    .HasForeignKey(d => d.TravelId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_BookingFlight_TravelTrip");
            });

            modelBuilder.Entity<CostDetail>(entity =>
            {
                entity.HasKey(e => e.CostId);
            });

            modelBuilder.Entity<Demo>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("Demo");

                entity.Property(e => e.AirPlaneName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ArriveAirPortName)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.ArriveDate).HasColumnType("date");

                entity.Property(e => e.ArriveTime)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ArrivedCity)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.DepartDate).HasColumnType("date");

                entity.Property(e => e.DepartTime)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.DepatureAirPortName)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.DepatureCity)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.Make).HasColumnType("date");

                entity.Property(e => e.Model)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Pnrnumber)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("PNRNumber");

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

                entity.Property(e => e.UserMiddleName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<FlightSearch>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("FlightSearch");

                entity.Property(e => e.AirPlaneName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ArriveAirPortName)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.ArriveDate).HasColumnType("date");

                entity.Property(e => e.ArriveTime)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ArrivedCity)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.DepartDate).HasColumnType("date");

                entity.Property(e => e.DepartTime)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.DepatureAirPortName)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.DepatureCity)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.Make).HasColumnType("date");

                entity.Property(e => e.Model)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<HotelContectInfo>(entity =>
            {
                entity.HasKey(e => e.HotelContectId);

                entity.ToTable("HotelContectInfo");

                entity.Property(e => e.HotelEmail)
                    .IsRequired()
                    .IsUnicode(false);
            });

            modelBuilder.Entity<HotelCostInfo>(entity =>
            {
                entity.HasKey(e => e.CostId);

                entity.ToTable("HotelCostInfo");

                entity.Property(e => e.Tax).HasColumnName("tax");
            });

            modelBuilder.Entity<HotelInfo>(entity =>
            {
                entity.HasKey(e => e.HotelId);

                entity.ToTable("HotelInfo");

                entity.Property(e => e.ClosingTime)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.HotelAddress)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.HotelCity)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.HotelName)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.HotelState)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.ImgPath1)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.ImgPath2)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.ImgPath3)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.ImgPath4)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.Rating)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.StartingTime)
                    .IsRequired()
                    .IsUnicode(false);

                entity.HasOne(d => d.Contect)
                    .WithMany(p => p.HotelInfos)
                    .HasForeignKey(d => d.ContectId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_HotelInfo_HotelContectInfo");

                entity.HasOne(d => d.Cost)
                    .WithMany(p => p.HotelInfos)
                    .HasForeignKey(d => d.CostId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_HotelInfo_CostDetails");
            });

            modelBuilder.Entity<HotelUserDetail>(entity =>
            {
                entity.HasKey(e => e.UserReferenceNumumbar);

                entity.Property(e => e.UserReferenceNumumbar)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.UserEmail)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.UserFirstName)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.UserId).ValueGeneratedOnAdd();

                entity.Property(e => e.UserLastName)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.UserMiddleName)
                    .IsRequired()
                    .IsUnicode(false);

                entity.HasOne(d => d.Contect)
                    .WithMany(p => p.HotelUserDetails)
                    .HasForeignKey(d => d.ContectId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_HotelUserDetails_HotelContectInfo");

                entity.HasOne(d => d.Cost)
                    .WithMany(p => p.HotelUserDetails)
                    .HasForeignKey(d => d.CostId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_HotelUserDetails_CostDetails");

                entity.HasOne(d => d.Hotel)
                    .WithMany(p => p.HotelUserDetails)
                    .HasForeignKey(d => d.HotelId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_HotelUserDetails_HotelInfo");
            });

            modelBuilder.Entity<TravelTrip>(entity =>
            {
                entity.HasKey(e => e.TravelId);

                entity.ToTable("TravelTrip");

                entity.Property(e => e.ArriveAirPortName)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.ArriveDate).HasColumnType("date");

                entity.Property(e => e.ArriveTime)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ArrivedCity)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.DepartDate).HasColumnType("date");

                entity.Property(e => e.DepartTime)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.DepatureAirPortName)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.DepatureCity)
                    .IsRequired()
                    .IsUnicode(false);

                entity.HasOne(d => d.AirPlane)
                    .WithMany(p => p.TravelTrips)
                    .HasForeignKey(d => d.AirPlaneId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_TravelTrip_AirplaneDetails");

                entity.HasOne(d => d.Cost)
                    .WithMany(p => p.TravelTrips)
                    .HasForeignKey(d => d.CostId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_TravelTrip_CostDetails");
            });

            modelBuilder.Entity<VBookingHotel>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("vBookingHotel");

                entity.Property(e => e.ClosingTime)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.HotelAddress)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.HotelCity)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.HotelEmail)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.HotelName)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.HotelState)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.ImgPath1)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.ImgPath2)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.ImgPath3)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.ImgPath4)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.Rating)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.StartingTime)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.Tax).HasColumnName("tax");

                entity.Property(e => e.UserEmail)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.UserFirstName)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.UserLastName)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.UserMiddleName)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.UserReferenceNumumbar)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<VHotelDatum>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("vHotelData");

                entity.Property(e => e.ClosingTime)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.HotelAddress)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.HotelCity)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.HotelEmail)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.HotelName)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.HotelState)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.ImgPath1)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.ImgPath2)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.ImgPath3)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.ImgPath4)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.Rating)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.StartingTime)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.Tax).HasColumnName("tax");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
