using tasktracker_backend.Models;

namespace tasktracker_backend.Services;

public class TaskService
{
    private readonly List<TaskItem> _tasks =
    [
        new TaskItem
        {
            Id = 1,
            Title = "Design dashboard",
            Description = "Create the initial dashboard layout",
            Status = "In Progress"
        },
        new TaskItem
        {
            Id = 2,
            Title = "Set up API",
            Description = "Create the task management REST API",
            Status = "Done"
        }
    ];

    private int _nextId = 3;

    public List<TaskItem> GetAll()
    {
        return _tasks;
    }

    public TaskItem? GetById(int id)
    {
        return _tasks.FirstOrDefault(task => task.Id == id);
    }

    public TaskItem Add(TaskItem task)
    {
        task.Id = _nextId++;

        _tasks.Add(task);

        return task;
    }

    public TaskItem? Update(int id, TaskItem updatedTask)
    {
        var existingTask = GetById(id);

        if (existingTask == null)
        {
            return null;
        }

        existingTask.Title = updatedTask.Title;
        existingTask.Description = updatedTask.Description;
        existingTask.Status = updatedTask.Status;

        return existingTask;
    }

    public bool Delete(int id)
    {
        var task = GetById(id);

        if (task == null)
        {
            return false;
        }

        _tasks.Remove(task);

        return true;
    }
}