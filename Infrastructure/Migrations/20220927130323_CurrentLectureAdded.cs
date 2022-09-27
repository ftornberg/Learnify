using Microsoft.EntityFrameworkCore.Migrations;

namespace Infrastructure.Migrations
{
    public partial class CurrentLectureAdded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "63d3e7af-2749-4700-b523-090250661da3");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "b7fa3462-8ee3-4345-ade7-824a843d4360");

            migrationBuilder.AddColumn<int>(
                name: "CurrentLecture",
                table: "UserCourses",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "491d392e-4c5c-4849-9e47-54ff56e878d7", "c1b2e1c9-01e3-42f1-807e-1a1706eed9b5", "Student", "STUDENT" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "6a1a45c7-8b1d-413c-ae18-3cb567e411f8", "6ac7899d-796e-4387-8e58-5f0f14d5e99d", "Instructor", "INSTRUCTOR" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "491d392e-4c5c-4849-9e47-54ff56e878d7");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "6a1a45c7-8b1d-413c-ae18-3cb567e411f8");

            migrationBuilder.DropColumn(
                name: "CurrentLecture",
                table: "UserCourses");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "63d3e7af-2749-4700-b523-090250661da3", "a561ea3d-7af4-4c43-80c2-3dbe40f9da52", "Student", "STUDENT" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "b7fa3462-8ee3-4345-ade7-824a843d4360", "06425907-d945-4a1e-b93c-98c612d2c23f", "Instructor", "INSTRUCTOR" });
        }
    }
}
