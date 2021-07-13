﻿// <auto-generated />
using System;
using GSRTC.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace GSRTC.Migrations
{
    [DbContext(typeof(GSRTCContext))]
    [Migration("20210524160341_vDivisionEnquiry")]
    partial class vDivisionEnquiry
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.6")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("GSRTC.Models.Agent", b =>
                {
                    b.Property<int>("AgentID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("Aadhaar")
                        .HasColumnType("int");

                    b.Property<string>("AccountNo")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Address")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("AgencyAdd")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("BankName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("DepotName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("IFSC")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("MobileNo")
                        .HasColumnType("int");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PAN")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("PhoneNo")
                        .HasColumnType("int");

                    b.Property<string>("Profession")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("AgentID");

                    b.ToTable("Agents");
                });

            modelBuilder.Entity("GSRTC.Models.Bus", b =>
                {
                    b.Property<string>("BusID")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("BusName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("BusType")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Destination")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Origin")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Price")
                        .HasColumnType("int");

                    b.Property<string>("RoutType")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("BusID");

                    b.ToTable("Buses");
                });

            modelBuilder.Entity("GSRTC.Models.CommuterPass", b =>
                {
                    b.Property<int>("ApplicationNo")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Address")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Age")
                        .HasColumnType("int");

                    b.Property<string>("BusPassIssueLocation")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Category")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ClassOfService")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("CommuterName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("DOB")
                        .HasColumnType("datetime2");

                    b.Property<string>("Education")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("EntryDate")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("FromDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("FromPlace")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Gender")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("MobileNo")
                        .HasColumnType("int");

                    b.Property<int>("NoOfDays")
                        .HasColumnType("int");

                    b.Property<string>("Occupation")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("OrgAdd")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("OrgName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PassType")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PassangerType")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("RouteCode")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("ToDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("ToPlace")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("TotalFee")
                        .HasColumnType("int");

                    b.Property<string>("ViaPlace")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ApplicationNo");

                    b.ToTable("CommuterPasses");
                });

            modelBuilder.Entity("GSRTC.Models.Division", b =>
                {
                    b.Property<int>("DivisionID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("BusStand")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("EnquiryNo")
                        .HasColumnType("int");

                    b.Property<int>("EnquiryfkID")
                        .HasColumnType("int");

                    b.HasKey("DivisionID");

                    b.HasIndex("EnquiryfkID");

                    b.ToTable("Divisions");
                });

            modelBuilder.Entity("GSRTC.Models.Enquiry", b =>
                {
                    b.Property<int>("EnquiryID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("DivisionName")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("EnquiryID");

                    b.ToTable("Enquiries");
                });

            modelBuilder.Entity("GSRTC.Models.Route", b =>
                {
                    b.Property<string>("RouteID")
                        .HasColumnType("nvarchar(450)");

                    b.Property<TimeSpan>("ArrivalTime")
                        .HasColumnType("time");

                    b.Property<string>("BusfkID")
                        .HasColumnType("nvarchar(450)");

                    b.Property<TimeSpan>("DepartureTime")
                        .HasColumnType("time");

                    b.Property<string>("Destination")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Price")
                        .HasColumnType("int");

                    b.Property<string>("RouteName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Source")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("RouteID");

                    b.HasIndex("BusfkID");

                    b.ToTable("Routes");
                });

            modelBuilder.Entity("GSRTC.Models.TicketBooking", b =>
                {
                    b.Property<int>("TicketID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("Age")
                        .HasColumnType("int");

                    b.Property<string>("Destination")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Gender")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("MobileNo")
                        .HasColumnType("int");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("Onward")
                        .HasColumnType("datetime2");

                    b.Property<DateTime?>("Return")
                        .HasColumnType("datetime2");

                    b.Property<int>("Seat")
                        .HasColumnType("int");

                    b.Property<int>("SeatNo")
                        .HasColumnType("int");

                    b.Property<bool>("SingleLady")
                        .HasColumnType("bit");

                    b.Property<string>("Source")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("TBusfkID")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("TRoutefkID")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Ways")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("TicketID");

                    b.HasIndex("TBusfkID");

                    b.HasIndex("TRoutefkID");

                    b.ToTable("Bookings");
                });

            modelBuilder.Entity("GSRTC.Models.Wallet", b =>
                {
                    b.Property<string>("WalletID")
                        .HasColumnType("nvarchar(450)");

                    b.Property<DateTime>("DOB")
                        .HasColumnType("datetime2");

                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("MobileNo")
                        .HasColumnType("int");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("WalletID");

                    b.ToTable("Wallets");
                });

            modelBuilder.Entity("GSRTC.Models.Division", b =>
                {
                    b.HasOne("GSRTC.Models.Enquiry", "enquiry")
                        .WithMany("Divisions")
                        .HasForeignKey("EnquiryfkID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("enquiry");
                });

            modelBuilder.Entity("GSRTC.Models.Route", b =>
                {
                    b.HasOne("GSRTC.Models.Bus", "bus")
                        .WithMany("Routes")
                        .HasForeignKey("BusfkID");

                    b.Navigation("bus");
                });

            modelBuilder.Entity("GSRTC.Models.TicketBooking", b =>
                {
                    b.HasOne("GSRTC.Models.Bus", "bus")
                        .WithMany("tickets")
                        .HasForeignKey("TBusfkID");

                    b.HasOne("GSRTC.Models.Route", "route")
                        .WithMany("tickets")
                        .HasForeignKey("TRoutefkID");

                    b.Navigation("bus");

                    b.Navigation("route");
                });

            modelBuilder.Entity("GSRTC.Models.Bus", b =>
                {
                    b.Navigation("Routes");

                    b.Navigation("tickets");
                });

            modelBuilder.Entity("GSRTC.Models.Enquiry", b =>
                {
                    b.Navigation("Divisions");
                });

            modelBuilder.Entity("GSRTC.Models.Route", b =>
                {
                    b.Navigation("tickets");
                });
#pragma warning restore 612, 618
        }
    }
}