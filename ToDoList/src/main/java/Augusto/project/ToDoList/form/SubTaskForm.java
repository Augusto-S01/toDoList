package Augusto.project.ToDoList.form;

import java.time.LocalDateTime;
import java.util.List;

import Augusto.project.ToDoList.enums.Status;
import Augusto.project.ToDoList.model.SubTask;
import Augusto.project.ToDoList.model.Task;
import jakarta.annotation.Nonnull;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class SubTaskForm {
	@NotNull (message = "invalid idMain: id of main task is null") 
	private Long idMain;
	@NotNull (message = "invalid description: description is null") 
	@NotBlank(message = "invalid description: description is blank")
	private String description;
	private LocalDateTime deadlineDate;
	private Status status;

	public SubTaskForm(String description,LocalDateTime deadlineDate) {
		this.description = description;
		this.deadlineDate = deadlineDate;
	}
	
	public SubTaskForm(String description) {
		this.description = description;
	}


	public SubTask transformToEntity() {
		return new SubTask(this.description,this.deadlineDate);
		
	}

	
	public Long getIdMain() {
		return idMain;
	}

	public void setIdMain(Long idMain) {
		this.idMain = idMain;
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
