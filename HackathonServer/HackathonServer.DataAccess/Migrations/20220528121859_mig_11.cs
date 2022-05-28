using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace HackathonServer.DataAccess.Migrations
{
    public partial class mig_11 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<double>(
                name: "UnitSize",
                table: "WasteRecords",
                type: "double precision",
                nullable: false,
                oldClrType: typeof(short),
                oldType: "smallint");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<short>(
                name: "UnitSize",
                table: "WasteRecords",
                type: "smallint",
                nullable: false,
                oldClrType: typeof(double),
                oldType: "double precision");
        }
    }
}
