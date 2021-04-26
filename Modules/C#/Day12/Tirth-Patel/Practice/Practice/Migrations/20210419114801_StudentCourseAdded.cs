using Microsoft.EntityFrameworkCore.Migrations;

namespace Practice.Migrations
{
    public partial class StudentCourseAdded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_StudentAddresses_Students_AddressOfStudentId",
                table: "StudentAddresses");

            migrationBuilder.DropPrimaryKey(
                name: "PK_StudentAddresses",
                table: "StudentAddresses");

            migrationBuilder.RenameTable(
                name: "StudentAddresses",
                newName: "StudentAddress");

            migrationBuilder.RenameIndex(
                name: "IX_StudentAddresses_AddressOfStudentId",
                table: "StudentAddress",
                newName: "IX_StudentAddress_AddressOfStudentId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_StudentAddress",
                table: "StudentAddress",
                column: "StudentAddressId");

            migrationBuilder.CreateTable(
                name: "StudentCourses",
                columns: table => new
                {
                    StudentId = table.Column<int>(type: "int", nullable: false),
                    CourseId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_StudentCourses", x => new { x.StudentId, x.CourseId });
                    table.ForeignKey(
                        name: "FK_StudentCourses_Courses_CourseId",
                        column: x => x.CourseId,
                        principalTable: "Courses",
                        principalColumn: "CourseId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_StudentCourses_Students_StudentId",
                        column: x => x.StudentId,
                        principalTable: "Students",
                        principalColumn: "StudentId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_StudentCourses_CourseId",
                table: "StudentCourses",
                column: "CourseId");

            migrationBuilder.AddForeignKey(
                name: "FK_StudentAddress_Students_AddressOfStudentId",
                table: "StudentAddress",
                column: "AddressOfStudentId",
                principalTable: "Students",
                principalColumn: "StudentId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_StudentAddress_Students_AddressOfStudentId",
                table: "StudentAddress");

            migrationBuilder.DropTable(
                name: "StudentCourses");

            migrationBuilder.DropPrimaryKey(
                name: "PK_StudentAddress",
                table: "StudentAddress");

            migrationBuilder.RenameTable(
                name: "StudentAddress",
                newName: "StudentAddresses");

            migrationBuilder.RenameIndex(
                name: "IX_StudentAddress_AddressOfStudentId",
                table: "StudentAddresses",
                newName: "IX_StudentAddresses_AddressOfStudentId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_StudentAddresses",
                table: "StudentAddresses",
                column: "StudentAddressId");

            migrationBuilder.AddForeignKey(
                name: "FK_StudentAddresses_Students_AddressOfStudentId",
                table: "StudentAddresses",
                column: "AddressOfStudentId",
                principalTable: "Students",
                principalColumn: "StudentId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
