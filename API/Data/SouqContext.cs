using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class SouqContext : DbContext
    {
        public SouqContext(DbContextOptions options) : base(options)
        {
        }
                public DbSet<Product> Products { get; set; }

    }
}