using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace BookMyShowAPI.Migrations.BookMyShowDB
{
    public partial class UpdateTheatreMoviesTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "EndDate",
                table: "TheatresMovies",
                type: "date",
                nullable: true,
                defaultValue: new DateTime(2021, 9, 21, 0, 0, 0, 0, DateTimeKind.Unspecified));

        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "EndDate",
                table: "TheatresMovies");

        }
    }
}
