using Microsoft.EntityFrameworkCore.Migrations;

namespace Infrastructure.Migrations
{
    public partial class PublishedPropertyAdded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "491d392e-4c5c-4849-9e47-54ff56e878d7");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "6a1a45c7-8b1d-413c-ae18-3cb567e411f8");

            migrationBuilder.AddColumn<bool>(
                name: "Published",
                table: "Courses",
                type: "INTEGER",
                nullable: false,
                defaultValue: false);

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "fb6d9d37-cc21-4ec1-bff6-6f5c05581410", "a489a3a1-b9ce-4238-8a6d-13dea60efffb", "Student", "STUDENT" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "5ef24b88-af7c-4212-88ef-9c1b0a2e97fa", "6a67a5f3-830d-4fa5-86c7-4cd59a1d38e5", "Instructor", "INSTRUCTOR" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "5ef24b88-af7c-4212-88ef-9c1b0a2e97fa");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "fb6d9d37-cc21-4ec1-bff6-6f5c05581410");

            migrationBuilder.DropColumn(
                name: "Published",
                table: "Courses");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "491d392e-4c5c-4849-9e47-54ff56e878d7", "c1b2e1c9-01e3-42f1-807e-1a1706eed9b5", "Student", "STUDENT" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "6a1a45c7-8b1d-413c-ae18-3cb567e411f8", "6ac7899d-796e-4387-8e58-5f0f14d5e99d", "Instructor", "INSTRUCTOR" });
        }
    }
}
