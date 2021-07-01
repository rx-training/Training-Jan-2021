using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace BookMyShowAPI.Migrations.BookMyShowDB
{
    public partial class UpdateMoviesTbl : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            //migrationBuilder.CreateTable(
            //    name: "Admins",
            //    columns: table => new
            //    {
            //        AdminId = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        ContactNo = table.Column<string>(type: "char(10)", unicode: false, fixedLength: true, maxLength: 10, nullable: false),
            //        Password = table.Column<string>(type: "varchar(10)", unicode: false, maxLength: 10, nullable: false),
            //        UserName = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: true),
            //        Email = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_Admins", x => x.AdminId);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "Certifications",
            //    columns: table => new
            //    {
            //        CertificationId = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        Certification = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_Certifications", x => x.CertificationId);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "EventBookings",
            //    columns: table => new
            //    {
            //        EventBookingId = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        BookingDate = table.Column<DateTime>(type: "date", nullable: false, defaultValueSql: "(getdate())"),
            //        TicketCount = table.Column<byte>(type: "tinyint", nullable: false),
            //        Event = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
            //        UserContact = table.Column<string>(type: "char(10)", unicode: false, fixedLength: true, maxLength: 10, nullable: false),
            //        EventVenue = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
            //        ShowTiming = table.Column<TimeSpan>(type: "time", nullable: false),
            //        TotalAmount = table.Column<decimal>(type: "money", nullable: true, defaultValueSql: "((0))"),
            //        EventType = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
            //        DateOfEvent = table.Column<DateTime>(type: "date", nullable: false)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_EventBookings", x => x.EventBookingId);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "EventTypes",
            //    columns: table => new
            //    {
            //        EventTypeId = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        EventType = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_EventTypes", x => x.EventTypeId);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "FilmCategories",
            //    columns: table => new
            //    {
            //        FilmCategoryId = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        FilmCategory = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_FilmCategories", x => x.FilmCategoryId);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "Genres",
            //    columns: table => new
            //    {
            //        GenreId = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        Genre = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_Genres", x => x.GenreId);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "Languages",
            //    columns: table => new
            //    {
            //        LanguageId = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        Language = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_Languages", x => x.LanguageId);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "MovieBookings",
            //    columns: table => new
            //    {
            //        MovieBookingId = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        BookingDate = table.Column<DateTime>(type: "date", nullable: false, defaultValueSql: "(getdate())"),
            //        Movie = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
            //        UserContact = table.Column<string>(type: "char(10)", unicode: false, fixedLength: true, maxLength: 10, nullable: false),
            //        SeatNo = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
            //        Theatre = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
            //        ShowTiming = table.Column<TimeSpan>(type: "time", nullable: false),
            //        TotalAmount = table.Column<decimal>(type: "money", nullable: true, defaultValueSql: "((0))"),
            //        Screen = table.Column<int>(type: "int", nullable: true),
            //        City = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
            //        Language = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
            //        FilmCategory = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
            //        DateToWatch = table.Column<DateTime>(type: "date", nullable: false),
            //        TotalTickets = table.Column<byte>(type: "tinyint", nullable: false)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_MovieBookings", x => x.MovieBookingId);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "Regions",
            //    columns: table => new
            //    {
            //        RegionId = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        Name = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_Regions", x => x.RegionId);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "SeatsCategories",
            //    columns: table => new
            //    {
            //        SeatsCategoryId = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        Name = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
            //        Price = table.Column<decimal>(type: "money", nullable: false)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_SeatsCategories", x => x.SeatsCategoryId);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "ShowTimings",
            //    columns: table => new
            //    {
            //        ShowTimingId = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        ShowTime = table.Column<TimeSpan>(type: "time", nullable: false)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_ShowTimings", x => x.ShowTimingId);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "TheatresMovies",
            //    columns: table => new
            //    {
            //        TheatreId = table.Column<int>(type: "int", nullable: false),
            //        Theatre = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
            //        Address = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
            //        CityId = table.Column<int>(type: "int", nullable: false),
            //        City = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
            //        ShowTimingId = table.Column<int>(type: "int", nullable: false),
            //        ShowTime = table.Column<TimeSpan>(type: "time", nullable: false),
            //        ScreenId = table.Column<int>(type: "int", nullable: false),
            //        ScreenSeatsCategoryId = table.Column<int>(type: "int", nullable: false),
            //        SeatsCategoryId = table.Column<int>(type: "int", nullable: false),
            //        SeatCategory = table.Column<string>(name: "Seat Category", type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
            //        SeatNo = table.Column<string>(name: "Seat No", type: "varchar(41)", unicode: false, maxLength: 41, nullable: true),
            //        Price = table.Column<decimal>(type: "money", nullable: false),
            //        SeatsId = table.Column<int>(type: "int", nullable: false),
            //        IsBooked = table.Column<bool>(type: "bit", nullable: true),
            //        Movie = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
            //        Image = table.Column<string>(type: "varchar(1000)", unicode: false, maxLength: 1000, nullable: true),
            //        About = table.Column<string>(type: "varchar(100)", unicode: false, maxLength: 100, nullable: false),
            //        DateOfRelease = table.Column<DateTime>(type: "date", nullable: false),
            //        Time = table.Column<string>(type: "varchar(20)", unicode: false, maxLength: 20, nullable: false),
            //        IsRecommended = table.Column<bool>(type: "bit", nullable: true),
            //        IsPremiere = table.Column<bool>(type: "bit", nullable: true),
            //        CertificationId = table.Column<int>(type: "int", nullable: false),
            //        Certification = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
            //        LanguageId = table.Column<int>(type: "int", nullable: false),
            //        Language = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
            //        GenreId = table.Column<int>(type: "int", nullable: false),
            //        Genre = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
            //        FilmCategoryId = table.Column<int>(type: "int", nullable: false),
            //        FilmCategory = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false)
            //    },
            //    constraints: table =>
            //    {
            //    });

            //migrationBuilder.CreateTable(
            //    name: "Users",
            //    columns: table => new
            //    {
            //        UserId = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        ContactNo = table.Column<string>(type: "char(10)", unicode: false, fixedLength: true, maxLength: 10, nullable: false),
            //        Password = table.Column<string>(type: "varchar(10)", unicode: false, maxLength: 10, nullable: false),
            //        UserName = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: true),
            //        Email = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_Users", x => x.UserId);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "VBookingHistories",
            //    columns: table => new
            //    {
            //        MovieEvent = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        DateOfShow = table.Column<DateTime>(type: "datetime2", nullable: false),
            //        ShowTiming = table.Column<TimeSpan>(type: "time", nullable: false),
            //        Venue = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        Screen = table.Column<int>(type: "int", nullable: false),
            //        SeatNo = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        TotalTickets = table.Column<byte>(type: "tinyint", nullable: false)
            //    },
            //    constraints: table =>
            //    {
            //    });

            //migrationBuilder.CreateTable(
            //    name: "Movies",
            //    columns: table => new
            //    {
            //        MovieId = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        Name = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
            //        Time = table.Column<string>(type: "varchar(20)", unicode: false, maxLength: 20, nullable: false),
            //        Image = table.Column<string>(type: "varchar(1000)", unicode: false, maxLength: 1000, nullable: true),
            //        DateOfRelease = table.Column<DateTime>(type: "date", nullable: false),
            //        About = table.Column<string>(type: "varchar(100)", unicode: false, maxLength: 100, nullable: false),
            //        CertificationId = table.Column<int>(type: "int", nullable: false),
            //        IsRecommended = table.Column<bool>(type: "bit", nullable: true),
            //        IsPremiere = table.Column<bool>(type: "bit", nullable: true),
            //        BackgroundImage = table.Column<string>(type: "varchar(1000)", unicode: false, maxLength: 1000, nullable: true),
            //        Cast = table.Column<string>(type: "varchar(2000)", unicode: false, maxLength: 2000, nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_Movies", x => x.MovieId);
            //        table.ForeignKey(
            //            name: "Certifications_CertificationId_FK",
            //            column: x => x.CertificationId,
            //            principalTable: "Certifications",
            //            principalColumn: "CertificationId",
            //            onDelete: ReferentialAction.Restrict);
            //    });

            migrationBuilder.AddColumn<string>(
                name: "BackgroundImage",
                table: "Movies",
                type: "varchar(1000)", 
                unicode: false, 
                maxLength: 1000, 
                nullable: true
                );

            migrationBuilder.AddColumn<string>(
                name: "Cast",
                table: "Movies",
                type: "varchar(2000)",
                unicode: false,
                maxLength: 2000,
                nullable: true
                );

            //migrationBuilder.CreateTable(
            //    name: "Cities",
            //    columns: table => new
            //    {
            //        CityId = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        RegionId = table.Column<int>(type: "int", nullable: true),
            //        Name = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_Cities", x => x.CityId);
            //        table.ForeignKey(
            //            name: "Regions_RegionID_FK",
            //            column: x => x.RegionId,
            //            principalTable: "Regions",
            //            principalColumn: "RegionId",
            //            onDelete: ReferentialAction.Restrict);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "Seats",
            //    columns: table => new
            //    {
            //        SeatsId = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        RowNo = table.Column<string>(type: "char(1)", unicode: false, fixedLength: true, maxLength: 1, nullable: false),
            //        SeatNo = table.Column<int>(type: "int", nullable: false),
            //        SeatsCategoryId = table.Column<int>(type: "int", nullable: true),
            //        IsBooked = table.Column<bool>(type: "bit", nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("Seats_SeatsId_PK", x => x.SeatsId);
            //        table.ForeignKey(
            //            name: "SeatsCategories_SeatsCategoryID_FK",
            //            column: x => x.SeatsCategoryId,
            //            principalTable: "SeatsCategories",
            //            principalColumn: "SeatsCategoryId",
            //            onDelete: ReferentialAction.Restrict);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "MovieFilmCategories",
            //    columns: table => new
            //    {
            //        MovieFilmcategory = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        MovieId = table.Column<int>(type: "int", nullable: false),
            //        FilmCategoryId = table.Column<int>(type: "int", nullable: false)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("MovieFilmCategories_MovieFilmCategory_PK", x => x.MovieFilmcategory);
            //        table.ForeignKey(
            //            name: "MovieFilmCategories_FilmCategories_FilmCategoryId_FK",
            //            column: x => x.FilmCategoryId,
            //            principalTable: "FilmCategories",
            //            principalColumn: "FilmCategoryId",
            //            onDelete: ReferentialAction.Restrict);
            //        table.ForeignKey(
            //            name: "MovieFilmCategories_Movies_MovieId_FK",
            //            column: x => x.MovieId,
            //            principalTable: "Movies",
            //            principalColumn: "MovieId",
            //            onDelete: ReferentialAction.Restrict);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "MovieGenres",
            //    columns: table => new
            //    {
            //        MovieGenre = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        MovieId = table.Column<int>(type: "int", nullable: false),
            //        GenreId = table.Column<int>(type: "int", nullable: false)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("MovieGenres_MovieGenre_PK", x => x.MovieGenre);
            //        table.ForeignKey(
            //            name: "MovieGenres_Genres_GenreId_FK",
            //            column: x => x.GenreId,
            //            principalTable: "Genres",
            //            principalColumn: "GenreId",
            //            onDelete: ReferentialAction.Restrict);
            //        table.ForeignKey(
            //            name: "MovieGenres_Movies_MovieId_FK",
            //            column: x => x.MovieId,
            //            principalTable: "Movies",
            //            principalColumn: "MovieId",
            //            onDelete: ReferentialAction.Restrict);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "MovieLanguages",
            //    columns: table => new
            //    {
            //        MovieLanguage = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        MovieId = table.Column<int>(type: "int", nullable: false),
            //        LanguageId = table.Column<int>(type: "int", nullable: false)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("MovieLanguages_MovieLanguage_PK", x => x.MovieLanguage);
            //        table.ForeignKey(
            //            name: "MovieLanguages_Languages_LanguageId_FK",
            //            column: x => x.LanguageId,
            //            principalTable: "Languages",
            //            principalColumn: "LanguageId",
            //            onDelete: ReferentialAction.Restrict);
            //        table.ForeignKey(
            //            name: "MovieLanguages_Movies_MovieId_FK",
            //            column: x => x.MovieId,
            //            principalTable: "Movies",
            //            principalColumn: "MovieId",
            //            onDelete: ReferentialAction.Restrict);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "EventVenues",
            //    columns: table => new
            //    {
            //        EventVenueId = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        Name = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
            //        Address = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
            //        TotalTickets = table.Column<int>(type: "int", nullable: false),
            //        CityId = table.Column<int>(type: "int", nullable: false)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_EventVenues", x => x.EventVenueId);
            //        table.ForeignKey(
            //            name: "EventVenues_Cities_CityId_FK",
            //            column: x => x.CityId,
            //            principalTable: "Cities",
            //            principalColumn: "CityId",
            //            onDelete: ReferentialAction.Restrict);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "Theatres",
            //    columns: table => new
            //    {
            //        TheatreId = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        Name = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
            //        CityId = table.Column<int>(type: "int", nullable: false),
            //        Address = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_Theatres", x => x.TheatreId);
            //        table.ForeignKey(
            //            name: "Cities_CityId_FK",
            //            column: x => x.CityId,
            //            principalTable: "Cities",
            //            principalColumn: "CityId",
            //            onDelete: ReferentialAction.Restrict);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "EventVenueShowTimings",
            //    columns: table => new
            //    {
            //        EventVenueShowTimingId = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        EventVenueId = table.Column<int>(type: "int", nullable: false),
            //        ShowTimingId = table.Column<int>(type: "int", nullable: false)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_EventVenueShowTimings", x => x.EventVenueShowTimingId);
            //        table.ForeignKey(
            //            name: "EventvenueShowTimings_EventVenues_EventVenueId_FK",
            //            column: x => x.EventVenueId,
            //            principalTable: "EventVenues",
            //            principalColumn: "EventVenueId",
            //            onDelete: ReferentialAction.Restrict);
            //        table.ForeignKey(
            //            name: "EventVenueShowTimings_ShowTimings_ShowTimingId_FK",
            //            column: x => x.ShowTimingId,
            //            principalTable: "ShowTimings",
            //            principalColumn: "ShowTimingId",
            //            onDelete: ReferentialAction.Restrict);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "Screens",
            //    columns: table => new
            //    {
            //        ScreenId = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        TheatreId = table.Column<int>(type: "int", nullable: false)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_Screens", x => x.ScreenId);
            //        table.ForeignKey(
            //            name: "Theatres_TheatreId_FK",
            //            column: x => x.TheatreId,
            //            principalTable: "Theatres",
            //            principalColumn: "TheatreId",
            //            onDelete: ReferentialAction.Restrict);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "TheatreShowTimings",
            //    columns: table => new
            //    {
            //        TheatreShowTimingId = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        TheatreId = table.Column<int>(type: "int", nullable: false),
            //        ShowTimingId = table.Column<int>(type: "int", nullable: false)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_TheatreShowTimings", x => x.TheatreShowTimingId);
            //        table.ForeignKey(
            //            name: "TheatreShowTimings_ShowTimings_ShowTimingId_FK",
            //            column: x => x.ShowTimingId,
            //            principalTable: "ShowTimings",
            //            principalColumn: "ShowTimingId",
            //            onDelete: ReferentialAction.Restrict);
            //        table.ForeignKey(
            //            name: "TheatreShowTimings_Theatres_TheatreId_FK",
            //            column: x => x.TheatreId,
            //            principalTable: "Theatres",
            //            principalColumn: "TheatreId",
            //            onDelete: ReferentialAction.Restrict);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "Events",
            //    columns: table => new
            //    {
            //        EventId = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        Name = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
            //        TicketPrice = table.Column<decimal>(type: "money", nullable: false),
            //        Image = table.Column<string>(type: "varchar(1000)", unicode: false, maxLength: 1000, nullable: true),
            //        Time = table.Column<string>(type: "varchar(20)", unicode: false, maxLength: 20, nullable: false),
            //        DateOfEvent = table.Column<DateTime>(type: "date", nullable: false),
            //        EventVenueShowTimingId = table.Column<int>(type: "int", nullable: false),
            //        EventTypeId = table.Column<int>(type: "int", nullable: false)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_Events", x => x.EventId);
            //        table.ForeignKey(
            //            name: "EventTypes_EventTypeId_FK",
            //            column: x => x.EventTypeId,
            //            principalTable: "EventTypes",
            //            principalColumn: "EventTypeId",
            //            onDelete: ReferentialAction.Restrict);
            //        table.ForeignKey(
            //            name: "EventVenueShowTimings_EventVenueShowTimingId_FK",
            //            column: x => x.EventVenueShowTimingId,
            //            principalTable: "EventVenueShowTimings",
            //            principalColumn: "EventVenueShowTimingId",
            //            onDelete: ReferentialAction.Restrict);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "ScreenSeatsCategories",
            //    columns: table => new
            //    {
            //        ScreenSeatsCategoryId = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        ScreenId = table.Column<int>(type: "int", nullable: false),
            //        SeatsCategoryId = table.Column<int>(type: "int", nullable: false)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_ScreenSeatsCategories", x => x.ScreenSeatsCategoryId);
            //        table.ForeignKey(
            //            name: "ScreenSeatsCategories_Screens_ScreenId_FK",
            //            column: x => x.ScreenId,
            //            principalTable: "Screens",
            //            principalColumn: "ScreenId",
            //            onDelete: ReferentialAction.Restrict);
            //        table.ForeignKey(
            //            name: "ScreenSeatsCategories_SeatsCategories_SeatsCategoryId_FK",
            //            column: x => x.SeatsCategoryId,
            //            principalTable: "SeatsCategories",
            //            principalColumn: "SeatsCategoryId",
            //            onDelete: ReferentialAction.Restrict);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "ScreenShowTimings",
            //    columns: table => new
            //    {
            //        ScreenShowTimingsId = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        ScreenId = table.Column<int>(type: "int", nullable: false),
            //        ShowTimingId = table.Column<int>(type: "int", nullable: false)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("ScreenShowTimings_ScreenShowTimingsId_PK", x => x.ScreenShowTimingsId);
            //        table.ForeignKey(
            //            name: "ScreenShowTimings_Screens_ScreenId_FK",
            //            column: x => x.ScreenId,
            //            principalTable: "Screens",
            //            principalColumn: "ScreenId",
            //            onDelete: ReferentialAction.Restrict);
            //        table.ForeignKey(
            //            name: "ScreenShowTimings_ShowTimings_ShowTimingId_FK",
            //            column: x => x.ShowTimingId,
            //            principalTable: "ShowTimings",
            //            principalColumn: "ShowTimingId",
            //            onDelete: ReferentialAction.Restrict);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "ScreensMovies",
            //    columns: table => new
            //    {
            //        ScreenMovieId = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        ScreenId = table.Column<int>(type: "int", nullable: false),
            //        MovieId = table.Column<int>(type: "int", nullable: false)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("ScreensMovies_ScreenMovieId_PK", x => x.ScreenMovieId);
            //        table.ForeignKey(
            //            name: "ScreensMovies_MOvies_MovieId_FK",
            //            column: x => x.MovieId,
            //            principalTable: "Movies",
            //            principalColumn: "MovieId",
            //            onDelete: ReferentialAction.Restrict);
            //        table.ForeignKey(
            //            name: "ScreensMovies_Screens_ScreenId_FK",
            //            column: x => x.ScreenId,
            //            principalTable: "Screens",
            //            principalColumn: "ScreenId",
            //            onDelete: ReferentialAction.Restrict);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "EventLanguages",
            //    columns: table => new
            //    {
            //        EventLanguage = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        EventId = table.Column<int>(type: "int", nullable: true),
            //        LanguageId = table.Column<int>(type: "int", nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("EventLanguages_EventLanguageId_PK", x => x.EventLanguage);
            //        table.ForeignKey(
            //            name: "EventLanguages_Events_EventId_FK",
            //            column: x => x.EventId,
            //            principalTable: "Events",
            //            principalColumn: "EventId",
            //            onDelete: ReferentialAction.Restrict);
            //        table.ForeignKey(
            //            name: "EventLanguages_Languages_LanguageID_FK",
            //            column: x => x.LanguageId,
            //            principalTable: "Languages",
            //            principalColumn: "LanguageId",
            //            onDelete: ReferentialAction.Restrict);
            //    });

            //migrationBuilder.CreateIndex(
            //    name: "IX_Cities_RegionId",
            //    table: "Cities",
            //    column: "RegionId");

            //migrationBuilder.CreateIndex(
            //    name: "IX_EventLanguages_EventId",
            //    table: "EventLanguages",
            //    column: "EventId");

            //migrationBuilder.CreateIndex(
            //    name: "IX_EventLanguages_LanguageId",
            //    table: "EventLanguages",
            //    column: "LanguageId");

            //migrationBuilder.CreateIndex(
            //    name: "IX_Events_EventTypeId",
            //    table: "Events",
            //    column: "EventTypeId");

            //migrationBuilder.CreateIndex(
            //    name: "IX_Events_EventVenueShowTimingId",
            //    table: "Events",
            //    column: "EventVenueShowTimingId");

            //migrationBuilder.CreateIndex(
            //    name: "IX_EventVenues_CityId",
            //    table: "EventVenues",
            //    column: "CityId");

            //migrationBuilder.CreateIndex(
            //    name: "EventVenueId_ShowTimingId_UK",
            //    table: "EventVenueShowTimings",
            //    columns: new[] { "EventVenueId", "ShowTimingId" },
            //    unique: true);

            //migrationBuilder.CreateIndex(
            //    name: "IX_EventVenueShowTimings_ShowTimingId",
            //    table: "EventVenueShowTimings",
            //    column: "ShowTimingId");

            //migrationBuilder.CreateIndex(
            //    name: "IX_MovieFilmCategories_FilmCategoryId",
            //    table: "MovieFilmCategories",
            //    column: "FilmCategoryId");

            //migrationBuilder.CreateIndex(
            //    name: "IX_MovieFilmCategories_MovieId",
            //    table: "MovieFilmCategories",
            //    column: "MovieId");

            //migrationBuilder.CreateIndex(
            //    name: "IX_MovieGenres_GenreId",
            //    table: "MovieGenres",
            //    column: "GenreId");

            //migrationBuilder.CreateIndex(
            //    name: "IX_MovieGenres_MovieId",
            //    table: "MovieGenres",
            //    column: "MovieId");

            //migrationBuilder.CreateIndex(
            //    name: "IX_MovieLanguages_LanguageId",
            //    table: "MovieLanguages",
            //    column: "LanguageId");

            //migrationBuilder.CreateIndex(
            //    name: "IX_MovieLanguages_MovieId",
            //    table: "MovieLanguages",
            //    column: "MovieId");

            //migrationBuilder.CreateIndex(
            //    name: "IX_Movies_CertificationId",
            //    table: "Movies",
            //    column: "CertificationId");

            //migrationBuilder.CreateIndex(
            //    name: "IX_Screens_TheatreId",
            //    table: "Screens",
            //    column: "TheatreId");

            //migrationBuilder.CreateIndex(
            //    name: "IX_ScreenSeatsCategories_SeatsCategoryId",
            //    table: "ScreenSeatsCategories",
            //    column: "SeatsCategoryId");

            //migrationBuilder.CreateIndex(
            //    name: "ScreenId_SeatsCategoryId_UK",
            //    table: "ScreenSeatsCategories",
            //    columns: new[] { "ScreenId", "SeatsCategoryId" },
            //    unique: true);

            //migrationBuilder.CreateIndex(
            //    name: "IX_ScreenShowTimings_ShowTimingId",
            //    table: "ScreenShowTimings",
            //    column: "ShowTimingId");

            //migrationBuilder.CreateIndex(
            //    name: "ScreenId_ShowTimingId_UK",
            //    table: "ScreenShowTimings",
            //    columns: new[] { "ScreenId", "ShowTimingId" },
            //    unique: true);

            //migrationBuilder.CreateIndex(
            //    name: "IX_ScreensMovies_MovieId",
            //    table: "ScreensMovies",
            //    column: "MovieId");

            //migrationBuilder.CreateIndex(
            //    name: "IX_ScreensMovies_ScreenId",
            //    table: "ScreensMovies",
            //    column: "ScreenId");

            //migrationBuilder.CreateIndex(
            //    name: "IX_Seats_SeatsCategoryId",
            //    table: "Seats",
            //    column: "SeatsCategoryId");

            //migrationBuilder.CreateIndex(
            //    name: "RowNo_SeatNo_UK",
            //    table: "Seats",
            //    columns: new[] { "RowNo", "SeatNo" },
            //    unique: true);

            //migrationBuilder.CreateIndex(
            //    name: "IX_Theatres_CityId",
            //    table: "Theatres",
            //    column: "CityId");

            //migrationBuilder.CreateIndex(
            //    name: "IX_TheatreShowTimings_ShowTimingId",
            //    table: "TheatreShowTimings",
            //    column: "ShowTimingId");

            //migrationBuilder.CreateIndex(
            //    name: "TheatreId_ShowTimingId_UK",
            //    table: "TheatreShowTimings",
            //    columns: new[] { "TheatreId", "ShowTimingId" },
            //    unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            //migrationBuilder.DropTable(
            //    name: "Admins");

            //migrationBuilder.DropTable(
            //    name: "EventBookings");

            //migrationBuilder.DropTable(
            //    name: "EventLanguages");

            //migrationBuilder.DropTable(
            //    name: "MovieBookings");

            //migrationBuilder.DropTable(
            //    name: "MovieFilmCategories");

            //migrationBuilder.DropTable(
            //    name: "MovieGenres");

            //migrationBuilder.DropTable(
            //    name: "MovieLanguages");

            //migrationBuilder.DropTable(
            //    name: "ScreenSeatsCategories");

            //migrationBuilder.DropTable(
            //    name: "ScreenShowTimings");

            //migrationBuilder.DropTable(
            //    name: "ScreensMovies");

            //migrationBuilder.DropTable(
            //    name: "Seats");

            //migrationBuilder.DropTable(
            //    name: "TheatreShowTimings");

            //migrationBuilder.DropTable(
            //    name: "TheatresMovies");

            //migrationBuilder.DropTable(
            //    name: "Users");

            //migrationBuilder.DropTable(
            //    name: "VBookingHistories");

            //migrationBuilder.DropTable(
            //    name: "Events");

            //migrationBuilder.DropTable(
            //    name: "FilmCategories");

            //migrationBuilder.DropTable(
            //    name: "Genres");

            //migrationBuilder.DropTable(
            //    name: "Languages");

            //migrationBuilder.DropTable(
            //    name: "Movies");

            migrationBuilder.DropColumn(
                    name: "BackgroundImage",
                    table: "Movies"
                );

            migrationBuilder.DropColumn(
                    name: "Cast",
                    table: "Movies"
                );

            //migrationBuilder.DropTable(
            //    name: "Screens");

            //migrationBuilder.DropTable(
            //    name: "SeatsCategories");

            //migrationBuilder.DropTable(
            //    name: "EventTypes");

            //migrationBuilder.DropTable(
            //    name: "EventVenueShowTimings");

            //migrationBuilder.DropTable(
            //    name: "Certifications");

            //migrationBuilder.DropTable(
            //    name: "Theatres");

            //migrationBuilder.DropTable(
            //    name: "EventVenues");

            //migrationBuilder.DropTable(
            //    name: "ShowTimings");

            //migrationBuilder.DropTable(
            //    name: "Cities");

            //migrationBuilder.DropTable(
            //    name: "Regions");
        }
    }
}
