using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace SpicejetApi.Models
{
    public partial class SPICEJETContext : DbContext
    {
        public SPICEJETContext()
        {
        }

        public SPICEJETContext(DbContextOptions<SPICEJETContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Address> Addresses { get; set; }
        public virtual DbSet<Addressofairport> Addressofairports { get; set; }
        public virtual DbSet<Airplane> Airplanes { get; set; }
        public virtual DbSet<Airport> Airports { get; set; }
        public virtual DbSet<BookingDetail> BookingDetails { get; set; }
        public virtual DbSet<Bookingmanager> Bookingmanagers { get; set; }
        public virtual DbSet<CheckIn> CheckIns { get; set; }
        public virtual DbSet<CheckinDetail> CheckinDetails { get; set; }
        public virtual DbSet<Chkbooking> Chkbookings { get; set; }
        public virtual DbSet<Flighttrip> Flighttrips { get; set; }
        public virtual DbSet<ForViewDetails1> ForViewDetails1s { get; set; }
        public virtual DbSet<Guste> Gustes { get; set; }
        public virtual DbSet<Hotel> Hotels { get; set; }
        public virtual DbSet<Hotelcontectinfo> Hotelcontectinfos { get; set; }
        public virtual DbSet<Payment> Payments { get; set; }
        public virtual DbSet<Room> Rooms { get; set; }
        public virtual DbSet<Seat> Seats { get; set; }
        public virtual DbSet<Spicejetinfo> Spicejetinfos { get; set; }
        public virtual DbSet<Totelcostoftrip> Totelcostoftrips { get; set; }
        public virtual DbSet<Travelller> Travelllers { get; set; }
        public virtual DbSet<Userforbooking> Userforbookings { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
//#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=DESKTOP-P3KPE28\\MSSQLSERVER02;Database=SPICEJET;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Address>(entity =>
            {
                entity.ToTable("ADDRESS");

                entity.Property(e => e.AddressId).ValueGeneratedNever();

                entity.Property(e => e.City)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Country)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("COUNTRY");

                entity.Property(e => e.State)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Addressofairport>(entity =>
            {
                entity.HasKey(e => e.AddressId)
                    .HasName("PK__ADDRESSO__091C2AFB8302E02F");

                entity.ToTable("ADDRESSOFAIRPORT");

                entity.Property(e => e.AddressId).ValueGeneratedNever();

                entity.Property(e => e.City)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Country)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.State)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Airplane>(entity =>
            {
                entity.ToTable("AIRPLANE");

                entity.Property(e => e.AirplaneId).ValueGeneratedNever();

                entity.Property(e => e.AirplaneName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.LastMentananceDate).HasColumnType("date");

                entity.Property(e => e.Make).HasColumnType("date");

                entity.Property(e => e.Modal)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Airport>(entity =>
            {
                entity.HasKey(e => e.AirportName)
                    .HasName("PK__AIRPORT__4E7279477C76E464");

                entity.ToTable("AIRPORT");

                entity.HasIndex(e => e.AirPortCode, "UQ__AIRPORT__C08129EB40D844E8")
                    .IsUnique();

                entity.Property(e => e.AirportName)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.HasOne(d => d.Address)
                    .WithMany(p => p.Airports)
                    .HasForeignKey(d => d.AddressId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fkAddressId");

                entity.HasOne(d => d.AirPlane)
                    .WithMany(p => p.Airports)
                    .HasForeignKey(d => d.AirPlaneId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__AIRPORT__AirPlan__2DB1C7EE");
            });

            modelBuilder.Entity<BookingDetail>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("BookingDetails");

                entity.Property(e => e.Arrivefrom)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.BookingDate).HasColumnType("date");

                entity.Property(e => e.DepartFrom)
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

                entity.Property(e => e.MoblileNo)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("MoblileNO");

                entity.Property(e => e.PassportNo)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Pnrno)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("PNRNO");

                entity.Property(e => e.Triptype)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Bookingmanager>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("BOOKINGMANAGER");

                entity.HasIndex(e => e.Email, "UQ__BOOKINGM__A9D1053434DC5711")
                    .IsUnique();

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.FirstName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Pnrno)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("PNRNO");
            });

            modelBuilder.Entity<CheckIn>(entity =>
            {
                entity.HasKey(e => e.Pnrno)
                    .HasName("PK__CheckIn__4677519BB98696D9");

                entity.ToTable("CheckIn");

                entity.HasIndex(e => e.Email, "UQ__CheckIn__A9D10534F106D978")
                    .IsUnique();

                entity.Property(e => e.Pnrno)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("PNRNO");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.FirstName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<CheckinDetail>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("CheckinDetails");

                entity.Property(e => e.Arrivefrom)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.BookingDate).HasColumnType("date");

                entity.Property(e => e.CheckInDatetime).HasColumnType("datetime");

                entity.Property(e => e.DepartFrom)
                    .IsRequired()
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

                entity.Property(e => e.Pnrno)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("PNRNO");

                entity.Property(e => e.Triptype)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Chkbooking>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("chkbooking");

                entity.Property(e => e.GustName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.MobileNo)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Flighttrip>(entity =>
            {
                entity.HasKey(e => e.TripId)
                    .HasName("PK__FLIGHTTR__51DC713EE7C04E88");

                entity.ToTable("FLIGHTTRIP");

                entity.Property(e => e.TripId).ValueGeneratedNever();

                entity.Property(e => e.ArriveAirportName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ArriveDate).HasColumnType("date");

                entity.Property(e => e.DepartAirportName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Departdate).HasColumnType("date");

                entity.HasOne(d => d.AirplanenoNavigation)
                    .WithMany(p => p.Flighttrips)
                    .HasForeignKey(d => d.Airplaneno)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__FLIGHTTRI__Airpl__3A179ED3");

                entity.HasOne(d => d.ArriveAirportNameNavigation)
                    .WithMany(p => p.FlighttripArriveAirportNameNavigations)
                    .HasForeignKey(d => d.ArriveAirportName)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fkDepartAirportName1");

                entity.HasOne(d => d.Cost)
                    .WithMany(p => p.Flighttrips)
                    .HasForeignKey(d => d.CostId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fkCostId");

                entity.HasOne(d => d.DepartAirportNameNavigation)
                    .WithMany(p => p.FlighttripDepartAirportNameNavigations)
                    .HasForeignKey(d => d.DepartAirportName)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fkDepartAirportName");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Flighttrips)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fkUserId");
            });

            modelBuilder.Entity<ForViewDetails1>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("forViewDetails1");

                entity.Property(e => e.Address)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.EmailId)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.GustName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.MobileNo)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.PaymentType)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Paymentdate).HasColumnType("date");
            });

            modelBuilder.Entity<Guste>(entity =>
            {
                entity.HasKey(e => e.GustId)
                    .HasName("PK__GUSTES__5878AC52DF657B98");

                entity.ToTable("GUSTES");

                entity.Property(e => e.GustId).ValueGeneratedNever();

                entity.Property(e => e.EmailId)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.GustName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.MobileNo)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.HasOne(d => d.Address)
                    .WithMany(p => p.Gustes)
                    .HasForeignKey(d => d.AddressId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__GUSTES__AddressI__65F62111");
            });

            modelBuilder.Entity<Hotel>(entity =>
            {
                entity.ToTable("HOTEL");

                entity.Property(e => e.HotelId).ValueGeneratedNever();

                entity.Property(e => e.Address)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.HasOne(d => d.Contect)
                    .WithMany(p => p.Hotels)
                    .HasForeignKey(d => d.ContectId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__HOTEL__ContectId__6E8B6712");
            });

            modelBuilder.Entity<Hotelcontectinfo>(entity =>
            {
                entity.HasKey(e => e.ContectId)
                    .HasName("PK__HOTELCON__095C15B17971D11E");

                entity.ToTable("HOTELCONTECTINFO");

                entity.Property(e => e.ContectId).ValueGeneratedNever();

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.HotelMobileNo)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Payment>(entity =>
            {
                entity.ToTable("PAYMENT");

                entity.Property(e => e.PaymentId).ValueGeneratedNever();

                entity.Property(e => e.PaymentType)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Paymentdate).HasColumnType("date");

                entity.HasOne(d => d.Gust)
                    .WithMany(p => p.Payments)
                    .HasForeignKey(d => d.GustId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__PAYMENT__GustId__762C88DA");

                entity.HasOne(d => d.Hotel)
                    .WithMany(p => p.Payments)
                    .HasForeignKey(d => d.HotelId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__PAYMENT__HotelId__753864A1");
            });

            modelBuilder.Entity<Room>(entity =>
            {
              //  entity.HasNoKey();

                entity.ToTable("ROOM");

                entity.Property(e => e.CheckInDate).HasColumnType("date");

                entity.Property(e => e.CheckOutDate).HasColumnType("date");

                entity.Property(e => e.RoomNo)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.HasOne(d => d.Hotel)
                    .WithMany()
                    .HasForeignKey(d => d.HotelId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__ROOM__HotelId__7167D3BD");
            });

            modelBuilder.Entity<Seat>(entity =>
            {
                entity.HasKey(e => e.SeatNo)
                    .HasName("PK__SEAT__3116FB417F64F2FC");

                entity.ToTable("SEAT");

                entity.Property(e => e.SeatNo).ValueGeneratedNever();

                entity.Property(e => e.Class)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Location)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Spicejetinfo>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("SPICEJETINFO");

                entity.Property(e => e.ComponyId).HasColumnName("COMPONY_ID");

                entity.Property(e => e.NetworthSpicejet)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Totelcostoftrip>(entity =>
            {
                entity.HasKey(e => e.CostId)
                    .HasName("PK__TOTELCOS__8285233E924301F7");

                entity.ToTable("TOTELCOSTOFTRIP");

                entity.Property(e => e.CostId).ValueGeneratedNever();

                entity.Property(e => e.Currency)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Tax).HasColumnName("TAX");
            });

            modelBuilder.Entity<Travelller>(entity =>
            {
                entity.HasKey(e => e.Pnrno)
                    .HasName("PK__TRAVELLL__4677519B959E4FEC");

                entity.ToTable("TRAVELLLER");

                entity.HasIndex(e => e.PassportNo, "UQ__TRAVELLL__185526FE3C86B422")
                    .IsUnique();

                entity.HasIndex(e => e.Email, "UQ__TRAVELLL__A9D105346F91A298")
                    .IsUnique();

                entity.HasIndex(e => e.MoblileNo, "UQ__TRAVELLL__F37818BC857E3A69")
                    .IsUnique();

                entity.Property(e => e.Pnrno)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("PNRNO");

                entity.Property(e => e.Arrivefrom)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.BookingDate).HasColumnType("date");

                entity.Property(e => e.CheckInDatetime).HasColumnType("datetime");

                entity.Property(e => e.DepartFrom)
                    .IsRequired()
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

                entity.Property(e => e.MoblileNo)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.PassportNo)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Triptype)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.HasOne(d => d.Airplane)
                    .WithMany(p => p.Travelllers)
                    .HasForeignKey(d => d.AirplaneId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__TRAVELLLE__Airpl__4865BE2A");

                entity.HasOne(d => d.ArrivefromNavigation)
                    .WithMany(p => p.TravelllerArrivefromNavigations)
                    .HasForeignKey(d => d.Arrivefrom)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__TRAVELLLE__Arriv__4959E263");

                entity.HasOne(d => d.Cost)
                    .WithMany(p => p.Travelllers)
                    .HasForeignKey(d => d.CostId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__TRAVELLLE__CostI__4B422AD5");

                entity.HasOne(d => d.DepartFromNavigation)
                    .WithMany(p => p.TravelllerDepartFromNavigations)
                    .HasForeignKey(d => d.DepartFrom)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__TRAVELLLE__Depar__4A4E069C");

                entity.HasOne(d => d.SeatNoNavigation)
                    .WithMany(p => p.Travelllers)
                    .HasForeignKey(d => d.SeatNo)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fkSeatNo");

                entity.HasOne(d => d.Trip)
                    .WithMany(p => p.Travelllers)
                    .HasForeignKey(d => d.TripId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__TRAVELLLE__TripI__467D75B8");
            });

            modelBuilder.Entity<Userforbooking>(entity =>
            {
                entity.HasKey(e => e.UserId)
                    .HasName("PK__USERFORB__1788CC4C12087267");

                entity.ToTable("USERFORBOOKING");

                entity.HasIndex(e => e.Email, "uqEmail")
                    .IsUnique();

                entity.Property(e => e.UserId).ValueGeneratedNever();

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.FirstName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Gender)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.LastName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.UserType)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
