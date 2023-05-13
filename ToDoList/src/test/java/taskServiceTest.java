import static org.junit.jupiter.api.Assertions.*;

import java.time.LocalDateTime;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

import Augusto.project.ToDoList.form.TaskPatchForm;
import Augusto.project.ToDoList.model.Task;
import Augusto.project.ToDoList.service.TaskService;

class taskServiceTest {


	TaskService taskService;
	
	@Test
	public void testPatchDescription() {
		Task task = new Task("test description",LocalDateTime.of(2023, 4, 1, 12, 0));
		TaskPatchForm taskForm = new TaskPatchForm();
		taskForm.setId(1L);
		Task patchedTask = taskForm.patchTask(task);
		
		Task task2 = new Task("changed description",LocalDateTime.of(2023, 4, 1, 12, 0));
		System.out.println();
		assertEquals(task2.getDescription(),
				patchedTask.getDescription());
	}
	

	


}
