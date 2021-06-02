using Microsoft.EntityFrameworkCore.Migrations;

namespace BookMyShowAPI.Migrations.BookMyShowDB
{
    public partial class UpdateMoviesAndEventsTbl : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "CastImages",
                table: "Movies",
                type: "varchar(max)",
                unicode: false,
                maxLength: 10000,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "About",
                table: "Events",
                type: "varchar(5000)",
                unicode: false,
                maxLength: 5000,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ArtistImage",
                table: "Events",
                type: "varchar(1000)",
                unicode: false,
                maxLength: 1000,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ArtistName",
                table: "Events",
                type: "varchar(500)",
                unicode: false,
                maxLength: 500,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "BackgroundImage",
                table: "Events",
                type: "varchar(1000)",
                unicode: false,
                maxLength: 1000,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Disclaimer",
                table: "Events",
                type: "varchar(max)",
                unicode: false,
                maxLength: 20000,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "FAQs",
                table: "Events",
                type: "varchar(max)",
                unicode: false,
                maxLength: 20000,
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "MinAge",
                table: "Events",
                type: "int",
                unicode: false,
                nullable: false,
                defaultValue: 3);

            migrationBuilder.AddColumn<string>(
                name: "Note",
                table: "Events",
                type: "varchar(max)",
                unicode: false,
                maxLength: 10000,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "TermsAndConditions",
                table: "Events",
                type: "varchar(max)",
                unicode: false,
                maxLength: 20000,
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CastImages",
                table: "Movies");

            migrationBuilder.DropColumn(
                name: "About",
                table: "Events");

            migrationBuilder.DropColumn(
                name: "ArtistImage",
                table: "Events");

            migrationBuilder.DropColumn(
                name: "ArtistName",
                table: "Events");

            migrationBuilder.DropColumn(
                name: "BackgroundImage",
                table: "Events");

            migrationBuilder.DropColumn(
                name: "Disclaimer",
                table: "Events");

            migrationBuilder.DropColumn(
                name: "FAQs",
                table: "Events");

            migrationBuilder.DropColumn(
                name: "MinAge",
                table: "Events");

            migrationBuilder.DropColumn(
                name: "Note",
                table: "Events");

            migrationBuilder.DropColumn(
                name: "TermsAndConditions",
                table: "Events");
        }
    }
}
