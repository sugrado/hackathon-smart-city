using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace HackathonServer.DataAccess.Migrations
{
    public partial class mig_10 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_WasteRecords_CategoryId",
                table: "WasteRecords",
                column: "CategoryId");

            migrationBuilder.AddForeignKey(
                name: "FK_WasteRecords_Categories_CategoryId",
                table: "WasteRecords",
                column: "CategoryId",
                principalTable: "Categories",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_WasteRecords_Categories_CategoryId",
                table: "WasteRecords");

            migrationBuilder.DropIndex(
                name: "IX_WasteRecords_CategoryId",
                table: "WasteRecords");
        }
    }
}
