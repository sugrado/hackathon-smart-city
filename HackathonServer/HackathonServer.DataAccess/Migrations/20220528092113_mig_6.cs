using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace HackathonServer.DataAccess.Migrations
{
    public partial class mig_6 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "WasteCenterId",
                table: "WasteRecords",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Capacity",
                table: "WasteCenters",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<short>(
                name: "PercentageOfCapacity",
                table: "WasteCenters",
                type: "smallint",
                nullable: false,
                defaultValue: (short)0);

            migrationBuilder.AddColumn<int>(
                name: "UsedCapacity",
                table: "WasteCenters",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_WasteRecords_WasteCenterId",
                table: "WasteRecords",
                column: "WasteCenterId");

            migrationBuilder.AddForeignKey(
                name: "FK_WasteRecords_WasteCenters_WasteCenterId",
                table: "WasteRecords",
                column: "WasteCenterId",
                principalTable: "WasteCenters",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_WasteRecords_WasteCenters_WasteCenterId",
                table: "WasteRecords");

            migrationBuilder.DropIndex(
                name: "IX_WasteRecords_WasteCenterId",
                table: "WasteRecords");

            migrationBuilder.DropColumn(
                name: "WasteCenterId",
                table: "WasteRecords");

            migrationBuilder.DropColumn(
                name: "Capacity",
                table: "WasteCenters");

            migrationBuilder.DropColumn(
                name: "PercentageOfCapacity",
                table: "WasteCenters");

            migrationBuilder.DropColumn(
                name: "UsedCapacity",
                table: "WasteCenters");
        }
    }
}
