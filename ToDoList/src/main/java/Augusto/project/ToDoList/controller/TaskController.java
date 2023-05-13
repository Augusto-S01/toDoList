package Augusto.project.ToDoList.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


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
	
	
}






