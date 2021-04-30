using Microsoft.EntityFrameworkCore.Migrations;

namespace HospitalAssignment.Migrations
{
    public partial class addedFieldsInPatientStaffView : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            var sql = @"ALTER VIEW dbo.vPatientsWithStaffs
                        AS
                        SELECT dbo.Patients.*, 
                            dbo.AssignedStaff.StaffId AS StaffId, 
                            dbo.Staff.Name AS StaffName , 
                            dbo.Staff.JobType AS JobType 
                        FROM dbo.Patients INNER JOIN
                        dbo.AssignedStaff ON dbo.Patients.Id = dbo.AssignedStaff.PatientId INNER JOIN
                        dbo.Staff ON dbo.Staff.Id = dbo.AssignedStaff.StaffId
                        GO
                        ";
            migrationBuilder.Sql(sql);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            var sql = @"ALTER VIEW [dbo].[vPatientsWithStaffs]
                        AS
                        SELECT dbo.Patients.*, dbo.AssignedStaff.StaffId
                        FROM     dbo.Patients INNER JOIN
                                          dbo.AssignedStaff ON dbo.Patients.Id = dbo.AssignedStaff.PatientId
                        GO";
            migrationBuilder.Sql(sql);
        }
    }
}
