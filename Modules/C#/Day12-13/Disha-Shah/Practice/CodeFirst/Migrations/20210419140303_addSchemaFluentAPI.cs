using Microsoft.EntityFrameworkCore.Migrations;

namespace CodeFirst.Migrations
{
    public partial class addSchemaFluentAPI : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.EnsureSchema(
                name: "School");

            migrationBuilder.RenameTable(
                name: "TeacherInfo",
                newName: "TeacherInfo",
                newSchema: "School");

            migrationBuilder.RenameTable(
                name: "TeacherAddresses",
                newName: "TeacherAddresses",
                newSchema: "School");

            migrationBuilder.RenameTable(
                name: "Students",
                newName: "Students",
                newSchema: "School");

            migrationBuilder.RenameTable(
                name: "StudentCourses",
                newName: "StudentCourses",
                newSchema: "School");

            migrationBuilder.RenameTable(
                name: "StudentAddresses",
                newName: "StudentAddresses",
                newSchema: "School");

            migrationBuilder.RenameTable(
                name: "Grades",
                newName: "Grades",
                newSchema: "School");

            migrationBuilder.RenameTable(
                name: "Courses",
                newName: "Courses",
                newSchema: "School");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameTable(
                name: "TeacherInfo",
                schema: "School",
                newName: "TeacherInfo");

            migrationBuilder.RenameTable(
                name: "TeacherAddresses",
                schema: "School",
                newName: "TeacherAddresses");

            migrationBuilder.RenameTable(
                name: "Students",
                schema: "School",
                newName: "Students");

            migrationBuilder.RenameTable(
                name: "StudentCourses",
                schema: "School",
                newName: "StudentCourses");

            migrationBuilder.RenameTable(
                name: "StudentAddresses",
                schema: "School",
                newName: "StudentAddresses");

            migrationBuilder.RenameTable(
                name: "Grades",
                schema: "School",
                newName: "Grades");

            migrationBuilder.RenameTable(
                name: "Courses",
                schema: "School",
                newName: "Courses");
        }
    }
}
