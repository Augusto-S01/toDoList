package Augusto.project.ToDoList.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import Augusto.project.ToDoList.model.Task;


public interface TaskRepository extends JpaRepository<Task, Long>{

}
