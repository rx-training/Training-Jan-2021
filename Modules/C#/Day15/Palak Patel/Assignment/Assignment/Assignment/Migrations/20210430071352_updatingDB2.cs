using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Assignment1.Migrations
{
    public partial class updatingDB2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CitizenshipLegislationCode",
                table: "employees");

            migrationBuilder.DropColumn(
                name: "CitizenshipStatus",
                table: "employees");

            migrationBuilder.DropColumn(
                name: "CitizenshipToDate",
                table: "employees");

            migrationBuilder.DropColumn(
                name: "CorrespondenceLanguage",
                table: "employees");

            migrationBuilder.DropColumn(
                name: "CreationDate",
                table: "employees");

            migrationBuilder.DropColumn(
                name: "directReports",
                table: "employees");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "CitizenshipLegislationCode",
                table: "employees",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "CitizenshipStatus",
                table: "employees",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "CitizenshipToDate",
                table: "employees",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "CorrespondenceLanguage",
                table: "employees",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "CreationDate",
                table: "employees",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "directReports",
                table: "employees",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
