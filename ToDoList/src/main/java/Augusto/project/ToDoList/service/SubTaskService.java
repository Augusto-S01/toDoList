package Augusto.project.ToDoList.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import Augusto.project.ToDoList.dto.SubTaskDTO;
import Augusto.project.ToDoList.form.SubTaskForm;
import Augusto.project.ToDoList.model.SubTask;
import Augusto.project.ToDoList.model.Task;
import Augusto.project.ToDoList.repository.SubTaskRepository;
import Augusto.project.ToDoList.repository.TaskRepository;

@Service
public class SubTaskService {
	
	@Autowired
	private TaskRepository taskRepository;
	
	@Autowired
	private SubTaskRepository subTaskRepository;
	
	
	public ResponseEntity<SubTaskDTO> save(SubTaskForm subTaskForm){
		Optional<Task> opMainTask = taskRepository.findById(subTaskForm.getIdMain());
		if(opMainTask.isEmpty()) {
			return ResponseEntity.notFound().build();
		}
		Task mainTask = opMainTask.get();
		SubTask subtask = subTaskForm.transformToEntity();
		mainTask.getSubTasks().add(subtask);
		Task save = taskRepository.save(mainTask);
		SubTask retorno = save.getSubTasks().get(save.getSubTasks().size()-1);
		return ResponseEntity.created(null).body(new SubTaskDTO(retorno));
		
	}
	
	
}
