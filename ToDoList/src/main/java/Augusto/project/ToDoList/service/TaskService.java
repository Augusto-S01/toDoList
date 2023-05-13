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
			Task save = taskRepository.save(task);
			return ResponseEntity.created(null).body(new TaskDTO(save));
	}

	public ResponseEntity<TaskDTO> patch(TaskPatchForm taskForm) {
		Optional<Task> task = taskRepository.findById(taskForm.getId());
		if(task.isEmpty()) {
			return ResponseEntity.notFound().build();
		}
		taskForm.patchTask(task.get());
		Task patchedTask = taskRepository.save(task.get());
		return ResponseEntity.ok().body(new TaskDTO(patchedTask));
		
		
	}

	public ResponseEntity<TaskDTO> find(Long id) {
		Optional<Task> task = taskRepository.findById(id);
		if(task.isEmpty()) {
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.ok().body(new TaskDTO(task.get()));
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
