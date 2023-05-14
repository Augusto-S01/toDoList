import static org.junit.Assert.assertNull;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.time.LocalDateTime;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import Augusto.project.ToDoList.enums.Status;
import Augusto.project.ToDoList.form.TaskPatchForm;
import Augusto.project.ToDoList.model.Task;

public class TaskPatchFormTest {
    private TaskPatchForm taskPatchForm;
    private Task task;

    @BeforeEach
    public void setUp() {
        taskPatchForm = new TaskPatchForm();
        task = new Task();
    }

    @Test
    public void testPatchTaskDescription() {
        String newDescription = "Updated description";
        taskPatchForm.setDescription(newDescription);

        Task patchedTask = taskPatchForm.patchTask(task);

        assertEquals(newDescription, patchedTask.getDescription());
    }

    @Test
    public void testPatchTaskDeadlineDate() {
        LocalDateTime newDeadlineDate = LocalDateTime.now().plusDays(1);
        taskPatchForm.setDeadlineDate(newDeadlineDate);

        Task patchedTask = taskPatchForm.patchTask(task);

        assertEquals(newDeadlineDate, patchedTask.getDeadlineDate());
    }

    @Test
    public void testPatchTaskFinishedDate() {
        LocalDateTime newFinishedDate = LocalDateTime.now();
        taskPatchForm.setFinishedDate(newFinishedDate);

        Task patchedTask = taskPatchForm.patchTask(task);

        assertEquals(newFinishedDate, patchedTask.getFinishedDate());
    }

    @Test
    public void testPatchTaskStatusInProgress() {
        Status newStatus = Status.IN_PROGRESS;
        taskPatchForm.setStatus(newStatus);

        Task patchedTask = taskPatchForm.patchTask(task);

        assertEquals(newStatus, patchedTask.getStatus());
        assertNull(patchedTask.getFinishedDate());
    }

    @Test
    public void testPatchTaskStatusToDo() {
        Status newStatus = Status.TO_DO;
        taskPatchForm.setStatus(newStatus);

        Task patchedTask = taskPatchForm.patchTask(task);

        assertEquals(newStatus, patchedTask.getStatus());
        assertNull(patchedTask.getFinishedDate());
    }

    @Test
    public void testPatchTaskStatusDone() {
        Status newStatus = Status.DONE;
        taskPatchForm.setStatus(newStatus);

        Task patchedTask = taskPatchForm.patchTask(task);

        assertEquals(newStatus, patchedTask.getStatus());
        assertNotNull(patchedTask.getFinishedDate());
        assertEquals(LocalDateTime.now().getDayOfYear(), patchedTask.getFinishedDate().getDayOfYear());
    }

}
