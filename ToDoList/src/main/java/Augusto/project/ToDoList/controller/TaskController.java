package Augusto.project.ToDoList.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import Augusto.project.ToDoList.dto.TaskDTO;
import Augusto.project.ToDoList.form.TaskForm;
import Augusto.project.ToDoList.form.TaskPatchForm;
import Augusto.project.ToDoList.model.Task;
import Augusto.project.ToDoList.service.TaskService;


@RestController
@RequestMapping("/task")
public class TaskController {


	
	@Autowired
	private TaskService taskService;
	
	@GetMapping()
	public ResponseEntity<List<Task>> findAll() {
		return taskService.findAll();
	}
	
	@PostMapping()
	public ResponseEntity<TaskDTO> save(@RequestBody @Validated  TaskForm taskForm ) {
		return taskService.save(taskForm);			
	}
	
	@PatchMapping()
	public ResponseEntity<TaskDTO> patch(@RequestBody @Validated TaskPatchForm tasKForm){
		return taskService.patch(tasKForm);
	}
	
	
	
}






