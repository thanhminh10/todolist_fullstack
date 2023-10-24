using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using todolist_BE.Data;
using todolist_BE.Data.Entities;

namespace todolist_BE.Controllers
{
    [Route("v1/api/[controller]")]
    [ApiController]
    public class TodoController : Controller
    {
        protected readonly TodoContext _todo;

        public TodoController(TodoContext todo)
        {
            _todo = todo;
        }


        [HttpGet]
        public IEnumerable<Todo> Get()
        {
            return  _todo.Todos;
        }


    }
}
