﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using WebApplicationAssignmentDay17.Models;

namespace WebApplicationAssignmentDay17.Migrations
{
    [DbContext(typeof(Day11Context))]
    [Migration("20210428132718_Auth")]
    partial class Auth
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.5")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

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

            modelBuilder.Entity("WebApplicationAssignmentDay17.Authentication.ApplicationUser", b =>
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

            modelBuilder.Entity("WebApplicationAssignmentDay17.Models.Assistant", b =>
                {
                    b.Property<int>("AssisId")
                        .HasColumnType("int")
                        .HasColumnName("assisID");

                    b.Property<string>("AssisAddress")
                        .IsRequired()
                        .HasMaxLength(50)
                        .IsUnicode(false)
                        .HasColumnType("varchar(50)")
                        .HasColumnName("assisAddress");

                    b.Property<string>("AssisFname")
                        .IsRequired()
                        .HasMaxLength(50)
                        .IsUnicode(false)
                        .HasColumnType("varchar(50)")
                        .HasColumnName("assisFname");

                    b.Property<string>("AssisLname")
                        .IsRequired()
                        .HasMaxLength(50)
                        .IsUnicode(false)
                        .HasColumnType("varchar(50)")
                        .HasColumnName("assisLname");

                    b.Property<int>("AssisPhoneNumber")
                        .HasColumnType("int")
                        .HasColumnName("assisPhoneNumber");

                    b.Property<string>("AssisQualification")
                        .IsRequired()
                        .HasMaxLength(50)
                        .IsUnicode(false)
                        .HasColumnType("varchar(50)")
                        .HasColumnName("assisQualification");

                    b.Property<int>("DocId")
                        .HasColumnType("int")
                        .HasColumnName("docID");

                    b.HasKey("AssisId");

                    b.HasIndex("DocId");

                    b.ToTable("Assistants");
                });

            modelBuilder.Entity("WebApplicationAssignmentDay17.Models.Department", b =>
                {
                    b.Property<int>("DeptId")
                        .HasColumnType("int")
                        .HasColumnName("deptID");

                    b.Property<string>("DeptName")
                        .IsRequired()
                        .HasMaxLength(50)
                        .IsUnicode(false)
                        .HasColumnType("varchar(50)")
                        .HasColumnName("deptName");

                    b.HasKey("DeptId");

                    b.ToTable("Departments");
                });

            modelBuilder.Entity("WebApplicationAssignmentDay17.Models.Doctor", b =>
                {
                    b.Property<int>("DocId")
                        .HasColumnType("int")
                        .HasColumnName("docID");

                    b.Property<int>("DeptId")
                        .HasColumnType("int")
                        .HasColumnName("deptID");

                    b.Property<string>("DocAddress")
                        .IsRequired()
                        .HasMaxLength(50)
                        .IsUnicode(false)
                        .HasColumnType("varchar(50)")
                        .HasColumnName("docAddress");

                    b.Property<string>("DocFname")
                        .IsRequired()
                        .HasMaxLength(50)
                        .IsUnicode(false)
                        .HasColumnType("varchar(50)")
                        .HasColumnName("docFname");

                    b.Property<string>("DocLname")
                        .IsRequired()
                        .HasMaxLength(50)
                        .IsUnicode(false)
                        .HasColumnType("varchar(50)")
                        .HasColumnName("docLname");

                    b.Property<int>("DocPhoneNumber")
                        .HasColumnType("int")
                        .HasColumnName("docPhoneNumber");

                    b.Property<string>("DocQualification")
                        .IsRequired()
                        .HasMaxLength(50)
                        .IsUnicode(false)
                        .HasColumnType("varchar(50)")
                        .HasColumnName("docQualification");

                    b.Property<string>("DocSpecialist")
                        .IsRequired()
                        .HasMaxLength(50)
                        .IsUnicode(false)
                        .HasColumnType("varchar(50)")
                        .HasColumnName("docSpecialist");

                    b.HasKey("DocId");

                    b.HasIndex("DeptId");

                    b.ToTable("Doctors");
                });

            modelBuilder.Entity("WebApplicationAssignmentDay17.Models.DoctorsDepartment", b =>
                {
                    b.Property<string>("DeptName")
                        .IsRequired()
                        .HasMaxLength(50)
                        .IsUnicode(false)
                        .HasColumnType("varchar(50)")
                        .HasColumnName("deptName");

                    b.Property<string>("DocFname")
                        .IsRequired()
                        .HasMaxLength(50)
                        .IsUnicode(false)
                        .HasColumnType("varchar(50)")
                        .HasColumnName("docFname");

                    b.ToView("DoctorsDepartment");
                });

            modelBuilder.Entity("WebApplicationAssignmentDay17.Models.Drug", b =>
                {
                    b.Property<int>("DrugId")
                        .HasColumnType("int")
                        .HasColumnName("drugID");

                    b.Property<int>("AfternoonDose")
                        .HasColumnType("int")
                        .HasColumnName("afternoonDose");

                    b.Property<string>("DrugName")
                        .IsRequired()
                        .HasMaxLength(50)
                        .IsUnicode(false)
                        .HasColumnType("varchar(50)")
                        .HasColumnName("drugName");

                    b.Property<int>("MorningDose")
                        .HasColumnType("int")
                        .HasColumnName("morningDose");

                    b.Property<int>("NightDose")
                        .HasColumnType("int")
                        .HasColumnName("nightDose");

                    b.Property<int>("PreId")
                        .HasColumnType("int")
                        .HasColumnName("preID");

                    b.HasKey("DrugId");

                    b.HasIndex("PreId");

                    b.ToTable("Drugs");
                });

            modelBuilder.Entity("WebApplicationAssignmentDay17.Models.MedicineList", b =>
                {
                    b.Property<string>("DrugName")
                        .HasMaxLength(50)
                        .IsUnicode(false)
                        .HasColumnType("varchar(50)")
                        .HasColumnName("drugName");

                    b.Property<string>("PatFname")
                        .IsRequired()
                        .HasMaxLength(50)
                        .IsUnicode(false)
                        .HasColumnType("varchar(50)")
                        .HasColumnName("patFname");

                    b.ToView("MedicineList");
                });

            modelBuilder.Entity("WebApplicationAssignmentDay17.Models.Patient", b =>
                {
                    b.Property<int>("PatId")
                        .HasColumnType("int")
                        .HasColumnName("patID");

                    b.Property<int>("AssisId")
                        .HasColumnType("int")
                        .HasColumnName("assisID");

                    b.Property<int>("DocId")
                        .HasColumnType("int")
                        .HasColumnName("docID");

                    b.Property<string>("PatAddress")
                        .IsRequired()
                        .HasMaxLength(50)
                        .IsUnicode(false)
                        .HasColumnType("varchar(50)")
                        .HasColumnName("patAddress");

                    b.Property<DateTime>("PatDob")
                        .HasColumnType("date")
                        .HasColumnName("patDOB");

                    b.Property<string>("PatFname")
                        .IsRequired()
                        .HasMaxLength(50)
                        .IsUnicode(false)
                        .HasColumnType("varchar(50)")
                        .HasColumnName("patFname");

                    b.Property<string>("PatLname")
                        .IsRequired()
                        .HasMaxLength(50)
                        .IsUnicode(false)
                        .HasColumnType("varchar(50)")
                        .HasColumnName("patLname");

                    b.Property<int>("PatPhoneNumber")
                        .HasColumnType("int")
                        .HasColumnName("patPhoneNumber");

                    b.HasKey("PatId");

                    b.HasIndex("AssisId");

                    b.HasIndex("DocId");

                    b.ToTable("Patients");
                });

            modelBuilder.Entity("WebApplicationAssignmentDay17.Models.PatientsDoctor", b =>
                {
                    b.Property<string>("DocFname")
                        .IsRequired()
                        .HasMaxLength(50)
                        .IsUnicode(false)
                        .HasColumnType("varchar(50)")
                        .HasColumnName("docFname");

                    b.Property<string>("PatFname")
                        .IsRequired()
                        .HasMaxLength(50)
                        .IsUnicode(false)
                        .HasColumnType("varchar(50)")
                        .HasColumnName("patFname");

                    b.ToView("PatientsDoctor");
                });

            modelBuilder.Entity("WebApplicationAssignmentDay17.Models.Prescription", b =>
                {
                    b.Property<int>("PreId")
                        .HasColumnType("int")
                        .HasColumnName("preID");

                    b.Property<int>("DocId")
                        .HasColumnType("int")
                        .HasColumnName("docID");

                    b.Property<int>("PatId")
                        .HasColumnType("int")
                        .HasColumnName("patID");

                    b.Property<DateTime>("PreDate")
                        .HasColumnType("datetime")
                        .HasColumnName("preDate");

                    b.HasKey("PreId");

                    b.HasIndex("DocId");

                    b.HasIndex("PatId");

                    b.ToTable("Prescriptions");
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
                    b.HasOne("WebApplicationAssignmentDay17.Authentication.ApplicationUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.HasOne("WebApplicationAssignmentDay17.Authentication.ApplicationUser", null)
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

                    b.HasOne("WebApplicationAssignmentDay17.Authentication.ApplicationUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.HasOne("WebApplicationAssignmentDay17.Authentication.ApplicationUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("WebApplicationAssignmentDay17.Models.Assistant", b =>
                {
                    b.HasOne("WebApplicationAssignmentDay17.Models.Doctor", "Doc")
                        .WithMany("Assistants")
                        .HasForeignKey("DocId")
                        .HasConstraintName("FK_Assistants_Doctors")
                        .IsRequired();

                    b.Navigation("Doc");
                });

            modelBuilder.Entity("WebApplicationAssignmentDay17.Models.Doctor", b =>
                {
                    b.HasOne("WebApplicationAssignmentDay17.Models.Department", "Dept")
                        .WithMany("Doctors")
                        .HasForeignKey("DeptId")
                        .HasConstraintName("FK_Doctors_Departments")
                        .IsRequired();

                    b.Navigation("Dept");
                });

            modelBuilder.Entity("WebApplicationAssignmentDay17.Models.Drug", b =>
                {
                    b.HasOne("WebApplicationAssignmentDay17.Models.Prescription", "Pre")
                        .WithMany("Drugs")
                        .HasForeignKey("PreId")
                        .HasConstraintName("FK_Drugs_Prescriptions")
                        .IsRequired();

                    b.Navigation("Pre");
                });

            modelBuilder.Entity("WebApplicationAssignmentDay17.Models.Patient", b =>
                {
                    b.HasOne("WebApplicationAssignmentDay17.Models.Assistant", "Assis")
                        .WithMany("Patients")
                        .HasForeignKey("AssisId")
                        .HasConstraintName("FK_Patients_Assistants")
                        .IsRequired();

                    b.HasOne("WebApplicationAssignmentDay17.Models.Doctor", "Doc")
                        .WithMany("Patients")
                        .HasForeignKey("DocId")
                        .HasConstraintName("FK_Patients_Doctors")
                        .IsRequired();

                    b.Navigation("Assis");

                    b.Navigation("Doc");
                });

            modelBuilder.Entity("WebApplicationAssignmentDay17.Models.Prescription", b =>
                {
                    b.HasOne("WebApplicationAssignmentDay17.Models.Doctor", "Doc")
                        .WithMany("Prescriptions")
                        .HasForeignKey("DocId")
                        .HasConstraintName("FK_Prescriptions_Doctors")
                        .IsRequired();

                    b.HasOne("WebApplicationAssignmentDay17.Models.Patient", "Pat")
                        .WithMany("Prescriptions")
                        .HasForeignKey("PatId")
                        .HasConstraintName("FK_Prescriptions_Patients")
                        .IsRequired();

                    b.Navigation("Doc");

                    b.Navigation("Pat");
                });

            modelBuilder.Entity("WebApplicationAssignmentDay17.Models.Assistant", b =>
                {
                    b.Navigation("Patients");
                });

            modelBuilder.Entity("WebApplicationAssignmentDay17.Models.Department", b =>
                {
                    b.Navigation("Doctors");
                });

            modelBuilder.Entity("WebApplicationAssignmentDay17.Models.Doctor", b =>
                {
                    b.Navigation("Assistants");

                    b.Navigation("Patients");

                    b.Navigation("Prescriptions");
                });

            modelBuilder.Entity("WebApplicationAssignmentDay17.Models.Patient", b =>
                {
                    b.Navigation("Prescriptions");
                });

            modelBuilder.Entity("WebApplicationAssignmentDay17.Models.Prescription", b =>
                {
                    b.Navigation("Drugs");
                });
#pragma warning restore 612, 618
        }
    }
}