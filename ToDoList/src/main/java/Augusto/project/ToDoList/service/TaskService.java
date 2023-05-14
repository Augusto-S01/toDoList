package Augusto.project.ToDoList.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.MethodArgumentNotValidException;

import Augusto.project.ToDoList.dto.TaskDTO;
import Augusto.project.ToDoList.form.TaskForm;
import Augusto.project.ToDoList.form.TaskPatchForm;
import Augusto.project.ToDoList.model.Task;
import Augusto.project.ToDoList.repository.TaskRepository;

@Service
public class TaskService {
	
	@Autowired
	private TaskRepository taskRepository;

	public ResponseEntity<List<Task>> findAll() {
		List<Task> tasks = taskRepository.findAll();
		if(tasks.isEmpty()){
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.ok(tasks);
	}
	
	public ResponseEntity<TaskDTO> save(TaskForm taskForm) {
			Task task = taskForm.transformToEntity();
			Task savedTask = taskRepository.save(task);
			return ResponseEntity.created(null).body(new TaskDTO(savedTask));
	}

	public ResponseEntity<TaskDTO> patch(TaskPatchForm taskForm) {
		Optional<Task> opTask = taskRepository.findById(taskForm.getId());
		if(opTask.isEmpty()) {
			return ResponseEntity.notFound().build();
		}
		Task task = opTask.get();
		taskForm.patchTask(task);
		Task savedTask = taskRepository.save(task);
		return ResponseEntity.ok().body(new TaskDTO(savedTask));
		
		
	}

	public ResponseEntity<TaskDTO> find(Long id) {
		Optional<Task> opTask = taskRepository.findById(id);
		if(opTask.isEmpty()) {
			return ResponseEntity.notFound().build();
		}
		Task task = opTask.get();
		
		return ResponseEntity.ok().body(new TaskDTO(task));
	}

	public ResponseEntity<?> delete(Long id) {
		Optional<Task> OPtask = taskRepository.findById(id);
		if(OPtask.isEmpty()) {
			return ResponseEntity.notFound().build();
		}
		Task task = OPtask.get();
		taskRepository.delete(task);
		return ResponseEntity.ok().build();
	}
	

	
	
}
