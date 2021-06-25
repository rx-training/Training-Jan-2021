using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace BookMyShowAPI.Migrations.BookMyShowDB
{
    public partial class ModifiedMovieBookingsTbl : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "City",
                table: "MovieBookings");

            migrationBuilder.DropColumn(
                name: "FilmCategory",
                table: "MovieBookings");

            migrationBuilder.DropColumn(
                name: "Language",
                table: "MovieBookings");

            migrationBuilder.DropColumn(
                name: "Movie",
                table: "MovieBookings");

            migrationBuilder.DropColumn(
                name: "Screen",
                table: "MovieBookings");

            migrationBuilder.DropColumn(
                name: "ShowTiming",
                table: "MovieBookings");

            migrationBuilder.DropColumn(
                name: "Theatre",
                table: "MovieBookings");

            migrationBuilder.DropColumn(
                name: "UserContact",
                table: "MovieBookings");

            migrationBuilder.AddColumn<int>(
                name: "CityId",
                table: "MovieBookings",
                type: "int",
                nullable: true,
                defaultValue: null);

            migrationBuilder.AddColumn<int>(
                name: "FilmCategoryId",
                table: "MovieBookings",
                type: "int",
                nullable: true,
                defaultValue: null);

            migrationBuilder.AddColumn<int>(
                name: "LanguageId",
                table: "MovieBookings",
                type: "int",
                nullable: true,
                defaultValue: null);

            migrationBuilder.AddColumn<int>(
                name: "MovieId",
                table: "MovieBookings",
                type: "int",
                nullable: true,
                defaultValue: null);

            migrationBuilder.AddColumn<int>(
                name: "ScreenId",
                table: "MovieBookings",
                type: "int",
                nullable: true,
                defaultValue: null);

            migrationBuilder.AddColumn<int>(
                name: "ShowTimingId",
                table: "MovieBookings",
                type: "int",
                nullable: true,
                defaultValue: null);

            migrationBuilder.AddColumn<int>(
                name: "TheatreId",
                table: "MovieBookings",
                type: "int",
                nullable: true,
                defaultValue: null);

            migrationBuilder.AddColumn<int>(
                name: "UserId",
                table: "MovieBookings",
                type: "int",
                nullable: true,
                defaultValue: null);

            migrationBuilder.CreateIndex(
                name: "IX_MovieBookings_CityId",
                table: "MovieBookings",
                column: "CityId");

            migrationBuilder.CreateIndex(
                name: "IX_MovieBookings_FilmCategoryId",
                table: "MovieBookings",
                column: "FilmCategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_MovieBookings_LanguageId",
                table: "MovieBookings",
                column: "LanguageId");

            migrationBuilder.CreateIndex(
                name: "IX_MovieBookings_MovieId",
                table: "MovieBookings",
                column: "MovieId");

            migrationBuilder.CreateIndex(
                name: "IX_MovieBookings_ScreenId",
                table: "MovieBookings",
                column: "ScreenId");

            migrationBuilder.CreateIndex(
                name: "IX_MovieBookings_ShowTimingId",
                table: "MovieBookings",
                column: "ShowTimingId");

            migrationBuilder.CreateIndex(
                name: "IX_MovieBookings_TheatreId",
                table: "MovieBookings",
                column: "TheatreId");

            migrationBuilder.CreateIndex(
                name: "IX_MovieBookings_UserId",
                table: "MovieBookings",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "MovieBookings_Cities_CityId_FK",
                table: "MovieBookings",
                column: "CityId",
                principalTable: "Cities",
                principalColumn: "CityId",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "MovieBookings_FilmCategories_FilmCategoryId_FK",
                table: "MovieBookings",
                column: "FilmCategoryId",
                principalTable: "FilmCategories",
                principalColumn: "FilmCategoryId",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "MovieBookings_Languages_LanguageId_FK",
                table: "MovieBookings",
                column: "LanguageId",
                principalTable: "Languages",
                principalColumn: "LanguageId",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "MovieBookings_Movies_MovieId_FK",
                table: "MovieBookings",
                column: "MovieId",
                principalTable: "Movies",
                principalColumn: "MovieId",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "MovieBookings_Screens_ScreenId_FK",
                table: "MovieBookings",
                column: "ScreenId",
                principalTable: "Screens",
                principalColumn: "ScreenId",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "MovieBookings_ShowTimings_ShowTimingId_FK",
                table: "MovieBookings",
                column: "ShowTimingId",
                principalTable: "ShowTimings",
                principalColumn: "ShowTimingId",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "MovieBookings_Theatres_TheatreId_FK",
                table: "MovieBookings",
                column: "TheatreId",
                principalTable: "Theatres",
                principalColumn: "TheatreId",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "MovieBookings_Users_UserId_FK",
                table: "MovieBookings",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "UserId",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "MovieBookings_Cities_CityId_FK",
                table: "MovieBookings");

            migrationBuilder.DropForeignKey(
                name: "MovieBookings_FilmCategories_FilmCategoryId_FK",
                table: "MovieBookings");

            migrationBuilder.DropForeignKey(
                name: "MovieBookings_Languages_LanguageId_FK",
                table: "MovieBookings");

            migrationBuilder.DropForeignKey(
                name: "MovieBookings_Movies_MovieId_FK",
                table: "MovieBookings");

            migrationBuilder.DropForeignKey(
                name: "MovieBookings_Screens_ScreenId_FK",
                table: "MovieBookings");

            migrationBuilder.DropForeignKey(
                name: "MovieBookings_ShowTimings_ShowTimingId_FK",
                table: "MovieBookings");

            migrationBuilder.DropForeignKey(
                name: "MovieBookings_Theatres_TheatreId_FK",
                table: "MovieBookings");

            migrationBuilder.DropForeignKey(
                name: "MovieBookings_Users_UserId_FK",
                table: "MovieBookings");

            migrationBuilder.DropIndex(
                name: "IX_MovieBookings_CityId",
                table: "MovieBookings");

            migrationBuilder.DropIndex(
                name: "IX_MovieBookings_FilmCategoryId",
                table: "MovieBookings");

            migrationBuilder.DropIndex(
                name: "IX_MovieBookings_LanguageId",
                table: "MovieBookings");

            migrationBuilder.DropIndex(
                name: "IX_MovieBookings_MovieId",
                table: "MovieBookings");

            migrationBuilder.DropIndex(
                name: "IX_MovieBookings_ScreenId",
                table: "MovieBookings");

            migrationBuilder.DropIndex(
                name: "IX_MovieBookings_ShowTimingId",
                table: "MovieBookings");

            migrationBuilder.DropIndex(
                name: "IX_MovieBookings_TheatreId",
                table: "MovieBookings");

            migrationBuilder.DropIndex(
                name: "IX_MovieBookings_UserId",
                table: "MovieBookings");

            migrationBuilder.DropColumn(
                name: "CityId",
                table: "MovieBookings");

            migrationBuilder.DropColumn(
                name: "FilmCategoryId",
                table: "MovieBookings");

            migrationBuilder.DropColumn(
                name: "LanguageId",
                table: "MovieBookings");

            migrationBuilder.DropColumn(
                name: "MovieId",
                table: "MovieBookings");

            migrationBuilder.DropColumn(
                name: "ScreenId",
                table: "MovieBookings");

            migrationBuilder.DropColumn(
                name: "ShowTimingId",
                table: "MovieBookings");

            migrationBuilder.DropColumn(
                name: "TheatreId",
                table: "MovieBookings");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "MovieBookings");

            migrationBuilder.AddColumn<string>(
                name: "City",
                table: "MovieBookings",
                type: "varchar(50)",
                unicode: false,
                maxLength: 50,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "FilmCategory",
                table: "MovieBookings",
                type: "varchar(50)",
                unicode: false,
                maxLength: 50,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Language",
                table: "MovieBookings",
                type: "varchar(50)",
                unicode: false,
                maxLength: 50,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Movie",
                table: "MovieBookings",
                type: "varchar(50)",
                unicode: false,
                maxLength: 50,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "Screen",
                table: "MovieBookings",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<TimeSpan>(
                name: "ShowTiming",
                table: "MovieBookings",
                type: "time",
                nullable: false,
                defaultValue: new TimeSpan(0, 0, 0, 0, 0));

            migrationBuilder.AddColumn<string>(
                name: "Theatre",
                table: "MovieBookings",
                type: "varchar(50)",
                unicode: false,
                maxLength: 50,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "UserContact",
                table: "MovieBookings",
                type: "char(10)",
                unicode: false,
                fixedLength: true,
                maxLength: 10,
                nullable: false,
                defaultValue: "");
        }
    }
}
