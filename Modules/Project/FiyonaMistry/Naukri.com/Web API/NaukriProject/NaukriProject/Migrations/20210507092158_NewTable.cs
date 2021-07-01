using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace NaukriProject.Migrations
{
    public partial class NewTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AppliedForJobs",
                columns: table => new
                {
                    CompanyId = table.Column<int>(type: "int", nullable: false),
                    JobId = table.Column<int>(type: "int", nullable: false),
                    JobSeekerId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AppliedForJobs", x => new { x.CompanyId, x.JobId, x.JobSeekerId });
                    table.ForeignKey(
                        name: "FK_AppliedForJobs_Companies_CompanyId",
                        column: x => x.CompanyId,
                        principalTable: "Companies",
                        principalColumn: "CompanyID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AppliedForJobs_Jobs_JobId",
                        column: x => x.JobId,
                        principalTable: "Jobs",
                        principalColumn: "JobID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AppliedForJobs_JobSeekers_JobSeekerId",
                        column: x => x.JobSeekerId,
                        principalTable: "JobSeekers",
                        principalColumn: "JobSeekerID",
                        onDelete: ReferentialAction.Cascade);
                });

        }

        protected override void Down(MigrationBuilder migrationBuilder)
        { 
            migrationBuilder.DropTable(
                name: "AppliedForJobs");

        }
    }
}
