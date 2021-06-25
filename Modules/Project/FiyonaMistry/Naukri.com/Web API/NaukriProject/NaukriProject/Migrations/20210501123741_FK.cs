using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace NaukriProject.Migrations
{
    public partial class FK : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK__JobSeeke__FDCA4F22B4556005",
                table: "JobSeekerJobHistories");

            migrationBuilder.DropPrimaryKey(
                name: "PK__JobSeeke__A82154B69DB32DE2",
                table: "JobSeekerEducations");

            migrationBuilder.DropIndex(
                name: "UserNameIndex",
                table: "AspNetUsers");

            migrationBuilder.DropIndex(
                name: "RoleNameIndex",
                table: "AspNetRoles");

            //migrationBuilder.DropPrimaryKey(
            //    name: "PK_Admins",
            //    table: "Admins");

            migrationBuilder.AddColumn<string>(
                name: "Id",
                table: "JobSeekers",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "UserIdId",
                table: "JobSeekers",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ApplicationUserId",
                table: "Companies",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "CompanyPassword",
                table: "Companies",
                type: "varchar(500)",
                unicode: false,
                maxLength: 500,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Id",
                table: "Companies",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "UserIdId",
                table: "Companies",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ApplicationUserId",
                table: "Admins",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Id",
                table: "Admins",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "UserIdId",
                table: "Admins",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_JobSeekerJobHistories",
                table: "JobSeekerJobHistories",
                column: "JSJHID");

            migrationBuilder.AddPrimaryKey(
                name: "PK_JobSeekerEducations",
                table: "JobSeekerEducations",
                column: "JSEID");

            //migrationBuilder.AddPrimaryKey(
            //    name: "PK__Admins__719FE4E86886EFBD",
            //    table: "Admins",
            //    column: "AdminID");

            migrationBuilder.CreateTable(
                name: "ApplicationUser",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    UserName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    NormalizedUserName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    NormalizedEmail = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    EmailConfirmed = table.Column<bool>(type: "bit", nullable: false),
                    PasswordHash = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SecurityStamp = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PhoneNumber = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PhoneNumberConfirmed = table.Column<bool>(type: "bit", nullable: false),
                    TwoFactorEnabled = table.Column<bool>(type: "bit", nullable: false),
                    LockoutEnd = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: true),
                    LockoutEnabled = table.Column<bool>(type: "bit", nullable: false),
                    AccessFailedCount = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ApplicationUser", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_JobSeekers_UserIdId",
                table: "JobSeekers",
                column: "UserIdId");

            migrationBuilder.CreateIndex(
                name: "IX_Companies_ApplicationUserId",
                table: "Companies",
                column: "ApplicationUserId");

            migrationBuilder.CreateIndex(
                name: "IX_Companies_UserIdId",
                table: "Companies",
                column: "UserIdId");

            migrationBuilder.CreateIndex(
                name: "UserNameIndex",
                table: "AspNetUsers",
                column: "NormalizedUserName",
                unique: true,
                filter: "([NormalizedUserName] IS NOT NULL)");

            migrationBuilder.CreateIndex(
                name: "RoleNameIndex",
                table: "AspNetRoles",
                column: "NormalizedName",
                unique: true,
                filter: "([NormalizedName] IS NOT NULL)");

            migrationBuilder.CreateIndex(
                name: "IX_Admins_ApplicationUserId",
                table: "Admins",
                column: "ApplicationUserId");

            migrationBuilder.CreateIndex(
                name: "IX_Admins_UserIdId",
                table: "Admins",
                column: "UserIdId");

            migrationBuilder.AddForeignKey(
                name: "FK_Admins_ApplicationUser_UserIdId",
                table: "Admins",
                column: "UserIdId",
                principalTable: "ApplicationUser",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Admins_AspNetUsers_ApplicationUserId",
                table: "Admins",
                column: "ApplicationUserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Companies_ApplicationUser_UserIdId",
                table: "Companies",
                column: "UserIdId",
                principalTable: "ApplicationUser",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Companies_AspNetUsers_ApplicationUserId",
                table: "Companies",
                column: "ApplicationUserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_JobSeekers_ApplicationUser_UserIdId",
                table: "JobSeekers",
                column: "UserIdId",
                principalTable: "ApplicationUser",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Admins_ApplicationUser_UserIdId",
                table: "Admins");

            migrationBuilder.DropForeignKey(
                name: "FK_Admins_AspNetUsers_ApplicationUserId",
                table: "Admins");

            migrationBuilder.DropForeignKey(
                name: "FK_Companies_ApplicationUser_UserIdId",
                table: "Companies");

            migrationBuilder.DropForeignKey(
                name: "FK_Companies_AspNetUsers_ApplicationUserId",
                table: "Companies");

            migrationBuilder.DropForeignKey(
                name: "FK_JobSeekers_ApplicationUser_UserIdId",
                table: "JobSeekers");

            migrationBuilder.DropTable(
                name: "ApplicationUser");

            migrationBuilder.DropIndex(
                name: "IX_JobSeekers_UserIdId",
                table: "JobSeekers");

            migrationBuilder.DropPrimaryKey(
                name: "PK_JobSeekerJobHistories",
                table: "JobSeekerJobHistories");

            migrationBuilder.DropPrimaryKey(
                name: "PK_JobSeekerEducations",
                table: "JobSeekerEducations");

            migrationBuilder.DropIndex(
                name: "IX_Companies_ApplicationUserId",
                table: "Companies");

            migrationBuilder.DropIndex(
                name: "IX_Companies_UserIdId",
                table: "Companies");

            migrationBuilder.DropIndex(
                name: "UserNameIndex",
                table: "AspNetUsers");

            migrationBuilder.DropIndex(
                name: "RoleNameIndex",
                table: "AspNetRoles");

            migrationBuilder.DropPrimaryKey(
                name: "PK__Admins__719FE4E86886EFBD",
                table: "Admins");

            migrationBuilder.DropIndex(
                name: "IX_Admins_ApplicationUserId",
                table: "Admins");

            migrationBuilder.DropIndex(
                name: "IX_Admins_UserIdId",
                table: "Admins");

            migrationBuilder.DropColumn(
                name: "Id",
                table: "JobSeekers");

            migrationBuilder.DropColumn(
                name: "UserIdId",
                table: "JobSeekers");

            migrationBuilder.DropColumn(
                name: "ApplicationUserId",
                table: "Companies");

            migrationBuilder.DropColumn(
                name: "CompanyPassword",
                table: "Companies");

            migrationBuilder.DropColumn(
                name: "Id",
                table: "Companies");

            migrationBuilder.DropColumn(
                name: "UserIdId",
                table: "Companies");

            migrationBuilder.DropColumn(
                name: "ApplicationUserId",
                table: "Admins");

            migrationBuilder.DropColumn(
                name: "Id",
                table: "Admins");

            migrationBuilder.DropColumn(
                name: "UserIdId",
                table: "Admins");

            migrationBuilder.AddPrimaryKey(
                name: "PK__JobSeeke__FDCA4F22B4556005",
                table: "JobSeekerJobHistories",
                column: "JSJHID");

            migrationBuilder.AddPrimaryKey(
                name: "PK__JobSeeke__A82154B69DB32DE2",
                table: "JobSeekerEducations",
                column: "JSEID");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Admins",
                table: "Admins",
                column: "AdminID");

            migrationBuilder.CreateIndex(
                name: "UserNameIndex",
                table: "AspNetUsers",
                column: "NormalizedUserName",
                unique: true,
                filter: "[NormalizedUserName] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "RoleNameIndex",
                table: "AspNetRoles",
                column: "NormalizedName",
                unique: true,
                filter: "[NormalizedName] IS NOT NULL");
        }
    }
}
