using Entity;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure
{
    public class StoreContext : DbContext
    {
        public StoreContext(DbContextOptions<StoreContext> options) : base(options)
        {
        }

        public DbSet<Course> Courses { get; set; }
    }
}