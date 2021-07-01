using System;
using Inox.Authentication;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace Inox.Models
{
    public partial class inoxContext : IdentityDbContext<ApplicationUser>
    {
        public inoxContext()
        {
        }

        public inoxContext(DbContextOptions<inoxContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Cinema> Cinemas { get; set; }
        public virtual DbSet<DirectorCast> DirectorCasts { get; set; }
        public virtual DbSet<Movie> Movies { get; set; }
        public virtual DbSet<MovieDirectorCast> MovieDirectorCasts { get; set; }
        public virtual DbSet<PaymentMethod> PaymentMethods { get; set; }
        public virtual DbSet<Row> Rows { get; set; }
        public virtual DbSet<Screen> Screens { get; set; }
        public virtual DbSet<Seat> Seats { get; set; }
        public virtual DbSet<SeatType> SeatTypes { get; set; }
        public virtual DbSet<ShowTime> ShowTimes { get; set; }
        public virtual DbSet<Ticket> Tickets { get; set; }
        public virtual DbSet<User> Users { get; set; }
        public virtual DbSet<UserBookingHistory> UserBookingHistories { get; set; }
        public virtual DbSet<VCastofmovie> VCastofmovies { get; set; }
        public virtual DbSet<VCinemaScreen> VCinemaScreens { get; set; }
        public virtual DbSet<VHistory> VHistories { get; set; }
        public virtual DbSet<VSeat> VSeats { get; set; }

//        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
//        {
//            if (!optionsBuilder.IsConfigured)
//            {
////#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
//                optionsBuilder.UseSqlServer("Data Source=DESKTOP-B3UT0RK\\SQLEXPRESS;Initial Catalog=InoxAuthentication;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False");
//            }
//        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");
            base.OnModelCreating(modelBuilder);
           
            modelBuilder.Entity<Cinema>(entity =>
            {
                entity.ToTable("Cinema");

                entity.HasIndex(e => new { e.CinemaName, e.CinemaAddress, e.CinemaPincode, e.CinemaCity, e.CinemaContactNo }, "Ukcinemaall")
                    .IsUnique();

                entity.Property(e => e.CinemaId)
                    .ValueGeneratedNever()
                    .HasColumnName("CinemaID");

                entity.Property(e => e.CinemaAddress)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.CinemaCity)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.CinemaName)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<DirectorCast>(entity =>
            {
                entity.HasKey(e => e.NameId);

                entity.ToTable("DirectorCast");

                entity.Property(e => e.NameId)
                    .ValueGeneratedNever()
                    .HasColumnName("NameID");

                entity.Property(e => e.Gender)
                    .IsRequired()
                    .HasMaxLength(6)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Movie>(entity =>
            {
                entity.Property(e => e.MovieId)
                    .ValueGeneratedNever()
                    .HasColumnName("MovieID");

                entity.Property(e => e.Descripton)
                    .IsRequired()
                    .HasMaxLength(150)
                    .IsUnicode(false);

                entity.Property(e => e.Language)
                    .IsRequired()
                    .HasMaxLength(15)
                    .IsUnicode(false);

                entity.Property(e => e.MovieName)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.ReleaseDate).HasColumnType("date");
            });

            modelBuilder.Entity<MovieDirectorCast>(entity =>
            {
                entity.HasKey(e => new { e.MovieId, e.NameId, e.Role });

                entity.ToTable("MovieDirectorCast");

                entity.HasIndex(e => e.NameId, "IX_MovieDirectorCast_NameID");

                entity.HasIndex(e => new { e.MovieId, e.NameId, e.Role }, "UkMovieIDNameIDRole")
                    .IsUnique();

                entity.Property(e => e.MovieId).HasColumnName("MovieID");

                entity.Property(e => e.NameId).HasColumnName("NameID");

                entity.Property(e => e.Role)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.HasOne(d => d.Movie)
                    .WithMany(p => p.MovieDirectorCasts)
                    .HasForeignKey(d => d.MovieId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_MovieDirectorCast_Movies");

                entity.HasOne(d => d.Name)
                    .WithMany(p => p.MovieDirectorCasts)
                    .HasForeignKey(d => d.NameId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_MovieDirectorCast_DirectorCast");
            });

            modelBuilder.Entity<PaymentMethod>(entity =>
            {
                entity.HasKey(e => e.PaymentId);

                entity.ToTable("PaymentMethod");

                entity.Property(e => e.PaymentId).ValueGeneratedNever();

                entity.Property(e => e.PaymentMethod1)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("PaymentMethod");
            });

            modelBuilder.Entity<Row>(entity =>
            {
                entity.HasIndex(e => new { e.RowNo, e.ScreenId }, "UkRowIDScreenID")
                    .IsUnique();

                entity.Property(e => e.RowId).ValueGeneratedNever();

                entity.HasOne(d => d.Screen)
                    .WithMany(p => p.Rows)
                    .HasForeignKey(d => d.ScreenId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Rows_Screens");
            });

            modelBuilder.Entity<Screen>(entity =>
            {
                entity.HasIndex(e => new { e.CinemaId, e.ScreenNo }, "UkCinemaIDScreenNo")
                    .IsUnique();

                entity.Property(e => e.ScreenId)
                    .ValueGeneratedNever()
                    .HasColumnName("ScreenID");

                entity.Property(e => e.CinemaId).HasColumnName("CinemaID");

                entity.HasOne(d => d.Cinema)
                    .WithMany(p => p.Screens)
                    .HasForeignKey(d => d.CinemaId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Screens_Cinema");
            });

            modelBuilder.Entity<Seat>(entity =>
            {
                entity.HasIndex(e => e.RowId, "IX_Seats_RowId");

                entity.HasIndex(e => e.SeatTypeId, "IX_Seats_SeatTypeID");

                entity.Property(e => e.SeatId)
                    .ValueGeneratedNever()
                    .HasColumnName("SeatID");

                entity.Property(e => e.SeatTypeId).HasColumnName("SeatTypeID");

                entity.HasOne(d => d.Row)
                    .WithMany(p => p.SeatsNavigation)
                    .HasForeignKey(d => d.RowId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Seats_Rows");

                entity.HasOne(d => d.SeatType)
                    .WithMany(p => p.Seats)
                    .HasForeignKey(d => d.SeatTypeId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Seats_SeatType1");
            });

            modelBuilder.Entity<SeatType>(entity =>
            {
                entity.ToTable("SeatType");

                entity.Property(e => e.SeatTypeId)
                    .ValueGeneratedNever()
                    .HasColumnName("SeatTypeID");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<ShowTime>(entity =>
            {
                entity.ToTable("ShowTime");

                entity.HasIndex(e => e.ScreenId, "IX_ShowTime_ScreenID");

                entity.HasIndex(e => new { e.MovieId, e.ScreenId, e.StartTime, e.Date }, "UkmIDsIDsTIMEdate")
                    .IsUnique();

                entity.Property(e => e.ShowTimeId).HasColumnName("ShowTimeID");

                entity.Property(e => e.Date).HasColumnType("date");

                entity.Property(e => e.MovieId).HasColumnName("MovieID");

                entity.Property(e => e.ScreenId).HasColumnName("ScreenID");

                entity.HasOne(d => d.Movie)
                    .WithMany(p => p.ShowTimes)
                    .HasForeignKey(d => d.MovieId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ShowTime_Movies");

                entity.HasOne(d => d.Screen)
                    .WithMany(p => p.ShowTimes)
                    .HasForeignKey(d => d.ScreenId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ShowTime_Screens");
            });

            modelBuilder.Entity<Ticket>(entity =>
            {
                entity.HasIndex(e => new { e.ShowTimeId, e.SeatId }, "uk_showSeat")
                    .IsUnique();

                entity.Property(e => e.TicketId).HasColumnName("TicketID");

                entity.Property(e => e.Date).HasColumnType("date");

                entity.Property(e => e.PaymentDetail)
                    .HasMaxLength(10)
                    .IsFixedLength(true);

                entity.Property(e => e.PaymentId).HasColumnName("PaymentID");

                entity.Property(e => e.SeatId).HasColumnName("SeatID");

                entity.Property(e => e.ShowTimeId).HasColumnName("ShowTimeID");

                entity.Property(e => e.UserGmail)
                    .IsRequired()
                    .HasMaxLength(256);

                entity.HasOne(d => d.Payment)
                    .WithMany(p => p.Tickets)
                    .HasForeignKey(d => d.PaymentId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Tickets_PaymentMethod");

                entity.HasOne(d => d.Seat)
                    .WithMany(p => p.Tickets)
                    .HasForeignKey(d => d.SeatId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Tickets_Seats");

                entity.HasOne(d => d.ShowTime)
                    .WithMany(p => p.Tickets)
                    .HasForeignKey(d => d.ShowTimeId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Tickets_ShowTime");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.HasKey(e => e.UserGmail);

                entity.ToTable("User");

                entity.Property(e => e.UserGmail)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.UserName)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<UserBookingHistory>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("UserBookingHistory");

                entity.Property(e => e.Date).HasColumnType("date");

                entity.Property(e => e.Email).HasMaxLength(256);

                entity.Property(e => e.PaymentDetail)
                    .HasMaxLength(10)
                    .IsFixedLength(true);

                entity.Property(e => e.PaymentId).HasColumnName("PaymentID");

                entity.Property(e => e.SeatId).HasColumnName("SeatID");

                entity.Property(e => e.ShowTimeId).HasColumnName("ShowTimeID");

                entity.Property(e => e.TicketId).HasColumnName("TicketID");

                entity.Property(e => e.UserGmail)
                    .IsRequired()
                    .HasMaxLength(256);
            });

            modelBuilder.Entity<VCastofmovie>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("vCastofmovie");

                entity.Property(e => e.Gender)
                    .IsRequired()
                    .HasMaxLength(6)
                    .IsUnicode(false);

                entity.Property(e => e.MovieId).HasColumnName("MovieID");

                entity.Property(e => e.MovieName)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Role)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<VCinemaScreen>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("vCinemaScreen");

                entity.Property(e => e.CinemaAddress)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.CinemaCity)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.CinemaName)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Date).HasColumnType("date");

                entity.Property(e => e.MovieId).HasColumnName("MovieID");

                entity.Property(e => e.ScreenId).HasColumnName("ScreenID");

                entity.Property(e => e.ShowTimeId).HasColumnName("ShowTimeID");
            });

            modelBuilder.Entity<VHistory>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("vHistory");

                entity.Property(e => e.BookingDate).HasColumnType("date");

                entity.Property(e => e.CinemaCity)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.CinemaName)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Language)
                    .IsRequired()
                    .HasMaxLength(15)
                    .IsUnicode(false);

                entity.Property(e => e.MovieName)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.ShowDate).HasColumnType("date");

                entity.Property(e => e.TicketId).HasColumnName("TicketID");

                entity.Property(e => e.UserGmail)
                    .IsRequired()
                    .HasMaxLength(256);
            });

            modelBuilder.Entity<VSeat>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("vSeats");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.SeatId).HasColumnName("SeatID");

                entity.Property(e => e.SeatTypeId).HasColumnName("SeatTypeID");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
