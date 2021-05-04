using Microsoft.EntityFrameworkCore.Migrations;

namespace Practice.Migrations
{
    public partial class fkwithfluentApi : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_StudentAddresses_Students_StudentId",
                table: "StudentAddresses");

            migrationBuilder.DropIndex(
                name: "IX_StudentAddresses_StudentId",
                table: "StudentAddresses");

            migrationBuilder.AddColumn<int>(
                name: "AddressOfStudentId",
                table: "StudentAddresses",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_StudentAddresses_AddressOfStudentId",
                table: "StudentAddresses",
                column: "AddressOfStudentId",
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_StudentAddresses_Students_AddressOfStudentId",
                table: "StudentAddresses",
                column: "AddressOfStudentId",
                principalTable: "Students",
                principalColumn: "StudentId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_StudentAddresses_Students_AddressOfStudentId",
                table: "StudentAddresses");

            migrationBuilder.DropIndex(
                name: "IX_StudentAddresses_AddressOfStudentId",
                table: "StudentAddresses");

            migrationBuilder.DropColumn(
                name: "AddressOfStudentId",
                table: "StudentAddresses");

            migrationBuilder.CreateIndex(
                name: "IX_StudentAddresses_StudentId",
                table: "StudentAddresses",
                column: "StudentId");

            migrationBuilder.AddForeignKey(
                name: "FK_StudentAddresses_Students_StudentId",
                table: "StudentAddresses",
                column: "StudentId",
                principalTable: "Students",
                principalColumn: "StudentId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
