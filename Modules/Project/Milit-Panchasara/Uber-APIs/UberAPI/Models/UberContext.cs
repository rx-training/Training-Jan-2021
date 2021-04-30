using System;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using UberAPI.Models.Auth;

#nullable disable

namespace UberAPI.Models
{
    public class UberContext : IdentityDbContext<AppUser>
    {
        public UberContext(DbContextOptions<UberContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Admin> Admins { get; set; }
        public virtual DbSet<ApplicableIncentive> ApplicableIncentives { get; set; }
        public virtual DbSet<ApplicableOffer> ApplicableOffers { get; set; }
        public virtual DbSet<Driver> Drivers { get; set; }
        public virtual DbSet<DriverCredential> DriverCredentials { get; set; }
        public virtual DbSet<DriverDetail> DriverDetails { get; set; }
        public virtual DbSet<Incentive> Incentives { get; set; }
        public virtual DbSet<Location> Locations { get; set; }
        public virtual DbSet<Offer> Offers { get; set; }
        public virtual DbSet<Rating> Ratings { get; set; }
        public virtual DbSet<RatingRider> RatingRiders { get; set; }
        public virtual DbSet<RideType> RideTypes { get; set; }
        public virtual DbSet<Rider> Riders { get; set; }
        public virtual DbSet<RiderCredential> RiderCredentials { get; set; }
        public virtual DbSet<SavedPaymentMode> SavedPaymentModes { get; set; }
        public virtual DbSet<Trip> Trips { get; set; }
        public virtual DbSet<VCurrentTrip> VCurrentTrips { get; set; }
        public virtual DbSet<VTripsData> VTripsData { get; set; }
        public virtual DbSet<VDriver> VDrivers { get; set; }
        public virtual DbSet<VRider> VRiders { get; set; }
        public virtual DbSet<Vehicle> Vehicles { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Admin>(entity =>
            {
                entity.ToTable("Admins", "Admins");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.ContactNumber).HasColumnType("decimal(10, 0)");

                entity.Property(e => e.CreatedAt).HasColumnType("datetime");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.FirstName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.LastName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedAt).HasColumnType("datetime");

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<ApplicableIncentive>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("ApplicableIncentives", "Drivers");

                entity.Property(e => e.CreatedAt).HasColumnType("datetime");

                entity.Property(e => e.DriverId).HasColumnName("DriverID");

                entity.Property(e => e.IncentiveId).HasColumnName("IncentiveID");

                entity.Property(e => e.ModifiedAt).HasColumnType("datetime");

                entity.HasOne(d => d.Driver)
                    .WithMany()
                    .HasForeignKey(d => d.DriverId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_ApplicableIncentives_DriverID");

                entity.HasOne(d => d.Incentive)
                    .WithMany()
                    .HasForeignKey(d => d.IncentiveId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_ApplicableIncentives_IncentiveID");
            });

            modelBuilder.Entity<ApplicableOffer>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("ApplicableOffers", "Riders");

                entity.Property(e => e.CreatedAt).HasColumnType("datetime");

                entity.Property(e => e.ModifiedAt).HasColumnType("datetime");

                entity.Property(e => e.OfferId).HasColumnName("OfferID");

                entity.Property(e => e.RiderId).HasColumnName("RiderID");

                entity.HasOne(d => d.Offer)
                    .WithMany()
                    .HasForeignKey(d => d.OfferId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_ApplicableOffers_OfferID");

                entity.HasOne(d => d.Rider)
                    .WithMany()
                    .HasForeignKey(d => d.RiderId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_ApplicableOffers_RiderID");
            });

            modelBuilder.Entity<Driver>(entity =>
            {
                entity.ToTable("Drivers", "Drivers");

                entity.HasIndex(e => e.ContactNumber, "uk_Drivers_ContactNumber")
                    .IsUnique();

                entity.Property(e => e.DriverId).HasColumnName("DriverID");

                entity.Property(e => e.ContactNumber).HasColumnType("decimal(10, 0)");

                entity.Property(e => e.CreatedAt).HasColumnType("datetime");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.FirstName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.IsBlocked).HasDefaultValueSql("((0))");

                entity.Property(e => e.IsLoggedIn).HasDefaultValueSql("((0))");

                entity.Property(e => e.LastName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedAt).HasColumnType("datetime");

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.SessionExpiresIn).HasColumnType("datetime");
            });

