using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using todolist_BE.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace todolist_BE.Controllers
{
    [Route("v1/api/[controller]")]
    [ApiController]
    public class TodoController : ControllerBase
    {
        // GET: api/<TodoController>
           private readonly TodoContext _dbContext;
        // Construtor
        public TodoController(TodoContext dbContext)
        {
            _dbContext = dbContext;
        }

        // Get v1/api/<TodoController>
        [HttpGet]

        public async Task<ActionResult<IEnumerable<Todo>>> GetTodos()
        {
            if(_dbContext.Todos == null)
            {
                return NotFound();
            }
            return await _dbContext.Todos.ToListAsync();


        }
        [HttpGet]
        public async Task<ActionResult<Todo>> GetTodo(int id)
        {
            if (_dbContext.Todos == null)
            {
                return NotFound();
            }

            var todo = await _dbContext.Todos.FindAsync(id);

            if(todo == null)
            {
                return NotFound();
            }
            return todo;
        }



    }
}
