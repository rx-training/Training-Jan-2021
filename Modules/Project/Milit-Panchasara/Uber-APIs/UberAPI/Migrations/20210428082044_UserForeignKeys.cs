using Microsoft.EntityFrameworkCore.Migrations;

namespace UberAPI.Migrations
{
    public partial class UserForeignKeys : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "UserId",
                schema: "Riders",
                table: "Riders",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "UserId",
                schema: "Drivers",
                table: "Drivers",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "UserId",
                schema: "Admins",
                table: "Admins",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Riders_UserId",
                schema: "Riders",
                table: "Riders",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Drivers_UserId",
                schema: "Drivers",
                table: "Drivers",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Admins_UserId",
                schema: "Admins",
                table: "Admins",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Admins_AspNetUsers_UserId",
                schema: "Admins",
                table: "Admins",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Drivers_AspNetUsers_UserId",
                schema: "Drivers",
                table: "Drivers",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Riders_AspNetUsers_UserId",
                schema: "Riders",
                table: "Riders",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Admins_AspNetUsers_UserId",
                schema: "Admins",
                table: "Admins");

            migrationBuilder.DropForeignKey(
                name: "FK_Drivers_AspNetUsers_UserId",
                schema: "Drivers",
                table: "Drivers");

            migrationBuilder.DropForeignKey(
                name: "FK_Riders_AspNetUsers_UserId",
                schema: "Riders",
                table: "Riders");

            migrationBuilder.DropIndex(
                name: "IX_Riders_UserId",
                schema: "Riders",
                table: "Riders");

            migrationBuilder.DropIndex(
                name: "IX_Drivers_UserId",
                schema: "Drivers",
                table: "Drivers");

            migrationBuilder.DropIndex(
                name: "IX_Admins_UserId",
                schema: "Admins",
                table: "Admins");

            migrationBuilder.DropColumn(
                name: "UserId",
                schema: "Riders",
                table: "Riders");

            migrationBuilder.DropColumn(
                name: "UserId",
                schema: "Drivers",
                table: "Drivers");

            migrationBuilder.DropColumn(
                name: "UserId",
                schema: "Admins",
                table: "Admins");
        }
    }
}
