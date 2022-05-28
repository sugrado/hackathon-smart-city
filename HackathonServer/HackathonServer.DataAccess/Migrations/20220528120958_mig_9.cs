using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace HackathonServer.DataAccess.Migrations
{
    public partial class mig_9 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_WasteRecords_Neighbourhoods_NeighbourhoodId",
                table: "WasteRecords");

            migrationBuilder.DropIndex(
                name: "IX_WasteRecords_NeighbourhoodId",
                table: "WasteRecords");

            migrationBuilder.DropColumn(
                name: "NeighbourhoodId",
                table: "WasteRecords");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "NeighbourhoodId",
                table: "WasteRecords",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_WasteRecords_NeighbourhoodId",
                table: "WasteRecords",
                column: "NeighbourhoodId");

            migrationBuilder.AddForeignKey(
                name: "FK_WasteRecords_Neighbourhoods_NeighbourhoodId",
                table: "WasteRecords",
                column: "NeighbourhoodId",
                principalTable: "Neighbourhoods",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
