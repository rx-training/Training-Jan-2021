using System;
using BookMyShowAPI.Authentication;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace BookMyShowAPI.Models
{
    public partial class BookMyShowDBContext : DbContext
    {
        //public BookMyShowDBContext()
        //{
        //}

        public BookMyShowDBContext(DbContextOptions<BookMyShowDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Activity> Activities { get; set; }
        public virtual DbSet<Admin> Admins { get; set; }
        public virtual DbSet<Certification> Certifications { get; set; }
        public virtual DbSet<City> Cities { get; set; }
        public virtual DbSet<Comedy> Comedys { get; set; }
        public virtual DbSet<Event> Events { get; set; }
        public virtual DbSet<EventBooking> EventBookings { get; set; }
        public virtual DbSet<EventLanguage> EventLanguages { get; set; }
        public virtual DbSet<EventType> EventTypes { get; set; }
        public virtual DbSet<EventVenue> EventVenues { get; set; }
        public virtual DbSet<EventVenueShowTiming> EventVenueShowTimings { get; set; }
        public virtual DbSet<FilmCategory> FilmCategories { get; set; }
        public virtual DbSet<Genre> Genres { get; set; }
        public virtual DbSet<Language> Languages { get; set; }
        public virtual DbSet<Movie> Movies { get; set; }
        public virtual DbSet<MovieBooking> MovieBookings { get; set; }
        public virtual DbSet<MovieFilmCategory> MovieFilmCategories { get; set; }
        public virtual DbSet<MovieGenre> MovieGenres { get; set; }
        public virtual DbSet<MovieLanguage> MovieLanguages { get; set; }
        public virtual DbSet<Outdoor> Outdoors { get; set; }
        public virtual DbSet<Play> Plays { get; set; }
        public virtual DbSet<Popular> Populars { get; set; }
        public virtual DbSet<Region> Regions { get; set; }
        public virtual DbSet<Screen> Screens { get; set; }
        public virtual DbSet<ScreenSeatsCategory> ScreenSeatsCategories { get; set; }
        public virtual DbSet<ScreenShowTiming> ScreenShowTimings { get; set; }
        public virtual DbSet<ScreensMovie> ScreensMovies { get; set; }
        public virtual DbSet<Seat> Seats { get; set; }
        public virtual DbSet<SeatsCategory> SeatsCategories { get; set; }
        public virtual DbSet<ShowTiming> ShowTimings { get; set; }
        public virtual DbSet<Sport> Sports { get; set; }
        public virtual DbSet<Theatre> Theatres { get; set; }
        public virtual DbSet<TheatreShowTiming> TheatreShowTimings { get; set; }
        public virtual DbSet<TheatresMovie> TheatresMovies { get; set; }
        public virtual DbSet<User> Users { get; set; }
        public virtual DbSet<VCitiesRegion> VCitiesRegions { get; set; }
        public virtual DbSet<VEvent> VEvents { get; set; }
        public virtual DbSet<VEventVenuesCity> VEventVenuesCities { get; set; }
        public virtual DbSet<VEventVenuesShowtime> VEventVenuesShowtimes { get; set; }
        public virtual DbSet<VMovie> VMovies { get; set; }
        public virtual DbSet<VSeatCategorySeat> VSeatCategorySeats { get; set; }
        public virtual DbSet<VTheatresCity> VTheatresCities { get; set; }
        public virtual DbSet<VTheatresScreensSeat> VTheatresScreensSeats { get; set; }
        public virtual DbSet<VTheatresShowtime> VTheatresShowtimes { get; set; }

        public DbSet<VBookingHistory> VBookingHistories { get; set; }

        //        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //        {
        //            if (!optionsBuilder.IsConfigured)
        //            {
        //#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        //                optionsBuilder.UseSqlServer("Server=LAPTOP-NLRDC1FB\\SQLEXPRESS01;Database=BookMyShowDB;Trusted_Connection=True;");
        //            }
        //        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Activity>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("Activities");

                entity.Property(e => e.Address)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.City)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.DateOfEvent).HasColumnType("date");

                entity.Property(e => e.Event)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.EventType)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.EventVenue)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Event Venue");

                entity.Property(e => e.Image)
                    .HasMaxLength(1000)
                    .IsUnicode(false);

                entity.Property(e => e.Language)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.TicketPrice).HasColumnType("money");

                entity.Property(e => e.Time)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Admin>(entity =>
            {
                entity.Property(e => e.ContactNo)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .IsFixedLength(true);

                entity.Property(e => e.Email)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.UserName)
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Certification>(entity =>
            {
                entity.Property(e => e.Certification1)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Certification");
            });

            modelBuilder.Entity<City>(entity =>
            {
                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.HasOne(d => d.Region)
                    .WithMany(p => p.Cities)
                    .HasForeignKey(d => d.RegionId)
                    .HasConstraintName("Regions_RegionID_FK");
            });

            modelBuilder.Entity<Comedy>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("Comedys");

                entity.Property(e => e.Address)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.City)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.DateOfEvent).HasColumnType("date");

                entity.Property(e => e.Event)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.EventType)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.EventVenue)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Event Venue");

                entity.Property(e => e.Image)
                    .HasMaxLength(1000)
                    .IsUnicode(false);

                entity.Property(e => e.Language)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.TicketPrice).HasColumnType("money");

                entity.Property(e => e.Time)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Event>(entity =>
            {
                entity.Property(e => e.DateOfEvent).HasColumnType("date");

                entity.Property(e => e.Image)
                    .HasMaxLength(1000)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.TicketPrice).HasColumnType("money");

                entity.Property(e => e.Time)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.HasOne(d => d.EventType)
                    .WithMany(p => p.Events)
                    .HasForeignKey(d => d.EventTypeId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("EventTypes_EventTypeId_FK");

                entity.HasOne(d => d.EventVenueShowTiming)
                    .WithMany(p => p.Events)
                    .HasForeignKey(d => d.EventVenueShowTimingId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("EventVenueShowTimings_EventVenueShowTimingId_FK");
            });

            modelBuilder.Entity<EventBooking>(entity =>
            {
                entity.Property(e => e.BookingDate)
                    .HasColumnType("date")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.DateOfEvent).HasColumnType("date");

                entity.Property(e => e.Event)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.EventType)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.EventVenue)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.TotalAmount)
                    .HasColumnType("money")
                    .HasDefaultValueSql("((0))");

                entity.Property(e => e.UserContact)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .IsFixedLength(true);
            });

            modelBuilder.Entity<EventLanguage>(entity =>
            {
                entity.HasKey(e => e.EventLanguage1)
                    .HasName("EventLanguages_EventLanguageId_PK");

                entity.Property(e => e.EventLanguage1).HasColumnName("EventLanguage");

                entity.HasOne(d => d.Event)
                    .WithMany(p => p.EventLanguages)
                    .HasForeignKey(d => d.EventId)
                    .HasConstraintName("EventLanguages_Events_EventId_FK");

                entity.HasOne(d => d.Language)
                    .WithMany(p => p.EventLanguages)
                    .HasForeignKey(d => d.LanguageId)
                    .HasConstraintName("EventLanguages_Languages_LanguageID_FK");
            });

            modelBuilder.Entity<EventType>(entity =>
            {
                entity.Property(e => e.EventType1)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("EventType");
            });

            modelBuilder.Entity<EventVenue>(entity =>
            {
                entity.Property(e => e.Address)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.HasOne(d => d.City)
                    .WithMany(p => p.EventVenues)
                    .HasForeignKey(d => d.CityId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("EventVenues_Cities_CityId_FK");
            });

            modelBuilder.Entity<EventVenueShowTiming>(entity =>
            {
                entity.HasIndex(e => new { e.EventVenueId, e.ShowTimingId }, "EventVenueId_ShowTimingId_UK")
                    .IsUnique();

                entity.HasOne(d => d.EventVenue)
                    .WithMany(p => p.EventVenueShowTimings)
                    .HasForeignKey(d => d.EventVenueId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("EventvenueShowTimings_EventVenues_EventVenueId_FK");

                entity.HasOne(d => d.ShowTiming)
                    .WithMany(p => p.EventVenueShowTimings)
                    .HasForeignKey(d => d.ShowTimingId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("EventVenueShowTimings_ShowTimings_ShowTimingId_FK");
            });

            modelBuilder.Entity<FilmCategory>(entity =>
            {
                entity.Property(e => e.FilmCategory1)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("FilmCategory");
            });

            modelBuilder.Entity<Genre>(entity =>
            {
                entity.Property(e => e.Genre1)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Genre");
            });

            modelBuilder.Entity<Language>(entity =>
            {
                entity.Property(e => e.Language1)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Language");
            });

            modelBuilder.Entity<Movie>(entity =>
            {
                entity.Property(e => e.About)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.DateOfRelease).HasColumnType("date");

                entity.Property(e => e.Image)
                    .HasMaxLength(1000)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Time)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.HasOne(d => d.Certification)
                    .WithMany(p => p.Movies)
                    .HasForeignKey(d => d.CertificationId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("Certifications_CertificationId_FK");
            });

            modelBuilder.Entity<MovieBooking>(entity =>
            {
                entity.Property(e => e.BookingDate)
                    .HasColumnType("date")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.City)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.DateToWatch).HasColumnType("date");

                entity.Property(e => e.FilmCategory)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Language)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Movie)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.SeatNo)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Theatre)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.TotalAmount)
                    .HasColumnType("money")
                    .HasDefaultValueSql("((0))");

                entity.Property(e => e.UserContact)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .IsFixedLength(true);
            });

            modelBuilder.Entity<MovieFilmCategory>(entity =>
            {
                entity.HasKey(e => e.MovieFilmcategory1)
                    .HasName("MovieFilmCategories_MovieFilmCategory_PK");

                entity.Property(e => e.MovieFilmcategory1).HasColumnName("MovieFilmcategory");

                entity.HasOne(d => d.FilmCategory)
                    .WithMany(p => p.MovieFilmCategories)
                    .HasForeignKey(d => d.FilmCategoryId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("MovieFilmCategories_FilmCategories_FilmCategoryId_FK");

                entity.HasOne(d => d.Movie)
                    .WithMany(p => p.MovieFilmCategories)
                    .HasForeignKey(d => d.MovieId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("MovieFilmCategories_Movies_MovieId_FK");
            });

            modelBuilder.Entity<MovieGenre>(entity =>
            {
                entity.HasKey(e => e.MovieGenre1)
                    .HasName("MovieGenres_MovieGenre_PK");

                entity.Property(e => e.MovieGenre1).HasColumnName("MovieGenre");

                entity.HasOne(d => d.Genre)
                    .WithMany(p => p.MovieGenres)
                    .HasForeignKey(d => d.GenreId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("MovieGenres_Genres_GenreId_FK");

                entity.HasOne(d => d.Movie)
                    .WithMany(p => p.MovieGenres)
                    .HasForeignKey(d => d.MovieId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("MovieGenres_Movies_MovieId_FK");
            });

            modelBuilder.Entity<MovieLanguage>(entity =>
            {
                entity.HasKey(e => e.MovieLanguage1)
                    .HasName("MovieLanguages_MovieLanguage_PK");

                entity.Property(e => e.MovieLanguage1).HasColumnName("MovieLanguage");

                entity.HasOne(d => d.Language)
                    .WithMany(p => p.MovieLanguages)
                    .HasForeignKey(d => d.LanguageId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("MovieLanguages_Languages_LanguageId_FK");

                entity.HasOne(d => d.Movie)
                    .WithMany(p => p.MovieLanguages)
                    .HasForeignKey(d => d.MovieId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("MovieLanguages_Movies_MovieId_FK");
            });

            modelBuilder.Entity<Outdoor>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("Outdoors");

                entity.Property(e => e.Address)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.City)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.DateOfEvent).HasColumnType("date");

                entity.Property(e => e.Event)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.EventType)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.EventVenue)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Event Venue");

                entity.Property(e => e.Image)
                    .HasMaxLength(1000)
                    .IsUnicode(false);

                entity.Property(e => e.Language)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.TicketPrice).HasColumnType("money");

                entity.Property(e => e.Time)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Play>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("Plays");

                entity.Property(e => e.Address)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.City)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.DateOfEvent).HasColumnType("date");

                entity.Property(e => e.Event)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.EventType)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.EventVenue)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Event Venue");

                entity.Property(e => e.Image)
                    .HasMaxLength(1000)
                    .IsUnicode(false);

                entity.Property(e => e.Language)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.TicketPrice).HasColumnType("money");

                entity.Property(e => e.Time)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Popular>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("Populars");

                entity.Property(e => e.Address)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.City)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.DateOfEvent).HasColumnType("date");

                entity.Property(e => e.Event)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.EventType)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.EventVenue)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Event Venue");

                entity.Property(e => e.Image)
                    .HasMaxLength(1000)
                    .IsUnicode(false);

                entity.Property(e => e.Language)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.TicketPrice).HasColumnType("money");

                entity.Property(e => e.Time)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Region>(entity =>
            {
                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Screen>(entity =>
            {
                entity.HasOne(d => d.Theatre)
                    .WithMany(p => p.Screens)
                    .HasForeignKey(d => d.TheatreId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("Theatres_TheatreId_FK");
            });

            modelBuilder.Entity<ScreenSeatsCategory>(entity =>
            {
                entity.HasIndex(e => new { e.ScreenId, e.SeatsCategoryId }, "ScreenId_SeatsCategoryId_UK")
                    .IsUnique();

                entity.HasOne(d => d.Screen)
                    .WithMany(p => p.ScreenSeatsCategories)
                    .HasForeignKey(d => d.ScreenId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("ScreenSeatsCategories_Screens_ScreenId_FK");

                entity.HasOne(d => d.SeatsCategory)
                    .WithMany(p => p.ScreenSeatsCategories)
                    .HasForeignKey(d => d.SeatsCategoryId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("ScreenSeatsCategories_SeatsCategories_SeatsCategoryId_FK");
            });

            modelBuilder.Entity<ScreenShowTiming>(entity =>
            {
                entity.HasKey(e => e.ScreenShowTimingsId)
                    .HasName("ScreenShowTimings_ScreenShowTimingsId_PK");

                entity.HasIndex(e => new { e.ScreenId, e.ShowTimingId }, "ScreenId_ShowTimingId_UK")
                    .IsUnique();

                entity.HasOne(d => d.Screen)
                    .WithMany(p => p.ScreenShowTimings)
                    .HasForeignKey(d => d.ScreenId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("ScreenShowTimings_Screens_ScreenId_FK");

                entity.HasOne(d => d.ShowTiming)
                    .WithMany(p => p.ScreenShowTimings)
                    .HasForeignKey(d => d.ShowTimingId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("ScreenShowTimings_ShowTimings_ShowTimingId_FK");
            });

            modelBuilder.Entity<ScreensMovie>(entity =>
            {
                entity.HasKey(e => e.ScreenMovieId)
                    .HasName("ScreensMovies_ScreenMovieId_PK");

                entity.HasOne(d => d.Movie)
                    .WithMany(p => p.ScreensMovies)
                    .HasForeignKey(d => d.MovieId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("ScreensMovies_MOvies_MovieId_FK");

                entity.HasOne(d => d.Screen)
                    .WithMany(p => p.ScreensMovies)
                    .HasForeignKey(d => d.ScreenId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("ScreensMovies_Screens_ScreenId_FK");
            });

            modelBuilder.Entity<Seat>(entity =>
            {
                entity.HasKey(e => e.SeatsId)
                    .HasName("Seats_SeatsId_PK");

                entity.HasIndex(e => new { e.RowNo, e.SeatNo }, "RowNo_SeatNo_UK")
                    .IsUnique();

                entity.Property(e => e.RowNo)
                    .IsRequired()
                    .HasMaxLength(1)
                    .IsUnicode(false)
                    .IsFixedLength(true);

                entity.HasOne(d => d.SeatsCategory)
                    .WithMany(p => p.Seats)
                    .HasForeignKey(d => d.SeatsCategoryId)
                    .HasConstraintName("SeatsCategories_SeatsCategoryID_FK");
            });

            modelBuilder.Entity<SeatsCategory>(entity =>
            {
                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Price).HasColumnType("money");
            });

            modelBuilder.Entity<Sport>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("Sports");

                entity.Property(e => e.Address)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.City)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.DateOfEvent).HasColumnType("date");

                entity.Property(e => e.Event)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.EventType)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.EventVenue)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Event Venue");

                entity.Property(e => e.Image)
                    .HasMaxLength(1000)
                    .IsUnicode(false);

                entity.Property(e => e.Language)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.TicketPrice).HasColumnType("money");

                entity.Property(e => e.Time)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Theatre>(entity =>
            {
                entity.Property(e => e.Address)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.HasOne(d => d.City)
                    .WithMany(p => p.Theatres)
                    .HasForeignKey(d => d.CityId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("Cities_CityId_FK");
            });

            modelBuilder.Entity<TheatreShowTiming>(entity =>
            {
                entity.HasIndex(e => new { e.TheatreId, e.ShowTimingId }, "TheatreId_ShowTimingId_UK")
                    .IsUnique();

                entity.HasOne(d => d.ShowTiming)
                    .WithMany(p => p.TheatreShowTimings)
                    .HasForeignKey(d => d.ShowTimingId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("TheatreShowTimings_ShowTimings_ShowTimingId_FK");

                entity.HasOne(d => d.Theatre)
                    .WithMany(p => p.TheatreShowTimings)
                    .HasForeignKey(d => d.TheatreId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("TheatreShowTimings_Theatres_TheatreId_FK");
            });

            modelBuilder.Entity<TheatresMovie>(entity =>
            {
                entity.HasNoKey();

                entity.Property(e => e.About)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Address)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Certification)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.City)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.DateOfRelease).HasColumnType("date");

                entity.Property(e => e.FilmCategory)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Genre)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Image)
                    .HasMaxLength(1000)
                    .IsUnicode(false);

                entity.Property(e => e.Language)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Movie)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Price).HasColumnType("money");

                entity.Property(e => e.SeatCategory)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Seat Category");

                entity.Property(e => e.SeatNo)
                    .HasMaxLength(41)
                    .IsUnicode(false)
                    .HasColumnName("Seat No");

                entity.Property(e => e.Theatre)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Time)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.Property(e => e.ContactNo)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .IsFixedLength(true);

                entity.Property(e => e.Email)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.UserName)
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<VCitiesRegion>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("vCitiesRegions");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Region)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<VEvent>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("vEvents");

                entity.Property(e => e.Address)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.City)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.DateOfEvent).HasColumnType("date");

                entity.Property(e => e.Event)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.EventType)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.EventVenue)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Event Venue");

                entity.Property(e => e.Image)
                    .HasMaxLength(1000)
                    .IsUnicode(false);

                entity.Property(e => e.Language)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.TicketPrice).HasColumnType("money");

                entity.Property(e => e.Time)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<VEventVenuesCity>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("vEventVenuesCities");

                entity.Property(e => e.Address)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.City)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.EventVenue)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Event Venue");

                entity.Property(e => e.Region)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<VEventVenuesShowtime>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("vEventVenuesShowtimes");

                entity.Property(e => e.Address)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.City)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.EventVenue)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Event Venue");
            });

            modelBuilder.Entity<VMovie>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("vMovies");

                entity.Property(e => e.About)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Certification)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.DateOfRelease).HasColumnType("date");

                entity.Property(e => e.FilmCategory)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Genre)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Image)
                    .HasMaxLength(1000)
                    .IsUnicode(false);

                entity.Property(e => e.Language)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Time)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<VSeatCategorySeat>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("vSeatCategorySeats");

                entity.Property(e => e.Price).HasColumnType("money");

                entity.Property(e => e.SeatCategory)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Seat Category");

                entity.Property(e => e.SeatNo)
                    .HasMaxLength(41)
                    .IsUnicode(false)
                    .HasColumnName("Seat No");
            });

            modelBuilder.Entity<VTheatresCity>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("vTheatresCities");

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

                entity.Property(e => e.Region)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<VTheatresScreensSeat>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("vTheatresScreensSeats");

                entity.Property(e => e.Address)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.City)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Price).HasColumnType("money");

                entity.Property(e => e.SeatCategory)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Seat Category");

                entity.Property(e => e.SeatNo)
                    .HasMaxLength(41)
                    .IsUnicode(false)
                    .HasColumnName("Seat No");

                entity.Property(e => e.Theatre)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<VTheatresShowtime>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("vTheatresShowtimes");

                entity.Property(e => e.Address)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.City)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Theatre)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<VBookingHistory>().HasNoKey();

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