            modelBuilder.Entity<DriverCredential>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("DriverCredentials", "Drivers");

                entity.Property(e => e.DriverId)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("DriverID");

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.SessionExpiresIn).HasColumnType("datetime");
            });

            modelBuilder.Entity<DriverDetail>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("DriverDetails", "Drivers");

                entity.Property(e => e.AadharCard).IsUnicode(false);

                entity.Property(e => e.Country)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedAt).HasColumnType("datetime");

                entity.Property(e => e.CurrentAddress).IsUnicode(false);

                entity.Property(e => e.DriverId).HasColumnName("DriverID");

                entity.Property(e => e.DrivingLicense).IsUnicode(false);

                entity.Property(e => e.ModifiedAt).HasColumnType("datetime");

                entity.Property(e => e.OtherDocument).IsUnicode(false);

                entity.Property(e => e.PanCard).IsUnicode(false);

                entity.Property(e => e.PermenantAddress).IsUnicode(false);

                entity.HasOne(d => d.Driver)
                    .WithMany()
                    .HasForeignKey(d => d.DriverId)
                    .HasConstraintName("fk_DriverDetails_DriverID");
            });

            modelBuilder.Entity<Incentive>(entity =>
            {
                entity.ToTable("Incentives", "Drivers");

                entity.Property(e => e.IncentiveId).HasColumnName("IncentiveID");

                entity.Property(e => e.CreatedAt).HasColumnType("datetime");

                entity.Property(e => e.Description)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.EndDate).HasColumnType("datetime");

                entity.Property(e => e.ModifiedAt).HasColumnType("datetime");

                entity.Property(e => e.StartDate).HasColumnType("datetime");
            });

            modelBuilder.Entity<Location>(entity =>
            {
                entity.HasIndex(e => new { e.Longitude, e.Latitude }, "uk_Locations_Coordinates")
                    .IsUnique();

                entity.Property(e => e.LocationId).HasColumnName("LocationID");

                entity.Property(e => e.CreatedAt).HasColumnType("datetime");

                entity.Property(e => e.LocationName)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedAt).HasColumnType("datetime");
            });

            modelBuilder.Entity<Offer>(entity =>
            {
                entity.ToTable("Offers", "Riders");

                entity.Property(e => e.OfferId).HasColumnName("OfferID");

                entity.Property(e => e.CreatedAt).HasColumnType("datetime");

                entity.Property(e => e.Description)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.EndDate).HasColumnType("datetime");

                entity.Property(e => e.ModifiedAt).HasColumnType("datetime");

                entity.Property(e => e.OfferCode)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.StartDate).HasColumnType("datetime");
            });

            modelBuilder.Entity<Rating>(entity =>
            {
                entity.ToTable("Ratings", "Drivers");

                entity.Property(e => e.RatingId).HasColumnName("RatingID");

                entity.Property(e => e.Comments).IsUnicode(false);

                entity.Property(e => e.CreatedAt).HasColumnType("datetime");

                entity.Property(e => e.DriverId).HasColumnName("DriverID");

                entity.Property(e => e.MediaAttached).IsUnicode(false);

                entity.Property(e => e.ModifiedAt).HasColumnType("datetime");

                entity.Property(e => e.RatingOfDriver).HasColumnName("Rating");

                entity.Property(e => e.RiderId).HasColumnName("RiderID");

                entity.Property(e => e.TripId).HasColumnName("TripID");

                entity.HasOne(d => d.Driver)
                    .WithMany(p => p.Ratings)
                    .HasForeignKey(d => d.DriverId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_Ratings_DriverID");

                entity.HasOne(d => d.Rider)
                    .WithMany(p => p.Ratings)
                    .HasForeignKey(d => d.RiderId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_Ratings_RiderID");

                entity.HasOne(d => d.Trip)
                    .WithMany(p => p.Ratings)
                    .HasForeignKey(d => d.TripId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_Ratings_TripID");
            });

            modelBuilder.Entity<RatingRider>(entity =>
            {
                entity.HasKey(e => e.RatingId)
                    .HasName("PK__Ratings__FCCDF85C5A868205");

                entity.ToTable("Ratings", "Riders");

                entity.Property(e => e.RatingId).HasColumnName("RatingID");

                entity.Property(e => e.RatingOfRider).HasColumnName("Rating");

                entity.Property(e => e.Comments).IsUnicode(false);

                entity.Property(e => e.CreatedAt).HasColumnType("datetime");

                entity.Property(e => e.DriverId).HasColumnName("DriverID");

                entity.Property(e => e.MediaAttached).IsUnicode(false);

                entity.Property(e => e.ModifiedAt).HasColumnType("datetime");

                entity.Property(e => e.RiderId).HasColumnName("RiderID");

                entity.Property(e => e.TripId).HasColumnName("TripID");

                entity.HasOne(d => d.Driver)
                    .WithMany(p => p.RatingRiders)
                    .HasForeignKey(d => d.DriverId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_Ratings_DriverID");

                entity.HasOne(d => d.Rider)
                    .WithMany(p => p.RatingRiders)
                    .HasForeignKey(d => d.RiderId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_Ratings_RiderID");

                entity.HasOne(d => d.Trip)
                    .WithMany(p => p.RatingRiders)
                    .HasForeignKey(d => d.TripId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_Ratings_TripID");
            });

            modelBuilder.Entity<RideType>(entity =>
            {
                entity.Property(e => e.RideTypeId).HasColumnName("RideTypeID");

                entity.Property(e => e.CreatedAt).HasColumnType("datetime");

                entity.Property(e => e.ModifiedAt).HasColumnType("datetime");

                entity.Property(e => e.RideName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Rider>(entity =>
            {
                entity.ToTable("Riders", "Riders");

                entity.HasIndex(e => e.ContactNumber, "uk_Riders_ContactNumber")
                    .IsUnique();

                entity.HasIndex(e => e.InviteCode, "uk_Riders_InviteCode")
                    .IsUnique();

                entity.Property(e => e.RiderId).HasColumnName("RiderID");

                entity.Property(e => e.ContactNumber).HasColumnType("decimal(10, 0)");

                entity.Property(e => e.Country)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedAt).HasColumnType("datetime");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.FirstName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.InviteCode)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.IsBlocked).HasDefaultValueSql("((0))");

                entity.Property(e => e.IsLoggedIn).HasDefaultValueSql("((0))");

                entity.Property(e => e.IsNew)
                    .IsRequired()
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.LastName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedAt).HasColumnType("datetime");

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.SessionExpiresIn).HasColumnType("datetime");
            });

            modelBuilder.Entity<RiderCredential>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("RiderCredentials", "Riders");

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.RiderId)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("RiderID");

                entity.Property(e => e.SessionExpiresIn).HasColumnType("datetime");
            });

            modelBuilder.Entity<SavedPaymentMode>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("SavedPaymentModes", "Riders");

                entity.Property(e => e.CardDate).HasColumnType("datetime");

                entity.Property(e => e.CardName)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.CardNumber).HasColumnType("decimal(16, 0)");

                entity.Property(e => e.CreatedAt).HasColumnType("datetime");

                entity.Property(e => e.ModifiedAt).HasColumnType("datetime");

                entity.Property(e => e.PaymentMode)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.RiderId).HasColumnName("RiderID");

                entity.HasOne(d => d.Rider)
                    .WithMany()
                    .HasForeignKey(d => d.RiderId)
                    .HasConstraintName("fk_SavedPaymentModes_RiderID");
            });

            modelBuilder.Entity<Trip>(entity =>
            {
                entity.Property(e => e.TripId).HasColumnName("TripID");

                entity.Property(e => e.CancelledBy)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedAt).HasColumnType("datetime");

                entity.Property(e => e.DestinationLocationId).HasColumnName("DestinationLocationID");

                entity.Property(e => e.DriverId).HasColumnName("DriverID");

                entity.Property(e => e.EndTime).HasColumnType("datetime");

                entity.Property(e => e.ModifiedAt).HasColumnType("datetime");

                entity.Property(e => e.PaymentMethod)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.RideTypeId).HasColumnName("RideTypeID");

                entity.Property(e => e.RiderId).HasColumnName("RiderID");

                entity.Property(e => e.SourceLocationId).HasColumnName("SourceLocationID");

                entity.Property(e => e.StartTime).HasColumnType("datetime");

                entity.Property(e => e.Status)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.HasOne(d => d.DestinationLocation)
                    .WithMany(p => p.TripDestinationLocations)
                    .HasForeignKey(d => d.DestinationLocationId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_Trips_DestinationLocationID");

                entity.HasOne(d => d.Driver)
                    .WithMany(p => p.Trips)
                    .HasForeignKey(d => d.DriverId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_Trips_DriverID");

                entity.HasOne(d => d.RideType)
                    .WithMany(p => p.Trips)
                    .HasForeignKey(d => d.RideTypeId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_Trips_RideTypeID");

                entity.HasOne(d => d.Rider)
                    .WithMany(p => p.Trips)
                    .HasForeignKey(d => d.RiderId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_Trips_RiderID");

                entity.HasOne(d => d.SourceLocation)
                    .WithMany(p => p.TripSourceLocations)
                    .HasForeignKey(d => d.SourceLocationId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_Trips_SourceLocationID");
            });

            modelBuilder.Entity<VCurrentTrip>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("vCurrentTrips");

                entity.Property(e => e.CancelledBy)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedAt).HasColumnType("datetime");

                entity.Property(e => e.DestinationLocationId).HasColumnName("DestinationLocationID");

                entity.Property(e => e.DriverId).HasColumnName("DriverID");

                entity.Property(e => e.EndTime).HasColumnType("datetime");

                entity.Property(e => e.ModifiedAt).HasColumnType("datetime");

                entity.Property(e => e.RideTypeId).HasColumnName("RideTypeID");

                entity.Property(e => e.RiderId).HasColumnName("RiderID");

                entity.Property(e => e.SourceLocationId).HasColumnName("SourceLocationID");

                entity.Property(e => e.StartTime).HasColumnType("datetime");

                entity.Property(e => e.Status)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.TripId)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("TripID");
            });

            modelBuilder.Entity<VTripsData>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("vTripsData");

                entity.Property(e => e.CancelledBy)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.ActualFairAmount)
                    .HasDefaultValue(Convert.ToDouble(0));

                entity.Property(e => e.EndTime).HasColumnType("datetime");

                entity.Property(e => e.StartTime).HasColumnType("datetime");

                entity.Property(e => e.Status)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.TripId)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("TripID");
            });

            modelBuilder.Entity<VDriver>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("vDrivers", "Drivers");

                entity.Property(e => e.ContactNumber).HasColumnType("decimal(10, 0)");

                entity.Property(e => e.DriverId)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("DriverID");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.FirstName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.LastName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedAt).HasColumnType("datetime");
            });

            modelBuilder.Entity<VRider>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("vRiders", "Riders");

                entity.Property(e => e.ContactNumber).HasColumnType("decimal(10, 0)");

                entity.Property(e => e.Country)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.FirstName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.LastName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedAt).HasColumnType("datetime");

                entity.Property(e => e.RiderId)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("RiderID");
            });

            modelBuilder.Entity<Vehicle>(entity =>
            {
                entity.ToTable("Vehicles", "Drivers");

                entity.Property(e => e.VehicleId).HasColumnName("VehicleID");

                entity.Property(e => e.CreatedAt).HasColumnType("datetime");

                entity.Property(e => e.CurrentRideTypeId).HasColumnName("CurrentRideTypeID");

                entity.Property(e => e.DriverId).HasColumnName("DriverID");

                entity.Property(e => e.ModifiedAt).HasColumnType("datetime");

                entity.Property(e => e.RegistrationNo)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.VehicleBrand)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.VehicleDocument)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.VehicleName)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.VehicleType)
                    .IsRequired()
                    .IsUnicode(false);

                entity.HasOne(d => d.CurrentRideType)
                    .WithMany(p => p.Vehicles)
                    .HasForeignKey(d => d.CurrentRideTypeId)
                    .HasConstraintName("fk_Vehicles_CurrentRideTypeID");

                entity.HasOne(d => d.Driver)
                    .WithMany(p => p.Vehicles)
                    .HasForeignKey(d => d.DriverId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_Vehicles_DriverID");
            });
        }
    }
}
