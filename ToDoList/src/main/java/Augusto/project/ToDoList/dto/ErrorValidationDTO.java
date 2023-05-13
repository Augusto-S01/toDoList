package Augusto.project.ToDoList.dto;

public class ErrorValidationDTO {
	private String field;
	private String error;
	
	public ErrorValidationDTO(String field, String error) {
		super();
		this.field = field;
		this.error = error;
	}

	public String getField() {
		return field;
	}

	public String getError() {
		return error;
	}
	
	
	
}
