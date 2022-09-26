using Microsoft.EntityFrameworkCore.Migrations;

namespace Infrastructure.Migrations
{
    public partial class PaymentIntentAdded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "49ff3361-4808-471c-8fe9-cfc6006227a7");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "ddb93770-a98e-47db-a1f1-860049456376");

            migrationBuilder.AddColumn<string>(
                name: "ClienSecret",
                table: "Basket",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PaymentIntentId",
                table: "Basket",
                type: "TEXT",
                nullable: true);

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "f15e16e4-b0b4-457a-a638-918ebbb31065", "6ce1032b-d19f-4ed1-b20f-37c9bbe19f3a", "Student", "STUDENT" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "5fcba021-f6a3-4614-bd21-7ca7543293a2", "0814f4a4-e700-496d-b4ad-62cf4b6995cf", "Instructor", "INSTRUCTOR" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "5fcba021-f6a3-4614-bd21-7ca7543293a2");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "f15e16e4-b0b4-457a-a638-918ebbb31065");

            migrationBuilder.DropColumn(
                name: "ClienSecret",
                table: "Basket");

            migrationBuilder.DropColumn(
                name: "PaymentIntentId",
                table: "Basket");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "ddb93770-a98e-47db-a1f1-860049456376", "bad27bb2-010f-4eef-99cf-71f307f8f5ca", "Student", "STUDENT" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "49ff3361-4808-471c-8fe9-cfc6006227a7", "f4a0c858-e78c-450d-abde-f7f511402b36", "Instructor", "INSTRUCTOR" });
        }
    }
}
