package Augusto.project.ToDoList.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import Augusto.project.ToDoList.model.SubTask;



public interface SubTaskRepository extends JpaRepository<SubTask, Long>{

}
