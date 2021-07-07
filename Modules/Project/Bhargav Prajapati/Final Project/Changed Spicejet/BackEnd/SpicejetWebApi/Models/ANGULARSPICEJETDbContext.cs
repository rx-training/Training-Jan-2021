using System;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using SpicejetWebApi.Authentication;

#nullable disable

namespace SpicejetWebApi.Models
{
    public partial class ANGULARSPICEJETDbContext : IdentityDbContext<SpicejetUser>
    {
        public ANGULARSPICEJETDbContext()
        {
        }

        public ANGULARSPICEJETDbContext(DbContextOptions<ANGULARSPICEJETDbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<AirplaneDetail> AirplaneDetails { get; set; }
        public virtual DbSet<CostDetail> CostDetails { get; set; }
        public virtual DbSet<HotelCostDetail> HotelCostDetails { get; set; }
        public virtual DbSet<HotelDetail> HotelDetails { get; set; }
        public virtual DbSet<ListofHotelDetail> ListofHotelDetails { get; set; }
        public virtual DbSet<RouteDetail> RouteDetails { get; set; }
        public virtual DbSet<TripDetail> TripDetails { get; set; }
        public virtual DbSet<UserFlightBookingDetail> UserFlightBookingDetails { get; set; }
        public virtual DbSet<UserHotelBookingDetail> UserHotelBookingDetails { get; set; }
        public virtual DbSet<VBookingFlightDetail> VBookingFlightDetails { get; set; }
        public virtual DbSet<VBookingHotelDetail> VBookingHotelDetails { get; set; }
        public virtual DbSet<VHotelSearchedDetail> VHotelSearchedDetails { get; set; }
        public virtual DbSet<VSearchFlight> VSearchFlights { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Server=DESKTOP-P3KPE28\\MSSQLSERVER02;Database=ANGULARSPICEJETDb;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<AirplaneDetail>(entity =>
            {
                entity.HasKey(e => e.AirplaneId);

                entity.ToTable("AirplaneDetail");

                entity.Property(e => e.AirplaneModel)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.AirplaneName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ManufactureCompony)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ManufactureDate).HasColumnType("date");
            });

            modelBuilder.Entity<CostDetail>(entity =>
            {
                entity.HasKey(e => e.CostId);
            });

            modelBuilder.Entity<HotelCostDetail>(entity =>
            {
                entity.HasKey(e => e.CostId);
            });

