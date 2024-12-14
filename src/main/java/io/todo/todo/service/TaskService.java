package io.todo.todo.service;


import io.todo.todo.entity.model.Task;
import io.todo.todo.entity.model.dto.TaskDto;

import java.util.List;

public interface TaskService {
    Task createTask(TaskDto taskDto);
    List<Task> getAllTasks();
    Task updateTask(Long id, TaskDto taskDto);
    void deleteTask(Long id);
}
