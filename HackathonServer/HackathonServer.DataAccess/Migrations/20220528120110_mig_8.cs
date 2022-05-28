using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace HackathonServer.DataAccess.Migrations
{
    public partial class mig_8 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_WasteRecords_Counties_CountyId",
                table: "WasteRecords");

            migrationBuilder.RenameColumn(
                name: "CountyId",
                table: "WasteRecords",
                newName: "NeighbourhoodId");

            migrationBuilder.RenameIndex(
                name: "IX_WasteRecords_CountyId",
                table: "WasteRecords",
                newName: "IX_WasteRecords_NeighbourhoodId");

            migrationBuilder.AddForeignKey(
                name: "FK_WasteRecords_Neighbourhoods_NeighbourhoodId",
                table: "WasteRecords",
                column: "NeighbourhoodId",
                principalTable: "Neighbourhoods",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_WasteRecords_Neighbourhoods_NeighbourhoodId",
                table: "WasteRecords");

            migrationBuilder.RenameColumn(
                name: "NeighbourhoodId",
                table: "WasteRecords",
                newName: "CountyId");

            migrationBuilder.RenameIndex(
                name: "IX_WasteRecords_NeighbourhoodId",
                table: "WasteRecords",
                newName: "IX_WasteRecords_CountyId");

            migrationBuilder.AddForeignKey(
                name: "FK_WasteRecords_Counties_CountyId",
                table: "WasteRecords",
                column: "CountyId",
                principalTable: "Counties",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