            modelBuilder.Entity<HotelDetail>(entity =>
            {
                entity.HasKey(e => e.HotelId);

                entity.Property(e => e.HotelAddress)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.HotelCity)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.HotelContectNumber)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.HotelEmailAddress)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.HotelName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.HotelState)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ImgPath1)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ImgPath2)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ImgPath3)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ImgPath4)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.PinNumber)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Rating)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<ListofHotelDetail>(entity =>
            {
                entity.HasKey(e => e.ListId);

                entity.HasOne(d => d.Cost)
                    .WithMany(p => p.ListofHotelDetails)
                    .HasForeignKey(d => d.CostId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ListofHotelDetails_HotelCostDetails");

                entity.HasOne(d => d.Hotel)
                    .WithMany(p => p.ListofHotelDetails)
                    .HasForeignKey(d => d.HotelId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ListofHotelDetails_HotelDetails");
            });

            modelBuilder.Entity<RouteDetail>(entity =>
            {
                entity.HasKey(e => e.RouteId);

                entity.ToTable("RouteDetail");

                entity.HasOne(d => d.Airplane)
                    .WithMany(p => p.RouteDetails)
                    .HasForeignKey(d => d.AirplaneId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_RouteDetail_AirplaneDetail");

                entity.HasOne(d => d.Cost)
                    .WithMany(p => p.RouteDetails)
                    .HasForeignKey(d => d.CostId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_RouteDetail_CostDetails");

                entity.HasOne(d => d.Trip)
                    .WithMany(p => p.RouteDetails)
                    .HasForeignKey(d => d.TripId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_RouteDetail_TripDetail");
            });

            modelBuilder.Entity<TripDetail>(entity =>
            {
                entity.HasKey(e => e.TripId);

                entity.ToTable("TripDetail");

                entity.Property(e => e.ArrivedAirportName)
                    .IsRequired()
                    .HasMaxLength(90)
                    .IsUnicode(false);

                entity.Property(e => e.ArrivedCity)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ArrivedDateTime).HasColumnType("datetime");

                entity.Property(e => e.DepartDateTime).HasColumnType("datetime");

                entity.Property(e => e.DepartureAirportName)
                    .IsRequired()
                    .HasMaxLength(90)
                    .IsUnicode(false);

                entity.Property(e => e.DepatureCity)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<UserFlightBookingDetail>(entity =>
            {
                entity.HasKey(e => e.UserId);

                entity.Property(e => e.BookingDateTime).HasColumnType("datetime");

                entity.Property(e => e.PnrNumber)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.UserContactNumber)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.UserEmail)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.UserFirstName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.UserLastName)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.UserMiddleName)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.HasOne(d => d.Airplane)
                    .WithMany(p => p.UserFlightBookingDetails)
                    .HasForeignKey(d => d.AirplaneId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_UserFlightBookingDetails_AirplaneDetail");

                entity.HasOne(d => d.Cost)
                    .WithMany(p => p.UserFlightBookingDetails)
                    .HasForeignKey(d => d.CostId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_UserFlightBookingDetails_CostDetails");

                entity.HasOne(d => d.Trip)
                    .WithMany(p => p.UserFlightBookingDetails)
                    .HasForeignKey(d => d.TripId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_UserFlightBookingDetails_TripDetail");
            });

            modelBuilder.Entity<UserHotelBookingDetail>(entity =>
            {
                entity.HasKey(e => e.UserId);

                entity.Property(e => e.BookingDateTime).HasColumnType("datetime");

                entity.Property(e => e.UserConformationNumber)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.UserContactNumber)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.UserEmailAddress)
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
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.HasOne(d => d.Cost)
                    .WithMany(p => p.UserHotelBookingDetails)
                    .HasForeignKey(d => d.CostId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_UserHotelBookingDetails_HotelCostDetails");

                entity.HasOne(d => d.Hotel)
                    .WithMany(p => p.UserHotelBookingDetails)
                    .HasForeignKey(d => d.HotelId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_UserHotelBookingDetails_HotelDetails");
            });

            modelBuilder.Entity<VBookingFlightDetail>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("vBookingFlightDetails");

                entity.Property(e => e.AirplaneModel)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.AirplaneName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ArrivedAirportName)
                    .IsRequired()
                    .HasMaxLength(90)
                    .IsUnicode(false);

                entity.Property(e => e.ArrivedCity)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ArrivedDateTime).HasColumnType("datetime");

                entity.Property(e => e.BookingDateTime).HasColumnType("datetime");

                entity.Property(e => e.DepartDateTime).HasColumnType("datetime");

                entity.Property(e => e.DepartureAirportName)
                    .IsRequired()
                    .HasMaxLength(90)
                    .IsUnicode(false);

                entity.Property(e => e.DepatureCity)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ManufactureCompony)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ManufactureDate).HasColumnType("date");

                entity.Property(e => e.PnrNumber)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.UserContactNumber)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.UserEmail)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.UserFirstName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.UserLastName)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.UserMiddleName)
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<VBookingHotelDetail>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("vBookingHotelDetails");

                entity.Property(e => e.BookingDateTime).HasColumnType("datetime");

                entity.Property(e => e.HotelAddress)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.HotelCity)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.HotelContectNumber)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.HotelEmailAddress)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.HotelName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.HotelState)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ImgPath1)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ImgPath2)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ImgPath3)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ImgPath4)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.PinNumber)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Rating)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.UserConformationNumber)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.UserContactNumber)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.UserEmailAddress)
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
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<VHotelSearchedDetail>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("vHotelSearchedDetails");

                entity.Property(e => e.HotelAddress)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.HotelCity)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.HotelContectNumber)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.HotelEmailAddress)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.HotelName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.HotelState)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ImgPath1)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ImgPath2)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ImgPath3)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ImgPath4)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.PinNumber)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Rating)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<VSearchFlight>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("vSearchFlight");

                entity.Property(e => e.AirplaneModel)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.AirplaneName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ArrivedAirportName)
                    .IsRequired()
                    .HasMaxLength(90)
                    .IsUnicode(false);

                entity.Property(e => e.ArrivedCity)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ArrivedDateTime).HasColumnType("datetime");

                entity.Property(e => e.DepartDateTime).HasColumnType("datetime");

                entity.Property(e => e.DepartureAirportName)
                    .IsRequired()
                    .HasMaxLength(90)
                    .IsUnicode(false);

                entity.Property(e => e.DepatureCity)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ManufactureCompony)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ManufactureDate).HasColumnType("date");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
