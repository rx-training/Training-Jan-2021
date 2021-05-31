using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Student.Migrations
{
    public partial class Primarykey : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Students",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FirstName = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    MiddleName = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    LastName = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    DOB = table.Column<DateTime>(type: "date", nullable: true),
                    PlaceOfBirth = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    FirstLanguage = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    AddressCity = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    AddressState = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    AddressCountry = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    AddressPin = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    FatherFirstname = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    FatherMiddlename = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    FatherLastname = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    FatherEmail = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    FatherEducationQualification = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    FatherProfession = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    FatherDesignation = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    FatherPhone = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    MotherFirstname = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    MotherMiddlename = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    MotherLastname = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    MotherEmail = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    MotherEducationQualification = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    MotherProfession = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    MotherDesigation = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    MotherPhone = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    EemergencyRelation = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    EmergencyNumber = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    EemergencyRelation1 = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    EmergencyNumber1 = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    EmergencyRelation2 = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    EmergencyNumber2 = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    ReferenceDetail = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    ReferenceThrough = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    RCity = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    RState = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    RCountry = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    RPin = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    RTelNo = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Students", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Students");
        }
    }
}
