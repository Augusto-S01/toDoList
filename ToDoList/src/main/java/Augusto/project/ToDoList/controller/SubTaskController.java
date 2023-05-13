package Augusto.project.ToDoList.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import Augusto.project.ToDoList.dto.SubTaskDTO;
import Augusto.project.ToDoList.form.SubTaskForm;
import Augusto.project.ToDoList.form.SubTaskPatchForm;
import Augusto.project.ToDoList.service.SubTaskService;


@RestController
@RequestMapping("/subTask")
public class SubTaskController {


	
	@Autowired
	private SubTaskService subTaskService;
	
	@PostMapping()
	public ResponseEntity<SubTaskDTO> save(@RequestBody @Validated  SubTaskForm subTaskForm){
		return subTaskService.save(subTaskForm);
	}
	
	@PatchMapping()
	public ResponseEntity<SubTaskDTO> patch(@RequestBody @Validated SubTaskPatchForm subTaskPatchForm){
		return subTaskService.patch(subTaskPatchForm);
	}
	
	@DeleteMapping("/{mainId}/{id}")
	public ResponseEntity<?> delete(@PathVariable Long mainId,@PathVariable Long id){
		return subTaskService.delete(mainId,id);
	}

	
	
	
	
}






