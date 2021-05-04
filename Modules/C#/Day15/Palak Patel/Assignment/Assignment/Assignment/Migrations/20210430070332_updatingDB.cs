using Microsoft.EntityFrameworkCore.Migrations;

namespace Assignment1.Migrations
{
    public partial class updatingDB : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_emps_employees_employeesid",
                table: "emps");

            migrationBuilder.DropIndex(
                name: "IX_emps_employeesid",
                table: "emps");

            migrationBuilder.DropColumn(
                name: "employeesid",
                table: "emps");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "employeesid",
                table: "emps",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_emps_employeesid",
                table: "emps",
                column: "employeesid");

            migrationBuilder.AddForeignKey(
                name: "FK_emps_employees_employeesid",
                table: "emps",
                column: "employeesid",
                principalTable: "employees",
                principalColumn: "id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
