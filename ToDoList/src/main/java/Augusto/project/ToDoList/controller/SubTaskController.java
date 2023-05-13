package Augusto.project.ToDoList.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import Augusto.project.ToDoList.dto.TaskDTO;
import Augusto.project.ToDoList.form.SubTaskForm;
import Augusto.project.ToDoList.form.TaskForm;
import Augusto.project.ToDoList.form.TaskPatchForm;
import Augusto.project.ToDoList.model.Task;
import Augusto.project.ToDoList.service.SubTaskService;
import Augusto.project.ToDoList.service.TaskService;


@RestController
@RequestMapping("/subTask")
public class SubTaskController {


	
	@Autowired
	private SubTaskService subTaskService;
	
//	@GetMapping()
//	public ResponseEntity<List<Task>> findAll() {
//		return subTaskService.findAll();
//	}
//	
	
	@PostMapping()
	public ResponseEntity<?> save(@RequestBody @Validated  SubTaskForm subTaskForm){
		return subTaskService.save(subTaskForm);
	}

	
	
	
	
}






