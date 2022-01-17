using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Data.Migrations
{
    public partial class IdentityAdded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "62d9ee1f-a156-41b9-9c76-ec0e73314b50");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "d971d935-1e16-4052-926f-406119071101");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "447841ea-6cd2-4cbc-a090-ddc485dbe23e", "0c2d5e66-6671-4f63-a27f-a2f6b14ffb3a", "Admin", "ADMIN" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "f7436b06-d82b-4fd1-81d7-a4062ed1a7a1", "90daf197-5b7c-4ed6-95aa-707bfd7b7e70", "Memeber", "MEMEBER" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "447841ea-6cd2-4cbc-a090-ddc485dbe23e");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "f7436b06-d82b-4fd1-81d7-a4062ed1a7a1");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "62d9ee1f-a156-41b9-9c76-ec0e73314b50", "1b56a63b-9fd1-4b9d-8b69-8a78b97dddd6", "Memeber", "MEMEBER" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "d971d935-1e16-4052-926f-406119071101", "160857bf-62af-4c8e-a1c1-498e34f75c93", "Admin", "ADMIN" });
        }
    }
}
