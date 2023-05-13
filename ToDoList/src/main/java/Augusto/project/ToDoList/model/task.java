package Augusto.project.ToDoList.model;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import Augusto.project.ToDoList.enums.status;

@Entity
public class task {
	
	@Id @GeneratedValue(strategy =  GenerationType.IDENTITY)
	private Long id;
	private String description;
	private LocalDateTime deadlineDate;
	private LocalDateTime finishedDate;
	private LocalDateTime createDate;
	private status status;
	
	
	
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
	public status getStatus() {
		return status;
	}
	public void setStatus(status status) {
		this.status = status;
	}
	
	
	
	
	
}
