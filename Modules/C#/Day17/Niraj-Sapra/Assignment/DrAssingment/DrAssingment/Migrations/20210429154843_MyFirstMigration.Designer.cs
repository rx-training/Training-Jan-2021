﻿// <auto-generated />
using System;
using DrAssingment.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace DrAssingment.Migrations
{
    [DbContext(typeof(HospotalContext))]
    [Migration("20210429154843_MyFirstMigration")]
    partial class MyFirstMigration
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.5")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("DrAssingment.Models.Doctor", b =>
                {
                    b.Property<int>("Doctorid")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("doctorid")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Doctorname")
                        .HasMaxLength(50)
                        .IsUnicode(false)
                        .HasColumnType("varchar(50)")
                        .HasColumnName("doctorname");

                    b.HasKey("Doctorid");

                    b.ToTable("Doctor");
                });

            modelBuilder.Entity("DrAssingment.Models.HealthcareAss", b =>
                {
                    b.Property<int>("HealthcareAssid")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("HealthcareAssname")
                        .HasMaxLength(50)
                        .IsUnicode(false)
                        .HasColumnType("varchar(50)");

                    b.HasKey("HealthcareAssid");

                    b.ToTable("HealthcareAss");
                });

            modelBuilder.Entity("DrAssingment.Models.Medicine", b =>
                {
                    b.Property<int>("Medicineid")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Medicinename")
                        .HasMaxLength(50)
                        .IsUnicode(false)
                        .HasColumnType("varchar(50)");

                    b.HasKey("Medicineid");

                    b.ToTable("Medicine");
                });

            modelBuilder.Entity("DrAssingment.Models.Patient", b =>
                {
                    b.Property<int>("Patientsid")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("Doctorids")
                        .HasColumnType("int");

                    b.Property<int?>("Helthcares")
                        .HasColumnType("int");

                    b.Property<int?>("Mediciens")
                        .HasColumnType("int");

                    b.Property<int>("PatientNo")
                        .HasColumnType("int")
                        .HasColumnName("PatientNO");

                    b.Property<string>("Patientsname")
                        .HasMaxLength(50)
                        .IsUnicode(false)
                        .HasColumnType("varchar(50)");

                    b.HasKey("Patientsid")
                        .HasName("PK__Patients__E7AAB8549E883925");

                    b.HasIndex("Doctorids");

                    b.HasIndex("Helthcares");

                    b.HasIndex("Mediciens");

                    b.ToTable("Patients");
                });

            modelBuilder.Entity("DrAssingment.Models.Patient", b =>
                {
                    b.HasOne("DrAssingment.Models.Doctor", "DoctoridsNavigation")
                        .WithMany("Patients")
                        .HasForeignKey("Doctorids")
                        .HasConstraintName("fkdoctorids");

                    b.HasOne("DrAssingment.Models.HealthcareAss", "HelthcaresNavigation")
                        .WithMany("Patients")
                        .HasForeignKey("Helthcares")
                        .HasConstraintName("fkhealthcareAssid");

                    b.HasOne("DrAssingment.Models.Medicine", "MediciensNavigation")
                        .WithMany("Patients")
                        .HasForeignKey("Mediciens")
                        .HasConstraintName("fkmedicineid");

                    b.Navigation("DoctoridsNavigation");

                    b.Navigation("HelthcaresNavigation");

                    b.Navigation("MediciensNavigation");
                });

            modelBuilder.Entity("DrAssingment.Models.Doctor", b =>
                {
                    b.Navigation("Patients");
                });

            modelBuilder.Entity("DrAssingment.Models.HealthcareAss", b =>
                {
                    b.Navigation("Patients");
                });

            modelBuilder.Entity("DrAssingment.Models.Medicine", b =>
                {
                    b.Navigation("Patients");
                });
#pragma warning restore 612, 618
        }
    }
}
