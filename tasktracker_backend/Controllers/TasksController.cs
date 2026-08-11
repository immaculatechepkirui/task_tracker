using Microsoft.AspNetCore.Mvc;
using tasktracker_backend.Models;
using tasktracker_backend.Services;

namespace tasktracker_backend.Controllers;

[ApiController]
[Route("api/tasks")]
public class TasksController : ControllerBase
{
    private readonly TaskService _taskService;

    public TasksController(TaskService taskService)
    {
        _taskService = taskService;
    }

    [HttpGet]
    public ActionResult<List<TaskItem>> GetAll()
    {
        return Ok(_taskService.GetAll());
    }

    [HttpGet("{id}")]
    public ActionResult<TaskItem> GetById(int id)
    {
        var task = _taskService.GetById(id);

        if (task == null)
        {
            return NotFound();
        }

        return Ok(task);
    }

    [HttpPost]
    public ActionResult<TaskItem> Create(TaskItem task)
    {
        if (string.IsNullOrWhiteSpace(task.Title))
        {
            return BadRequest(new
            {
                message = "Title is required."
            });
        }

        var allowedStatuses = new[]
        {
            "Not started",
            "In Progress",
            "Done",
            "Blocked"
        };

        if (!allowedStatuses.Contains(task.Status))
        {
            return BadRequest(new
            {
                message = "Invalid status."
            });
        }

        var createdTask = _taskService.Add(task);

        return CreatedAtAction(
            nameof(GetById),
            new { id = createdTask.Id },
            createdTask
        );
    }

    [HttpPut("{id}")]
    public ActionResult<TaskItem> Update(int id, TaskItem task)
    {
        if (string.IsNullOrWhiteSpace(task.Title))
        {
            return BadRequest(new
            {
                message = "Title is required."
            });
        }

        var allowedStatuses = new[]
        {
            "Not started",
            "In Progress",
            "Done",
            "Blocked"
        };

        if (!allowedStatuses.Contains(task.Status))
        {
            return BadRequest(new
            {
                message = "Invalid status."
            });
        }

        var updatedTask = _taskService.Update(id, task);

        if (updatedTask == null)
        {
            return NotFound();
        }

        return Ok(updatedTask);
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        var deleted = _taskService.Delete(id);

        if (!deleted)
        {
            return NotFound();
        }

        return NoContent();
    }
}