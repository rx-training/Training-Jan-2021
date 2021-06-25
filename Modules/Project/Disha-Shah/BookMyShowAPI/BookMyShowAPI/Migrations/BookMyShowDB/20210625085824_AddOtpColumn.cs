using Microsoft.EntityFrameworkCore.Migrations;

namespace BookMyShowAPI.Migrations.BookMyShowDB
{
    public partial class AddOtpColumn : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Otp",
                table: "Users",
                type: "int",
                unicode: false,
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Otp",
                table: "Users");
        }
    }
}
