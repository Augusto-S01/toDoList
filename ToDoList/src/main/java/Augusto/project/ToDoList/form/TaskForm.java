package Augusto.project.ToDoList.form;

import java.time.LocalDateTime;

import Augusto.project.ToDoList.enums.Status;
import Augusto.project.ToDoList.model.Task;
import jakarta.annotation.Nonnull;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class TaskForm {
	
	@NotNull @NotBlank
	private String description;
	@NotNull 
	private LocalDateTime deadlineDate;
	private Status status;

	public TaskForm(String description,LocalDateTime deadlineDate) {
		this.description = description;
		this.deadlineDate = deadlineDate;
	}
	
	public Task transformToEntity() {
		return new Task(this.description,this.deadlineDate);
		
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
	
	
	
	
	
//	private Long id;
//	private String description;
//	private LocalDateTime deadlineDate;
//	private LocalDateTime finishedDate;
//	private LocalDateTime createDate;
//	private Status status;
//	private List<SubTask> subTasks;
	
	

	
	
	

	
}
