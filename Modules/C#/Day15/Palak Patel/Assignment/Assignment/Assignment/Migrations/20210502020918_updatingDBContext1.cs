using Microsoft.EntityFrameworkCore.Migrations;

namespace Assignment1.Migrations
{
    public partial class updatingDBContext1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AssignmentId",
                table: "empAssignment");

            migrationBuilder.AddColumn<int>(
                name: "emp_assignmentid",
                table: "employees",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_employees_emp_assignmentid",
                table: "employees",
                column: "emp_assignmentid");

            migrationBuilder.AddForeignKey(
                name: "FK_employees_empAssignment_emp_assignmentid",
                table: "employees",
                column: "emp_assignmentid",
                principalTable: "empAssignment",
                principalColumn: "id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_employees_empAssignment_emp_assignmentid",
                table: "employees");

            migrationBuilder.DropIndex(
                name: "IX_employees_emp_assignmentid",
                table: "employees");

            migrationBuilder.DropColumn(
                name: "emp_assignmentid",
                table: "employees");

            migrationBuilder.AddColumn<int>(
                name: "AssignmentId",
                table: "empAssignment",
                type: "int",
                nullable: true);
        }
    }
}
