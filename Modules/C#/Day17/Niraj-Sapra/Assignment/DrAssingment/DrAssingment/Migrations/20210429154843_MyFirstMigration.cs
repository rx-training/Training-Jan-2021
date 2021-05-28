using Microsoft.EntityFrameworkCore.Migrations;

namespace DrAssingment.Migrations
{
    public partial class MyFirstMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Doctor",
                columns: table => new
                {
                    doctorid = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    doctorname = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Doctor", x => x.doctorid);
                });

            migrationBuilder.CreateTable(
                name: "HealthcareAss",
                columns: table => new
                {
                    HealthcareAssid = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    HealthcareAssname = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_HealthcareAss", x => x.HealthcareAssid);
                });

            migrationBuilder.CreateTable(
                name: "Medicine",
                columns: table => new
                {
                    Medicineid = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Medicinename = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Medicine", x => x.Medicineid);
                });

            migrationBuilder.CreateTable(
                name: "Patients",
                columns: table => new
                {
                    Patientsid = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PatientNO = table.Column<int>(type: "int", nullable: false),
                    Patientsname = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: true),
                    Doctorids = table.Column<int>(type: "int", nullable: true),
                    Mediciens = table.Column<int>(type: "int", nullable: true),
                    Helthcares = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__Patients__E7AAB8549E883925", x => x.Patientsid);
                    table.ForeignKey(
                        name: "fkdoctorids",
                        column: x => x.Doctorids,
                        principalTable: "Doctor",
                        principalColumn: "doctorid",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "fkhealthcareAssid",
                        column: x => x.Helthcares,
                        principalTable: "HealthcareAss",
                        principalColumn: "HealthcareAssid",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "fkmedicineid",
                        column: x => x.Mediciens,
                        principalTable: "Medicine",
                        principalColumn: "Medicineid",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Patients_Doctorids",
                table: "Patients",
                column: "Doctorids");

            migrationBuilder.CreateIndex(
                name: "IX_Patients_Helthcares",
                table: "Patients",
                column: "Helthcares");

            migrationBuilder.CreateIndex(
                name: "IX_Patients_Mediciens",
                table: "Patients",
                column: "Mediciens");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Patients");

            migrationBuilder.DropTable(
                name: "Doctor");

            migrationBuilder.DropTable(
                name: "HealthcareAss");

            migrationBuilder.DropTable(
                name: "Medicine");
        }
    }
}
