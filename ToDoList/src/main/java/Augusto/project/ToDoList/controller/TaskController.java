package Augusto.project.ToDoList.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import Augusto.project.ToDoList.dto.TaskDTO;
import Augusto.project.ToDoList.form.TaskForm;
import Augusto.project.ToDoList.model.Task;
import Augusto.project.ToDoList.repository.TaskRepository;


@RestController
@RequestMapping("/task")
public class TaskController {

	@Autowired
	private TaskRepository taskRepository;
	
	
	@GetMapping()
	public ResponseEntity<List<Task>> findAll() {
		List<Task> tasks = taskRepository.findAll();
		if(tasks.isEmpty()){
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.ok(tasks);
	}
	
	@PostMapping()
	public ResponseEntity<TaskDTO> save(@RequestBody @Validated TaskForm taskForm ) {
		Task task = taskForm.transformToEntity();
		Task save = taskRepository.save(task);
		return ResponseEntity.created(null).body(new TaskDTO(save));
		
	}
	
	
}






