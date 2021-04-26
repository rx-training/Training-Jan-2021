using Microsoft.EntityFrameworkCore.Migrations;

namespace CodeFirst.Migrations
{
    public partial class StudentCourseFluentAPI : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Students_Courses_CourseId",
                table: "Students");

            migrationBuilder.DropForeignKey(
                name: "FK_TeacherAddress_TeacherInfo_AddressOfTeacherId",
                table: "TeacherAddress");

            migrationBuilder.DropIndex(
                name: "IX_Students_CourseId",
                table: "Students");

            migrationBuilder.DropPrimaryKey(
                name: "PK_TeacherAddress",
                table: "TeacherAddress");

            migrationBuilder.DropColumn(
                name: "CourseId",
                table: "Students");

            migrationBuilder.RenameTable(
                name: "TeacherAddress",
                newName: "TeacherAddresses");

            migrationBuilder.RenameIndex(
                name: "IX_TeacherAddress_AddressOfTeacherId",
                table: "TeacherAddresses",
                newName: "IX_TeacherAddresses_AddressOfTeacherId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_TeacherAddresses",
                table: "TeacherAddresses",
                column: "TeacherAddressId");

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
                        name: "StudentCourse_Courses_FK",
                        column: x => x.CourseId,
                        principalTable: "Courses",
                        principalColumn: "CourseId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "StudentCourse_Students_FK",
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
                name: "FK_TeacherAddresses_TeacherInfo_AddressOfTeacherId",
                table: "TeacherAddresses",
                column: "AddressOfTeacherId",
                principalTable: "TeacherInfo",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_TeacherAddresses_TeacherInfo_AddressOfTeacherId",
                table: "TeacherAddresses");

            migrationBuilder.DropTable(
                name: "StudentCourses");

            migrationBuilder.DropPrimaryKey(
                name: "PK_TeacherAddresses",
                table: "TeacherAddresses");

            migrationBuilder.RenameTable(
                name: "TeacherAddresses",
                newName: "TeacherAddress");

            migrationBuilder.RenameIndex(
                name: "IX_TeacherAddresses_AddressOfTeacherId",
                table: "TeacherAddress",
                newName: "IX_TeacherAddress_AddressOfTeacherId");

            migrationBuilder.AddColumn<int>(
                name: "CourseId",
                table: "Students",
                type: "int",
                nullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_TeacherAddress",
                table: "TeacherAddress",
                column: "TeacherAddressId");

            migrationBuilder.CreateIndex(
                name: "IX_Students_CourseId",
                table: "Students",
                column: "CourseId");

            migrationBuilder.AddForeignKey(
                name: "FK_Students_Courses_CourseId",
                table: "Students",
                column: "CourseId",
                principalTable: "Courses",
                principalColumn: "CourseId",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_TeacherAddress_TeacherInfo_AddressOfTeacherId",
                table: "TeacherAddress",
                column: "AddressOfTeacherId",
                principalTable: "TeacherInfo",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
