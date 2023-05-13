package Augusto.project.ToDoList.form;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;

import Augusto.project.ToDoList.enums.Status;
import Augusto.project.ToDoList.model.SubTask;
import Augusto.project.ToDoList.model.Task;
import jakarta.validation.constraints.NotNull;

public class SubTaskPatchForm {
	
	@NotNull (message = "invalid mainTaskId: mainTaskId is null") 
	private Long idMain;
	@NotNull (message = "invalid id: id is null") 
	private Long id;
	private String description;
	private LocalDateTime deadlineDate;
	private LocalDateTime finishedDate;
	private Status status;
	private List<SubTask> subTasks;
	
	

	
	public Long getIdMain() {
		return idMain;
	}
	public void setIdMain(Long idMain) {
		this.idMain = idMain;
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
	
	public SubTask patchTask(SubTask subtask) {
		if(!Objects.isNull(this.description) && !this.description.isEmpty()) {
			subtask.setDescription(this.description);
		}
		if(!Objects.isNull(this.deadlineDate)) {
			subtask.setDeadlineDate(this.deadlineDate);
		}
		if(!Objects.isNull(this.finishedDate)) {
			subtask.setFinishedDate(this.finishedDate);
		}
		if(!Objects.isNull(this.status)) {
			subtask.setStatus(this.status);
		}
		
		
		return subtask;
	}
}
