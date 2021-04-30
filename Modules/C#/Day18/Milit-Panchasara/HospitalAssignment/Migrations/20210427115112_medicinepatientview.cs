using Microsoft.EntityFrameworkCore.Migrations;

namespace HospitalAssignment.Migrations
{
    public partial class medicinepatientview : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            var sql = @"
                        CREATE VIEW vPatientsMedicines
                        AS
                            SELECT 
                                p.Id AS PatientId, 
                                p.Name AS Name, 
                                m.Id AS MedicineId,
                                m.Name AS MedicineName,
                                d.Morning AS Morning,
                                d.Afternoon AS Afternoon,
                                d.Night AS Night,
                                d.AfterMeal AS AfterMeal
                            FROM Patients AS p
                            JOIN Dosage AS d ON p.Id = d.PatientId
                            JOIN Medicines AS m ON m.Id = d.MedicineId;
                    ";
            migrationBuilder.Sql(sql);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            var sql = @"DROP VIEW vPatientsMedicines";
            migrationBuilder.Sql(sql);
        }
    }
}
