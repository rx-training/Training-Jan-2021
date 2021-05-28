﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using ToyAssignment.Models;

namespace ToyAssignment.Migrations
{
    [DbContext(typeof(Toycontext))]
    partial class ToycontextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.5")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("ToyAssignment.Model.Customer", b =>
                {
                    b.Property<int>("Customerid")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("CustomerAddress")
                        .HasColumnType("int");

                    b.Property<string>("Customername")
                        .HasColumnType("nvarchar(max)");

                    b.Property<long>("Customerphoneno")
                        .HasColumnType("bigint");

                    b.HasKey("Customerid");

                    b.ToTable("Customers");
                });

            modelBuilder.Entity("ToyAssignment.Model.Offer", b =>
                {
                    b.Property<int>("Offerid")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Offername")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("discount")
                        .HasColumnType("int");

                    b.HasKey("Offerid");

                    b.ToTable("Offers");
                });

            modelBuilder.Entity("ToyAssignment.Model.Order", b =>
                {
                    b.Property<int>("Orderid")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("Ordertableid")
                        .HasColumnType("int");

                    b.Property<int?>("Toyid")
                        .HasColumnType("int");

                    b.Property<string>("cusomerName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("offerid")
                        .HasColumnType("int");

                    b.HasKey("Orderid");

                    b.HasIndex("Toyid");

                    b.ToTable("Orders");
                });

            modelBuilder.Entity("ToyAssignment.Model.Toy", b =>
                {
                    b.Property<int>("Toyid")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Toyname")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Toyplantid")
                        .HasColumnType("int");

                    b.Property<string>("Toyprice")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Toyid");

                    b.ToTable("Toys");
                });

            modelBuilder.Entity("ToyAssignment.Model.Toyplant", b =>
                {
                    b.Property<int>("Toyplantid")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Toyplantname")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Toyplantid");

                    b.ToTable("Toyplants");
                });

            modelBuilder.Entity("ToyAssignment.Model.Order", b =>
                {
                    b.HasOne("ToyAssignment.Model.Toy", "Toy")
                        .WithMany()
                        .HasForeignKey("Toyid");

                    b.Navigation("Toy");
                });
#pragma warning restore 612, 618
        }
    }
}
