﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Numerics;
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
            this._todo = todo;
        }


        [HttpGet]
        public async Task<ActionResult<IEnumerable<Todo>>> GetToDo()
        {
            return await _todo.Todos.ToListAsync();
        }




        [HttpGet("{id}")]
        

        public async Task<ActionResult<Todo>> GetTodobyID(string id)
        {
            var tmp = await _todo.Todos.FindAsync(id);
            if(tmp == null)
            {
                return NotFound();
            }
            return tmp;

        }
        [HttpPost]
        public async Task<ActionResult<Todo>> AddTodo(Todo todo)
        {
           _todo.Todos.Add(todo);
            await _todo.SaveChangesAsync();
            return CreatedAtAction("GetTodobyID", new { Id = todo.Id }, todo);

        }



        [HttpDelete("{id}")]
        public async Task<ActionResult<Todo>> DeleteTodo(string id)
        {
            var tmp = await _todo.Todos.FindAsync(id);
            if (tmp == null)
            {
                return BadRequest();
            }
            _todo.Todos.Remove(tmp);
            await _todo.SaveChangesAsync();
            return tmp;
        }


        [HttpDelete]
        public async Task<ActionResult<Todo>> DeleteAll()
        {
            foreach (var item in _todo.Todos)
            {
                _todo.Todos.Remove(item);
            }

            await _todo.SaveChangesAsync();
            return Ok();
        }


        [HttpPut("toggle/{id}")]
        public async Task<ActionResult<Todo>> Toggle(string id, [FromBody]Todo todo)
        {
            try
            {
                var tmp = await _todo.Todos.FindAsync(id);

                if (tmp == null)
                    return NotFound($"Employee with Id = {id} not found");
                    tmp.Name = todo.Name;
                    tmp.Completed = todo.Completed;
                    tmp.CurrentDay = todo.CurrentDay;
                    tmp.Deadline = todo.Deadline;

                    await _todo.SaveChangesAsync();
                    return Ok(tmp);
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                    "Error updating data");
            }
            
        }



        [HttpPut("{id}")]
        public async Task<ActionResult<Todo>> UpdateTodo(string id, [FromBody]Todo todo)
        {
            try
            {
                var tmp = await _todo.Todos.FindAsync(id);
          
                if (tmp == null)
                    return NotFound($"Employee with Id = {id} not found");


                tmp.Name = todo.Name;
                tmp.Completed = todo.Completed;
                tmp.CurrentDay  = todo.CurrentDay;
                tmp.Deadline = todo.Deadline;

                await _todo.SaveChangesAsync();
                return Ok(tmp);
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                    "Error updating data");
            }
        }

        [HttpPut("Update/{id}")]
        public async Task<ActionResult<Todo>> UpdateForm(string id, [FromBody] Todo todo)
        {
            try
            {
                var tmp = await _todo.Todos.FindAsync(id);

                if (tmp == null)
                    return NotFound($"Employee with Id = {id} not found");


                tmp.Name = todo.Name;
                tmp.Completed = todo.Completed;
                tmp.CurrentDay = todo.CurrentDay;
                tmp.Deadline = todo.Deadline;

                await _todo.SaveChangesAsync();
                return Ok(tmp);
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                    "Error updating data");
            }
        }

    }
}
