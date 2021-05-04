﻿// <auto-generated />
using System;
using Assignment.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Assignment1.Migrations
{
    [DbContext(typeof(empAssignmentContext))]
    [Migration("20210430070649_updatingDB1")]
    partial class updatingDB1
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.5")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Assignment.Models.EmpAssigned", b =>
                {
                    b.Property<int>("AssignmentId")
                        .HasColumnType("int");

                    b.Property<int>("EmployeeId")
                        .HasColumnType("int");

                    b.Property<int?>("assignmentsid")
                        .HasColumnType("int");

                    b.HasKey("AssignmentId", "EmployeeId");

                    b.HasIndex("EmployeeId");

                    b.HasIndex("assignmentsid");

                    b.ToTable("empAssigned");
                });

            modelBuilder.Entity("Assignment.Models.emp_assignment", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("AssignmentCategory")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("AssignmentId")
                        .HasColumnType("int");

                    b.Property<string>("AssignmentName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("AssignmentNumber")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime?>("AssignmentProjectedEndDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("AssignmentStatus")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("AssignmentStatusTypeId")
                        .HasColumnType("int");

                    b.Property<int?>("BusinessUnitId")
                        .HasColumnType("int");

                    b.Property<DateTime?>("CreationDate")
                        .HasColumnType("datetime2");

                    b.Property<int?>("DepartmentId")
                        .HasColumnType("int");

                    b.Property<DateTime?>("EffectiveEndDate")
                        .HasColumnType("datetime2");

                    b.Property<DateTime?>("EffectiveStartDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("FullPartTime")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("GradeId")
                        .HasColumnType("int");

                    b.Property<int?>("LocationId")
                        .HasColumnType("int");

                    b.Property<int?>("ManagerAssignmentId")
                        .HasColumnType("int");

                    b.Property<int?>("ManagerId")
                        .HasColumnType("int");

                    b.Property<string>("links")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("id");

                    b.ToTable("emps");
                });

            modelBuilder.Entity("Assignment.Models.employees", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Address")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("CitizenshipId")
                        .HasColumnType("int");

                    b.Property<string>("CitizenshipLegislationCode")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("CitizenshipStatus")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime?>("CitizenshipToDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("City")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("CorrespondenceLanguage")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Country")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime?>("CreationDate")
                        .HasColumnType("datetime2");

                    b.Property<DateTime?>("DateOfBirth")
                        .HasColumnType("datetime2");

                    b.Property<string>("DisplayName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("DrivingLicenseId")
                        .HasColumnType("int");

                    b.Property<string>("FirstName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Gender")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime?>("HireDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("LastName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("LicenseNumber")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("MaritalStatus")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("MiddleName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("NationalId")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("directReports")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("id");

                    b.ToTable("employees");
                });

            modelBuilder.Entity("Assignment.Models.EmpAssigned", b =>
                {
                    b.HasOne("Assignment.Models.employees", "Employee")
                        .WithMany("Assignments")
                        .HasForeignKey("EmployeeId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Assignment.Models.emp_assignment", "assignments")
                        .WithMany("Emps")
                        .HasForeignKey("assignmentsid");

                    b.Navigation("assignments");

                    b.Navigation("Employee");
                });

            modelBuilder.Entity("Assignment.Models.emp_assignment", b =>
                {
                    b.Navigation("Emps");
                });

            modelBuilder.Entity("Assignment.Models.employees", b =>
                {
                    b.Navigation("Assignments");
                });
#pragma warning restore 612, 618
        }
    }
}
