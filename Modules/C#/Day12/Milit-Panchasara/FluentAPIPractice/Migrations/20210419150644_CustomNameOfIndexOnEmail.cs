using Microsoft.EntityFrameworkCore.Migrations;

namespace FluentAPIPractice.Migrations
{
    public partial class CustomNameOfIndexOnEmail : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameIndex(
                name: "IX_Students_Email",
                table: "Students",
                newName: "Index_Email_Students");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameIndex(
                name: "Index_Email_Students",
                table: "Students",
                newName: "IX_Students_Email");
        }
    }
}
