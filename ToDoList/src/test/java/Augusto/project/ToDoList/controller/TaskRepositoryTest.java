package Augusto.project.ToDoList.controller;

import static org.junit.Assert.*;

import java.util.List;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.jdbc.EmbeddedDatabaseConnection;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit4.SpringRunner;

import Augusto.project.ToDoList.model.Task;
import Augusto.project.ToDoList.repository.TaskRepository;


@RunWith(SpringRunner.class)
@DataJpaTest
@AutoConfigureTestDatabase(connection = EmbeddedDatabaseConnection.H2)
public class TaskRepositoryTest {

	@Autowired
	private TaskRepository taskRepository;


    @Test
    public void testCRUDOperations() {
    	System.out.println("aaaa");
    	List<Task> tasks = taskRepository.findAll();
    	assertTrue(!tasks.isEmpty());
    }

}
