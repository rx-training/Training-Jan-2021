﻿// <auto-generated />
using System;
using Inox.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Inox.Migrations
{
    [DbContext(typeof(inoxContext))]
    [Migration("20210611095837_m1")]
    partial class m1
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.6")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Inox.Authentication.ApplicationUser", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<int>("AccessFailedCount")
                        .HasColumnType("int");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Email")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<bool>("EmailConfirmed")
                        .HasColumnType("bit");

                    b.Property<bool>("LockoutEnabled")
                        .HasColumnType("bit");

                    b.Property<DateTimeOffset?>("LockoutEnd")
                        .HasColumnType("datetimeoffset");

                    b.Property<string>("NormalizedEmail")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("NormalizedUserName")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("PasswordHash")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PhoneNumber")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("PhoneNumberConfirmed")
                        .HasColumnType("bit");

                    b.Property<string>("SecurityStamp")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("TwoFactorEnabled")
                        .HasColumnType("bit");

                    b.Property<string>("UserName")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.HasKey("Id");

                    b.HasIndex("NormalizedEmail")
                        .HasDatabaseName("EmailIndex");

                    b.HasIndex("NormalizedUserName")
                        .IsUnique()
                        .HasDatabaseName("UserNameIndex")
                        .HasFilter("[NormalizedUserName] IS NOT NULL");

                    b.ToTable("AspNetUsers");
                });

            modelBuilder.Entity("Inox.Models.Cinema", b =>
                {
                    b.Property<int>("CinemaId")
                        .HasColumnType("int")
                        .HasColumnName("CinemaID");

                    b.Property<string>("CinemaAddress")
                        .IsRequired()
                        .HasMaxLength(50)
                        .IsUnicode(false)
                        .HasColumnType("varchar(50)");

                    b.Property<string>("CinemaCity")
                        .IsRequired()
                        .HasMaxLength(20)
                        .IsUnicode(false)
                        .HasColumnType("varchar(20)");

                    b.Property<int>("CinemaContactNo")
                        .HasColumnType("int");

                    b.Property<string>("CinemaName")
                        .IsRequired()
                        .HasMaxLength(30)
                        .IsUnicode(false)
                        .HasColumnType("varchar(30)");

                    b.Property<int>("CinemaPincode")
                        .HasColumnType("int");

                    b.HasKey("CinemaId");

                    b.HasIndex(new[] { "CinemaName", "CinemaAddress", "CinemaPincode", "CinemaCity", "CinemaContactNo" }, "Ukcinemaall")
                        .IsUnique();

                    b.ToTable("Cinema");
                });

            modelBuilder.Entity("Inox.Models.DirectorCast", b =>
                {
                    b.Property<int>("NameId")
                        .HasColumnType("int")
                        .HasColumnName("NameID");

                    b.Property<string>("Gender")
                        .IsRequired()
                        .HasMaxLength(6)
                        .IsUnicode(false)
                        .HasColumnType("varchar(6)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(20)
                        .IsUnicode(false)
                        .HasColumnType("varchar(20)");

                    b.HasKey("NameId");

                    b.ToTable("DirectorCast");
                });

            modelBuilder.Entity("Inox.Models.Movie", b =>
                {
                    b.Property<int>("MovieId")
                        .HasColumnType("int")
                        .HasColumnName("MovieID");

                    b.Property<string>("Descripton")
                        .IsRequired()
                        .HasMaxLength(150)
                        .IsUnicode(false)
                        .HasColumnType("varchar(150)");

                    b.Property<int>("Duration")
                        .HasColumnType("int");

                    b.Property<string>("Language")
                        .IsRequired()
                        .HasMaxLength(15)
                        .IsUnicode(false)
                        .HasColumnType("varchar(15)");

                    b.Property<string>("MovieName")
                        .IsRequired()
                        .HasMaxLength(30)
                        .IsUnicode(false)
                        .HasColumnType("varchar(30)");

                    b.Property<double>("Rationg")
                        .HasColumnType("float");

                    b.Property<DateTime>("ReleaseDate")
                        .HasColumnType("date");

                    b.HasKey("MovieId");

                    b.ToTable("Movies");
                });

            modelBuilder.Entity("Inox.Models.MovieDirectorCast", b =>
                {
                    b.Property<int>("MovieId")
                        .HasColumnType("int")
                        .HasColumnName("MovieID");

                    b.Property<int>("NameId")
                        .HasColumnType("int")
                        .HasColumnName("NameID");

                    b.Property<string>("Role")
                        .HasMaxLength(20)
                        .IsUnicode(false)
                        .HasColumnType("varchar(20)");

                    b.HasKey("MovieId", "NameId", "Role");

                    b.HasIndex(new[] { "NameId" }, "IX_MovieDirectorCast_NameID");

                    b.HasIndex(new[] { "MovieId", "NameId", "Role" }, "UkMovieIDNameIDRole")
                        .IsUnique();

                    b.ToTable("MovieDirectorCast");
                });

            modelBuilder.Entity("Inox.Models.PaymentMethod", b =>
                {
                    b.Property<int>("PaymentId")
                        .HasColumnType("int");

                    b.Property<string>("PaymentMethod1")
                        .IsRequired()
                        .HasMaxLength(20)
                        .IsUnicode(false)
                        .HasColumnType("varchar(20)")
                        .HasColumnName("PaymentMethod");

                    b.HasKey("PaymentId");

                    b.ToTable("PaymentMethod");
                });

            modelBuilder.Entity("Inox.Models.Row", b =>
                {
                    b.Property<int>("RowId")
                        .HasColumnType("int");

                    b.Property<int>("RowNo")
                        .HasColumnType("int");

                    b.Property<int>("ScreenId")
                        .HasColumnType("int");

                    b.Property<int>("Seats")
                        .HasColumnType("int");

                    b.HasKey("RowId");

                    b.HasIndex("ScreenId");

                    b.HasIndex(new[] { "RowNo", "ScreenId" }, "UkRowIDScreenID")
                        .IsUnique();

                    b.ToTable("Rows");
                });

            modelBuilder.Entity("Inox.Models.Screen", b =>
                {
                    b.Property<int>("ScreenId")
                        .HasColumnType("int")
                        .HasColumnName("ScreenID");

                    b.Property<int>("Capacity")
                        .HasColumnType("int");

                    b.Property<int>("CinemaId")
                        .HasColumnType("int")
                        .HasColumnName("CinemaID");

                    b.Property<int>("ScreenNo")
                        .HasColumnType("int");

                    b.HasKey("ScreenId");

                    b.HasIndex(new[] { "CinemaId", "ScreenNo" }, "UkCinemaIDScreenNo")
                        .IsUnique();

                    b.ToTable("Screens");
                });

            modelBuilder.Entity("Inox.Models.Seat", b =>
                {
                    b.Property<int>("SeatId")
                        .HasColumnType("int")
                        .HasColumnName("SeatID");

                    b.Property<int>("RowId")
                        .HasColumnType("int");

                    b.Property<int>("SeatNo")
                        .HasColumnType("int");

                    b.Property<int>("SeatTypeId")
                        .HasColumnType("int")
                        .HasColumnName("SeatTypeID");

                    b.HasKey("SeatId");

                    b.HasIndex(new[] { "RowId" }, "IX_Seats_RowId");

                    b.HasIndex(new[] { "SeatTypeId" }, "IX_Seats_SeatTypeID");

                    b.ToTable("Seats");
                });

            modelBuilder.Entity("Inox.Models.SeatType", b =>
                {
                    b.Property<int>("SeatTypeId")
                        .HasColumnType("int")
                        .HasColumnName("SeatTypeID");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(20)
                        .IsUnicode(false)
                        .HasColumnType("varchar(20)");

                    b.HasKey("SeatTypeId");

                    b.ToTable("SeatType");
                });

            modelBuilder.Entity("Inox.Models.ShowTime", b =>
                {
                    b.Property<int>("ShowTimeId")
                        .HasColumnType("int")
                        .HasColumnName("ShowTimeID");

                    b.Property<DateTime>("Date")
                        .HasColumnType("date");

                    b.Property<int>("MovieId")
                        .HasColumnType("int")
                        .HasColumnName("MovieID");

                    b.Property<int>("ScreenId")
                        .HasColumnType("int")
                        .HasColumnName("ScreenID");

                    b.Property<TimeSpan>("StartTime")
                        .HasColumnType("time");

                    b.HasKey("ShowTimeId");

                    b.HasIndex(new[] { "ScreenId" }, "IX_ShowTime_ScreenID");

                    b.HasIndex(new[] { "MovieId", "ScreenId", "StartTime", "Date" }, "UkmIDsIDsTIMEdate")
                        .IsUnique();

                    b.ToTable("ShowTime");
                });

            modelBuilder.Entity("Inox.Models.Ticket", b =>
                {
                    b.Property<int>("TicketId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("TicketID")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime?>("Date")
                        .HasColumnType("date");

                    b.Property<string>("PaymentDetail")
                        .HasMaxLength(10)
                        .HasColumnType("nchar(10)")
                        .IsFixedLength(true);

                    b.Property<int>("PaymentId")
                        .HasColumnType("int")
                        .HasColumnName("PaymentID");

                    b.Property<double>("Price")
                        .HasColumnType("float");

                    b.Property<int>("SeatId")
                        .HasColumnType("int")
                        .HasColumnName("SeatID");

                    b.Property<int>("ShowTimeId")
                        .HasColumnType("int")
                        .HasColumnName("ShowTimeID");

                    b.Property<string>("UserGmail")
                        .IsRequired()
                        .HasMaxLength(30)
                        .IsUnicode(false)
                        .HasColumnType("varchar(30)");

                    b.HasKey("TicketId");

                    b.HasIndex("PaymentId");

                    b.HasIndex("SeatId");

                    b.HasIndex("ShowTimeId");

                    b.HasIndex("UserGmail");

                    b.ToTable("Tickets");
                });

            modelBuilder.Entity("Inox.Models.User", b =>
                {
                    b.Property<string>("UserGmail")
                        .HasMaxLength(30)
                        .IsUnicode(false)
                        .HasColumnType("varchar(30)");

                    b.Property<int>("Age")
                        .HasColumnType("int");

                    b.Property<string>("UserName")
                        .IsRequired()
                        .HasMaxLength(20)
                        .IsUnicode(false)
                        .HasColumnType("varchar(20)");

                    b.Property<int?>("UserPhoneNo")
                        .HasColumnType("int");

                    b.HasKey("UserGmail");

                    b.ToTable("User");
                });

            modelBuilder.Entity("Inox.Models.UserBookingHistory", b =>
                {
                    b.Property<int>("Age")
                        .HasColumnType("int")
                        .HasColumnName("age");

                    b.Property<DateTime?>("Date")
                        .HasColumnType("date");

                    b.Property<string>("PaymentDetail")
                        .HasMaxLength(10)
                        .HasColumnType("nchar(10)")
                        .IsFixedLength(true);

                    b.Property<int>("PaymentId")
                        .HasColumnType("int")
                        .HasColumnName("PaymentID");

                    b.Property<double>("Price")
                        .HasColumnType("float");

                    b.Property<int>("SeatId")
                        .HasColumnType("int")
                        .HasColumnName("SeatID");

                    b.Property<int>("ShowTimeId")
                        .HasColumnType("int")
                        .HasColumnName("ShowTimeID");

                    b.Property<int>("TicketId")
                        .HasColumnType("int")
                        .HasColumnName("TicketID");

                    b.Property<string>("UserGmail")
                        .IsRequired()
                        .HasMaxLength(30)
                        .IsUnicode(false)
                        .HasColumnType("varchar(30)");

                    b.Property<string>("UserName")
                        .IsRequired()
                        .HasMaxLength(20)
                        .IsUnicode(false)
                        .HasColumnType("varchar(20)");

                    b.Property<int?>("UserPhoneNo")
                        .HasColumnType("int");

                    b.ToView("UserBookingHistory");
                });

            modelBuilder.Entity("Inox.Models.VCastofmovie", b =>
                {
                    b.Property<string>("Gender")
                        .IsRequired()
                        .HasMaxLength(6)
                        .IsUnicode(false)
                        .HasColumnType("varchar(6)");

                    b.Property<int>("MovieId")
                        .HasColumnType("int")
                        .HasColumnName("MovieID");

                    b.Property<string>("MovieName")
                        .IsRequired()
                        .HasMaxLength(30)
                        .IsUnicode(false)
                        .HasColumnType("varchar(30)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(20)
                        .IsUnicode(false)
                        .HasColumnType("varchar(20)");

                    b.Property<string>("Role")
                        .IsRequired()
                        .HasMaxLength(20)
                        .IsUnicode(false)
                        .HasColumnType("varchar(20)");

                    b.ToView("vCastofmovie");
                });

            modelBuilder.Entity("Inox.Models.VCinemaScreen", b =>
                {
                    b.Property<int>("Capacity")
                        .HasColumnType("int");

                    b.Property<string>("CinemaAddress")
                        .IsRequired()
                        .HasMaxLength(50)
                        .IsUnicode(false)
                        .HasColumnType("varchar(50)");

                    b.Property<string>("CinemaCity")
                        .IsRequired()
                        .HasMaxLength(20)
                        .IsUnicode(false)
                        .HasColumnType("varchar(20)");

                    b.Property<int>("CinemaContactNo")
                        .HasColumnType("int");

                    b.Property<string>("CinemaName")
                        .IsRequired()
                        .HasMaxLength(30)
                        .IsUnicode(false)
                        .HasColumnType("varchar(30)");

                    b.Property<int>("CinemaPincode")
                        .HasColumnType("int");

                    b.Property<DateTime>("Date")
                        .HasColumnType("date");

                    b.Property<int>("MovieId")
                        .HasColumnType("int")
                        .HasColumnName("MovieID");

                    b.Property<int>("ScreenId")
                        .HasColumnType("int")
                        .HasColumnName("ScreenID");

                    b.Property<int>("ScreenNo")
                        .HasColumnType("int");

                    b.Property<int>("ShowTimeId")
                        .HasColumnType("int")
                        .HasColumnName("ShowTimeID");

                    b.Property<TimeSpan>("StartTime")
                        .HasColumnType("time");

                    b.ToView("vCinemaScreen");
                });

            modelBuilder.Entity("Inox.Models.VSeat", b =>
                {
                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(20)
                        .IsUnicode(false)
                        .HasColumnType("varchar(20)");

                    b.Property<int>("RowId")
                        .HasColumnType("int");

                    b.Property<int>("RowNo")
                        .HasColumnType("int");

                    b.Property<int>("ScreenId")
                        .HasColumnType("int");

                    b.Property<int>("SeatId")
                        .HasColumnType("int")
                        .HasColumnName("SeatID");

                    b.Property<int>("SeatNo")
                        .HasColumnType("int");

                    b.Property<int>("SeatTypeId")
                        .HasColumnType("int")
                        .HasColumnName("SeatTypeID");

                    b.ToView("vSeats");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRole", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("NormalizedName")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.HasKey("Id");

                    b.HasIndex("NormalizedName")
                        .IsUnique()
                        .HasDatabaseName("RoleNameIndex")
                        .HasFilter("[NormalizedName] IS NOT NULL");

                    b.ToTable("AspNetRoles");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("ClaimType")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ClaimValue")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("RoleId")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("Id");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetRoleClaims");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("ClaimType")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ClaimValue")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserId")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserClaims");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.Property<string>("LoginProvider")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("ProviderKey")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("ProviderDisplayName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserId")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("LoginProvider", "ProviderKey");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserLogins");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.Property<string>("UserId")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("RoleId")
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("UserId", "RoleId");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetUserRoles");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.Property<string>("UserId")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("LoginProvider")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Value")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("UserId", "LoginProvider", "Name");

                    b.ToTable("AspNetUserTokens");
                });

            modelBuilder.Entity("Inox.Models.MovieDirectorCast", b =>
                {
                    b.HasOne("Inox.Models.Movie", "Movie")
                        .WithMany("MovieDirectorCasts")
                        .HasForeignKey("MovieId")
                        .HasConstraintName("FK_MovieDirectorCast_Movies")
                        .IsRequired();

                    b.HasOne("Inox.Models.DirectorCast", "Name")
                        .WithMany("MovieDirectorCasts")
                        .HasForeignKey("NameId")
                        .HasConstraintName("FK_MovieDirectorCast_DirectorCast")
                        .IsRequired();

                    b.Navigation("Movie");

                    b.Navigation("Name");
                });

            modelBuilder.Entity("Inox.Models.Row", b =>
                {
                    b.HasOne("Inox.Models.Screen", "Screen")
                        .WithMany("Rows")
                        .HasForeignKey("ScreenId")
                        .HasConstraintName("FK_Rows_Screens")
                        .IsRequired();

                    b.Navigation("Screen");
                });

            modelBuilder.Entity("Inox.Models.Screen", b =>
                {
                    b.HasOne("Inox.Models.Cinema", "Cinema")
                        .WithMany("Screens")
                        .HasForeignKey("CinemaId")
                        .HasConstraintName("FK_Screens_Cinema")
                        .IsRequired();

                    b.Navigation("Cinema");
                });

            modelBuilder.Entity("Inox.Models.Seat", b =>
                {
                    b.HasOne("Inox.Models.Row", "Row")
                        .WithMany("SeatsNavigation")
                        .HasForeignKey("RowId")
                        .HasConstraintName("FK_Seats_Rows")
                        .IsRequired();

                    b.HasOne("Inox.Models.SeatType", "SeatType")
                        .WithMany("Seats")
                        .HasForeignKey("SeatTypeId")
                        .HasConstraintName("FK_Seats_SeatType1")
                        .IsRequired();

                    b.Navigation("Row");

                    b.Navigation("SeatType");
                });

            modelBuilder.Entity("Inox.Models.ShowTime", b =>
                {
                    b.HasOne("Inox.Models.Movie", "Movie")
                        .WithMany("ShowTimes")
                        .HasForeignKey("MovieId")
                        .HasConstraintName("FK_ShowTime_Movies")
                        .IsRequired();

                    b.HasOne("Inox.Models.Screen", "Screen")
                        .WithMany("ShowTimes")
                        .HasForeignKey("ScreenId")
                        .HasConstraintName("FK_ShowTime_Screens")
                        .IsRequired();

                    b.Navigation("Movie");

                    b.Navigation("Screen");
                });

            modelBuilder.Entity("Inox.Models.Ticket", b =>
                {
                    b.HasOne("Inox.Models.PaymentMethod", "Payment")
                        .WithMany("Tickets")
                        .HasForeignKey("PaymentId")
                        .HasConstraintName("FK_Tickets_PaymentMethod")
                        .IsRequired();

                    b.HasOne("Inox.Models.Seat", "Seat")
                        .WithMany("Tickets")
                        .HasForeignKey("SeatId")
                        .HasConstraintName("FK_Tickets_Seats")
                        .IsRequired();

                    b.HasOne("Inox.Models.ShowTime", "ShowTime")
                        .WithMany("Tickets")
                        .HasForeignKey("ShowTimeId")
                        .HasConstraintName("FK_Tickets_ShowTime")
                        .IsRequired();

                    b.HasOne("Inox.Models.User", "UserGmailNavigation")
                        .WithMany("Tickets")
                        .HasForeignKey("UserGmail")
                        .HasConstraintName("FK_Tickets_User")
                        .IsRequired();

                    b.Navigation("Payment");

                    b.Navigation("Seat");

                    b.Navigation("ShowTime");

                    b.Navigation("UserGmailNavigation");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole", null)
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.HasOne("Inox.Authentication.ApplicationUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.HasOne("Inox.Authentication.ApplicationUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole", null)
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Inox.Authentication.ApplicationUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.HasOne("Inox.Authentication.ApplicationUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Inox.Models.Cinema", b =>
                {
                    b.Navigation("Screens");
                });

            modelBuilder.Entity("Inox.Models.DirectorCast", b =>
                {
                    b.Navigation("MovieDirectorCasts");
                });

            modelBuilder.Entity("Inox.Models.Movie", b =>
                {
                    b.Navigation("MovieDirectorCasts");

                    b.Navigation("ShowTimes");
                });

            modelBuilder.Entity("Inox.Models.PaymentMethod", b =>
                {
                    b.Navigation("Tickets");
                });

            modelBuilder.Entity("Inox.Models.Row", b =>
                {
                    b.Navigation("SeatsNavigation");
                });

            modelBuilder.Entity("Inox.Models.Screen", b =>
                {
                    b.Navigation("Rows");

                    b.Navigation("ShowTimes");
                });

            modelBuilder.Entity("Inox.Models.Seat", b =>
                {
                    b.Navigation("Tickets");
                });

            modelBuilder.Entity("Inox.Models.SeatType", b =>
                {
                    b.Navigation("Seats");
                });

            modelBuilder.Entity("Inox.Models.ShowTime", b =>
                {
                    b.Navigation("Tickets");
                });

            modelBuilder.Entity("Inox.Models.User", b =>
                {
                    b.Navigation("Tickets");
                });
#pragma warning restore 612, 618
        }
    }
}
