package Augusto.project.ToDoList.model;

import java.time.LocalDateTime;
import java.util.List;

import jakarta.annotation.Nonnull;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import Augusto.project.ToDoList.enums.Status;


@Entity
public class Task {
	
	@Id @GeneratedValue(strategy =  GenerationType.IDENTITY)
	private Long id;
	@Nonnull
	private String description;
	@Nonnull
	private LocalDateTime deadlineDate;
	private LocalDateTime finishedDate;
	@Nonnull
	private LocalDateTime createDate;
	@Nonnull
	private Status status;
//	private List<SubTask> subTasks;
	
	public Task() {}
	
	public Task(String description,LocalDateTime deadlineDate) {
		this.description = description;
		this.deadlineDate = deadlineDate;
	}
	
	
	
	public Task(Long id, String description, LocalDateTime deadlineDate, LocalDateTime createDate, Status status) {
		this.id = id;
		this.description = description;
		this.deadlineDate = deadlineDate;
		this.createDate = createDate;
		this.status = status;
	}

	@PrePersist
	protected void onCreate() {
		status = Status.TO_DO;
		createDate = LocalDateTime.now();
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


//	public List<SubTask> getSubTasks() {
//		return subTasks;
//	}
//
//
//	public void setSubTasks(List<SubTask> subTasks) {
//		this.subTasks = subTasks;
//	}
	
	
	
	
	
}