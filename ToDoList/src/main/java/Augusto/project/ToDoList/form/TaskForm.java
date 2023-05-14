package Augusto.project.ToDoList.form;

import java.time.LocalDateTime;
import java.util.List;

import Augusto.project.ToDoList.enums.Status;
import Augusto.project.ToDoList.model.SubTask;
import Augusto.project.ToDoList.model.Task;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class TaskForm {
	
	@NotNull (message = "invalid description: description is null") 
	@NotBlank(message = "invalid description: description is blank")
	private String description;
	
	
	@NotNull(message = "invalid deadLineDate: deadLineDate is null")
	private LocalDateTime deadlineDate;
	private Status status;
	private List<SubTask> subtask;

	public TaskForm(String description,LocalDateTime deadlineDate,List<SubTask> subTask) {
		this.description = description;
		this.deadlineDate = deadlineDate;
		this.subtask = subTask;
	}
	


	public Task transformToEntity() {
		return new Task(this.description,this.deadlineDate,this.subtask);
		
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public LocalDateTime getDeadlineDate() {
		return deadlineDate;
	}

	public void setDeadlineDate(LocalDateTime deadlineDate) {
		this.deadlineDate = deadlineDate;
	}

	public Status getStatus() {
		return status;
	}

	public void setStatus(Status status) {
		this.status = status;
	}
	

	

}
