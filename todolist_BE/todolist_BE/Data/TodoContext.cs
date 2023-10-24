using Microsoft.EntityFrameworkCore;
using todolist_BE.Data.Entities;

namespace todolist_BE.Data
{
    public class TodoContext : DbContext
    {
        public TodoContext(DbContextOptions<TodoContext> options) : base(options) { 
        
        }
        public DbSet<Todo> Todos { get; set; }
         
    }
}
