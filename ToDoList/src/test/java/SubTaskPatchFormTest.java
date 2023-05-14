import static org.junit.Assert.assertNull;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;


import org.junit.Before;
import Augusto.project.ToDoList.enums.Status;
import Augusto.project.ToDoList.form.SubTaskPatchForm;
import Augusto.project.ToDoList.form.TaskPatchForm;
import Augusto.project.ToDoList.model.SubTask;
import Augusto.project.ToDoList.model.Task;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

public class SubTaskPatchFormTest {
    private SubTaskPatchForm subTaskPatchForm;
    private SubTask subTask;

    @BeforeEach
    public void setUp() {
        subTaskPatchForm = new SubTaskPatchForm();
        subTask = new SubTask();
    }

    @Test
    public void testPatchTaskDescription() {
        String newDescription = "Updated description";
        subTaskPatchForm.setDescription(newDescription);

        SubTask patchedSubTask = subTaskPatchForm.patchTask(subTask);

        assertEquals(newDescription, patchedSubTask.getDescription());
    }

    @Test
    public void testPatchTaskDeadlineDate() {
        LocalDateTime newDeadlineDate = LocalDateTime.now().plusDays(1);
        subTaskPatchForm.setDeadlineDate(newDeadlineDate);

        SubTask patchedSubTask = subTaskPatchForm.patchTask(subTask);

        assertEquals(newDeadlineDate, patchedSubTask.getDeadlineDate());
    }

    @Test
    public void testPatchTaskFinishedDate() {
        LocalDateTime newFinishedDate = LocalDateTime.now();
        subTaskPatchForm.setFinishedDate(newFinishedDate);

        SubTask patchedSubTask = subTaskPatchForm.patchTask(subTask);

        assertEquals(newFinishedDate, patchedSubTask.getFinishedDate());
    }

    @Test
    public void testPatchTaskStatus() {
        Status newStatus = Status.IN_PROGRESS;
        subTaskPatchForm.setStatus(newStatus);

        SubTask patchedSubTask = subTaskPatchForm.patchTask(subTask);

        assertEquals(newStatus, patchedSubTask.getStatus());
        assertNull(patchedSubTask.getFinishedDate());
    }

    @Test
    public void testPatchTaskStatusDone() {
        Status newStatus = Status.DONE;
        subTaskPatchForm.setStatus(newStatus);

        SubTask patchedSubTask = subTaskPatchForm.patchTask(subTask);

        assertEquals(newStatus, patchedSubTask.getStatus());
        assertNotNull(patchedSubTask.getFinishedDate());
    }

}
