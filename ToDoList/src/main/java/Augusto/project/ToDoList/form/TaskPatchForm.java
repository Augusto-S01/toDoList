package Augusto.project.ToDoList.form;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;

import Augusto.project.ToDoList.enums.Status;
import Augusto.project.ToDoList.model.SubTask;
import Augusto.project.ToDoList.model.Task;
import jakarta.annotation.Nonnull;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class TaskPatchForm {
	
	@NotNull (message = "invalid id: id is null") 
	private Long id;
	private String description;
	private LocalDateTime deadlineDate;
	private LocalDateTime finishedDate;
	private Status status;
	private List<SubTask> subTasks;
	
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
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
	public LocalDateTime getFinishedDate() {
		return finishedDate;
	}
	public void setFinishedDate(LocalDateTime finishedDate) {
		this.finishedDate = finishedDate;
	}
	public Status getStatus() {
		return status;
	}
	public void setStatus(Status status) {
		this.status = status;
	}
	public List<SubTask> getSubTasks() {
		return subTasks;
	}
	public void setSubTasks(List<SubTask> subTasks) {
		this.subTasks = subTasks;
	}
	
	public Task patchTask(Task task) {
		if(!Objects.isNull(this.description) && !this.description.isEmpty()) {
			task.setDescription(this.description);
		}
		if(!Objects.isNull(this.deadlineDate)) {
			task.setDeadlineDate(this.deadlineDate);
		}
		if(!Objects.isNull(this.finishedDate)) {
			task.setFinishedDate(this.finishedDate);
		}
		if(!Objects.isNull(this.status)) {
			task.setStatus(this.status);
		}
		
		
		return task;
	}
	
	
	
	
}
