package Augusto.project.ToDoList.dto;

import java.time.LocalDateTime;
import java.util.List;

import Augusto.project.ToDoList.enums.Status;
import Augusto.project.ToDoList.model.SubTask;
import Augusto.project.ToDoList.model.Task;

public class SubTaskDTO {
	private Long id;
	private String description;
	private LocalDateTime deadlineDate;
	private LocalDateTime finishedDate;
	private LocalDateTime createDate;
	private Status status;
	private List<SubTask> subTasks;
	
	


	public SubTaskDTO(SubTask task) {
		this.id = task.getId();
		this.description = task.getDescription();
		this.deadlineDate = task.getDeadlineDate();
		this.createDate = task.getCreateDate();
		this.status = task.getStatus();
	}
	

	
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
	public LocalDateTime getCreateDate() {
		return createDate;
	}
	public void setCreateDate(LocalDateTime createDate) {
		this.createDate = createDate;
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
}
