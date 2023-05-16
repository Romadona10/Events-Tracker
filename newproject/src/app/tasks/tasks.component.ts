import { Component,OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../Task';
import { Tasks } from '../mock-tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
   tasks: Task[] =[]
  constructor(private taskService:TaskService){ }

  ngOnInit(): void {
    
    this.taskService.getTasks().subscribe((tasks: any)=>(this.tasks=tasks))
  }
  deleteTask(task:Task){
    this.taskService.deleteTask(task).subscribe(()=>
    (this.tasks =this.tasks.filter(t=> t.id !== task.id))) 
  }
  toggleRemainder(task:Task){
    task.remainder = !task.remainder;
    this.taskService.updateTaskRemainder(task).subscribe()
  }

  addTask(task:Task){
    this.taskService.addTask(task).subscribe
    ((task: any)=>(this.tasks.push(task)))
  }
}
